// middleware/validateSection.global.ts

export default defineNuxtRouteMiddleware((to, from) => {
	const mSection: string = Array.isArray(to.params.mSection)
		? to.params.mSection[0]
		: to.params.mSection

	if (!mSection) {
		return
	}

	const validMSections = ['likes-films']
	if (!validMSections.includes(mSection)) {
		return abortNavigation()
	}
})
