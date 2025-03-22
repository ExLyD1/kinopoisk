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

	let filmsOnPage: IFilmItem[] = []
	let totalItems

	const likedFilmsIds = user.user_favorite_films

	const likedFilms = likedFilmsIds
		.map(f_id => mapFilmsList.get(f_id))
		.filter((film): film is IFilmItem => film !== undefined)

	filmsOnPage = paginate(likedFilms, page, perPage)

	totalItems = likedFilms.length

	const totalPages = Math.ceil(totalItems / perPage)

	return {
		data: filmsOnPage,
		totalPages,
	}
})
