<template>
	<div class="h-full">
		<NuxtLink
			:to="`/films/${film.film_name.toLowerCase().replace(/\s+/g, '-')}`"
		>
			<div
				class="w-[240px] h-[350px] shadow-xl rounded-lg border-4 border-transparent hover:border-green-600 cursor-pointer transition-all"
			>
				<img
					class="w-full h-full object-cover rounded-lg"
					:src="film.film_image"
					alt=""
				/>
			</div>
		</NuxtLink>

		<div class="flex gap-3 items-center pt-2 text-sm justify-center">
			<NuxtLink
				:to="`/films/
					${film.film_name.toLowerCase().replace(/\s+/g, '-')}/viewers`"
				class="flex gap-1 items-center"
			>
				<img class="w-4 h-4" src="@/shared/ui/icons/eye.png" alt="" />
				<div>{{ getKNumber(film.views) }}</div>
			</NuxtLink>

			<NuxtLink
				:to="`/films/
					${film.film_name.toLowerCase().replace(/\s+/g, '-')}/lists`"
				class="flex gap-1 items-center"
			>
				<img class="w-4 h-4" src="@/shared/ui/icons/list.png" alt="" />
				<div>{{ getKNumber(film.list_contains) }}</div>
			</NuxtLink>

			<NuxtLink
				:to="`/films/
					${film.film_name.toLowerCase().replace(/\s+/g, '-')}/liked`"
				class="flex gap-1 items-center"
			>
				<img
					class="w-4 h-4"
					src="@/shared/ui/icons/favorite_orange.png"
					alt=""
				/>
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
