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

	const isLikedByUser = user.user_favorite_films.find(
		film_id => film_id === Number(filmId)
	)

	return isLikedByUser ? true : false
})
