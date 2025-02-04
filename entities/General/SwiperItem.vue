<template>
	<Swiper v-bind="swiperOptions">
		<SwiperSlide>Слайд 1</SwiperSlide>
		<SwiperSlide>Слайд 2</SwiperSlide>
		<SwiperSlide>Слайд 3</SwiperSlide>
		<SwiperSlide>Слайд 4</SwiperSlide>
	</Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue' // Импорт компонентов
import { Navigation, Pagination } from 'swiper/modules' // Импорт модулей

// Подключение стилей Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { ref } from 'vue'
const props = defineProps<{ data: Array<any> }>()

const swiperOptions = {
	spaceBetween: 20,
	slidesPerView: 1,
	navigation: true, // Включить стрелки навигации
	pagination: { clickable: true }, // Включить пагинацию
}
</script>

<style lang="css">
swiper-container {
	width: 100%;
	max-width: 100%;
	max-height: 100vh;
	min-height: 0;
	min-width: 0;
	display: flex;
}
swiper-slide {
	width: 100px !important;
	flex-shrink: 0;
	display: block;
	height: 100%;
	max-height: 100%;
}
</style>
