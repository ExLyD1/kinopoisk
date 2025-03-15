import { defineEventHandler, getRouterParam, getQuery } from 'h3'

export default defineEventHandler(async event => {
	const usersModule = await import('~/shared/model/data/usersData')
	const listsModule = await import('~/shared/model/data/filmsListsData')

	const userIdStr = getRouterParam(event, 'id')
	const userId = Number(userIdStr)

	if (!userId) {
		throw createError({
			statusCode: 400,
			message: 'User Id is required',
		})
	}

	const user = usersModule.usersList.find(user => user.id === userId)
	if (!user) {
		throw createError({
			statusCode: 404,
			message: 'User not found',
		})
	}

	const query = getQuery(event)
	const quantityStr = query.quantity
	const quantity = Number(quantityStr)

	let listsList = user.user_lists.map(l_id => {
		return listsModule.filmsListsData.find(list => list.id === l_id)
	})

	return listsList.length
		? listsList.slice(0, quantity)
		: { reviews: [], message: 'No user lists found' }
})
