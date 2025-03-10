<template>
	<div class="flex flex-col items-center">
		<div class="w-[230px] h-[345px]">
			<NuxtLink :to="`/films/${generateSlug(film.film_name)}`">
				<img
					:src="film.film_image"
					class="w-full h-full object-cover rounded-lg shadow-lg border border-gray-700 hover:border-4 transition-all hover:border-green-600"
					alt=""
				/>
			</NuxtLink>
		</div>

		<div class="mt-2 flex gap-3 items-center">
			<NuxtLink
				:to="`/films/${generateSlug(film.film_name)}/members`"
				class="flex items-center text-gray-500 gap-1 text-sm hover:text-white transition-all"
			>
				<img src="/public/images/eye.png" class="w-4 h-4" alt="" />
				<div>{{ getKNumber(film.views) }}</div>
			</NuxtLink>

			<NuxtLink
				:to="`/films/${generateSlug(film.film_name)}/lists`"
				class="flex items-center text-gray-500 gap-1 text-sm hover:text-white transition-all"
			>
				<img src="/public/images/list.png" class="w-4 h-4" alt="" />
				<div>{{ getKNumber(film.list_contains) }}</div>
			</NuxtLink>

			<NuxtLink
				:to="`/films/${generateSlug(film.film_name)}/likes`"
				class="flex items-center text-gray-500 gap-1 text-sm hover:text-white transition-all"
			>
				<img src="/public/images/favorite_orange.png" class="w-4 h-4" alt="" />
				<div>{{ getKNumber(film.likes) }}</div>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import { getKNumber } from '~/shared/model/funtions/getKNumber'

const props = defineProps<{ data: IFilmItem }>()
const film = props.data
</script>

<style scoped></style>
