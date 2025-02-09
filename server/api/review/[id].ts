import { defineEventHandler, getRouterParam } from 'h3'

export default defineEventHandler(async event => {
	const id = getRouterParam(event, 'id')

	if (!id) {
		return { error: 'ID is required' }
	}

	const module = await import('~/shared/model/data/reviewsData')

	const review = module.reviewsList.find(review => review.id === Number(id))

	if (!review) {
		return { error: 'review not found' }
	}

	return review
})
