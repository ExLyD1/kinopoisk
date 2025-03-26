import { defineStore } from 'pinia'

export const useFilmsStore = defineStore('filmsStore', () => {
	const route = useRoute()

	const currentPage = ref<number>(1)
	const totalPages = ref<number>(1)

	const decade = ref<string>()
	const year = ref<number>()
	const genres = ref<string[]>([])
	const sort = ref<string>()

	const updateData = () => {
		if (route.params.fDecade) {
			decade.value = Array.isArray(route.params.fDecade)
				? route.params.fDecade[0]
				: route.params.fDecade
		} else {
			decade.value = undefined
		}

		if (route.params.fGenre) {
			genres.value = Array.isArray(route.params.fGenre)
				? route.params.fGenre
				: route.params.fGenre.split('+')
		} else {
			genres.value = []
		}

		if (route.params.fSort) {
			sort.value = Array.isArray(route.params.fSort)
				? route.params.fSort[0]
				: route.params.fSort
		} else {
			sort.value = undefined
		}

		if (route.params.fYear) {
			year.value = Array.isArray(route.params.fYear)
				? Number(route.params.fYear[0])
				: Number(route.params.fYear)
		} else {
			year.value = undefined
		}
	}

	watch(() => route.fullPath, updateData, { immediate: true })

	return {
		currentPage,
		totalPages,
		decade,
		genres,
		sort,
		year,
	}
})
