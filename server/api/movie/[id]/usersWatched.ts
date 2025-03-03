import { defineEventHandler, getRouterParam } from 'h3'

export default defineEventHandler(async event => {
	const usersModule = await import('~/shared/model/data/usersData')
	const filmsModule = await import('~/shared/model/data/filmsData')

	const id = getRouterParam(event, 'id')

	if (!id) {
		return 'No ID in query url'
	}

	const film = filmsModule.filmsList.find(film => film.id === Number(id))

	if (!film) {
		return 'No film with such ID'
	}

	const users_watched = film.users_viewed.map(userId => {
		return usersModule.usersList.find(user => user.id === userId)
	})

	return users_watched.length
		? users_watched
		: { list: [], error: 'Not found users who watched this film' }
})
