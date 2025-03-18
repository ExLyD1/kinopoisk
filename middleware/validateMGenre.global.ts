export default defineNuxtRouteMiddleware(async to => {
	const genresStr = to.params.mGenre as string

	if (!genresStr) return

	const validGenres = [
		'',
		'any',
		'action',
		'adventure',
		'animation',
		'comedy',
		'crime',
		'documentary',
		'drama',
		'family',
		'fantasy',
		'history',
		'horror',
		'music',
		'mystery',
		'romance',
		'science',
		'fiction',
		'thriller',
		'tV',
		'movie',
		'war',
		'western',
	]

	const genresList = genresStr.split('+')

	genresList.forEach(genre => {
		if (!validGenres.includes(genre)) {
			throw createError({
				statusCode: 400,
				message: 'Invalid genre',
			})
		}
	})
})
