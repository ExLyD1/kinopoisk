import { defineEventHandler, getRouterParam } from 'h3'
import type { IReview } from '~/shared/model/interfaces/reviewInterface'
import prisma from '~/lib/prisma'
import { serializeBigInt } from '~/composables/serialize'

export default defineEventHandler(async event => {
	const perPage = 12

	const userIdStr = getRouterParam(event, 'id')
	const userId = Number(userIdStr)
	if (!userId) {
		throw createError({
			statusCode: 400,
			message: 'Id is required',
		})
	}

	const user = await prisma.users.findUnique({
		where: {
			id: userId,
		},
	})
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

	let data: any = []

	// const mapReviews = new Map(
	// 	reviewsModule.reviewsList.map(review => [review.id, review])
	// )

	const reviewsOnPage = await prisma.reviews.findMany({
		where: {
			id: {
				in: user.user_reviews,
			},
		},
		skip: (page - 1) * perPage,
	})

	const totalItems = await prisma.reviews.count({
		where: {
			id: {
				in: user.user_reviews,
			},
		},
	})

	const totalPages = Math.ceil(totalItems / perPage)

	const serializedReviews = reviewsOnPage.map(r => {
		return serializeBigInt(r)
	})

	return {
		data: serializedReviews,
		totalPages,
	}
})
