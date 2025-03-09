<template>
	<div v-if="film" class="full_holder flex w-full justify-between gap-5">
		<div class="table max-w-[670px] w-full">
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

		<div class="w-[230px]" :class="{ 'mt-8': isModalTable }">
			<film-poster :data="film"></film-poster>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import { useFilmFiltersStore } from '~/features/Film/model/filmFiltersStore'
import { useMediaQuery } from '@vueuse/core'

const isModalTable = useMediaQuery('(max-width:555px)')

const filmFiltersStore = useFilmFiltersStore()

const route = useRoute()
const { film: film_name, section } = route.params as {
	film: string
	section: string
}

const film = ref<IFilmItem>()
onMounted(async () => {
	const { page } = route.params as {
		page: string
	}

	film.value = await $fetch<IFilmItem>(`/api/movie/by-name/${film_name}`)

	filmFiltersStore.totalPages = Math.ceil(film.value.users_viewed.length / 25)
})

definePageMeta({
	layout: 'film-info-layout',
})
</script>

<style scoped>
@media screen and (max-width: 1030px) {
	.full_holder {
		flex-direction: column;
		gap: 20px;
		align-items: center;
	}
}
@media screen and (max-width: 700px) {
	.table {
		width: 100%;
		max-width: 670px;
	}
	.full_holder {
		width: 100%;
	}
}
@media screen and (max-width: 400px) {
	.table {
		width: 100%;
		max-width: 400px; /* Новый предел для маленьких экранов */
	}
}
</style>
