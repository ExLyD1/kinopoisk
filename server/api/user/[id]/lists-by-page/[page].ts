import { defineEventHandler, getRouterParam } from 'h3'
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'

const paginate = (
	items: IFilmsList[],
	page: number,
	perPage: number
): IFilmsList[] => {
	const start = (page - 1) * perPage
	const end = start + perPage

	return items.slice(start, end)
}
export default defineEventHandler(async event => {
	const perPage = 1

	const userIdStr = getRouterParam(event, 'id')
	const userId = Number(userIdStr)
	if (!userId) {
		throw createError({
			statusCode: 400,
			message: 'Id is required',
		})
	}

	const usersModule = await import('~/shared/model/data/usersData')
	const listsModule = await import('~/shared/model/data/filmsListsData')

	const user = usersModule.usersList.find(user => user.id === userId)

	if (!user) {
		throw createError({
			statusCode: 404,
			message: 'User not found',
		})
	}

	const pageStr = getRouterParam(event, 'page')
	const page = Number(pageStr)

	if (!page || page <= 0 || isNaN(page)) {
		throw createError({
			statusCode: 400,
			message: 'Invalid page data',
		})
	}

	let data: IFilmsList[] = []

	const userListsIds = user.user_lists
	const mapLists = new Map(
		listsModule.filmsListsData.map(list => [list.id, list])
	)

	const userLists: IFilmsList[] = userListsIds
		.map(l_id => {
			return mapLists.get(l_id)
		})
		.filter(item => item !== undefined)

	const totalPages = Math.ceil(userLists.length / perPage)
	data = paginate(userLists, page, perPage)

	return {
		data,
		totalPages,
	}
})
