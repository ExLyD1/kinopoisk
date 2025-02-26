import { defineEventHandler, getRouterParam } from 'h3'
import { generateSlug } from '~/composables/generateLink'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

export default defineEventHandler(async event => {
	const listId = getRouterParam(event, 'id')
	if (!listId) {
		return { error: 'List Id is required' }
	}

	const page = Number(getRouterParam(event, 'page'))
	if (!page) {
		return { error: 'Page is required' }
	} else if (page < 1) {
		return { error: 'Pagination starts from 1' }
	}

	const listsModule = await import('~/shared/model/data/filmsListsData')
	const filmsModule = await import('~/shared/model/data/filmsData')

	const list = listsModule.filmsListsData.find(
		list => list.id === Number(listId)
	)

	if (!list) {
		return { error: 'Not found the list' }
	} else if (list.films.length / 100 < page) {
		return {
			error: `There are no films on such page, maximum page is ${Math.ceil(
				list.films.length / 100
			)}`,
		}
	}

	if (list.films.length > 100 || page === 1) {
		const filmsOnPage = list.films.map(filmId =>
			filmsModule.filmsList.find(film => film.id === filmId)
		)

		return filmsOnPage
	} else {
		const filmsOnPage: IFilmItem[] = []

		for (let i = (page - 1) * 100; i < page * 100; i++) {
			const filmId = list.films[i]

			const film = filmsModule.filmsList.find(film => film.id === filmId)

			if (!film) {
				return { error: 'Not found film' }
			}
			filmsOnPage.push(film)
		}

		return filmsOnPage
	}
})
