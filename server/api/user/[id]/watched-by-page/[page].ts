import { defineEventHandler, getRouterParam, getQuery } from 'h3'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const paginate = (list: IFilmItem[], currentPage: number, perPage: number) => {
	const start = (currentPage - 1) * perPage
	const end = start + perPage
	return list.slice(start, end)
}

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

	const [usersModule, filmsModule] = await Promise.all([
		import('~/shared/model/data/usersData'),
		import('~/shared/model/data/filmsData'),
	])

	const user = usersModule.usersList.find(user => user.id === userId)
	if (!user) {
		throw createError({
			statusCode: 404,
			message: 'User not found ',
		})
	}

	const mapFilmsList = new Map(
		filmsModule.filmsList.map(film => [film.id, film])
	)

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

	let filmsOnPage: IFilmItem[] = []
	let totalItems

	// genre any
	if (genreStr === 'any') {
		const watchedFilmsIds = user.user_films

		const watchedFilms = watchedFilmsIds
			.map(f_id => mapFilmsList.get(f_id))
			.filter((film): film is IFilmItem => film !== undefined)

		filmsOnPage = paginate(watchedFilms, page, perPage)

		totalItems = watchedFilms.length
	}

	// other valid genre
	else {
		const watchedFilmsIds = user.user_films

		let watchedFilms = watchedFilmsIds
			.map(f_id => mapFilmsList.get(f_id))
			.filter((film): film is IFilmItem => film !== undefined)

		genre.forEach((g: string) => {
			const gUp = g[0].toUpperCase()
			const genreToCompare: any = gUp + g.slice(1)

			watchedFilms = watchedFilms.filter(film =>
				film.genres.includes(genreToCompare)
			)
		})

		filmsOnPage = paginate(watchedFilms, page, perPage)

		totalItems = watchedFilms.length
	}

	const totalPages = Math.ceil(totalItems / perPage)

	return {
		data: filmsOnPage,
		totalItems,
		totalPages,
		currentPage: page,
		perPage,
	}
})
