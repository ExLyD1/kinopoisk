<template>
	<div class="h-full">
		<div
			class="w-[240px] h-[350px] shadow-xl rounded-lg border-4 border-transparent hover:border-green-600 cursor-pointer transition-all"
		>
			<img
				class="w-full h-full object-cover rounded-lg"
				:src="film.film_image"
				alt=""
			/>
		</div>

		<div class="flex gap-3 items-center pt-2 text-sm justify-center">
			<div class="flex gap-1 items-center">
				<img class="w-4 h-4" src="@/shared/ui/icons/eye.png" alt="" />
				<div>{{ getKNumber(film.views) }}</div>
			</div>
			<div class="flex gap-1 items-center">
				<img class="w-4 h-4" src="@/shared/ui/icons/list.png" alt="" />
				<div>{{ getKNumber(film.list_contains) }}</div>
			</div>
			<div class="flex gap-1 items-center">
				<img
					class="w-4 h-4"
					src="@/shared/ui/icons/favorite_orange.png"
					alt=""
				/>
				<div>{{ getKNumber(film.likes) }}</div>
			</div>
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
