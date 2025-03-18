import { defineStore } from 'pinia'

export const useMemberStore = defineStore('memberStore', () => {
	const route = useRoute()

	const memberName = ref<string>('')
	const memberSection = ref<string>('films')

	const currentPage = ref<number>(1)
	const totalPages = ref<number>(1)

	const genre = ref<string[]>([])

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
	}

	watch(() => route.fullPath, updateFilters, { immediate: true })

	return {
		memberName,
		memberSection,
		currentPage,
		totalPages,
		genre,
	}
})
