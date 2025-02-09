// server/api/filmsList.ts
import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async event => {
	const module = await import('../../shared/model/data/filmsListsData')
	const query = getQuery(event)

	const quantity = Number(query.quantity)
	const list_id = Number(query.id)
	const list_name = query.film_name ? String(query.list_name) : undefined

	if (list_id) {
		console.log('listID')

		return module.filmsListsData.find(list => list.id === list_id)
	}
	if (list_name !== undefined) {
		console.log('listName')
		return module.filmsListsData.find(list => list.list_name === list_name)
	}

	if (!isNaN(quantity) && quantity > 0) {
		console.log('quant')
		return module.filmsListsData.slice(0, quantity)
	}
	console.log('qwe')
	return module.filmsListsData
})
