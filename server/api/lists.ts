import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async event => {
	const module = await import('~/shared/model/data/filmsListsData')
	const query = getQuery(event)

	const type = query.type
	const quantity = Number(query.quantity)

	if (type) {
		return module.filmsListsData
	}

	if (quantity) {
		return module.filmsListsData.slice(0, quantity)
	}

	return module.filmsListsData
})
