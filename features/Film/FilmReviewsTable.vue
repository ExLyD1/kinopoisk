<template>
	<div class="w-full">
		<div v-if="reviewsList">
			<div
				class="flex flex-col my-4 gap-4"
				v-for="(review, index) in reviewsList"
				:key="index"
			>
				<film-review :data="review"></film-review>

				<div class="border-b border-gray-800"></div>
			</div>
		</div>

		<LoadingSpinner v-else />

		<!-- pagination buttons -->
		<div v-if="reviewsList" class="w-full flex justify-between mt-4">
			<!-- prev -->
			<div class="w-[55px]">
				<NuxtLink
					v-show="
						filmFiltersStore.currentPage !== 1 && filmFiltersStore.currentPage
					"
					:to="`/films/${generateSlug(film.film_name)}${
						filmFiltersStore.section ? '/' + filmFiltersStore.section : ''
					}/page/${filmFiltersStore.currentPage - 1}${
						filmFiltersStore.isAnyRating ? '' : '/rated/none'
					}${filmFiltersStore.sort ? '/by/' + filmFiltersStore.sort : ''}`"
					class="w-[55px] rounded bg-gray-700 text-gray-400 text-xs px-3 py-1"
				>
					Prev
				</NuxtLink>
			</div>

			<!-- next -->
			<div class="w-[55px]">
				<NuxtLink
					v-show="
						filmFiltersStore.currentPage !== filmFiltersStore.totalPages &&
						filmFiltersStore.currentPage < filmFiltersStore.totalPages
					"
					:to="`/films/${generateSlug(film.film_name)}${
						filmFiltersStore.section ? '/' + filmFiltersStore.section : ''
					}/page/${filmFiltersStore.currentPage + 1}${
						filmFiltersStore.isAnyRating ? '' : '/rated/none'
					}${filmFiltersStore.sort ? '/by/' + filmFiltersStore.sort : ''}`"
					class="w-[55px] rounded bg-gray-700 text-gray-400 text-xs px-3 py-1"
				>
					Next
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import type { IUser } from '~/shared/model/interfaces/userInterface'
import type { IReview } from '~/shared/model/interfaces/reviewInterface'

import { useFilmFiltersStore } from './model/filmFiltersStore'
import { useMediaQuery } from '@vueuse/core'

const isModalTable = useMediaQuery('(max-width:555px)')

const filmFiltersStore = useFilmFiltersStore()

const props = defineProps<{ data: IFilmItem }>()
const film = props.data

const reviewsList = ref<IReview[] | undefined>()

onMounted(async () => {
	if (filmFiltersStore.isNoRating === true) {
		if (
			useRoute().params.sort === 'rating-lowest' ||
			useRoute().params.sort === 'rating-highest'
		) {
			useRouter().push(
				`/films/${generateSlug(film.film_name)}${
					filmFiltersStore.section ? '/' + filmFiltersStore.section : ''
				}${
					filmFiltersStore.currentPage
						? '/page/' + filmFiltersStore.currentPage
						: ''
				}/${filmFiltersStore.no_rated === false ? '' : 'rated/none/'}`
			)
			return
		}
	}

	try {
		// any rating
		if (filmFiltersStore.isAnyRating === true) {
			// any rating + newest
			if (filmFiltersStore.isSortByNewest === true) {
				const response = await $fetch<{
					data: IReview[]
					totalItems: number
					totalPages: number
					currentPage: number
					perPage: number
				}>(
					`/api/movie/${film.id}/reviews-by-page/${filmFiltersStore.currentPage}?rating=any&sort=newest`
				)

				reviewsList.value = response.data
				filmFiltersStore.totalPages = response.totalPages
				if (!Array.isArray(response.data)) {
					reviewsList.value = []
				}
			}

			// any rating + earliest
			else if (filmFiltersStore.isSortByEarliest === true) {
				const response = await $fetch<{
					data: IReview[]
					totalItems: number
					totalPages: number
					currentPage: number
					perPage: number
				}>(
					`/api/movie/${film.id}/reviews-by-page/${filmFiltersStore.currentPage}?rating=any&sort=earliest`
				)

				reviewsList.value = response.data
				filmFiltersStore.totalPages = response.totalPages
				if (!Array.isArray(response.data)) {
					reviewsList.value = []
				}
			}

			// any rating + rating highest
			else if (filmFiltersStore.isSortByRatingHighest === true) {
				const response = await $fetch<{
					data: IReview[]
					totalItems: number
					totalPages: number
					currentPage: number
					perPage: number
				}>(
					`/api/movie/${film.id}/reviews-by-page/${filmFiltersStore.currentPage}?rating=any&sort=rating-highest`
				)

				reviewsList.value = response.data
				filmFiltersStore.totalPages = response.totalPages
				if (!Array.isArray(response.data)) {
					reviewsList.value = []
				}
			}

			// any rating + rating lowest
			else if (filmFiltersStore.isSortByRatingLowest === true) {
				const response = await $fetch<{
					data: IReview[]
					totalItems: number
					totalPages: number
					currentPage: number
					perPage: number
				}>(
					`/api/movie/${film.id}/reviews-by-page/${filmFiltersStore.currentPage}?rating=any&sort=rating-lowest`
				)

				reviewsList.value = response.data
				filmFiltersStore.totalPages = response.totalPages
				if (!Array.isArray(response.data)) {
					reviewsList.value = []
				}
			}
		}

		// none rating
		else if (filmFiltersStore.isNoRating === true) {
			// none rating + newest
			if (filmFiltersStore.isSortByNewest === true) {
				const response = await $fetch<{
					data: IReview[]
					totalItems: number
					totalPages: number
					currentPage: number
					perPage: number
				}>(
					`/api/movie/${film.id}/reviews-by-page/${filmFiltersStore.currentPage}?rating=none&sort=newest`
				)

				reviewsList.value = response.data
				filmFiltersStore.totalPages = response.totalPages
				if (!Array.isArray(response.data)) {
					reviewsList.value = []
				}
			}

			// none rating + earliest
			else if (filmFiltersStore.isSortByEarliest === true) {
				const response = await $fetch<{
					data: IReview[]
					totalItems: number
					totalPages: number
					currentPage: number
					perPage: number
				}>(
					`/api/movie/${film.id}/reviews-by-page/${filmFiltersStore.currentPage}?rating=none&sort=earliest`
				)

				reviewsList.value = response.data
				filmFiltersStore.totalPages = response.totalPages
				if (!Array.isArray(response.data)) {
					reviewsList.value = []
				}
			}

			// none rating + rating highest
			else if (filmFiltersStore.isSortByRatingHighest === true) {
				const response = await $fetch<{
					data: IReview[]
					totalItems: number
					totalPages: number
					currentPage: number
					perPage: number
				}>(
					`/api/movie/${film.id}/reviews-by-page/${filmFiltersStore.currentPage}?rating=none&sort=rating-highest`
				)

				reviewsList.value = response.data
				filmFiltersStore.totalPages = response.totalPages
				if (!Array.isArray(response.data)) {
					reviewsList.value = []
				}
			}

			// none rating + rating lowest
			else if (filmFiltersStore.isSortByRatingLowest === true) {
				const response = await $fetch<{
					data: IReview[]
					totalItems: number
					totalPages: number
					currentPage: number
					perPage: number
				}>(
					`/api/movie/${film.id}/reviews-by-page/${filmFiltersStore.currentPage}?rating=none&sort=rating-lowest`
				)

				reviewsList.value = response.data
				filmFiltersStore.totalPages = response.totalPages
				if (!Array.isArray(response.data)) {
					reviewsList.value = []
				}
			}
		}
	} catch (error) {
		console.error('Ошибка загрузки данных:', error)
		reviewsList.value = [] // Пустой массив в случае ошибки
	}
})
</script>

<style scoped>
table {
	min-width: 100%;
}

th,
td {
	vertical-align: middle;
}
</style>
