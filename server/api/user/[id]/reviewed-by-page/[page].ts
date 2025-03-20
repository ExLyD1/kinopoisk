import { defineEventHandler, getRouterParam } from 'h3'
import type { IReview } from '~/shared/model/interfaces/reviewInterface'

const paginate = (
	items: IReview[],
	page: number,
	perPage: number
): IReview[] => {
	const start = (page - 1) * perPage
	const end = start + perPage

	return items.slice(start, end)
}
export default defineEventHandler(async event => {
	const perPage = 3

	const userIdStr = getRouterParam(event, 'id')
	const userId = Number(userIdStr)
	if (!userId) {
		throw createError({
			statusCode: 400,
			message: 'Id is required',
		})
	}

	const usersModule = await import('~/shared/model/data/usersData')
	const reviewsModule = await import('~/shared/model/data/reviewsData')

	const user = usersModule.usersList.find(user => user.id === userId)

	if (!user) {
		throw createError({
			statusCode: 404,
			message: 'User not found',
		})
	}

	const pageStr = getRouterParam(event, 'page')
	const page = Number(pageStr)

	if (!page || page <= 0 || isNaN(page)) {
		throw createError({
			statusCode: 400,
			message: 'Invalid page data',
		})
	}

	let data: IReview[] = []

	const userReviewsIds = user.user_reviews
	const mapReviews = new Map(
		reviewsModule.reviewsList.map(review => [review.id, review])
	)

	const userReviews: IReview[] = userReviewsIds
		.map(u_id => {
			return mapReviews.get(u_id)
		})
		.filter(item => item !== undefined)

	const totalPages = Math.ceil(userReviews.length / perPage)
	data = paginate(userReviews, page, perPage)

	return {
		data,
		totalPages,
	}
})
