<template>
	<widget-title class="w-auto">
		<template #text_1>
			<div class="text-[#9ab] cursor-text">Just Reviewed…</div>
		</template>
		<template #text_2>
			<div class="text-[#9ab] cursor-text">2,330,532,028 films watched</div>
		</template>
	</widget-title>

	<div
		v-if="data.length > 0"
		class="cover_holder flex flex-row justify-between m-auto"
	>
		<cover-item v-for="(film, index) in visibleFilms" :key="index">
			<template #card_image>
				<NuxtLink :to="`/films/${generateSlug(film.film_name)}`">
					<img
						class="img w-full h-full object-cover rounded"
						:src="film.film_image"
						alt=""
					/>
				</NuxtLink>
			</template>
		</cover-item>
	</div>
	<LoadingSpinner v-else class="my-5" />
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

// ======================================================
// Берем 12 обложек фильмов из массива данных
// ======================================================
const data: Ref<IFilmItem[]> = ref([])

const list = computed(() => data.value?.slice(29, 42))

onMounted(async () => {
	data.value = await $fetch<IFilmItem[]>(
		'/api/movie/list?type=just&quantity=42'
	)
})
// ======================================================
// Обозначения границ для адаптивности
// ======================================================
const isLargeScreen = useMediaQuery('(min-width: 570px) and (max-width: 925px)')
const isMediumScreen = useMediaQuery(
	'(min-width: 430px) and (max-width: 570px)'
)
const isSmallScreen = useMediaQuery('(max-width: 430px)')

// ======================================================
// Вычесляем массив исходя из размеров экрана
// ======================================================
const visibleFilms: ComputedRef<Array<IFilmItem> | undefined> = computed(() => {
	if (isLargeScreen.value) {
		return list.value?.slice(0, 7)
	} else if (isMediumScreen.value) {
		return list.value?.slice(0, 5)
	} else if (isSmallScreen.value) {
		return list.value?.slice(0, 4)
	}
	return list.value
})
</script>

<style scoped>
@media screen and (max-width: 1025px) {
	.cover_holder {
		justify-content: space-evenly;
	}
	.img {
		width: 100px;
		height: 100px;
	}
}
</style>
