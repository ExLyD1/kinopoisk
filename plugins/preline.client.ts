// preline.client.ts

import 'preline/preline'
import { type IStaticMethods } from 'preline/preline'

declare global {
	interface Window {
		HSStaticMethods: IStaticMethods
	}
}

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.hook('page:finish', () => {
		if (window.HSStaticMethods) {
			window.HSStaticMethods.autoInit()
		}
	})
})
