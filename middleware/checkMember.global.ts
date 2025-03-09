export default defineNuxtRouteMiddleware(async to => {
	const memberName: string = Array.isArray(to.params.member)
		? to.params.member[0]
		: to.params.member

	if (!memberName) return

	try {
		const exists = await $fetch<any>(`/api/user/by/name/${memberName}`)

		if (exists.isUserExists == false) {
			throw createError({
				statusCode: 404,
				statusMessage: 'User not found',
			})
		}
	} catch (error) {
		console.error('Error checking member:', error)
		throw createError({
			statusCode: 404,
			statusMessage: 'User not found',
		})
	}
})
