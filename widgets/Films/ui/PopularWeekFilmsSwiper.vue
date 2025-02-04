<template>
	<div>
		<widget-title>
			<template #text_1>Popular films this week</template>
			<template #text_2>More</template>
		</widget-title>

		<div class="swiper_elem_widget flex gap-4 h-[380px]">
			<button @click="swiper.prev()">
				<img
					class="w-3/4 h-3/4 object-contain rotate-180 mb-[150px]"
					src="../icons//arrowRight.png"
					alt=""
				/>
			</button>
			<swiper-container
				:slidesPerView="slidesPerView"
				:loop="true"
				class="min-w-0 h-auto"
				ref="containerRef"
			>
				<swiper-slide
					v-for="(film, idx) in visibleFilmsList"
					:key="idx"
					class="h-auto"
				>
					<NuxtLink
						:to="`/films/${film.film_name.toLowerCase().replace(/\s+/g, '-')}`"
						class="h-full"
					>
						<popular-week-swiper-item :data="film"></popular-week-swiper-item>
					</NuxtLink>
				</swiper-slide>
			</swiper-container>
			<button @click="swiper.next()">
				<img
					class="w-3/4 h-3/4 object-contain mb-[150px]"
					src="../icons//arrowRight.png"
					alt=""
				/>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
const containerRef = ref(null)
const slides = ref(Array.from({ length: 10 }))

const swiper = useSwiper(containerRef)

import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
const filmsList = useState<Array<IFilmItem>>('filmsList')

const visibleFilmsList = filmsList.value.slice(0, 20)

const isMediumScreen = useMediaQuery('(min-width:650px) and (max-width:950px)')

const slidesPerView: ComputedRef<number> = computed(() => {
	if (!isMediumScreen.value) {
		return 3
	} else {
		return 2
	}
})
</script>

<style scoped>
swiper-slide {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	height: 20vh;
	font-size: 4rem;
	font-weight: bold;
	font-family: 'Roboto', sans-serif;
}
</style>
