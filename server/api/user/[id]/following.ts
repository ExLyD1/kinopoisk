import { defineEventHandler, getRouterParam } from 'h3'

export default defineEventHandler(async event => {
	const usersModule = await import('~/shared/model/data/usersData')

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

	let followingsList = user.user_following
		.map(u_id => {
			return usersModule.usersList.find(user => user.id === u_id)
		})
		.slice(0, 18)

	return followingsList.length
		? followingsList
		: { reviews: [], message: 'No following users found' }
})
