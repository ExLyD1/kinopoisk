import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async event => {
	const query = getQuery(event)

	const queryName = query.name

	if (!queryName) {
		return { error: 'Name is required' }
	}

	const name = String(queryName)

	const module = await import('~/shared/model/data/filmsData')

	const filmsList = await module.filmsList.filter(film => {
		if (film.film_name.toLowerCase().startsWith(name.toLowerCase())) {
			return film
		}
	})

	if (!filmsList) {
		return { error: 'Any Movies not found' }
	}

	return filmsList
})
