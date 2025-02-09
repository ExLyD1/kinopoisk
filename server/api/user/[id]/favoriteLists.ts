import { defineEventHandler, getRouterParam } from 'h3'

export default defineEventHandler(async event => {
	const usersModule = await import('~/shared/model/data/usersData')
	const listsModule = await import('~/shared/model/data/filmsListsData')

	const id = getRouterParam(event, 'id')

	if (!id) {
		return 'No ID in query url'
	}

	const user = usersModule.usersList.find(user => user.id === Number(id))

	if (!user) {
		return 'No user with such ID'
	}

	const user_favorite_lists = user.user_favorite_lists
		.map(id => listsModule.filmsListsData.find(list => list.id === Number(id)))
		.filter(list => list !== undefined)

	return user_favorite_lists.length
		? user_favorite_lists
		: { user_favorite_lists: [], message: 'User did not like any list' }
})
