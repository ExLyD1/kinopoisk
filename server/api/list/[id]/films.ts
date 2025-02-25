import { defineEventHandler, getRouterParam } from 'h3'

export default defineEventHandler(async event => {
	const id = getRouterParam(event, 'id')

	if (!id) {
		return { error: 'ID is required' }
	}

	const filmsModule = await import('~/shared/model/data/filmsData')
	const listsModule = await import('~/shared/model/data/filmsListsData')

	const list = listsModule.filmsListsData.find(list => list.id === Number(id))

	if (!list) {
		return { error: 'Found no list' }
	}
	const films = list.films.map(filmId => {
		return filmsModule.filmsList.find(film => film.id === filmId)
	})

	return films.length ? films : { films: [], message: 'No films found' }
})
