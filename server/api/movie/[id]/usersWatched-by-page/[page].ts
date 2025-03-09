import { defineEventHandler, getRouterParam, getQuery, createError } from 'h3'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import type { IUser } from '~/shared/model/interfaces/userInterface'

const paginate = <T>(items: T[], page: number, perPage: number): T[] => {
	const start = (page - 1) * perPage
	const end = start + perPage
	return items.slice(start, end)
}

export default defineEventHandler(async event => {
	const perPage = 25

	const movieId = getRouterParam(event, 'id')
	if (!movieId) {
		throw createError({ statusCode: 400, message: 'Movie ID is required' })
	}

	const pageStr = getRouterParam(event, 'page')
	const page = Number(pageStr)
	if (!page || isNaN(page)) {
		throw createError({
			statusCode: 400,
			message: 'Page is required and must be a number',
		})
	}
	if (page <= 0) {
		throw createError({ statusCode: 400, message: 'Pagination starts from 1' })
	}

	const [usersModule, filmsModule] = await Promise.all([
		import('~/shared/model/data/usersData'),
		import('~/shared/model/data/filmsData'),
	])

	const film = filmsModule.filmsList.find(f => f.id === Number(movieId))
	if (!film) {
		throw createError({ statusCode: 404, message: 'Film not found' })
	}

	const query = getQuery(event)
	const rating = query.rating as string | undefined
	if (!rating || !['any', 'none'].includes(rating)) {
		throw createError({
			statusCode: 400,
			message: 'Rating is required and must be "any" or "none"',
		})
	}

	const sort = query.sort as string | undefined
	const avaliableTypesOfSort: string[] = ['name', 'newest', 'earliest']
	if (sort && !avaliableTypesOfSort.includes(sort)) {
		throw createError({
			statusCode: 400,
			message: 'No such type of sort',
		})
	}

	const userMap = new Map<number, IUser>(
		usersModule.usersList.map(user => [user.id, user])
	)

	let usersOnPage: IUser[] = []
	let totalItems: number = 0

	if (rating === 'any') {
		totalItems = film.users_viewed.length

		// Any Rating + Sort by name
		if (sort === 'name') {
			const usersWatched = film.users_viewed
				.map(u_id => userMap.get(u_id))
				.filter((user): user is IUser => user !== undefined)
				.sort((a, b) => a.user_name.localeCompare(b.user_name))

			usersOnPage = paginate(usersWatched, page, perPage)
		}
		// Any Rating + Sort by earliest
		else if (sort === 'earliest') {
			const userIdsOnPage = paginate(film.users_viewed, page, perPage)
			usersOnPage = userIdsOnPage
				.map(userId => userMap.get(userId))
				.filter((user): user is IUser => !!user)
		}

		// Any Rating + Sort by newest
		else {
			const reversedUsersViewed = [...film.users_viewed].reverse()
			const userIdsOnPage = paginate(reversedUsersViewed, page, perPage)
			usersOnPage = userIdsOnPage
				.map(userId => userMap.get(userId))
				.filter((user): user is IUser => !!user)
		}
	} else if (rating === 'none') {
		// None Rating + Sort by name
		if (sort === 'name') {
			const usersViewedIds = film.users_viewed

			const isRatedPromises = usersViewedIds.map(u_id =>
				$fetch<boolean>(`/api/user/${u_id}/${film.id}/isRated`).catch(
					() => true
				)
			)

			const isRatedResults = await Promise.all(isRatedPromises)
			const filteredUnratedUsers = usersViewedIds.filter(
				(_, index) => !isRatedResults[index]
			)

			const usersWatched = filteredUnratedUsers
				.map(u_id => userMap.get(u_id))
				.filter((user): user is IUser => user !== undefined)
				.sort((a, b) => a.user_name.localeCompare(b.user_name))

			usersOnPage = paginate(usersWatched, page, perPage)

			totalItems = usersWatched.length
			if (totalItems === 0) {
				throw createError({
					statusCode: 404,
					message: 'No users found who haven’t rated this film',
				})
			}
		}
		// None Rating + Sort by earliest
		else if (sort === 'earliest') {
			const allViewedUsers = film.users_viewed
				.map(userId => userMap.get(userId))
				.filter((user): user is IUser => !!user)

			const isRatedPromises = allViewedUsers.map(user =>
				$fetch<boolean>(`/api/user/${user.id}/${film.id}/isRated`).catch(
					() => true
				)
			)
			const isRatedResults = await Promise.all(isRatedPromises)

			const unratedUsers = allViewedUsers.filter(
				(_, idx) => !isRatedResults[idx]
			)

			totalItems = unratedUsers.length
			if (totalItems === 0) {
				throw createError({
					statusCode: 404,
					message: 'No users found who haven’t rated this film',
				})
			}

			usersOnPage = paginate(unratedUsers, page, perPage)
		}

		// None Rating + Sort by newest
		else {
			const allViewedUsers = film.users_viewed
				.map(userId => userMap.get(userId))
				.filter((user): user is IUser => !!user)

			const isRatedPromises = allViewedUsers.map(user =>
				$fetch<boolean>(`/api/user/${user.id}/${film.id}/isRated`).catch(
					() => true
				)
			)
			const isRatedResults = await Promise.all(isRatedPromises)

			const unratedUsers = allViewedUsers
				.filter((_, idx) => !isRatedResults[idx])
				.reverse()

			totalItems = unratedUsers.length
			if (totalItems === 0) {
				throw createError({
					statusCode: 404,
					message: 'No users found who haven’t rated this film',
				})
			}

			usersOnPage = paginate(unratedUsers, page, perPage)
		}
	} else {
		throw createError({ statusCode: 400, message: 'Invalid rating value' })
	}

	const totalPages = Math.ceil(totalItems / perPage)
	if (page > totalPages && page !== 1) {
		throw createError({
			statusCode: 400,
			message: `Maximum page is ${totalPages}`,
		})
	}

	return {
		data: usersOnPage,
		totalItems,
		totalPages,
		currentPage: page,
		perPage,
	}
})
