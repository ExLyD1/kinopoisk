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
	const reviewsModule = await import('~/shared/model/data/reviewsData')

	const user = usersModule.usersList.find(user => user.id === Number(userId))

	if (!user) {
		return { error: 'Not found the user' }
	}

	const film = filmsModule.filmsList.find(film => film.id === Number(filmId))

	if (!film) {
		return { error: 'Not found the film' }
	}

	const films_reviews = reviewsModule.reviewsList.filter(
		review => review.type === 'film'
	)

	const userReviews = films_reviews.filter(
		review => review.user_id === Number(userId)
	)

	const isReviewedByUser = userReviews.find(
		review => review.item_id === Number(filmId)
	)

	return isReviewedByUser ? true : false
})
