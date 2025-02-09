<template>
	<div class="text-white text-4xl text-center pt-24 pb-[600px]" v-if="film">
		{{ film.film_name }}
	</div>
	<div class="text-white text-4xl text-center pt-24 pb-[600px]" v-else>
		No film with such directory
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const { data: filmsList } = await useAsyncData('filmsData', () =>
	import('~/shared/model/data/filmsData').then(module => module.filmsList)
)
const films = filmsList.value

const route = useRoute()
const { film: film_name } = route.params as { film: string }

const film = films?.find(film => {
	if (
		film.film_name.toLowerCase() ===
		film_name.toLowerCase().replaceAll('-', ' ')
	) {
		return film
	}
})
</script>

<style scoped></style>
