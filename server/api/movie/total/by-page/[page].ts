import { defineEventHandler, getQuery, getRouterParam } from 'h3'
import { getFilmRate } from '~/composables/getFilmRate'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const paginate = (
	list: IFilmItem[],
	page: number,
	perPage: number
): IFilmItem[] => {
	const start = (page - 1) * perPage
	const end = page * perPage
	return list.slice(start, end)
}

export default defineEventHandler(async event => {
	const query = getQuery(event)
	const perPage = 72

	const pageStr = getRouterParam(event, 'page')
	const page = Number(pageStr)
	if (!page || isNaN(page) || page <= 0) {
		throw createError({
			statusCode: 400,
			message: 'Invalid page',
		})
	}

	const filmsModule = await import('~/shared/model/data/filmsData')

	const yearStr = query.year
	const { validYears } = await import('~/shared/model/validRoutes/validYears')
	if (yearStr && !validYears.includes(String(yearStr))) {
		throw createError({
			statusCode: 400,
			message: 'Invalid year param',
		})
	}

	const decadeStr = query.decade
	const { validDecades, decadesAndYears } = await import(
		'~/shared/model/validRoutes/validDecade'
	)
	if (decadeStr && !validDecades.includes(String(decadeStr))) {
		throw createError({
			statusCode: 400,
			message: 'Invalid decade param',
		})
	}

	const genresStr = query.genres
	const { validGenres } = await import('~/shared/model/validRoutes/validGenres')
	if (genresStr && Array.isArray(genresStr)) {
		genresStr.forEach(g => {
			if (!validGenres.includes(g)) {
				throw createError({
					statusCode: 400,
					message: 'Invalid genres params',
				})
			}
		})
	}

	const sort = query.sort
	const { validSorts } = await import('~/shared/model/validRoutes/validSorts')
	if (sort && !validSorts.includes(String(sort))) {
		throw createError({
			statusCode: 400,
			message: 'Invalid sort params',
		})
	}

	let films: IFilmItem[] = filmsModule.filmsList

	// year
	if (yearStr) {
		const filmsByYear = films.filter(f => {
			return f.realise_year === Number(yearStr)
		})
		films = filmsByYear
	}

	// decade
	else if (decadeStr) {
		const decadeItem = decadesAndYears.find(item => item.decade === decadeStr)
		const yearsRange = decadeItem ? decadeItem.years : []

		const filmsByDecade = films.filter(f => {
			return yearsRange.includes(String(f.realise_year))
		})
		films = filmsByDecade
	}

	// genres
	if (genresStr) {
		const genresArr: any = String(genresStr).toLowerCase().split('+')

		let filmsByGenre

		genresArr.forEach((g: string) => {
			const gUp = g[0].toUpperCase()
			const genreToCompare: any = gUp + g.slice(1)

			filmsByGenre = films
				.map(f => {
					if (f.genres.includes(genreToCompare)) {
						return f
					}
				})
				.filter(i => i !== undefined)
		})

		films = filmsByGenre!
	}

	// sorting
	if (sort) {
		// name
		if (sort === 'name') {
			films.sort((a, b) => a.film_name.localeCompare(b.film_name))
		} else if (sort === 'rating-highest') {
			films.sort((a, b) => {
				const a_rating = getFilmRate([
					a.rating1,
					a.rating2,
					a.rating3,
					a.rating4,
					a.rating5,
				])
				const b_rating = getFilmRate([
					b.rating1,
					b.rating2,
					b.rating3,
					b.rating4,
					b.rating5,
				])

				return a_rating - b_rating
			})
		} else if (sort === 'rating-lowest') {
			films.sort((a, b) => {
				const a_rating = getFilmRate([
					a.rating1,
					a.rating2,
					a.rating3,
					a.rating4,
					a.rating5,
				])
				const b_rating = getFilmRate([
					b.rating1,
					b.rating2,
					b.rating3,
					b.rating4,
					b.rating5,
				])

				return b_rating - a_rating
			})
		} else if (sort === 'newest') {
			films.sort((a, b) => a.realise_year - b.realise_year)
		} else if (sort === 'earliest') {
			films.sort((a, b) => b.realise_year - a.realise_year)
		} else if (sort === 'shortest') {
			films.sort((a, b) => a.duration - b.duration)
		} else if (sort === 'longest') {
			films.sort((a, b) => b.duration - a.duration)
		}
	}

	const totalItems = films.length
	const totalPages = Math.round(totalItems / perPage)
	const filmsOnPage = paginate(films, page, perPage)

	return {
		data: filmsOnPage,
		totalPages,
		totalItems,
	}
})
