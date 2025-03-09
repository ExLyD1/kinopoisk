export default defineNuxtRouteMiddleware(async to => {
	const listName: string = Array.isArray(to.params)
		? to.params[0]
		: to.params.list

	if (!listName) return

	try {
		const exists = await $fetch<any>(`/api/list/by/name/${listName}`)

		if (exists.isListExists == false) {
			throw createError({
				statusCode: 404,
				statusMessage: 'List not found',
			})
		}
	} catch (err) {
		console.log('Error : ', err)

		throw createError({
			statusCode: 404,
			statusMessage: 'List not found',
		})
	}
})
