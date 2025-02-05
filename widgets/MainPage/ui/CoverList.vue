<template>
	<widget-title>
		<template #text_1>
			<div class="text-[#9ab] cursor-text">Just Reviewed…</div>
		</template>
		<template #text_2>
			<div class="text-[#9ab] cursor-text">2,330,532,028 films watched</div>
		</template>
	</widget-title>

	<div class="cover_holder flex flex-row justify-between m-auto">
		<cover-item v-for="(film, index) in visibleImages" :key="index">
			<template #card_image>
				<NuxtLink
					:to="`/films/${film.film_name.toLowerCase().replace(/\s+/g, '-')}`"
				>
					<img
						class="img w-full h-full object-cover rounded"
						:src="film.film_image"
						alt=""
					/>
				</NuxtLink>
			</template>
		</cover-item>
	</div>
</template>

<script setup lang="ts">
// * =====================================
// * REFACTORED = TRUE
// * =====================================
import { computed } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import type { ComputedRef } from 'vue'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

// ======================================================
// Берем 12 обложек фильмов из массива данных
// ======================================================
const filmsList = useState<IFilmItem[]>('filmsList')
const visibleFilms = computed(() => filmsList.value.slice(5, 17))

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
const visibleImages: ComputedRef<Array<IFilmItem>> = computed(() => {
	if (isLargeScreen.value) {
		return visibleFilms.value.slice(0, 7)
	} else if (isMediumScreen.value) {
		return visibleFilms.value.slice(0, 5)
	} else if (isSmallScreen.value) {
		return visibleFilms.value.slice(0, 4)
	}
	return visibleFilms.value
})
</script>

<style scoped>
@media screen and (max-width: 1025px) {
	.cover_holder {
		justify-content: center;
	}
	.img {
		width: 100px;
		height: 100px;
	}
}
</style>
