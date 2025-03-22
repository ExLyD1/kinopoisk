import { defineEventHandler, getRouterParam } from 'h3'

export default defineEventHandler(async event => {
	const idStr = getRouterParam(event, 'id')
	const id = Number(idStr)
	if (!id) {
		throw createError({
			statusCode: 400,
			message: 'Id is required',
		})
	}

	const [reviewsModule, commentsModule] = await Promise.all([
		import('~/shared/model/data/reviewsData'),
		import('~/shared/model/data/commentsData'),
	])

	const review = reviewsModule.reviewsList.find(review => review.id === id)
	if (!review) {
		throw createError({
			statusCode: 404,
			message: 'Review not found',
		})
	}

	const commentsList = review.review_comments_users
		.map(c_id => {
			return commentsModule.commentsList.find(comment => comment.id === c_id)
		})
		.filter(comment => comment !== undefined)

	return commentsList.slice(0, 20)
})
