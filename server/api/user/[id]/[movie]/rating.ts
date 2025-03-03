import { defineEventHandler, getRouterParam } from 'h3'

export default defineEventHandler(async event => {
	const userId = getRouterParam(event, 'id')
	if (!userId) {
		return { error: 'User Id is required' }
	}

	const filmId = Number(getRouterParam(event, 'movie'))
	if (!filmId) {
		return { error: 'Film Id is required' }
	}

	const usersModule = await import('~/shared/model/data/usersData')
	const filmsModule = await import('~/shared/model/data/filmsData')

	const user = usersModule.usersList.find(user => user.id === Number(userId))

	if (!user) {
		return { error: 'Not found the user' }
	}

	const film = filmsModule.filmsList.find(film => film.id === Number(filmId))

	if (!film) {
		return { error: 'Not found the film' }
	}

	const ratingsList = [
		film.rating1,
		film.rating2,
		film.rating3,
		film.rating4,
		film.rating5,
	]
	for (let i = 0; i < ratingsList.length; i++) {
		for (let j = 0; j < ratingsList[i].length; j++) {
			const userRatedId = ratingsList[i][j]

			if (userRatedId === user.id) {
				return i + 1
			}
		}
	}

	return null
})
