<template>
	<div class="flex flex-col">
		<WidgetTitle>
			<template #text_1>
				<div class="text-[#9ab] cursor-text">Crew picks</div>
			</template>
		</WidgetTitle>

		<div
			v-if="filmsData.length > 0"
			class="item_holder grid grid-rows-2 grid-cols-3 gap-3"
		>
			<cover-item v-for="(film, index) in filmsList">
				<template #card_image>
					<NuxtLink class="" :to="`/films/${generateSlug(film.film_name)}`">
						<img
							class="h-full w-full object-cover"
							:src="film.film_image"
							alt=""
						/>
					</NuxtLink>
				</template>
			</cover-item>
		</div>
		<LoadingSpinner v-else class="my-5" />
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import { useMediaQuery } from '@vueuse/core'

const isMediumScreen = useMediaQuery('(min-width:410px) and (max-width:485px)')
const isSmallScreen = useMediaQuery('(max-width:410px)')

const filmsData: Ref<IFilmItem[]> = ref([])

onMounted(async () => {
	filmsData.value = await $fetch<IFilmItem[]>('/api/movie/list?quantity=6')
})

const filmsList: ComputedRef<Array<IFilmItem> | undefined> = computed(() => {
	if (isMediumScreen.value) {
		return filmsData.value?.slice(0, 5)
	} else if (isSmallScreen.value) {
		return filmsData.value?.slice(0, 4)
	} else {
		return filmsData.value?.slice(0, 6)
	}
})
</script>

<style scoped>
@media screen and (max-width: 650px) {
	.item_holder {
		place-content: center;
		grid-template-rows: repeat(1, minmax(0, 1fr));
		grid-template-columns: repeat(6, minmax(0, 1fr));
	}
}
@media screen and (max-width: 485px) {
	.item_holder {
		grid-template-columns: repeat(5, minmax(0, 1fr));
	}
}
@media screen and (max-width: 410px) {
	.item_holder {
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}
}
</style>
