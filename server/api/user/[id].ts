import { defineEventHandler, getRouterParam } from 'h3'

export default defineEventHandler(async event => {
	const module = await import('~/shared/model/data/usersData')
	const id = getRouterParam(event, 'id')

	if (!id) {
		return 'No ID in query url'
	}

	const user = module.usersList.find(user => user.id === Number(id))

	if (!user) {
		return 'No user with such ID'
	}

	return user
})
