import { defineEventHandler, getRouterParam, createError } from 'h3'

// Типизация структур данных (предполагаемые интерфейсы)
import type { IUser } from '~/shared/model/interfaces/userInterface'

import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

// Тип возвращаемого значения
type RatingResponse = number | null

export default defineEventHandler(async (event): Promise<RatingResponse> => {
	// Извлечение и валидация userId
	const userIdStr = getRouterParam(event, 'id')
	const userId = Number(userIdStr)
	if (!userIdStr || isNaN(userId) || userId < 1) {
		throw createError({
			statusCode: 400,
			message: 'Invalid or missing user ID',
		})
	}

	// Извлечение и валидация filmId
	const filmIdStr = getRouterParam(event, 'movie')
	const filmId = Number(filmIdStr)
	if (!filmIdStr || isNaN(filmId) || filmId < 1) {
		throw createError({
			statusCode: 400,
			message: 'Invalid or missing film ID',
		})
	}

	// Загрузка данных с обработкой ошибок
	let filmsList: IFilmItem[]
	try {
		const filmsModule = await import('~/shared/model/data/filmsData')
		filmsList = filmsModule.filmsList
	} catch (error) {
		throw createError({
			statusCode: 500,
			message: 'Failed to load data',
		})
	}

	// Поиск фильма
	const film = filmsList.find(f => f.id === filmId)
	if (!film) {
		throw createError({
			statusCode: 404,
			message: 'Film not found',
		})
	}

	// Проверка рейтинга с использованием some
	const ratingsMap: [number[], number][] = [
		[film.rating1, 1],
		[film.rating2, 2],
		[film.rating3, 3],
		[film.rating4, 4],
		[film.rating5, 5],
	]

	for (const [ratingList, rating] of ratingsMap) {
		if (ratingList.some(id => id === userId)) {
			return rating
		}
	}

	return null
})
