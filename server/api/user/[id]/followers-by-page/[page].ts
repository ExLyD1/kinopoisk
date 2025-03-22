import { defineEventHandler, getRouterParam, getQuery } from 'h3'
import type { IUser } from '~/shared/model/interfaces/userInterface'

const paginate = (list: IUser[], currentPage: number, perPage: number) => {
	const start = (currentPage - 1) * perPage
	const end = start + perPage
	return list.slice(start, end)
}

export default defineEventHandler(async event => {
	const query = getQuery(event)
	const perPage = 15

	const userIdStr = getRouterParam(event, 'id')
	const userId = Number(userIdStr)
	if (!userId) {
		throw createError({
			statusCode: 400,
			message: 'User ID is required',
		})
	}

	const pageStr = getRouterParam(event, 'page')
	const page = Number(pageStr)
	if (!page || isNaN(page)) {
		throw createError({
			statusCode: 400,
			message: 'Invalid page data',
		})
	}

	const [usersModule] = await Promise.all([
		import('~/shared/model/data/usersData'),
	])

	const user = usersModule.usersList.find(user => user.id === userId)
	if (!user) {
		throw createError({
			statusCode: 404,
			message: 'User not found ',
		})
	}

	const mapFollowers = new Map(
		usersModule.usersList.map(user => [user.id, user])
	)

	let followersOnPage: IUser[] = []

	const totalFollowers = user.user_followers
		.map(u_id => mapFollowers.get(u_id))
		.filter((user): user is IUser => user !== undefined)

	followersOnPage = paginate(totalFollowers, page, perPage)

	const totalPages = Math.ceil(totalFollowers.length / perPage)

	return {
		data: followersOnPage,
		totalPages,
	}
})
