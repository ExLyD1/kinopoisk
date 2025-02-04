// composables/useLayout.ts
import { ref } from 'vue'

export const useLoading = () => {
	const isLoading = ref(true)

	// Функция для завершения загрузки
	const finishLoading = () => {
		isLoading.value = false
	}

	return {
		isLoading,
		finishLoading,
	}
}
