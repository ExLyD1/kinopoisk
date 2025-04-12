import { defineEventHandler, getRouterParam, getQuery } from 'h3'
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

	const query = getQuery(event)
	const quantityStr = query.quantity
	const quantity = Number(quantityStr)

	let listsList = await prisma.lists.findMany({
		where: {
			id: {
				in: user.user_lists,
			},
		},
		...(quantity ? { take: quantity } : {}),
	})

	return listsList.length
		? serializeBigInt(listsList)
		: { reviews: [], message: 'User lists found' }
})
