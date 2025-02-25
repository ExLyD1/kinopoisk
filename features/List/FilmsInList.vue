<template>
	<div>
		<div
			v-if="filmsList.length > 0"
			class="films_holder flex gap-1 justify-between flex-wrap"
		>
			<!-- film item -->
			<div
				v-for="(film, index) in filmsList"
				:key="index"
				:to="`films/${generateSlug(film.film_name)}`"
			>
				<!-- IMG -->
				<NuxtLink
					class="w-[121px] h-[193px] flex"
					:to="`films/${generateSlug(film.film_name)}`"
				>
					<img
						:src="film.film_image"
						class="w-full h-full object-cover hover:border-4 hover:border-green-600 box-border rounded transition-all"
						alt=""
					/>
				</NuxtLink>

				<!-- index -->
				<div class="flex items-center justify-center text-center mt-1 mb-2">
					{{ index + 1 }}
				</div>
			</div>
		</div>

		<LoadingSpinner v-else class="mt-5" />
	</div>
</template>

<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const props = defineProps<{ data: IFilmsList }>()
const list = props.data

const filmsList: Ref<IFilmItem[] | []> = ref([])

onMounted(async () => {
	const films = await $fetch<IFilmItem[]>(`/api/list/${list.id}/films`)

	filmsList.value = films
})
</script>

<style scoped>
@media screen and (max-width: 850px) {
	.films_holder {
		justify-content: space-evenly;
	}
}
</style>
