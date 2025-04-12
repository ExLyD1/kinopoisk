import { defineEventHandler, getRouterParam } from 'h3'
import { generateSlug } from '~/composables/generateLink'
import prisma from '~/lib/prisma'

export default defineEventHandler(async event => {
	const name = getRouterParam(event, 'name')
	if (!name) {
		return { error: 'Not name in request' }
	}

	const allUsers = await prisma.users.findMany()

	const user = allUsers.find(
		user => generateSlug(user.user_name) === generateSlug(name)
	)

	if (!user) {
		throw createError({
			statusCode: 400,
			message: 'User not found',
		})
	}

	return user
})
