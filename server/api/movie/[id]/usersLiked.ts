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

	const users_liked = film.liked_by_users
		?.map(id => {
			const user = usersModule.usersList.find(user => user.id === Number(id))

			return user
		})
		.filter(user => user !== undefined)

	return users_liked
})
