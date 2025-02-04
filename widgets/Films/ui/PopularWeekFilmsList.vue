<template>
	<div>
		<widget-title>
			<template #text_1>Popular films this week</template>
			<template #text_2>More</template>
		</widget-title>
	</div>

	<div class="flex justify-center gap-3 mt-4 flex-wrap">
		<NuxtLink
			class="image max-w-[130px]"
			v-for="(film, index) in visibleFilmsList"
			:to="`/films/${film.film_name.toLowerCase().replace(/\s+/g, '-')}`"
		>
			<img
				class="h-full w-full object-cover rounded border border-gray-800 shadow-lg"
				:src="film.film_image"
				alt=""
			/>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
const containerRef = ref(null)

import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
const filmsList = useState<Array<IFilmItem>>('filmsList')

const visibleFilmsList = filmsList.value.slice(0, 20)
</script>

<style scoped>
@media screen and (max-width: 600px) {
	.image {
		width: 105px;
	}
}
@media screen and (max-width: 385px) {
	.image {
		width: 85px;
	}
}
</style>
