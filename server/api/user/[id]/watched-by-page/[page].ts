import { defineEventHandler, getRouterParam } from 'h3'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const paginate = (list: IFilmItem[], currentPage: number, perPage: number) => {
	return list.slice(currentPage - 1 * perPage, currentPage * perPage)
}

export default defineEventHandler(async event => {
	const perPage = 72

	const userIdStr = getRouterParam(event, 'id')
	const userId = Number(userIdStr)
	if (!userId) {
		throw createError({
			statusCode: 400,
			message: 'User ID is required',
		})
	}

	const [usersModule, filmsModule] = await Promise.all([
		import('~/shared/model/data/usersData'),
		import('~/shared/model/data/filmsData'),
	])

	return
})
