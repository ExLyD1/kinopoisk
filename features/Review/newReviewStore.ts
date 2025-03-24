import { defineStore } from 'pinia'

export const useReviewStore = defineStore('reviewStore', () => {
	const route = useRoute()

	const memberName = ref<string>('')

	const currentPage = ref<number>(1)
	const totalPages = ref<number>(1)

	const updateFilters = () => {
		currentPage.value = Number(route.params.page) || 1

		if (route.params.member) {
			memberName.value = Array.isArray(route.params.member)
				? route.params.member[0]
				: route.params.member
		}
	}

	watch(() => route.fullPath, updateFilters, { immediate: true })

	return {
		memberName,
		currentPage,
		totalPages,
	}
})
