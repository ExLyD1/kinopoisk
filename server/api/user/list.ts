import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async event => {
	const module = await import('~/shared/model/data/usersData')
	const query = getQuery(event)

	const type = query.type
	const quantity = Number(query.quantity)

	if (type) {
		return module.usersList
	}
	if (quantity) {
		return module.usersList.slice(0, quantity)
	}

	return module.usersList
})
