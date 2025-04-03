import { useFilmsStore } from '~/features/Film/model/filmsStore'

export const getFilmsSearchPageLink = (
	type: string,
	page: number,
	route_query: string
) => {
	let url = '/films'
	const filmsStore = useFilmsStore()

	// decade or year
	if (type === 'decade' || type === 'year') {
		if (type === 'decade') {
			url += `/decade/${route_query}`
		} else if (type === 'year') {
			url += `/year/${route_query}`
		}

		if (filmsStore.genres.length > 0) {
			url += `/genre/${filmsStore.genres.join('+')}`
		}

		if (filmsStore.sort) {
			url += `/by/${filmsStore.sort}`
		}
	}

	// genre
	else if (type === 'genre') {
		if (filmsStore.decade && !filmsStore.year) {
			url += `/decade/${filmsStore.decade}`
		} else if (filmsStore.year) {
			url += `/year/${filmsStore.year}`
		}

		url += `/genre/${filmsStore.genres.join('+')}`

		if (filmsStore.sort) {
			url += `/by/${filmsStore.sort}`
		}
	}

	// sorting
	else if (type === 'sorting') {
		if (filmsStore.decade && !filmsStore.year) {
			url += `/decade/${filmsStore.decade}`
		} else if (filmsStore.year) {
			url += `/year/${filmsStore.year}`
		}

		if (filmsStore.genres.length > 0) {
			url += `/genre/${filmsStore.genres.join('+')}`
		}

		url += `/by/${route_query}`
	}

	// none ( page changing )
	else if (type === 'none') {
		if (filmsStore.year) {
			url += `/year/${filmsStore.year}`
		} else if (filmsStore.decade) {
			url += `/decade/${filmsStore.decade}`
		}

		if (filmsStore.genres.length > 0) {
			url += `/genre/${filmsStore.genres.join('+')}`
		}

		if (filmsStore.sort) {
			url += `/by/${filmsStore.sort}`
		}

		if (
			!filmsStore.year &&
			!filmsStore.decade &&
			filmsStore.genres.length === 0 &&
			!filmsStore.sort
		) {
			url += '/popular'
		}
	}

	url += `/page/${page}`

	return url
}
