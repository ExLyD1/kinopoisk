<template>
	<div class="w-full m-auto pb-96">
		<div
			class="text_1 text-white text-4xl text-center font-bold pt-24 w-[600px] m-auto px-5"
		>
			Take your first step into a larger world…
		</div>

		<div
			class="text_2 pt-12 text-center text-gray-400 text-lg w-[800px] m-auto px-5"
		>
			<span
				class="text-white cursor-pointer hover:text-blue-300 transition-all"
				@click="useHeaderStore().isModalSignInOpened = true"
				>Sign in</span
			>
			or
			<span
				class="text-white cursor-pointer hover:text-blue-300 transition-all"
				@click="useHeaderStore().isModalSignUpOpened = true"
				>register</span
			>
			to get started. We’re your home for logging, rating and reviewing films,
			your watchlist of titles to see, your source for lists and inspiration, a
			cast and crew database and an activity stream of passionate film
			criticism, discussion and discovery.
		</div>

		<div
			class="how_letterboxd text-gray-400 text-3xl py-12 pr-5 text-center px-5"
		>
			How Letterboxd works
		</div>

		<div class="letterboxd_works mt-16 w-[1200px] m-auto text-gray-500">
			<letter-boxd-works></letter-boxd-works>
		</div>

		<div class="mt-16 w-full m-auto text-gray-500 bg-gray-800">
			<will-find-main-sections></will-find-main-sections>
		</div>

		<div class="mt-16 w-full m-auto text-gray-500">
			<more-tips-and-tricks></more-tips-and-tricks>
		</div>

		<div
			class="how_letterboxd text-gray-400 text-3xl pt-20 pr-5 text-center font-light px-5"
		>
			<span
				@click="useHeaderStore().isModalSignInOpened = true"
				class="text-gray-300 cursor-pointer border-b-2 border-gray-400 hover:text-blue-400 pb-1 hover:border-white transition-all"
				>Sign in</span
			>
			or
			<span
				@click="useHeaderStore().isModalSignUpOpened = true"
				class="text-gray-300 cursor-pointer border-b-2 border-gray-400 hover:text-blue-400 pb-1 hover:border-white transition-all"
				>create an account</span
			>
			to get started!
		</div>

		<div class="how_letterboxd text-gray-400 pt-2 pr-5 text-center px-5">
			Then grab our apps and see our questions page for more answers.
		</div>

		<div class="mt-24 w-full m-auto text-gray-500">
			<final-guide></final-guide>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useHeaderStore } from '~/features/Header/headerStore'

const { data: filmsListsData } = await useAsyncData('filmsListsData', () => {
	return import('~/shared/model/data/filmsListsData').then(
		module => module.filmsListsData
	)
})

useState('filmsListsData', () => filmsListsData)
</script>

<style scoped>
@media screen and (max-width: 1270px) {
	.letterboxd_works {
		width: 950px;
	}
	.how_letterboxd {
		padding-bottom: 10px;
	}
}
@media screen and (max-width: 1000px) {
	.letterboxd_works {
		width: 100%;
	}
	.text_2 {
		width: 700px;
	}
}
@media screen and (max-width: 750px) {
	.text_1,
	.text_2 {
		width: 100%;
	}
}
</style>
