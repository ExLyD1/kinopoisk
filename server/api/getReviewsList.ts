import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async event => {
	const module = await import('../../shared/model/data/reviewsData')
	const query = getQuery(event)

	const quantity = Number(query.quantity)
	const review_id = Number(query.id)

	if (review_id) {
		return module.reviewsList.find(review => review.id === review_id)
	}

	if (!isNaN(quantity) && quantity > 0) {
		return module.reviewsList.slice(0, quantity)
	}

	return module.reviewsList
})
