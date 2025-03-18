export default defineNuxtRouteMiddleware(async to => {
	const pageStr: string = Array.isArray(to.params.page)
		? to.params.page[0]
		: to.params.page
	if (!pageStr) return

	const page = Number(pageStr)

	if (page <= 0 || isNaN(page)) {
		throw createError({
			statusCode: 400,
			message: 'Invalid page Data',
		})
	}
})
