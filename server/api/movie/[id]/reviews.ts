import { defineEventHandler, getRouterParam } from 'h3'

export default defineEventHandler(async event => {
	const id = getRouterParam(event, 'id')

	if (!id) {
		return { error: 'ID is required' }
	}

	const module = await import('~/shared/model/data/reviewsData')
	const filmModule = await import('~/shared/model/data/filmsData')

	const film = filmModule.filmsList.find(item => item.id === Number(id))

	const films_reviews = module.reviewsList.filter(
		review => review.type === 'film'
	)

	let reviews: any = []

	if (film?.reviews) {
		reviews = film.reviews.map(reviewId => {
			return films_reviews.find(review => review.id === reviewId)
		})
	}

	return reviews.length ? reviews : { reviews: [], message: 'No reviews found' }
})
