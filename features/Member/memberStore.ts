import { defineStore } from 'pinia'

export const useMemberStore = defineStore('memberStore', () => {
	const route = useRoute()

	const memberName = ref<string>('')
	const memberSection = ref<string>('films')

	const currentPage = ref<number>(1)
	const totalPages = ref<number>(1)

	const updateFilters = () => {
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
	}

	watch(() => route.fullPath, updateFilters, { immediate: true })

	return {
		memberName,
		memberSection,
		currentPage,
		totalPages,
	}
})
