<template>
	<div class="px-5 main_holder m-auto">
		<div
			class="pt-[300px] w-[450px] flex flex-col gap-3 m-auto text-3xl text-white font-bold text-center text_holder"
		>
			<div>Track films you’ve watched.</div>
			<div>Save those you want to see.</div>
			<div>Tell your friends what’s good.</div>
		</div>

		<div class="flex justify-center mt-16">
			<Button
				@click="useHeaderStore().isModalSignUpOpened = true"
				class="bg-green-600 hover:bg-green-700 text-white text-lg py-6"
				>Get started — it‘s free!</Button
			>
		</div>

		<div class="flex justify-center mt-16 m-auto w-11/12">
			<cards-list></cards-list>
		</div>

		<div class="text-gray-500 mt-16 w-11/12 m-auto">
			<p class="mb-2">Letterboxd lets you…</p>
			<advantages-list></advantages-list>
		</div>

		<div class="mt-16 w-11/12 m-auto text-gray-500">
			<cover-list></cover-list>
		</div>

		<div class="mt-14 w-11/12 m-auto text-gray-300 text-center">
			<div class="text-2xl pb-2">
				Write and share reviews. Compile your own lists. Share your life in
				film.
			</div>
			<div>
				Below are some popular reviews and lists from this week.
				<NuxtLink
					to="/"
					class="text-white cursor pointer hover:text-blue-400 transition-all"
				>
					Sign up
				</NuxtLink>
				to create your own.
			</div>
		</div>

		<div
			class="popular_holder mt-10 w-11/12 m-auto text-gray-500 flex flex-row justify-between"
		>
			<popular-review></popular-review>
			<popular-lists></popular-lists>
		</div>

		<div class="stories_holder mt-24 w-[950px] m-auto text-gray-500 pb-24 flex">
			<recent-stories class="block_recent_stories"></recent-stories>
			<!-- <stories-swiper class="swiper_recent_stories hidden"></stories-swiper> -->
		</div>
	</div>
</template>

<script setup lang="ts">
import { useHeaderStore } from '~/features/Header/headerStore'

const { data: filmsList } = await useAsyncData('filmsData', () =>
	import('~/shared/model/data/filmsData').then(module => module.filmsList)
)

const { data: hqUsersList } = await useAsyncData('hqUsersData', () =>
	import('~/shared/model/data/hqUsersData').then(module => module.hqUsersList)
)

const { data: filmsListsData } = await useAsyncData('filmsListsData', () =>
	import('~/shared/model/data/filmsListsData').then(
		module => module.filmsListsData
	)
)

// Сохраняем в state
useState('filmsList', () => filmsList)
useState('hqUsersList', () => hqUsersList)
useState('filmsListsData', () => filmsListsData)
</script>

<style scoped>
/* @media screen and (max-width: 720px) {
	.swiper_recent_stories {
		display: block;
	}
	.block_recent_stories {
		display: none;
	}
} */
@media screen and (max-width: 990px) {
	.stories_holder {
		width: 91.666667%;
	}
}
@media screen and (max-width: 860px) {
	.popular_holder {
		flex-direction: column;
	}
}
@media screen and (max-width: 380px) {
	.watched_num {
		display: none;
	}
}

@media screen and (max-width: 570px) {
	.text_holder {
		font-size: 22px;
		width: 100%;
	}
}
@media screen and (max-width: 350px) {
	.text_holder {
		font-size: 18px;
	}
}
</style>
