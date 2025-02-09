<template>
	<div class="w-7/12 holder">
		<widget-title>
			<template #text_1>
				<NuxtLink to="/soon">Popular reviews this week</NuxtLink>
			</template>
			<template #text_2>
				<NuxtLink to="/soon">MORE</NuxtLink>
			</template>
		</widget-title>

		<div
			v-for="(item, index) in data"
			:key="index"
			class="flex flex-col gap-2 w-full"
		>
			<review-item :data="item" class="mt-2 mb-2"></review-item>

			<div
				v-if="index !== data.length - 1"
				class="border-b border-gray-700"
			></div>
		</div>
	</div>
</template>

<style scoped></style>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import type { IReview } from '~/shared/model/interfaces/reviewInterface'

const data: Ref<{ review: IReview; film: IFilmItem }[]> = ref([])

onMounted(async () => {
	const reviewsList = await $fetch<IReview[]>(
		'/api/review/list?type=film&quantity=5'
	)

	const fetchData = await Promise.all(
		reviewsList.map(async review => {
			const film = await $fetch<IFilmItem>(`/api/movie/${review.item_id}`)

			return {
				review: review,
				film: film,
			}
		})
	)

	data.value = fetchData
})

// watchEffect(async () => {
// 	if (!filmsData.value) return []

// 	const films = filmsData.value

// 	const resolvedFilms = await Promise.all(
// 		films.map(async (film, index) => {
// 			if (film.reviews && film.reviews[index]) {
// 				const review = await $fetch<IReview>(
// 					`/api/getReviewsList?id=${film.reviews[index]}`
// 				)
// 				return {
// 					film_image: film.film_image,
// 					film_name: film.film_name,
// 					realise_year: film.realise_year,
// 					review,
// 				}
// 			}
// 			return null
// 		})
// 	).then(resolvedFilms =>
// 		resolvedFilms.filter(
// 			(
// 				item
// 			): item is {
// 				film_image: string
// 				film_name: string
// 				realise_year: number
// 				review: IReview
// 			} => item !== null
// 		)
// 	)

// 	data.value = resolvedFilms
// })
</script>

<style scoped>
@media screen and (max-width: 860px) {
	.holder {
		width: 100%;
	}
}
</style>
