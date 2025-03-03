<template>
	<div v-if="film">
		<film-members-table
			:data="film"
			v-if="section === 'members'"
		></film-members-table>

		<film-likes-table
			:data="film"
			v-if="section === 'likes'"
		></film-likes-table>

		<film-reviews-table
			:data="film"
			v-if="section === 'reviews'"
		></film-reviews-table>

		<film-lists-table
			:data="film"
			v-if="section === 'lists'"
		></film-lists-table>
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import { useFilmFiltersStore } from '~/features/Film/model/filmFiltersStore'

const filmFiltersStore = useFilmFiltersStore()

const route = useRoute()
const {
	film: film_name,
	section,
	page,
} = route.params as {
	film: string
	section: string
	page: string
}

const film = ref<IFilmItem>()
onMounted(async () => {
	const { page } = route.params as {
		page: string
	}

	if (isNaN(Number(page))) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Number of page is more than number of maximum pages',
		})
	}

	film.value = await $fetch<IFilmItem>(`/api/movie/by-name/${film_name}`)

	filmFiltersStore.totalPages = Math.ceil(film.value.users_viewed.length / 25)
})

definePageMeta({
	layout: 'film-info-layout',
})
</script>

<style scoped></style>
