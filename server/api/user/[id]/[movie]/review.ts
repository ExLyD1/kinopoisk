import { defineEventHandler, getRouterParam } from 'h3'
import { generateSlug } from '~/composables/generateLink'

export default defineEventHandler(async event => {
	const idStr = getRouterParam(event, 'id')
	const id = Number(idStr)
	if (!id) {
		throw createError({
			statusCode: 400,
			message: 'Id is required',
		})
	}

	const movie_name = getRouterParam(event, 'movie')
	if (!movie_name) {
		throw createError({
			statusCode: 400,
			message: 'Movie name is required',
		})
	}

	const [filmsModule, reviewsModule] = await Promise.all([
		import('~/shared/model/data/filmsData'),
		import('~/shared/model/data/reviewsData'),
	])

	const film = filmsModule.filmsList.find(
		film => generateSlug(film.film_name) === generateSlug(movie_name)
	)

	if (!film) {
		throw createError({
			statusCode: 404,
			message: 'Movie not found',
		})
	}

	const review = reviewsModule.reviewsList.find(
		review => review.user_id === id && review.item_id === film.id
	)

	return review
})
