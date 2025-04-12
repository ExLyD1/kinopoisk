import { defineEventHandler, getQuery } from 'h3'
import prisma from '~/lib/prisma'

export default defineEventHandler(async event => {
	const query = getQuery(event)

	const type = query.type
	const quantity = Number(query.quantity)

	if (quantity) {
		return await prisma.users.findMany({
			take: quantity,
		})
	}

	return await prisma.users.findMany()
})
