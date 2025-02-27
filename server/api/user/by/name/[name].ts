import { defineEventHandler, getRouterParam } from 'h3'
import { generateSlug } from '~/composables/generateLink'

export default defineEventHandler(async event => {
	const name = getRouterParam(event, 'name')
	if (!name) {
		return { error: 'Not name in request' }
	}

	const usersModule = await import('~/shared/model/data/usersData')

	const user = usersModule.usersList.find(
		user => generateSlug(user.user_name) === generateSlug(name)
	)

	if (!user) {
		return { error: 'No found user with such name', isUserExists: false }
	}

	return user
})
