<template>
	<div class="relative main_holder m-auto pb-24">
		<div class="search_films_holder pt-24 text-gray-500 m-auto w-[950px]">
			<filter-search-films></filter-search-films>
		</div>

		<div class="popular_week_holder pt-24 text-gray-500 m-auto w-[950px]">
			<popular-week-films-swiper
				v-if="!isSmallScreen"
			></popular-week-films-swiper>
			<!-- Для версий компьютера -->
			<popular-week-films-list v-else></popular-week-films-list>
			<!-- Для мобилок -->
		</div>

		<div class="just_reviewed_holder pt-12 text-gray-500 m-auto w-[950px]">
			<just-reviewed-films></just-reviewed-films>
		</div>

		<div
			class="some_holder flex justify-between pt-12 text-gray-500 m-auto w-[950px]"
		>
			<popular-reviews-films></popular-reviews-films>
			<div class="aside_holder flex flex-col w-[230px] gap-8">
				<crew-picks-films></crew-picks-films>
				<popular-reviewers-films></popular-reviewers-films>
				<div class="tip mb-4">
					<widget-title>
						<template #text_1>
							<div class="text-[#9ab] cursor-text">Can’t find a film?</div>
						</template>
					</widget-title>

					<div class="text-sm text-[#9ab]">
						Help keep Letterboxd up to date.
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

const { data: filmsList } = await useAsyncData('filmsData', async () => {
	const response = await $fetch('/api/getFilmsList')

	return response
})

const { data: usersList } = await useAsyncData('usersData', async () => {
	const response = await $fetch('/api/getUsersList')

	return response
})

useState('filmsList', () => filmsList)
useState('usersList', () => usersList)

const isSmallScreen = useMediaQuery('(max-width:650px)')
</script>

<style scoped>
@media screen and (max-width: 980px) {
	.search_films_holder,
	.popular_week_holder,
	.just_reviewed_holder,
	.some_holder {
		width: 100%;
	}
	.main_holder {
		padding: 0px 20px;
		padding-bottom: 96px;
	}
	.search_films_holder {
		padding-top: 56px;
	}
}
@media screen and (max-width: 650px) {
	.some_holder {
		flex-direction: column;
	}
	.tip {
		display: none;
	}
	.aside_holder {
		width: 100%;
	}
}
</style>
