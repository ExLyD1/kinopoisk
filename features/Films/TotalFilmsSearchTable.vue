<template>
	<div>
		<!-- main -->
		<div v-if="!isLoading && filmsList">
			<!-- films quantity found -->
			<div v-if="isFilms">
				<!-- years -->
				<div
					v-if="filmsStore.year"
					class="mt-5 bg-gray-600 rounded w-full py-2 text-center"
				>
					<!-- only 1 genre selected -->
					<div v-if="filmsStore.genres.length === 1">
						There are 230,729
						<NuxtLink :to="`/films/genre/${filmsStore.genres[0]}`">
							{{ filmsStore.genres[0] }}
							films
						</NuxtLink>
						released in the
					</div>

					<!--  multiple genres selected -->
					<div v-else-if="filmsStore.genres.length > 1">
						There are 230,729 films in multiple genres released in the
					</div>

					<!-- no genres -->
					<div v-else>
						There are {{ filmsStore.totalItems }} films released in the
					</div>

					<NuxtLink :to="`/films/year/${filmsStore.year}`">{{
						filmsStore.year
					}}</NuxtLink
					>.
				</div>

				<!-- decades -->
				<div
					v-else-if="filmsStore.decade"
					class="mt-5 bg-gray-600 rounded w-full py-2 text-center"
				>
					<!-- only 1 genre selected -->
					<div v-if="filmsStore.genres.length === 1">
						There are {{ filmsStore.totalItems }}
						<NuxtLink :to="`/films/genre/${filmsStore.genres[0]}`">
							{{ filmsStore.genres[0] }}
							films
						</NuxtLink>
						released in the
					</div>

					<!--  multiple genres selected -->
					<div v-else-if="filmsStore.genres.length > 1">
						There are {{ filmsStore.totalItems }} films in multiple genres
						released in the
					</div>

					<!-- no genres -->
					<div v-else>
						There are {{ filmsStore.totalItems }} films released in the
					</div>

					<NuxtLink :to="`/films/year/${filmsStore.decade}`">
						{{ filmsStore.decade }}.
					</NuxtLink>
				</div>

				<!-- genres -->
				<div v-else-if="filmsStore.genres.length">
					<!-- only 1 genre selected -->
					<div v-if="filmsStore.genres.length === 1">
						There are {{ filmsStore.totalItems }}
						<NuxtLink :to="`/films/genre/${filmsStore.genres[0]}`">
							{{ filmsStore.genres[0] }}
							films
						</NuxtLink>
					</div>

					<!--  multiple genres selected -->
					<div v-else-if="filmsStore.genres.length > 1">
						There are {{ filmsStore.totalItems }} films in multiple genres
					</div>

					<!-- no genres -->
					<div v-else>There are {{ filmsStore.totalItems }} films</div>
				</div>
			</div>

			<!-- films -->
			<div v-if="isFilms" class="flex items-center gap-2 mt-3 flex-wrap">
				<!-- film item -->
				<NuxtLink
					v-for="(film, index) in filmsList"
					:key="index"
					:to="`/films/${generateSlug(film.film_name)}`"
				>
					<img
						:src="film.film_image"
						class="object-cover rounded w-[75px] h-[110px] hover:border-4 hover:border-green-600 transition-all"
						alt=""
					/>
				</NuxtLink>
			</div>

			<!-- pagination -->
			<div
				class="mt-3 pb-2 pt-3 border-t border-gray-700 flex items-center w-full justify-between"
			>
				<!-- prev butt -->
				<div class="w-[50px]">
					<NuxtLink
						:to="getFilmsSearchPageLink('none', filmsStore.currentPage - 1, '')"
						v-show="filmsStore.currentPage > 1"
						class="py-1 px-3 text-sm bg-gray-700 rounded text-gray-400 hover:bg-gray-600 transition-all"
					>
						Prev
					</NuxtLink>
				</div>

				<!-- pages pagination buttons -->
				<div class="flex gap-1 items-center">
					<!-- first page -->
					<NuxtLink
						:to="getFilmsSearchPageLink('none', 1, '')"
						:class="{ 'text-gray-600': filmsStore.currentPage === 1 }"
					>
						1
					</NuxtLink>

					<div v-if="startPage > 2">...</div>

					<!-- pages -->

					<NuxtLink
						:to="getFilmsSearchPageLink('none', item, '')"
						v-for="(item, index) in paginate"
						:class="{
							'text-gray-600': filmsStore.currentPage === item,
						}"
						>{{ item }}</NuxtLink
					>

					<div v-if="endPage < filmsStore.totalPages - 1">...</div>

					<!-- last page -->
					<NuxtLink
						v-if="filmsStore.totalPages > 1"
						:to="getFilmsSearchPageLink('none', filmsStore.totalPages, '')"
						:class="{
							'text-gray-600': filmsStore.currentPage === filmsStore.totalPages,
						}"
					>
						{{ filmsStore.totalPages }}
					</NuxtLink>
				</div>

				<!-- next butt -->
				<div class="w-[50px]">
					<NuxtLink
						:to="getFilmsSearchPageLink('none', filmsStore.currentPage + 1, '')"
						v-show="filmsStore.currentPage < filmsStore.totalPages"
						class="py-1 px-3 text-sm bg-gray-700 rounded text-gray-400 hover:bg-gray-600 transition-all"
					>
						Next
					</NuxtLink>
				</div>
			</div>
		</div>

		<!-- loading spinner -->
		<LoadingSpinner v-if="isLoading" class="mt-5" />
	</div>
</template>

<script setup lang="ts">
import { useFilmsStore } from './filmsStore'

import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const filmsStore = useFilmsStore()

// constants
const filmsList = ref<IFilmItem[]>()
const isLoading = ref<boolean>(true)
const isFilms = ref<boolean>(false)

// pagination logic
const maxVisiblePages = 5
const paginate = computed(() => {
	const current = filmsStore.currentPage
	const total = filmsStore.totalPages

	if (total <= maxVisiblePages + 2) {
		return Array.from({ length: total - 2 }, (_, i) => i + 2)
	}

	const half = Math.floor(maxVisiblePages / 2)
	let start = Math.max(2, current - half)
	let end = Math.min(total - 1, current + half)

	if (end - start + 1 < maxVisiblePages) {
		if (current <= half + 1) {
			end = maxVisiblePages + 1
		} else {
			start = total - maxVisiblePages
		}
	}

	return Array.from({ length: end - start + 1 }, (_, i) => start + i)
})
const startPage = computed(() => paginate.value[0])
const endPage = computed(() => paginate.value[paginate.value.length - 1])

// request data from server
interface IResponse {
	data: IFilmItem[]
	totalPages: number
	totalItems: number
}

const requestFilms = async (
	options: {
		year?: string
		decade?: string
		genres?: string[]
		sort?: string
	} = {}
) => {
	try {
		const { year, decade, genres, sort } = options
		let requestUrl = `/api/movie/total/by-page/${filmsStore.currentPage}`

		const queryParams: string[] = []
		if (year) queryParams.push(`year=${year}`)
		else if (decade) queryParams.push(`decade=${decade}`)
		if (genres?.length) queryParams.push(`genres=${genres.join('+')}`)
		if (sort) queryParams.push(`sort=${sort}`)

		if (queryParams.length) {
			requestUrl += `?${queryParams.join('&')}`
		}

		const response = await $fetch<IResponse>(requestUrl)

		if (!response.data.length) {
			isFilms.value = false
			return
		}

		filmsStore.totalPages = response.totalPages
		filmsList.value = response.data
		isFilms.value = true
		filmsStore.totalItems = response.totalItems
	} catch (err) {
		console.error('While requesting film, some error happened: ', err)
	} finally {
		isLoading.value = false
	}
}

onMounted(async () => {
	let queryParams: {
		year?: string
		decade?: string
		genres?: string[]
		sort?: string
	} = {}

	if (filmsStore.year) {
		queryParams.year = String(filmsStore.year)
	} else if (filmsStore.decade) {
		queryParams.decade = filmsStore.decade
	}

	if (filmsStore.genres.length > 0) {
		queryParams.genres = filmsStore.genres
	}

	if (filmsStore.sort) {
		queryParams.sort = filmsStore.sort
	}

	await requestFilms(queryParams)
})
</script>

<style scoped></style>
