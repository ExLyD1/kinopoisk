<template>
	<div>
		<widget-title>
			<template #text_1>
				<NuxtLink to="/soon">POPULAR REVIEWS</NuxtLink>
			</template>
			<template #text_2>
				<NuxtLink to="/soon">MORE</NuxtLink>
			</template>
		</widget-title>

		<div v-if="reviewsList.length > 0">
			<div
				v-for="(review, index) in reviewsList"
				:key="index"
				class="flex flex-col gap-2 w-full"
			>
				<film-review :data="review" class="mt-5 mb-3"></film-review>

				<div
					v-if="index !== reviewsList.length - 1"
					class="border-b border-gray-700"
				></div>
			</div>
		</div>
		<LoadingSpinner v-else class="mt-5" />
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import type { IReview } from '~/shared/model/interfaces/reviewInterface'

const props = defineProps<{ data: IFilmItem }>()
const film = props.data
const reviewsList: Ref<IReview[] | []> = ref([])

onMounted(async () => {
	const reviews = await $fetch<IReview[]>(`/api/movie/${film.id}/reviews`)

	reviewsList.value = reviews.slice(0, 3)
})
</script>

<style scoped></style>
