import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async event => {
	const module = await import('~/shared/model/data/reviewsData')
	const query = getQuery(event)

	const type = query.type
	const quantity = Number(query.quantity)

	if (type === 'film') {
		return module.reviewsList
			.filter(review => review.type === type)
			.slice(0, quantity || module.reviewsList.length)
	}

	if (type === 'list') {
		return module.reviewsList
			.filter(review => review.type === type)
			.slice(0, quantity || module.reviewsList.length)
	}

	if (type) {
		return module.reviewsList.slice(0, quantity || module.reviewsList.length)
	}

	return module.reviewsList.slice(0, quantity || module.reviewsList.length)
})
