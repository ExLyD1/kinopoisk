import { defineEventHandler, getQuery, getRouterParam } from 'h3'
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
	const perPage = 5

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
			message: 'Invalud year param',
		})
	}

	const decadeStr = query.decade
	const { validDecades, decadesAndYears } = await import(
		'~/shared/model/validRoutes/validDecade'
	)
	if (decadeStr && !validDecades.includes(String(decadeStr))) {
		throw createError({
			statusCode: 400,
			message: 'Invalud decade param',
		})
	}

	let filmsOnPage: IFilmItem[]
	let totalItems

	const films = filmsModule.filmsList

	// year
	if (yearStr) {
		const filmsByYear = films.filter(f => {
			return f.realise_year === Number(yearStr)
		})
		filmsOnPage = paginate(filmsByYear, page, perPage)
		totalItems = filmsByYear.length
	}

	// decade
	else if (decadeStr) {
		const decadeItem = decadesAndYears.find(item => item.decade === decadeStr)
		const yearsRange = decadeItem ? decadeItem.years : []

		const filmsByDecade = films.filter(f => {
			return yearsRange.includes(String(f.realise_year))
		})
		filmsOnPage = paginate(filmsByDecade, page, perPage)
		totalItems = filmsByDecade.length
	}

	// all
	else {
		filmsOnPage = paginate(films, page, perPage)
		totalItems = filmsModule.filmsList.length
	}

	const totalPages = Math.round(totalItems / perPage)

	return {
		data: filmsOnPage,
		totalPages,
		totalItems,
	}
})
