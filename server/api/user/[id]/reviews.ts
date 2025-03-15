import { defineEventHandler, getRouterParam, getQuery } from 'h3'

export default defineEventHandler(async event => {
	const reviewsModule = await import('~/shared/model/data/reviewsData')
	const usersModule = await import('~/shared/model/data/usersData')
	const query = getQuery(event)

	const userIdStr = getRouterParam(event, 'id')
	const userId = Number(userIdStr)

	if (!userId) {
		throw createError({
			statusCode: 400,
			message: 'User Id is required',
		})
	}
	const quantityStr = query.quantity
	const quantity = Number(quantityStr)

	const user = usersModule.usersList.find(user => user.id === userId)
	if (!user) {
		throw createError({
			statusCode: 404,
			message: 'User not found',
		})
	}

	let user_reviews = []

	if (quantity) {
		user_reviews = user.user_reviews
			.map(r_id => {
				return reviewsModule.reviewsList.find(review => review.id === r_id)
			})
			.slice(0, quantity)
	} else {
		user_reviews = user.user_reviews.map(r_id => {
			return reviewsModule.reviewsList.find(review => review.id === r_id)
		})
	}

	return user_reviews.length
		? user_reviews
		: { reviews: [], message: 'No reviews found' }
})
