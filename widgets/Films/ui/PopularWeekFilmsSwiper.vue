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

		<div
			v-if="filmsList.length > 0"
			class="swiper_elem_widget flex gap-4 h-[380px]"
		>
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
					v-for="(film, idx) in filmsList"
					:key="idx"
					class="h-auto"
				>
					<popular-week-swiper-item :data="film"></popular-week-swiper-item>
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

		<LoadingSpinner v-else class="my-20" />
	</div>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const isMediumScreen = useMediaQuery('(min-width:650px) and (max-width:950px)')

const containerRef = ref(null)
const swiper = useSwiper(containerRef)
const slidesPerView = computed(() => (isMediumScreen.value ? 2 : 3))

const filmsList: Ref<IFilmItem[]> = ref([])

onMounted(async () => {
	filmsList.value = await $fetch<IFilmItem[]>(
		'/api/movie/list?type=popular&quantity=20'
	)
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
