<template>
	<div class="holder w-full">
		<div class="" v-if="listsList !== undefined">
			<div
				class="flex flex-col my-4 gap-4"
				v-for="(list, index) in listsList"
				:key="index"
			>
				<film-list-item :data="list"></film-list-item>

				<div class="border-b border-gray-800"></div>
			</div>
		</div>

		<LoadingSpinner v-else />

		<!-- pagination buttons -->
		<div v-if="listsList" class="w-full flex justify-between mt-4">
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
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getRatingIcons } from '~/shared/model/funtions/getRatingIcon'
import { useFilmFiltersStore } from './model/filmFiltersStore'
import { useMediaQuery } from '@vueuse/core'

const isModalTable = useMediaQuery('(max-width:555px)')

const filmFiltersStore = useFilmFiltersStore()

const props = defineProps<{ data: IFilmItem }>()
const film = props.data

const listsList = ref<IFilmsList[] | undefined>([])

onMounted(async () => {
	try {
		// Sort by name
		if (filmFiltersStore.isSortByMemberName === true) {
			const response = await $fetch<{
				data: IFilmsList[]
				totalItems: number
				totalPages: number
				currentPage: number
				perPage: number
			}>(
				`/api/movie/${film.id}/listsContains-by-page/${filmFiltersStore.currentPage}?sort=name`
			)
			listsList.value = response.data
			filmFiltersStore.totalPages = response.totalPages

			if (!Array.isArray(response.data)) {
				listsList.value = []
			}
		}

		// Sort by oldest
		else if (filmFiltersStore.isSortByOldest === true) {
			const response = await $fetch<{
				data: IFilmsList[]
				totalItems: number
				totalPages: number
				currentPage: number
				perPage: number
			}>(
				`/api/movie/${film.id}/listsContains-by-page/${filmFiltersStore.currentPage}?sort=oldest`
			)
			listsList.value = response.data
			filmFiltersStore.totalPages = response.totalPages

			if (!Array.isArray(response.data)) {
				listsList.value = []
			}
		}

		// Sort by newest
		else {
			const response = await $fetch<{
				data: IFilmsList[]
				totalItems: number
				totalPages: number
				currentPage: number
				perPage: number
			}>(
				`/api/movie/${film.id}/listsContains-by-page/${filmFiltersStore.currentPage}?sort=newest`
			)

			listsList.value = response.data
			filmFiltersStore.totalPages = response.totalPages

			if (!Array.isArray(response.data)) {
				listsList.value = []
			}
		}
	} catch (error) {
		console.error('Ошибка загрузки данных:', error)
		listsList.value = [] // Пустой массив в случае ошибки
	}
})
</script>

<style scoped>
@media screen and (max-width: 700px) {
	.holder {
		max-width: 550px;
		width: 100%;
	}
}
</style>
