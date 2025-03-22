// middleware/validateSection.global.ts

export default defineNuxtRouteMiddleware((to, from) => {
	const mSection: string = Array.isArray(to.params.mSection)
		? to.params.mSection[0]
		: to.params.mSection

	if (!mSection) {
		return
	}

	const validMSections = [
		'films',
		'reviews',
		'lists',
		'likes-films',
		'likes-reviews',
		'likes-lists',
		'following',
		'followers',
	]
	if (!validMSections.includes(mSection)) {
		return abortNavigation()
	}
})
