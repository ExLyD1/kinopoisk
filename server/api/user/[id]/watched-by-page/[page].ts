import { defineEventHandler, getRouterParam, getQuery } from 'h3'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import prisma from '~/lib/prisma'

export default defineEventHandler(async event => {
	const query = getQuery(event)
	const perPage = 36

	const userIdStr = getRouterParam(event, 'id')
	const userId = Number(userIdStr)
	if (!userId) {
		throw createError({
			statusCode: 400,
			message: 'User ID is required',
		})
	}

	const pageStr = getRouterParam(event, 'page')
	const page = Number(pageStr)
	if (!page || isNaN(page)) {
		throw createError({
			statusCode: 400,
			message: 'Invalid page data',
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
			message: 'User not found ',
		})
	}

	const genreStr = query.genre as string
	const genre = genreStr.split(' ')
	const validGenres = [
		'any',
		'action',
		'adventure',
		'animation',
		'comedy',
		'crime',
		'documentary',
		'drama',
		'family',
		'fantasy',
		'history',
		'horror',
		'music',
		'mystery',
		'romance',
		'science',
		'fiction',
		'thriller',
		'tV',
		'movie',
		'war',
		'western',
	]

	if (Array.isArray(genre)) {
		genre.forEach(g => {
			if (!validGenres.includes(g)) {
				throw createError({
					statusCode: 400,
					message: 'Invalid genre',
				})
			}
		})
	} else {
		if (genre !== 'any') {
			throw createError({
				statusCode: 400,
				message: 'Invalid genre',
			})
		}
	}

	const genreConditions = genre.map(g => ({
		genres: {
			has: g[0].toUpperCase() + g.slice(1), // Преобразуем в нужный формат
		},
	}))

	const filmsOnPage = await prisma.films.findMany({
		where: {
			id: { in: user.user_films }, // Фильтруем только по фильмам пользователя
			...(genreStr !== 'any' && { AND: genreConditions }), // Если жанр не "any", добавляем фильтрацию по жанру
		},
		take: perPage, // Лимитируем количество
		skip: (page - 1) * perPage, // Для пагинации
	})

	const totalItems = await prisma.films.count({
		where: {
			id: { in: user.user_films },
			...(genreStr !== 'any' && { AND: genreConditions }),
		},
	})

	const totalPages = Math.ceil(totalItems / perPage)

	return {
		data: filmsOnPage,
		totalItems,
		totalPages,
		currentPage: page,
		perPage,
	}
})
