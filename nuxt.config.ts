export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	modules: [
		'@pinia/nuxt',
		'pinia-plugin-persistedstate/nuxt',
		'shadcn-nuxt',
		'@nuxtjs/i18n',
		'nuxt-swiper',
		'@nuxt/image',
		'@nuxtjs/tailwindcss',
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
			'~/entities/List/ui',

			'~/widgets/MainPage/ui',
			'~/widgets/Members/ui',
			'~/widgets/Lists/ui',
			'~/widgets/Films/ui',
			'~/widgets/Welcome/ui',
			'~/widgets/Film/ui',
			'~/widgets/List/ui',
			'~/widgets/Member/ui',

			'~/features/Footer',
			'~/features/Header',
			'~/features/Films',
			'~/features/Loading',
			'~/features/Film',
			'~/features/List',
			'~/features/Member',
		],
	},

	typescript: {
		typeCheck: true,
	},
})
