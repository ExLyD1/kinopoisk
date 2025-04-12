import { defineEventHandler, getRouterParam } from 'h3'
import prisma from '~/lib/prisma'

export default defineEventHandler(async event => {
	const user_idStr = getRouterParam(event, 'id')
	const user_id = Number(user_idStr)

	if (!user_id) {
		throw createError({
			statusCode: 400,
			message: 'User Id is required',
		})
	}

	const user = await prisma.users.findUnique({
		where: {
			id: user_id,
		},
	})

	if (!user) {
		throw createError({
			statusCode: 400,
			message: 'User not found',
		})
	}

	return user
})
