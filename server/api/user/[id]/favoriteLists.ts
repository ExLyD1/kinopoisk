import { defineEventHandler, getRouterParam } from 'h3'
import { serializeBigInt } from '~/composables/serialize'
import prisma from '~/lib/prisma'

export default defineEventHandler(async event => {
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

	const user_favorite_lists = await prisma.lists.findMany({
		where: {
			id: {
				in: user.user_favorite_lists,
			},
		},
	})

	return user_favorite_lists.length
		? serializeBigInt(user_favorite_lists)
		: { user_favorite_lists: [], message: 'User did not like any list' }
})
