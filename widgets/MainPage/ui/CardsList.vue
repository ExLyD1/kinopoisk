<template>
	<div
		v-if="filmsList.length > 0"
		class="holder flex flex-row w-full justify-between items-center"
	>
		<div
			v-for="(film, index) in visibleFilms"
			:key="index"
			v-if="visibleImagesList.length"
			class="relative group"
		>
			<NuxtLink :to="`/films/${generateSlug(film.film_name)}`">
				<card-item :data="film" class="card">
					<template #card_image> </template>
				</card-item>
			</NuxtLink>
			<!-- Элемент, который появляется при наведении на card-item -->
			<div
				class="elem absolute top-[-45px] left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-2 rounded bg-gray-700 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
			>
				{{ film.film_name }} {{ film.realise_year }}
				<div
					class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-t-gray-700 border-transparent"
				></div>
			</div>
		</div>
	</div>
	<LoadingSpinner v-else />
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { cardImagesList } from '~/widgets/MainPage/model/cardsList'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const filmsList: Ref<IFilmItem[]> = ref([])

const visibleFilms = computed(() => filmsList.value)

const isSmallScreen = useMediaQuery('(max-width: 530px)')
const isMediumScreen = useMediaQuery(
	'(min-width: 530px) and (max-width: 598px)'
)

const visibleImagesList: ComputedRef<Array<string>> = computed(() => {
	if (isMediumScreen.value) {
		return cardImagesList.value.slice(0, 4)
	} else if (isSmallScreen.value) {
		return cardImagesList.value.slice(0, 3)
	} else {
		return cardImagesList.value
	}
})

onMounted(async () => {
	filmsList.value = await $fetch<IFilmItem[]>(
		'/api/movie/list?type=top_100_films&quantity=5'
	)
})
</script>

<style scoped>
@media screen and (max-width: 930px) {
	.holder {
		flex-wrap: wrap;
		width: 600px;
		justify-content: center;
		gap: 16px;
	}
}
@media screen and (max-width: 570px) {
	.card {
		width: 100px;
		height: 150px;
	}
}
</style>
