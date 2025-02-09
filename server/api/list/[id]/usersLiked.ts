import { defineEventHandler, getRouterParam } from 'h3'

export default defineEventHandler(async event => {
	const usersModule = await import('~/shared/model/data/usersData')
	const listsModule = await import('~/shared/model/data/filmsListsData')

	const id = getRouterParam(event, 'id')

	if (!id) {
		return 'No ID in query url'
	}

	const list = listsModule.filmsListsData.find(list => list.id === Number(id))

	if (!list) {
		return 'No list with such ID'
	}

	const users_liked = list.liked_by_users
		?.map(id => {
			const user = usersModule.usersList.find(user => user.id === Number(id))

			return user
		})
		.filter(user => user !== undefined)

	return users_liked.length
		? users_liked
		: { users_liked: [], message: 'Nobody liked the list' }
})
