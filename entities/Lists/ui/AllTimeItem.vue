<template>
	<div class="item_holder flex flex-col w-[448px]">
		<NuxtLink
			:to="`/members/
				${data.list.author_name.toLowerCase().replace(/\s+/g, '-')}
				/lists/
				${data.list.list_name.toLowerCase().replace(/\s+/g, '-')}`"
			class="images_holder flex items-center -space-x-10 border-4 border-transparent hover:border-green-600 cursor-pointer transition-all rounded w-full h-[128px]"
		>
			<div
				v-for="(film, index) in visibleFilms"
				:key="index"
				class="image flex-shrink-0 w-[80px] h-[120px]"
			>
				<img
					class="h-full w-full object-contain"
					:src="film.film_image"
					alt=""
				/>
			</div>
		</NuxtLink>

		<NuxtLink
			:to="`/members/
				${data.list.author_name.toLowerCase().replace(/\s+/g, '-')}
				/lists/
				${data.list.list_name.toLowerCase().replace(/\s+/g, '-')}`"
			class="text-white font-medium w-full"
		>
			{{ data.list.list_name }}
		</NuxtLink>

		<div
			class="flex items-center gap-1 text-gray-500 text-sm font-light w-full"
		>
			<NuxtLink
				:to="`/members/
					${data.list.author_name.toLowerCase().replace(/\s+/g, '-')}`"
			>
				<img
					class="inline-block size-6 rounded-full"
					:src="data.list.author_avatar"
					alt="Avatar"
				/>
			</NuxtLink>

			<div>
				Created By
				<span class="font-medium text-gray-400">
					<NuxtLink
						:to="`/members/
							${data.list.author_name.toLowerCase().replace(/\s+/g, '-')}`"
						>{{ data.list.author_name }}</NuxtLink
					>
				</span>
			</div>

			<div>
				{{ getTimeAgo(data.list.publishedDate) }}
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { getTimeAgo } from '~/shared/model/funtions/getTimeAgo'

import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const props = defineProps<{
	data: {
		list: IFilmsList
		films_list: Array<IFilmItem>
	}
}>()
const data = props.data

const isSmallScreen = useMediaQuery('(max-width: 570px)')
const visibleFilms = computed(() => {
	return isSmallScreen.value ? data.films_list.slice(0, 5) : data.films_list
})
</script>

<style scoped>
@media screen and (max-width: 950px) {
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -0.1rem;
		margin-right: -0.1rem;
	}
	.item_holder {
		width: 781px;
	}
}
@media screen and (max-width: 820px) {
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -1rem;
		margin-right: -1rem;
	}
	.item_holder {
		width: 536px;
	}
}
@media screen and (max-width: 570px) {
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -0.1rem;
		margin-right: -0.1rem;
	}
	.item_holder {
		width: 397px;
	}
}
@media screen and (max-width: 425px) {
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -1.1rem;
		margin-right: -1.1rem;
	}
	.item_holder {
		width: 285px;
	}
}
</style>
