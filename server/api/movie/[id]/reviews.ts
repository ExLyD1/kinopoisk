import { defineEventHandler, getRouterParam } from 'h3'

export default defineEventHandler(async event => {
	const id = getRouterParam(event, 'id')

	if (!id) {
		return { error: 'ID is required' }
	}

	const module = await import('~/shared/model/data/reviewsData')

	const films_reviews = module.reviewsList.filter(
		review => review.type === 'film'
	)

	const reviews = films_reviews.filter(review => review.item_id === Number(id))

	return reviews.length ? reviews : { reviews: [], message: 'No reviews found' }
})
