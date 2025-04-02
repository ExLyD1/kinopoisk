<template>
	<div>
		<!-- main -->
		<div v-if="!isLoading">
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
					<div v-else>There are 230,729 films released in the</div>

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
					<div v-else>There are 230,729 films released in the</div>

					<NuxtLink :to="`/films/year/${filmsStore.decade}`">
						{{ filmsStore.decade }}.
					</NuxtLink>
				</div>

				<!-- genres -->
				<div v-else-if="filmsStore.genres.length">
					<!-- only 1 genre selected -->
					<div v-if="filmsStore.genres.length === 1">
						There are 230,729
						<NuxtLink :to="`/films/genre/${filmsStore.genres[0]}`">
							{{ filmsStore.genres[0] }}
							films
						</NuxtLink>
					</div>

					<!--  multiple genres selected -->
					<div v-else-if="filmsStore.genres.length > 1">
						There are 230,729 films in multiple genres
					</div>

					<!-- no genres -->
					<div v-else>There are 230,729 films</div>
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
			<div class="mt-2 border-t border-gray-700"></div>
		</div>

		<!-- loading spinner -->
		<LoadingSpinner v-if="isLoading" />
	</div>
</template>

<script setup lang="ts">
import { useFilmsStore } from '../Film/model/filmsStore'

import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const filmsStore = useFilmsStore()

const filmsList = ref<IFilmItem[]>()
const isLoading = ref<boolean>(true)
const isFilms = ref<boolean>(false)

interface IResponse {
	data: IFilmItem[]
	totalPages: number
}
onMounted(async () => {
	try {
		const response = await $fetch<IResponse>(
			`/api/movie/total/by-page/${filmsStore.currentPage}`
		)

		if (!response.data.length) {
			return
		}

		filmsStore.totalPages = response.totalPages
		filmsList.value = response.data
		isFilms.value = true
	} catch (err) {
		console.error('While requesting film, some error heppened : ', err)
	} finally {
		isLoading.value = false
	}
})
</script>

<style scoped></style>
