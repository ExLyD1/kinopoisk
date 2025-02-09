// server/api/filmsList.ts

import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async event => {
	const module = await import('../../shared/model/data/filmsData')
	const query = getQuery(event)

	const quantity = Number(query.quantity)
	const film_id = Number(query.id)
	const film_name = query.film_name ? String(query.film_name) : undefined

	if (film_id) {
		return module.filmsList.find(film => film.id === film_id)
	}

	if (film_name) {
		return module.filmsList.find(film => film.film_name === film_name)
	}

	if (quantity) {
		return module.filmsList.slice(0, quantity)
	}

	return module.filmsList
})
