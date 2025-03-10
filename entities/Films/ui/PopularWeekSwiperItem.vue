<template>
	<div class="h-full">
		<NuxtLink :to="`/films/${generateSlug(film.film_name)}`">
			<div
				class="w-[240px] h-[350px] shadow-xl rounded-lg border-4 border-transparent hover:border-green-600 cursor-pointer transition-all"
			>
				<img
					class="w-full h-full object-cover rounded-lg"
					:src="film.film_image"
					alt="qwe"
				/>
			</div>
		</NuxtLink>

		<div class="flex gap-3 items-center pt-2 text-sm justify-center">
			<NuxtLink
				:to="`/films/
					${generateSlug(film.film_name)}/members`"
				class="flex gap-1 items-center"
			>
				<img class="w-4 h-4" src="/public/images/eye.png" alt="" />
				<div>{{ getKNumber(film.views) }}</div>
			</NuxtLink>

			<NuxtLink
				:to="`/films/
					${generateSlug(film.film_name)}/lists`"
				class="flex gap-1 items-center"
			>
				<img class="w-4 h-4" src="/public/images/list.png" alt="" />
				<div>{{ getKNumber(film.list_contains) }}</div>
			</NuxtLink>

			<NuxtLink
				:to="`/films/
					${generateSlug(film.film_name)}/likes`"
				class="flex gap-1 items-center"
			>
				<img class="w-4 h-4" src="/public/images/favorite_orange.png" alt="" />
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
