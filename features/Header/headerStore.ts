import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Ref } from 'vue'

export const useHeaderStore = defineStore('headerStore', () => {
	const isModalSignInOpened: Ref<boolean> = ref(false)
	const isModalSignUpOpened: Ref<boolean> = ref(false)
	const isDropDownVisible: Ref<boolean> = ref(false)

	const openModalSignIn = () => {
		isModalSignInOpened.value = true
		isModalSignUpOpened.value = false
	}
	const openModalSignUp = () => {
		isModalSignUpOpened.value = true
		isModalSignInOpened.value = false
	}

	const closeAllModals = () => {
		isModalSignUpOpened.value = false
		isModalSignInOpened.value = false
	}
	return {
		isModalSignInOpened,
		isModalSignUpOpened,
		isDropDownVisible,
		openModalSignIn,
		openModalSignUp,
		closeAllModals,
	}
})
