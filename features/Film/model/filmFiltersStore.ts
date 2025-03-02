export const useFilmFiltersStore = defineStore('filmFiltersStore', () => {
	const route = useRoute()

	const section = ref(route.params.section)
	const sort = ref(route.params.sort)
	const no_rated = ref(route.fullPath.includes('rated'))

	const isAnyRating = ref<boolean>(true)
	const isNoRating = ref<boolean>(false)

	const isSortByMemberName = ref<boolean>(false)
	const isSortByNewest = ref<boolean>(true)
	const isSortByEarliest = ref<boolean>(false)

	const isSortByRatingHighest = ref<boolean>(false)
	const isSortByRatingLowest = ref<boolean>(false)

	const isSortByOldest = ref<boolean>(false)

	// Функция обновления фильтров при изменении роута
	const updateFilters = () => {
		section.value = route.params.section
		sort.value = route.params.sort
		no_rated.value = route.fullPath.includes('rated')

		isAnyRating.value = no_rated.value === false
		isNoRating.value = no_rated.value === true

		isSortByMemberName.value = sort.value === 'name'
		isSortByNewest.value = sort.value === 'newest' || sort.value === undefined
		isSortByEarliest.value = sort.value === 'earliest'

		isSortByRatingHighest.value = sort.value === 'rating-highest'
		isSortByRatingLowest.value = sort.value === 'rating-lowest'
		isSortByOldest.value = sort.value === 'oldest'

		console.log(sort.value, '< === sort')
		// console.log(section.value, '< === section')

		// console.log(no_rated.value)

		// console.log(isAnyRating.value, '< === any rating')
		// console.log(isNoRating.value, '< === no rated')
		// console.log(isSortByMemberName.value, '< === by membner name')
		// console.log(isSortByNewest.value, '< === newest')
		// console.log(isSortByEarliest.value, '< === earliest')
		// console.log(isSortByRatingHighest.value, '< === ratinghighest')
		// console.log(isSortByRatingLowest.value, '< === ratinglowest')
		// console.log(isSortByOldest.value, '< === oldest')
	}

	// Следим за изменением роута
	watch(() => route.fullPath, updateFilters, { immediate: true })

	return {
		section,
		sort,
		no_rated,
		isAnyRating,
		isNoRating,
		isSortByMemberName,
		isSortByNewest,
		isSortByEarliest,
		isSortByRatingHighest,
		isSortByRatingLowest,
		isSortByOldest,
	}
})
