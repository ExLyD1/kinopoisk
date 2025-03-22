// middleware/validateSection.global.ts

export default defineNuxtRouteMiddleware((to, from) => {
	const section: string = Array.isArray(to.params.mSection)
		? to.params.mSection[0]
		: to.params.mSection

	if (!section) {
		return
	}

	const validMSections = ['films']
	if (!validMSections.includes(section)) {
		throw createError({
			statusCode: 400,
			message: 'Invalid request',
		})
	}
})
