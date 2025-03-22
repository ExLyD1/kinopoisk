import { defineStore } from 'pinia'
import { decades } from './memberLinksData'

export const useMemberStore = defineStore('memberStore', () => {
	const route = useRoute()

	const memberName = ref<string>('')
	const memberSection = ref<string>('films')

	const currentPage = ref<number>(1)
	const totalPages = ref<number>(1)

	const genre = ref<string[]>([])
	const decade = ref<string>('')
	const decadesList = ref<string[]>([
		'2020s',
		'2010s',
		'2000s',
		'1990s',
		'1980s',
		'1970s',
		'1960s',
		'1950s',
		'1940s',
		'1930s',
		'1920s',
		'1910s',
		'1900s',
		'1890s',
		'1880s',
		'1870s',
	])
	const year = ref<number>()

	const updateFilters = () => {
		currentPage.value = Number(route.params.page) || 1

		if (route.params.member) {
			memberName.value = Array.isArray(route.params.member)
				? route.params.member[0]
				: route.params.member
		}

		if (route.params.mSection) {
			memberSection.value = Array.isArray(route.params.mSection)
				? route.params.mSection[0]
				: route.params.mSection
		}

		if (route.params.mGenre) {
			genre.value = Array.isArray(route.params.mGenre)
				? route.params.mGenre
				: route.params.mGenre.split('+')
		} else {
			genre.value = []
		}

		if (route.params.mDecade) {
			decade.value = Array.isArray(route.params.mDecade)
				? route.params.mDecade[0]
				: route.params.mDecade
		} else {
			if (!route.params.mYear) {
				decade.value = ''
			}
		}

		if (route.params.mYear) {
			year.value = Array.isArray(route.params.mYear)
				? Number(route.params.mYear[0])
				: Number(route.params.mYear)
		} else {
			year.value = undefined
		}

		if (year.value) {
			decades.forEach((obj, index) => {
				obj.years.forEach(y => {
					if (Number(y) === year.value) {
						decade.value = obj.decade
					}
				})
			})
		}
	}

	watch(() => route.fullPath, updateFilters, { immediate: true })

	return {
		memberName,
		memberSection,
		currentPage,
		totalPages,
		genre,
		decade,
		decadesList,
		year,
	}
})
