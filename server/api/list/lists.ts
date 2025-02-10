import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async event => {
	const module = await import('~/shared/model/data/filmsListsData')
	const query = getQuery(event)

	const type = query.type
	const quantity = Number(query.quantity)

	if (isNaN(quantity) || quantity <= 0) {
		return { error: 'Invalid quantity parameter' }
	}

	if (type) {
		return module.filmsListsData.slice(
			0,
			quantity || module.filmsListsData.length
		)
	}

	return module.filmsListsData.slice(
		0,
		quantity || module.filmsListsData.length
	)
})
