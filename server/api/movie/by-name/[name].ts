import { defineEventHandler, getRouterParam } from 'h3'
import { generateSlug } from '~/composables/generateLink'

export default defineEventHandler(async event => {
	const name = getRouterParam(event, 'name')

	if (!name) {
		return { error: 'Name is required' }
	}

	const module = await import('~/shared/model/data/filmsData')

	const movie = module.filmsList.find(
		film => generateSlug(film.film_name) === name
	)

	if (!movie) {
		return { error: 'Movie not found', isFilmExists: false }
	}

	return movie
})
