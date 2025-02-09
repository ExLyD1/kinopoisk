import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async event => {
	const module = await import('~/shared/model/data/filmsData')
	const query = getQuery(event)

	const type = query.type
	const quantity = Number(query.quantity)

	if (isNaN(quantity) || quantity <= 0) {
		return { error: 'Invalid quantity parameter' }
	}

	if (type) {
		return module.filmsList.slice(0, quantity || module.filmsList.length)
	}

	return module.filmsList.slice(0, quantity || module.filmsList.length)
})
