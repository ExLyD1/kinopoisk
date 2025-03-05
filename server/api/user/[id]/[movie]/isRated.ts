import { defineEventHandler, getRouterParam, createError } from 'h3'

// Определяем интерфейс для фильма
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

export default defineEventHandler(async event => {
	// Получаем и валидируем userId
	const userIdStr = getRouterParam(event, 'id')
	const userId = Number(userIdStr)
	if (!userIdStr || isNaN(userId) || userId <= 0) {
		throw createError({
			statusCode: 400,
			message: 'Valid user ID is required',
		})
	}

	// Получаем и валидируем filmId
	const filmIdStr = getRouterParam(event, 'movie')
	const filmId = Number(filmIdStr)
	if (!filmIdStr || isNaN(filmId) || filmId <= 0) {
		throw createError({
			statusCode: 400,
			message: 'Valid film ID is required',
		})
	}

	// Загружаем данные о фильмах
	const { filmsList } = await import('~/shared/model/data/filmsData')

	// Ищем фильм с типизацией
	const film = filmsList.find((f: IFilmItem) => f.id === filmId)
	if (!film) {
		throw createError({
			statusCode: 404,
			message: 'Film not found',
		})
	}

	// Проверяем наличие пользователя в рейтингах
	const ratings = [
		film.rating1 ?? [],
		film.rating2 ?? [],
		film.rating3 ?? [],
		film.rating4 ?? [],
		film.rating5 ?? [],
	]

	// Используем some для более эффективной проверки
	const isRatedByUser = ratings.some(rating => rating.includes(userId))

	return isRatedByUser
})
