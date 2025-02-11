<template>
	<div>
		<widget-title>
			<template #text_1>
				<NuxtLink to="films/all">Popular films this week</NuxtLink>
			</template>
			<template #text_2>
				<NuxtLink to="films/all">MORE</NuxtLink>
			</template>
		</widget-title>
	</div>

	<div
		v-if="filmsList.length > 0"
		class="flex justify-center gap-3 mt-4 flex-wrap"
	>
		<NuxtLink
			class="image max-w-[130px]"
			v-for="(film, index) in filmsList"
			:to="`/films/${film.film_name.toLowerCase().replace(/\s+/g, '-')}`"
		>
			<img
				class="h-full w-full object-cover rounded border border-gray-800 shadow-lg"
				:src="film.film_image"
				alt=""
			/>
		</NuxtLink>
	</div>

	<LoadingSpinner v-else class="my-10" />
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const filmsList: Ref<IFilmItem[]> = ref([])

onMounted(async () => {
	filmsList.value = await $fetch<IFilmItem[]>(
		'/api/movie/list?type=popular&quantity=20'
	)
})
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
