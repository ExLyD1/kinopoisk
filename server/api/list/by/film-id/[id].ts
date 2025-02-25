import { defineEventHandler, getRouterParam } from 'h3'

export default defineEventHandler(async event => {
	const id = getRouterParam(event, 'id')

	if (!id) {
		return { error: 'ID is required' }
	}

	const filmModule = await import('~/shared/model/data/filmsData')
	const listModule = await import('~/shared/model/data/filmsListsData')

	const movie = filmModule.filmsList.find(film => film.id === Number(id))

	if (!movie) {
		return { error: 'Movie not found' }
	}

	const lists = movie.lists.map(listId => {
		return listModule.filmsListsData.find(list => list.id === listId)
	})

	return lists.length ? lists : { lists: [], message: 'No reviews found' }
})
