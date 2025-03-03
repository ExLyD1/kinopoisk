import { defineEventHandler, getRouterParam } from 'h3'

export default defineEventHandler(async event => {
	const userIdStr = getRouterParam(event, 'id')
	const userId = Number(userIdStr)
	if (!userId) {
		throw createError({
			statusCode: 404,
			message: 'User ID is required',
		})
	}

	const filmIdStr = getRouterParam(event, 'movie')
	const filmId = Number(filmIdStr)
	if (!filmId) {
		throw createError({
			statusCode: 400,
			message: 'Film ID is required',
		})
	}

	const filmsModule = await import('~/shared/model/data/filmsData')

	const film = filmsModule.filmsList.find(f => f.id === filmId)
	if (!film) {
		throw createError({
			statusCode: 404,
			message: 'Not found the film with such ID',
		})
	}

	const ratingsList = [
		film.rating1,
		film.rating2,
		film.rating3,
		film.rating4,
		film.rating5,
	]

	let isRatedByUser: boolean = false
	for (let i = 0; i < ratingsList.length; i++) {
		for (let j = 0; j < ratingsList[i].length; j++) {
			const userRatedId = ratingsList[i][j]

			if (userRatedId === Number(userId)) {
				isRatedByUser = true
			}
		}
	}

	return isRatedByUser
})
