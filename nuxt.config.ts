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
		'@nuxt/image',
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
			'~/entities/MainPage/ui',
			'~/entities/General',
			'~/entities/Authorization/ui',
			'~/entities/Members/ui',
			'~/entities/Lists/ui',
			'~/entities/Films/ui',
			'~/entities/Welcome/ui',
			'~/entities/Film/ui',
			'~/widgets/MainPage/ui',
			'~/widgets/Members/ui',
			'~/widgets/Lists/ui',
			'~/widgets/Films/ui',
			'~/widgets/Welcome/ui',
			'~/widgets/Film/ui',
			'~/features/Footer',
			'~/features/Header',
			'~/features/Films',
			'~/features/Loading',
		],
	},

	typescript: {
		typeCheck: true,
	},
})
