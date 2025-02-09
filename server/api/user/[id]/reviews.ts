import { defineEventHandler, getRouterParam } from 'h3'

export default defineEventHandler(async event => {
	const reviewsModule = await import('~/shared/model/data/reviewsData')

	const id = getRouterParam(event, 'id')

	if (!id) {
		return 'No ID in query url'
	}

	const user_reviews = reviewsModule.reviewsList.filter(
		review => review.user_id === Number(id)
	)

	return user_reviews.length
		? user_reviews
		: { reviews: [], message: 'No reviews found' }
})
