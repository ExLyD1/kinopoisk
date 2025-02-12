<template>
	<div v-if="film" class="relative main_holder pt-16 m-auto pb-24">
		<div class="flex">
			<aside class="w-[230px]">
				<FilmPoster :data="film"></FilmPoster>
				<WhereToWatch></WhereToWatch>
			</aside>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const film: Ref<IFilmItem | null> = ref(null)

const route = useRoute()
const { film: film_name } = route.params as { film: string }

onMounted(async () => {
	film.value = await $fetch<IFilmItem>(`/api/movie/by-name/${film_name}`)
})
</script>

<style scoped></style>
