import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async event => {
	const filmsModule = await import('~/shared/model/data/filmsData')
	const usersModule = await import('~/shared/model/data/usersData')
	const query = getQuery(event)

	const user_id = Number(query.id)
	const quantity = Number(query.quantity)

	if (!user_id) {
		return { error: 'No any ID in request' }
	}

	if (isNaN(quantity) || quantity <= 0) {
		return { error: 'Invalid quantity parameter' }
	}

	const user = usersModule.usersList.find(user => user.id === user_id)

	const favorite_films_list = user?.user_favorite_films.map((film_id: number) =>
		filmsModule.filmsList.find(film => film.id === film_id)
	)

	return favorite_films_list
		? favorite_films_list.slice(0, quantity || favorite_films_list.length)
		: { data: [], message: 'User have no fav films' }
})
