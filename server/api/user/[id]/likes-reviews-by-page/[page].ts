import { defineEventHandler, getRouterParam, getQuery } from 'h3'
import type { IReview } from '~/shared/model/interfaces/reviewInterface'

const paginate = (list: IReview[], currentPage: number, perPage: number) => {
	const start = (currentPage - 1) * perPage
	const end = start + perPage
	return list.slice(start, end)
}

export default defineEventHandler(async event => {
	const query = getQuery(event)
	const perPage = 12

	const userIdStr = getRouterParam(event, 'id')
	const userId = Number(userIdStr)
	if (!userId) {
		throw createError({
			statusCode: 400,
			message: 'User ID is required',
		})
	}

	const pageStr = getRouterParam(event, 'page')
	const page = Number(pageStr)
	if (!page || isNaN(page)) {
		throw createError({
			statusCode: 400,
			message: 'Invalid page data',
		})
	}

	const [usersModule, reviewsModule] = await Promise.all([
		import('~/shared/model/data/usersData'),
		import('~/shared/model/data/reviewsData'),
	])

	const user = usersModule.usersList.find(user => user.id === userId)
	if (!user) {
		throw createError({
			statusCode: 404,
			message: 'User not found ',
		})
	}

	const mapReviewsList = new Map(
		reviewsModule.reviewsList.map(review => [review.id, review])
	)

	let reviewsOnPage: IReview[] = []
	let totalItems

	const likedReviewsIds = user.user_favorite_reviews

	const likedReviews = likedReviewsIds
		.map(r_id => mapReviewsList.get(r_id))
		.filter((review): review is IReview => review !== undefined)

	reviewsOnPage = paginate(likedReviews, page, perPage)

	totalItems = likedReviews.length

	const totalPages = Math.ceil(totalItems / perPage)

	return {
		data: reviewsOnPage,
		totalPages,
	}
})
