import { defineEventHandler, getRouterParam, getQuery, createError } from 'h3'
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'

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

	const [filmsModule] = await Promise.all([
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

	const sort = query.sort as string | undefined
	const avaliableTypesOfSort: string[] = ['name', 'newest', 'oldest']
	if (sort && !avaliableTypesOfSort.includes(sort)) {
		throw createError({
			statusCode: 400,
			message: 'No such type of sort',
		})
	}

	let listsOnPage: IFilmsList[] = []
	let totalItems: number = 0

	const listListsPromised = film.lists.map(async l_id => {
		return await $fetch<IFilmsList>(`/api/list/${l_id}`)
	})

	const listsList = await Promise.all(listListsPromised)
	totalItems = listsList.length

	// Sort by name
	if (sort === 'name') {
		const listsListSorted = [...listsList].sort((a, b) =>
			a.list_name.localeCompare(b.list_name)
		)

		listsOnPage = paginate(listsListSorted, page, perPage)
	}

	// Sort by newest
	else if (sort === 'newest') {
		const listsReversed = listsList.reverse()
		listsOnPage = paginate(listsReversed, page, perPage)
	}

	// Sort by oldest
	else if (sort === 'oldest') {
		listsOnPage = paginate(listsList, page, perPage)
	}

	// error
	else {
		throw createError({
			statusCode: 400,
			message: 'Invalid type of sort',
		})
	}

	const totalPages = Math.ceil(totalItems / perPage)
	if (page > totalPages && page !== 1) {
		throw createError({
			statusCode: 400,
			message: `Maximum page is ${totalPages}`,
		})
	}

	return {
		data: listsOnPage,
		totalItems,
		totalPages,
		currentPage: page,
		perPage,
	}
})
