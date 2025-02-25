<template>
	<div>
		<widget-title>
			<template #text_1>
				<NuxtLink to="/soon">SIMILAR FILMS</NuxtLink>
			</template>
			<template #text_2>
				<NuxtLink to="/soon">ALL</NuxtLink>
			</template>
		</widget-title>

		<div v-if="data.length > 0" class="flex gap-2 mt-2">
			<NuxtLink
				v-for="(film, index) in data"
				:key="index"
				class="w-[110px"
				:to="`/films/${generateSlug(film.film_name)}`"
			>
				<img
					:src="film.film_image"
					class="h-full w-full object-cover rounded border border-gray-600 relative transition-all box-border hover:border-2 border-transparent hover:border-green-600"
					alt=""
				/>
			</NuxtLink>
		</div>
		<LoadingSpinner v-else class="mt-5" />
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import { useMediaQuery } from '@vueuse/core'

const props = defineProps<{ data: IFilmItem }>()
const film = props.data

const films: Ref<IFilmItem[] | []> = ref([])

const data = computed(() => {
	if (isMediumScreen.value) {
		return films.value.slice(0, 4)
	}
	if (isSmallScreen.value) {
		return films.value.slice(0, 3)
	}
	return films.value
})

const isMediumScreen = useMediaQuery('(max-width:720px) and (min-width:470px)')
const isSmallScreen = useMediaQuery('(max-width:470px)')

onMounted(async () => {
	const filmsPopular = await $fetch<IFilmItem[]>(
		'/api/movie/list?type=popular&quantity=5'
	)

	films.value = filmsPopular
})
</script>

<style scoped></style>
