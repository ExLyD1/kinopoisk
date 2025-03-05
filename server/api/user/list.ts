import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async event => {
	const { usersList } = await import('~/shared/model/data/usersData')
	const query = getQuery(event)

	const type = query.type
	const quantity = Number(query.quantity)

	if (type) {
		return usersList
	}
	if (quantity) {
		return usersList.slice(0, quantity)
	}

	return usersList
})
