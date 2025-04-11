import { defineEventHandler, getQuery } from 'h3'
import prisma from '~/lib/prisma'

export default defineEventHandler(async event => {
	const query = getQuery(event)

	const type = query.type
	const quantity = Number(query.quantity)

	if (isNaN(quantity) || quantity <= 0) {
		return { error: 'Invalid quantity parameter' }
	}

	const films = await prisma.films.findMany({
		take: quantity || 10,
	})

	return films
})
