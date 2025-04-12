import { defineEventHandler, getQuery } from 'h3'
import prisma from '~/lib/prisma'

export default defineEventHandler(async event => {
	const query = getQuery(event)

	const user_id = Number(query.id)
	const quantity = Number(query.quantity)

	if (!user_id) {
		return { error: 'No any ID in request' }
	}

	if (isNaN(quantity) || quantity <= 0) {
		return { error: 'Invalid quantity parameter' }
	}

	const user = await prisma.users.findUnique({
		where: { id: user_id },
	})

	if (!user) {
		return { error: 'User not found' }
	}

	const favorite_films = await prisma.films.findMany({
		where: {
			id: {
				in: user.user_favorite_films.map(f_id => f_id),
			},
		},
	})

	return favorite_films.slice(0, quantity || favorite_films.length)
})
