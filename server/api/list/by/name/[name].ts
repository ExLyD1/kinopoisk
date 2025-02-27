import { defineEventHandler, getRouterParam } from 'h3'
import { generateSlug } from '~/composables/generateLink'

export default defineEventHandler(async event => {
	const name = getRouterParam(event, 'name')

	if (!name) {
		return { error: 'Name is required' }
	}

	const module = await import('~/shared/model/data/filmsListsData')

	const list = module.filmsListsData.find(
		list => generateSlug(list.list_name) === generateSlug(name)
	)

	if (!list) {
		return { error: 'List not found', isListExists: false }
	}

	return list
})
