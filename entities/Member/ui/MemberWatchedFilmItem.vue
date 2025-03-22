<template>
	<div v-if="film">
		<!-- image -->
		<NuxtLink
			:to="`/films/${generateSlug(film.film_name)}`"
			class="box-border relative cursor-pointer"
		>
			<img
				:src="film.film_image"
				class="w-[76px] h-[111px] object-cover hover:border-4 hover:border-green-600 transition-all rounded"
				alt=""
			/>
		</NuxtLink>

		<!-- film data -->
		<div class="flex items-center gap-1 mt-1">
			<!-- Stars Rating -->
			<div
				v-if="getRatingIcons(userRated) !== undefined"
				class="flex items-center"
			>
				<svg
					v-for="(icon, index) in getRatingIcons(userRated)"
					:key="index"
					class="shrink-0 size-2"
					:class="
						icon
							? 'text-green-600 dark:text-green-600'
							: 'text-green-600 dark:text-green-600'
					"
					xmlns="http://www.w3.org/2000/svg"
					width="10"
					height="10"
					fill="currentColor"
					viewBox="0 0 16 16"
				>
					<path
						d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
					></path>
				</svg>
			</div>

			<!-- liked -->
			<div v-if="isLiked">
				<img src="/public/images/favorite_green.png" class="w-2 h-2" alt="" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import { getRatingIcons } from '~/shared/model/funtions/getRatingIcon'

const props = defineProps<{ data: IFilmItem; userId: number }>()
const film = props.data
const userId = props.userId

const isLiked = ref<boolean>(false)
const userRated = ref<number>()
onMounted(async () => {
	isLiked.value = await $fetch<boolean>(
		`/api/user/${userId}/${film.id}/isLiked`
	)

	userRated.value = await $fetch<number>(
		`/api/user/${userId}/${film.id}/rating`
	)
})
</script>

<style scoped></style>
