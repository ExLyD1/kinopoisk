<template>
	<div class="flex flex-col items-center">
		<div class="w-[230px] h-[345px]">
			<img
				:src="film.film_image"
				class="w-full h-full object-cover rounded-lg shadow-lg border border-gray-700"
				alt=""
			/>
		</div>

		<div class="mt-2 flex gap-3 items-center">
			<NuxtLink
				to="/soon"
				class="flex items-center text-gray-500 gap-1 text-sm hover:text-white transition-all"
			>
				<img src="@/shared/ui/icons/eye.png" class="w-4 h-4" alt="" />
				<div>{{ getKNumber(film.views) }}</div>
			</NuxtLink>

			<NuxtLink
				to="/soon"
				class="flex items-center text-gray-500 gap-1 text-sm hover:text-white transition-all"
			>
				<img src="@/shared/ui/icons/list.png" class="w-4 h-4" alt="" />
				<div>{{ getKNumber(film.list_contains) }}</div>
			</NuxtLink>

			<NuxtLink
				to="/soon"
				class="flex items-center text-gray-500 gap-1 text-sm hover:text-white transition-all"
			>
				<img
					src="@/shared/ui/icons/favorite_orange.png"
					class="w-4 h-4"
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
