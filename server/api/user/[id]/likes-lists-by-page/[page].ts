import { defineEventHandler, getRouterParam, getQuery } from 'h3'
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'

const paginate = (list: IFilmsList[], currentPage: number, perPage: number) => {
	const start = (currentPage - 1) * perPage
	const end = start + perPage
	return list.slice(start, end)
}

export default defineEventHandler(async event => {
	const query = getQuery(event)
	const perPage = 12

	const userIdStr = getRouterParam(event, 'id')
	const userId = Number(userIdStr)
	if (!userId) {
		throw createError({
			statusCode: 400,
			message: 'User ID is required',
		})
	}

	const pageStr = getRouterParam(event, 'page')
	const page = Number(pageStr)
	if (!page || isNaN(page)) {
		throw createError({
			statusCode: 400,
			message: 'Invalid page data',
		})
	}

	const [usersModule, listsModule] = await Promise.all([
		import('~/shared/model/data/usersData'),
		import('~/shared/model/data/filmsListsData'),
	])

	const user = usersModule.usersList.find(user => user.id === userId)
	if (!user) {
		throw createError({
			statusCode: 404,
			message: 'User not found ',
		})
	}

	const mapLists = new Map(
		listsModule.filmsListsData.map(list => [list.id, list])
	)

	let listsOnPage: IFilmsList[] = []
	let totalItems

	const likedListsIds = user.user_favorite_lists

	const likedLists = likedListsIds
		.map(l_id => mapLists.get(l_id))
		.filter((list): list is IFilmsList => list !== undefined)

	listsOnPage = paginate(likedLists, page, perPage)

	totalItems = likedLists.length

	const totalPages = Math.ceil(totalItems / perPage)

	return {
		data: listsOnPage,
		totalPages,
	}
})
