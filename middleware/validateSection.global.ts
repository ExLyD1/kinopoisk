// middleware/validateSection.global.ts

export default defineNuxtRouteMiddleware((to, from) => {
	const section: string = Array.isArray(to.params.section)
		? to.params.section[0]
		: to.params.section

	if (!section) {
		return
	}

	const validSections = ['members', 'likes', 'reviews', 'lists']
	if (!validSections.includes(section)) {
		return abortNavigation()
	}
})
