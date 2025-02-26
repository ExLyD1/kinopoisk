import { defineStore } from 'pinia'

export const useListPagesStore = defineStore('listPagesStore', () => {
	const totalPages: Ref<number> = ref(0)
	const curentPage: Ref<number> = ref(1)

	return { totalPages, curentPage }
})
