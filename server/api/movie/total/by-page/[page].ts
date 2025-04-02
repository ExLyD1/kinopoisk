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

	const films = paginate(filmsModule.filmsList, page, perPage)
	const totalPages = Math.round(filmsModule.filmsList.length / perPage)

	return {
		data: films,
		totalPages,
	}
})
