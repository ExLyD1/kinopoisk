import { defineStore } from 'pinia'

export const useMemberStore = defineStore('memberStore', () => {
	const route = useRoute()

	const memberName = ref<string>('')
	const memberSection = ref<string>('')

	const updateFilters = () => {
		if (route.params.member) {
			memberName.value = Array.isArray(route.params.member)
				? route.params.member[0]
				: route.params.member
		}

		memberSection.value = Array.isArray(route.params.section)
			? route.params.section[0]
			: route.params.section
	}

	watch(() => route.fullPath, updateFilters, { immediate: true })

	return {
		memberName,
		memberSection,
	}
})
