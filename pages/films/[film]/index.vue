<template>
	<div
		v-if="film"
		class="page_container relative main_holder pt-16 m-auto pb-24"
	>
		<div class="holder_all flex w-[950px] m-auto p-5">
			<div class="sidebar-container aside_space">
				<aside
					ref="aside"
					class="w-[230px]"
					:class="{ 'fixed-class': isAsideFixed }"
				>
					<FilmPoster :data="film"></FilmPoster>
					<WhereToWatch></WhereToWatch>
				</aside>
			</div>

			<div v-if="film" class="description_info pl-12 w-[750px] text-gray-400">
				<description-block :data="film"></description-block>

				<film-popular-reviews class="mt-12" :data="film"></film-popular-reviews>
				<film-recent-reviews class="mt-16" :data="film"></film-recent-reviews>

				<similar-films class="mt-24" :data="film"></similar-films>
				<film-popular-lists class="mt-24" :data="film"></film-popular-lists>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const route = useRoute()
const { film: film_name } = route.params as { film: string }

const film: Ref<IFilmItem | null> = ref(null)

const isAsideFixed: Ref<boolean> = ref(false)
const aside = ref<HTMLElement | null>(null)

const handleScroll = () => {
	if (!aside.value) return

	const offset = window.scrollY

	isAsideFixed.value = offset > 132
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
.sidebar-container {
	flex: 0 0 240px; /* Фиксированная ширина боковой панели */
	max-width: 240px;
	position: relative;
}

@media screen and (max-width: 985px) {
	.description_info {
		width: 100%;
	}
	.holder_all {
		width: 100%;
	}
}
@media screen and (max-width: 785px) {
	.description_info {
		padding-left: 0px;
	}
}
@media screen and (max-width: 680px) {
	.aside_space {
		display: none;
	}
	.page_container {
		padding-top: 30px;
	}
}
</style>
