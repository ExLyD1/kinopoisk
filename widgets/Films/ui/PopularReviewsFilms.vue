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

		<!-- <div
			v-for="(review, index) in data"
			:key="index"
			class="flex flex-col gap-2 w-full"
		>
			<review-item :data="review" class="mt-2 mb-2"></review-item>

			<div
				v-if="index !== data.length - 1"
				class="border-b border-gray-700"
			></div>
		</div> -->
	</div>
</template>

<style scoped></style>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import type { IReview } from '~/shared/model/interfaces/reviewInterface'

// const { data: filmsList } = await useAsyncData<IFilmItem[]>('filmsData', () =>
// 	$fetch<IFilmItem[]>('/api/getFilmsList?quantity=18')
// )

// const data: Ref<any> = ref([])

// watchEffect(async () => {
// 	if (!filmsList.value) return

// 	const resolvedFilms = await Promise.all(
// 		filmsList.value.map(async film => {
// 			if (!film.reviews || film.reviews.length === 0) return null

// 			const reviews_list = await Promise.all(
// 				film.reviews.map(review_id =>
// 					$fetch(`/api/getReviewsList?id=${review_id}`)
// 				)
// 			)

// 			return {
// 				film_image: film.film_image,
// 				film_name: film.film_name,
// 				realise_year: film.realise_year,
// 				review: reviews_list,
// 			}
// 		})
// 	)

// 	data.value = resolvedFilms.filter(item => item !== null).slice(12, 18)
// })

// const data = computed(() =>
// 	filmsList.value
// 		?.map(async (film, index) => {
// 			if (film.reviews && film.reviews[index]) {
// 				const reviews_list = await Promise.all(
// 					film.reviews.map((review_id, index) => {
// 						return $fetch(`/api/getReviewsList?id=${review_id}`)
// 					})
// 				)
// 				return {
// 					film_image: film.film_image,
// 					film_name: film.film_name,
// 					realise_year: film.realise_year,
// 					review: reviews_list,
// 				}
// 			}
// 			return null
// 		})
// 		.filter(
// 			(
// 				item
// 			): item is {
// 				film_image: string
// 				film_name: string
// 				realise_year: number
// 				review: IReview
// 			} => item !== null
// 		)
// 		.slice(12, 18)
// )
</script>

<style scoped>
@media screen and (max-width: 650px) {
	.holder {
		width: 100%;
	}
}
</style>
