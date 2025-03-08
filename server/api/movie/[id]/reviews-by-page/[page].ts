import { defineEventHandler, getRouterParam, getQuery, createError } from 'h3'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import type { IUser } from '~/shared/model/interfaces/userInterface'
import type { IReview } from '~/shared/model/interfaces/reviewInterface'

const paginate = <T>(items: T[], page: number, perPage: number): T[] => {
	const start = (page - 1) * perPage
	const end = start + perPage
	return items.slice(start, end)
}

export default defineEventHandler(async event => {
	const perPage = 12

	const movieIdStr = getRouterParam(event, 'id')
	const movieId = Number(movieIdStr)
	if (!movieId) {
		throw createError({ statusCode: 400, message: 'Movie ID is required' })
	}

	const pageStr = getRouterParam(event, 'page')
	const page = Number(pageStr)
	if (!page || isNaN(page)) {
		throw createError({
			statusCode: 400,
			message: 'Page is required and must be a number',
		})
	}
	if (page <= 0) {
		throw createError({ statusCode: 400, message: 'Pagination starts from 1' })
	}

	const [reviewsModule, filmsModule] = await Promise.all([
		import('~/shared/model/data/reviewsData'),
		import('~/shared/model/data/filmsData'),
	])

	const film = filmsModule.filmsList.find(f => f.id === movieId)
	if (!film) {
		throw createError({
			statusCode: 404,
			message: 'Film not found',
		})
	}

	const query = getQuery(event)
	const rating = query.rating as string | undefined
	if (!rating || !['any', 'none'].includes(rating)) {
		throw createError({
			statusCode: 400,
			message: 'Rating is required and must be "any" or "none"',
		})
	}

	const sort = query.sort as string | undefined
	const avaliableTypesOfSort: string[] = [
		'name',
		'newest',
		'earliest',
		'rating-highest',
		'rating-lowest',
	]
	if (sort && !avaliableTypesOfSort.includes(sort)) {
		throw createError({
			statusCode: 400,
			message: 'No such type of sort',
		})
	}

	let reviewsOnPage: IReview[] = []
	let totalItems: number = 0

	// rating any
	if (rating === 'any') {
		const filmReviewsPromised = film.reviews.map(async r_id => {
			return await $fetch<IReview>(`/api/review/${r_id}`)
		})

		const filmReviews = await Promise.all(filmReviewsPromised)

		// Any Rating + Sort by newest
		if (sort === 'newest') {
			const reviewsReversed = filmReviews.reverse()
			totalItems = filmReviews.length
			reviewsOnPage = paginate(reviewsReversed, page, perPage)
		}
		// Any Rating + Sort by earliest
		else if (sort === 'earliest') {
			totalItems = filmReviews.length
			reviewsOnPage = paginate(filmReviews, page, perPage)
		}

		// Any Rating + Sort by rating highest
		else if (sort === 'rating-highest') {
			const reviewsHighest = filmReviews
				.filter(r => r.review_rate !== undefined && r.review_rate !== 0)
				.sort((a, b) => a.review_rate! - b.review_rate!)
				.reverse()
			totalItems = reviewsHighest.length

			reviewsOnPage = paginate(reviewsHighest, page, perPage)
		}

		// Any Rating + Sort by rating lowest
		else if (sort === 'rating-lowest') {
			const reviewsLowest = filmReviews
				.filter(r => r.review_rate !== undefined && r.review_rate !== 0)
				.sort((a, b) => a.review_rate! - b.review_rate!)
			totalItems = reviewsLowest.length

			reviewsOnPage = paginate(reviewsLowest, page, perPage)
		}

		// error
		else {
			throw createError({
				statusCode: 400,
				message: 'Invalid type of sort',
			})
		}
	}

	// rating none
	else if (rating === 'none') {
		const filmReviewsPromised = film.reviews.map(async r_id => {
			return await $fetch<IReview>(`/api/review/${r_id}`)
		})

		const filmReviews = await Promise.all(filmReviewsPromised)
		totalItems = filmReviews.length

		const noneRatedReviews = filmReviews.filter(r => !r.review_rate)

		// None Rating + Sort by newest
		if (sort === 'newest') {
			const reviewsReversed = noneRatedReviews.reverse()
			totalItems = noneRatedReviews.length
			reviewsOnPage = paginate(reviewsReversed, page, perPage)
		}
		// None Rating + Sort by earliest
		else if (sort === 'earliest') {
			totalItems = noneRatedReviews.length
			reviewsOnPage = paginate(noneRatedReviews, page, perPage)
		}

		// error
		else {
			throw createError({
				statusCode: 400,
				message: 'Invalid type of sort',
			})
		}
	}
	const totalPages = Math.ceil(totalItems / perPage)
	if (page > totalPages && page !== 1) {
		throw createError({
			statusCode: 400,
			message: `Maximum page is ${totalPages}`,
		})
	}

	return {
		data: reviewsOnPage,
		totalItems,
		totalPages,
		currentPage: page,
		perPage,
	}
})
