<template>
	<div class="total_holder">
		<widget-title>
			<template #text_1>
				<div class="hover:text-gray-400 text-gray-400 cursor-text">
					Favorite films
				</div>
			</template>
		</widget-title>

		<div
			v-if="favFilms.length > 0"
			class="images_holder mt-3 flex items-center gap-3"
		>
			<NuxtLink
				:to="`/films/${generateSlug(film.film_name)}`"
				v-for="(film, index) in computedFavFilms"
				:key="index"
			>
				<img
					class="film_image w-[150px] h-[225px] object-cover hover:border-4 hover:border-green-600 transition-all rounded"
					:src="film.film_image"
					alt=""
				/>
			</NuxtLink>
		</div>

		<LoadingSpinner v-else />
	</div>
</template>

<script setup lang="ts">
import type { IUser } from '~/shared/model/interfaces/userInterface'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

import { useMemberStore } from '~/features/Member/model/memberStore'
import { useMediaQuery } from '@vueuse/core'

const memberStore = useMemberStore()
const props = defineProps<{ data: IUser }>()
const user = props.data
const isSmallScreen = useMediaQuery('(max-width:420px)')

const favFilms = ref<IFilmItem[]>([])

const computedFavFilms: ComputedRef<IFilmItem[]> = computed(() => {
	if (isSmallScreen.value) {
		return favFilms.value.slice(0, 3)
	} else {
		return favFilms.value
	}
})

onMounted(async () => {
	const response = await $fetch<IFilmItem[]>(
		`/api/user/${user.id}/favoriteFilms?quantity=4`
	)

	favFilms.value = response
})
</script>

<style scoped>
@media screen and (max-width: 670px) {
	.film_image {
		width: 120px;
		height: 170px;
	}
	.total_holder {
		width: 500px;
	}
}
@media screen and (max-width: 530px) {
	.film_image {
		width: 100px;
		height: 150px;
	}
	.total_holder {
		width: 400px;
	}
}
@media screen and (max-width: 420px) {
	.film_image {
		width: 95px;
		height: 145px;
	}
	.total_holder {
		width: 300px;
	}
}
</style>
