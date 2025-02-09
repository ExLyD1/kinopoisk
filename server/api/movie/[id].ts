import { defineEventHandler, getRouterParam } from 'h3'

export default defineEventHandler(async event => {
	const id = getRouterParam(event, 'id')

	if (!id) {
		return { error: 'ID is required' }
	}

	const module = await import('~/shared/model/data/filmsData')

	const movie = module.filmsList.find(film => film.id === Number(id))

	if (!movie) {
		return { error: 'Movie not found' }
	}

	return movie
})
