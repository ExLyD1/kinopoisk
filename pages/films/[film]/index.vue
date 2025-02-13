<template>
	<div v-if="film" class="relative main_holder pt-16 m-auto pb-24">
		<div class="flex">
			<aside
				ref="aside"
				class="w-[230px]"
				:class="{ 'fixed-class': isAsideFixed }"
			>
				<FilmPoster :data="film"></FilmPoster>
				<WhereToWatch></WhereToWatch>
			</aside>

			<div class="pl-12 w-[750px]">
				<description-block :data="film"></description-block>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const film: Ref<IFilmItem | null> = ref(null)
const route = useRoute()
const { film: film_name } = route.params as { film: string }

const isAsideFixed: Ref<boolean> = ref(false)
const aside = ref<HTMLElement | null>(null)

const handleScroll = () => {
	if (!aside.value) return

	const offset = window.scrollY
	console.log(offset)

	isAsideFixed.value = offset > 132 // Задай своё значение, когда нужно зафиксировать
}

onMounted(async () => {
	film.value = await $fetch<IFilmItem>(`/api/movie/by-name/${film_name}`)
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fixed-class {
	position: fixed;
	top: 20px;
}
</style>
