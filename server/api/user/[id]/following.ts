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

	let followingsList = await prisma.users.findMany({
		where: {
			id: {
				in: user.user_following,
			},
		},
		take: 18,
	})

	return followingsList.length
		? serializeBigInt(followingsList)
		: { reviews: [], message: 'No following users found' }
})
