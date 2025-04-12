import { defineEventHandler, getRouterParam, getQuery } from 'h3'
import { serializeBigInt } from '~/composables/serialize'
import prisma from '~/lib/prisma'

export default defineEventHandler(async event => {
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

	let user_reviews = []

	if (quantity) {
		user_reviews = await prisma.reviews.findMany({
			where: {
				id: {
					in: user.user_reviews,
				},
			},
			take: quantity,
		})
	} else {
		user_reviews = await prisma.reviews.findMany({
			where: {
				id: {
					in: user.user_reviews,
				},
			},
		})
	}

	return user_reviews.length
		? serializeBigInt(user_reviews)
		: { reviews: [], message: 'No reviews found' }
})
