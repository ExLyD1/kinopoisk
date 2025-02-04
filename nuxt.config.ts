export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: [
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
		'pinia-plugin-persistedstate/nuxt',
		'shadcn-nuxt',
		'@nuxtjs/i18n',
		'nuxt-swiper',
	],

	plugins: ['~/plugins/preline.client.ts'],

	swiper: {
		// Включить кастомные composables
		enableComposables: true, // По умолчанию включено

		// Использовать встроенные стили и модули Swiper
		bundled: true, // По умолчанию включено
	},
	alias: {
		'~': __dirname,
		'@': __dirname,
	},

	components: {
		dirs: [
			'~/components',
			'~/widgets/MainPage/ui',
			'~/widgets/Members/ui',
			'~/widgets/Lists/ui',
			'~/widgets/Films/ui',
			'~/features/Footer',
			'~/features/Header',
			'~/features/Films',
			'~/features/Loading',
			'~/entities/MainPage/ui',
			'~/entities/General',
			'~/entities/Authorization/ui',
			'~/entities/Members/ui',
			'~/entities/Lists/ui',
			'~/entities/Films/ui',
		],
	},

	typescript: {
		typeCheck: true,
	},
})
