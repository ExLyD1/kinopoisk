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

	const movieIdStr = getRouterParam(event, 'id')
	const movieId = Number(movieIdStr)
	if (!movieId || isNaN(movieId)) {
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

	const film = filmsModule.filmsList.find(f => f.id === movieId)
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
		const usersList = usersModule.usersList

		const isUsersLikedPromised = usersList.map(async user => {
			return await $fetch<boolean>(`/api/user/${user.id}/${movieId}/isLiked`)
		})

		const isUsersLikedList = await Promise.all(isUsersLikedPromised)

		const usersLikedList = usersList.filter(
			(_, index) => isUsersLikedList[index]
		)
		totalItems = usersLikedList.length

		// liked + sort by name
		if (sort === 'name') {
			const usersFiltered = [...usersLikedList].sort((a, b) =>
				a.user_name.localeCompare(b.user_name)
			)

			usersOnPage = paginate(usersFiltered, page, perPage)
		}

		// liked + sort by newest
		else if (sort === 'newest') {
			// const usersLikedList = usersList
			// 	.filter((_, index) => isUsersLikedList[index])
			// 	.reverse()

			const reversedList = usersLikedList.reverse()
			usersOnPage = paginate(reversedList, page, perPage)
		}

		// liked + sort by earliest
		else if (sort === 'earliest') {
			usersOnPage = paginate(usersLikedList, page, perPage)
		}

		// create error
		else {
			throw createError({
				statusCode: 400,
				message: 'Invalid sort type parameter',
			})
		}
	} else {
		throw createError({
			statusCode: 400,
			message: 'Ivalid rating type parameter',
		})
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
