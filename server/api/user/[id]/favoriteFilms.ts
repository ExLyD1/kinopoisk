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

	const quantityStr = query.quantity
	const quantity = Number(quantityStr)

	const user_favorite_films = await prisma.films.findMany({
		where: {
			id: {
				in: user.user_favorite_films,
			},
		},
		take: quantity,
	})

	return user_favorite_films.length
		? serializeBigInt(user_favorite_films)
		: { user_favorite_lists: [], message: 'User did not like any film' }
})
