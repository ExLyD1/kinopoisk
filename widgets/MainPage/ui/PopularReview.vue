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
			v-for="(review, index) in data"
			:key="index"
			class="flex flex-col gap-2 w-full"
		>
			<review-item :data="review" class="mt-2 mb-2"></review-item>

			<div
				v-if="index !== data.length - 1"
				class="border-b border-gray-700"
			></div>
		</div>
	</div>
</template>

<style scoped></style>

<script setup lang="ts">
// * =====================================
// * REFACTORED = TRUE
// * =====================================
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import type { IReview } from '~/shared/model/interfaces/reviewInterface'

const filmsList = useState<IFilmItem[]>('filmsList')

const data = computed(() =>
	filmsList.value
		.map((film, index) => {
			if (film.reviews && film.reviews[index]) {
				return {
					film_image: film.film_image,
					film_name: film.film_name,
					realise_year: film.realise_year,
					review: film.reviews[index],
				}
			}
			return null
		})
		.filter(
			(
				item
			): item is {
				film_image: string
				film_name: string
				realise_year: number
				review: IReview
			} => item !== null
		)
		.slice(0, 6)
)
</script>

<style scoped>
@media screen and (max-width: 860px) {
	.holder {
		width: 100%;
	}
}
</style>
