import { defineEventHandler, getRouterParam } from 'h3'

export default defineEventHandler(async event => {
	// Извлечение и валидация userId
	const userIdStr = getRouterParam(event, 'id')
	const userId = Number(userIdStr)
	if (!userIdStr || isNaN(userId) || userId < 1) {
		throw createError({
			statusCode: 400,
			message: 'Invalid or missing user ID',
		})
	}

	// Извлечение и валидация filmId
	const filmIdStr = getRouterParam(event, 'movie')
	const filmId = Number(filmIdStr)
	if (!filmIdStr || isNaN(filmId) || filmId < 1) {
		throw createError({
			statusCode: 400,
			message: 'Invalid or missing film ID',
		})
	}

	let usersList
	try {
		const module = await import('~/shared/model/data/usersData')
		usersList = module.usersList
	} catch (error) {
		throw createError({
			statusCode: 500,
			statusMessage: 'Internal Server Error',
			message: 'Failed to load users data',
		})
	}

	const user = usersList.find(user => user.id === userId)
	if (!user) {
		throw createError({
			statusCode: 404,
			message: 'User not found',
		})
	}

	const isLikedByUser = user.user_favorite_films.some(f_id => f_id === filmId)

	return isLikedByUser
})
