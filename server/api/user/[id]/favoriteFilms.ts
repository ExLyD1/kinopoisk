import { defineEventHandler, getRouterParam, getQuery } from 'h3'

export default defineEventHandler(async event => {
	const usersModule = await import('~/shared/model/data/usersData')
	const filmsModule = await import('~/shared/model/data/filmsData')

	const query = getQuery(event)

	const id = getRouterParam(event, 'id')

	if (!id) {
		return 'No ID in query url'
	}

	const user = usersModule.usersList.find(user => user.id === Number(id))

	if (!user) {
		return 'No user with such ID'
	}

	const quantityStr = query.quantity
	const quantity = Number(quantityStr)
	const favFilmsQuantity = user.user_favorite_films.slice(0, quantity)

	const user_favorite_films = favFilmsQuantity
		?.map(id => {
			const film = filmsModule.filmsList.find(film => film.id === Number(id))

			return film
		})
		.filter(film => film !== undefined)

	return user_favorite_films.length
		? user_favorite_films
		: { user_favorite_lists: [], message: 'User did not like any film' }
})
