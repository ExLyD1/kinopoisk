<template>
	<div
		class="w-40 h-60 rounded-lg flex justify-center items-center overflow-hidden relative cursor-pointer"
	>
		<!-- Слот с изображением -->
		<div class="w-full h-full object-cover z-0">
			<img :src="film.film_image" alt="" />
		</div>

		<!-- Блок с прозрачной информацией, который появляется -->
		<div
			class="hover_statistic absolute inset-0 flex flex-col justify-center items-center bg-black/70 opacity-0 transition-opacity duration-500"
		>
			<div><img src="/public/images/eye.png" alt="" /></div>
			<div class="text-white text-xl">{{ getKNumber(film.views) }}</div>
			<div><img src="../icons/favorite.png" alt="" /></div>
			<div class="text-white text-xl">{{ getKNumber(film.likes) }}</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import { getKNumber } from '~/shared/model/funtions/getKNumber'

const props = defineProps<{ data: IFilmItem }>()
const film = props.data
</script>

<style scoped>
.hover_statistic:hover {
	opacity: 1; /* Плавное появление */
}
@media screen and (max-width: 570px) {
	.hover_statistic {
		pointer-events: none;
	}
	.hover_statistic img {
		width: 30px;
		height: 30px;
	}
}
</style>
