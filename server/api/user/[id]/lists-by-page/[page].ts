import { defineEventHandler, getRouterParam } from 'h3'
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'
import prisma from '~/lib/prisma'
import { serializeBigInt } from '~/composables/serialize'

export default defineEventHandler(async event => {
	const perPage = 12

	const userIdStr = getRouterParam(event, 'id')
	const userId = Number(userIdStr)
	if (!userId) {
		throw createError({
			statusCode: 400,
			message: 'Id is required',
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

	const pageStr = getRouterParam(event, 'page')
	const page = Number(pageStr)

	if (!page || page <= 0 || isNaN(page)) {
		throw createError({
			statusCode: 400,
			message: 'Invalid page data',
		})
	}

	const listsOnPage = await prisma.lists.findMany({
		where: {
			id: {
				in: user.user_lists,
			},
		},
		skip: (page - 1) * perPage,
	})

	const totalItems = await prisma.lists.count({
		where: {
			id: {
				in: user.user_lists,
			},
		},
	})

	const totalPages = Math.ceil(totalItems / perPage)

	const serializedListsOnPage = listsOnPage.map(l => {
		return serializeBigInt(l)
	})
	return {
		data: serializedListsOnPage,
		totalPages,
	}
})
