export default defineNuxtRouteMiddleware(to => {
	const sort: string = Array.isArray(to.params.sort)
		? to.params.sort[0]
		: to.params.sort

	if (!sort) {
		return
	}

	const validSorts = [
		'name',
		'rating-highest',
		'rating-lowest',
		'newest',
		'oldest',
		'earliest',
	]
	if (!validSorts.includes(sort)) {
		return abortNavigation()
	}
})
