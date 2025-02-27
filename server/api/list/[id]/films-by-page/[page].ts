import { defineEventHandler, getRouterParam } from 'h3'
import { generateSlug } from '~/composables/generateLink'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

export default defineEventHandler(async event => {
	const perPage = 100

	const listId = getRouterParam(event, 'id')
	if (!listId) {
		return { error: 'List Id is required' }
	}

	const page = Number(getRouterParam(event, 'page'))
	if (!page) {
		return { error: 'Page is required' }
	} else if (page <= 0) {
		return { error: 'Pagination starts from 1' }
	}

	const listsModule = await import('~/shared/model/data/filmsListsData')
	const filmsModule = await import('~/shared/model/data/filmsData')

	const list = listsModule.filmsListsData.find(
		list => list.id === Number(listId)
	)

	if (!list) {
		return { error: 'Not found the list' }
	}

	const maxPage = Math.ceil(list.films.length / perPage)

	if (page > maxPage) {
		if (page !== 1) {
			return {
				error: `Maximum page is ${maxPage}`,
			}
		}
	}

	const filmsOnPage: IFilmItem[] = []

	for (let i = (page - 1) * perPage; i < page * perPage; i++) {
		const filmId = list.films[i]

		if (list.films[i]) {
			const film = filmsModule.filmsList.find(film => film.id === filmId)

			if (!film) {
				return { error: 'Not found film' }
			}

			filmsOnPage.push(film)
		}
	}

	return filmsOnPage
})
