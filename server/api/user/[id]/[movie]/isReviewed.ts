import { defineEventHandler, getRouterParam, createError } from 'h3'

// Типизация структуры отзыва (предполагаемая)
import type { IReview } from '~/shared/model/interfaces/reviewInterface'

// Типизация возвращаемого значения
type ReviewCheckResponse = boolean

export default defineEventHandler(
	async (event): Promise<ReviewCheckResponse> => {
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
		let reviewsList: IReview[]
		try {
			const module = await import('~/shared/model/data/reviewsData')
			reviewsList = module.reviewsList
		} catch (error) {
			throw createError({
				statusCode: 500,
				message: 'Failed to load reviews data',
			})
		}

		// Проверка наличия отзыва с использованием some
		const isReviewedByUser = reviewsList.some(
			review =>
				review.type === 'film' &&
				review.user_id === userId &&
				review.item_id === filmId
		)

		return isReviewedByUser
	}
)
