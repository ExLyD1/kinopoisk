export default defineNuxtRouteMiddleware(async to => {
	const filmName: string = Array.isArray(to.params.film)
		? to.params.film[0]
		: to.params.film

	if (!filmName) return

	try {
		const exists = await $fetch<any>(`/api/movie/by-name/${filmName}`)

		if (exists.isFilmExists == false) {
			throw createError({
				statusCode: 404,
				statusMessage: 'Film not found',
			})
		}
	} catch (error) {
		console.error('Error checking film:', error)
		throw createError({
			statusCode: 404,
			statusMessage: 'Film not found',
		})
	}
})
