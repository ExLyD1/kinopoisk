import { validDecades } from '~/shared/model/validRoutes/validDecade'

export default defineNuxtRouteMiddleware((to, from) => {
	const decade: string = Array.isArray(to.params.fDecade)
		? to.params.fDecade[0]
		: to.params.fDecade

	if (!decade) {
		return
	}

	if (!validDecades.includes(decade)) {
		throw createError({
			statusCode: 400,
			message: 'Invalid decade param',
		})
	}
})
