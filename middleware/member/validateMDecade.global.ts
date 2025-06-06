export default defineNuxtRouteMiddleware(async to => {
	const decade = to.params.mDecade as string

	if (!decade) return

	const valideDecades = [
		'',
		'2020s',
		'2010s',
		'2000s',
		'1990s',
		'1980s',
		'1970s',
		'1960s',
		'1950s',
		'1940s',
		'1930s',
		'1920s',
		'1910s',
		'1900s',
		'1890s',
		'1880s',
		'1870s',
	]

	if (!valideDecades.includes(decade)) {
		throw createError({
			statusCode: 400,
			message: 'Invalid decade',
		})
	}
})
