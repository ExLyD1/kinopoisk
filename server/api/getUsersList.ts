import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async event => {
	const module = await import('../../shared/model/data/usersData')

	const query = getQuery(event)

	const quantity = Number(query.quantity)

	const user_id = Number(query.id)

	if (user_id) {
		return module.usersList.find(user => user.id === user_id)
	}

	if (!isNaN(quantity) && quantity > 0) {
		return module.usersList.slice(0, quantity)
	}

	return module.usersList
})
