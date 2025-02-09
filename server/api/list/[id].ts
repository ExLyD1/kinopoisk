import { defineEventHandler, getRouterParam } from 'h3'

export default defineEventHandler(async event => {
	const id = getRouterParam(event, 'id')

	if (!id) {
		return { error: 'ID is required' }
	}

	const module = await import('~/shared/model/data/filmsListsData')

	const list = module.filmsListsData.find(list => list.id === Number(id))

	if (!list) {
		return { error: 'List not found' }
	}

	return list
})
