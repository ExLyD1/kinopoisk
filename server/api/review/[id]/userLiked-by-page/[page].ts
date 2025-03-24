import { defineEventHandler, getRouterParam, createError } from 'h3'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import type { IUser } from '~/shared/model/interfaces/userInterface'

const paginate = <T>(items: T[], page: number, perPage: number): T[] => {
	const start = (page - 1) * perPage
	const end = start + perPage
	return items.slice(start, end)
}

export default defineEventHandler(async event => {
	const perPage = 25

	const reviewIdStr = getRouterParam(event, 'id')
	const reviewId = Number(reviewIdStr)
	if (!reviewId || isNaN(reviewId)) {
		throw createError({ statusCode: 400, message: 'Review ID is required' })
	}

	const pageStr = getRouterParam(event, 'page')
	const page = Number(pageStr)
	if (!page || isNaN(page)) {
		throw createError({
			statusCode: 400,
			message: 'Page is required and must be a number',
		})
	}
	if (page <= 0) {
		throw createError({ statusCode: 400, message: 'Pagination starts from 1' })
	}

	const [usersModule, reviewsModule] = await Promise.all([
		import('~/shared/model/data/usersData'),
		import('~/shared/model/data/reviewsData'),
	])

	const review = reviewsModule.reviewsList.find(r => r.id === reviewId)
	if (!review) {
		throw createError({ statusCode: 404, message: 'Review not found' })
	}

	const userMap = new Map<number, IUser>(
		usersModule.usersList.map(user => [user.id, user])
	)

	let usersOnPage: IUser[] = []
	let totalItems: number = 0

	const usersLiked: IUser[] = review.review_likes_users
		.map(u_id => {
			return userMap.get(u_id)
		})
		.filter(u => u !== undefined)

	totalItems = usersLiked.length

	usersOnPage = paginate(usersLiked, page, perPage)

	const totalPages = Math.ceil(totalItems / perPage)
	if (page > totalPages && page !== 1) {
		throw createError({
			statusCode: 400,
			message: `Maximum page is ${totalPages}`,
		})
	}

	return {
		data: usersOnPage,
		totalPages,
	}
})
