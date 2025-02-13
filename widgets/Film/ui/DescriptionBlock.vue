<template>
	<div>
		<div class="flex gap-2 items-center">
			<div class="text-3xl text-white">{{ film.film_name }}</div>
			<NuxtLink
				to="/soon"
				class="text-gray-200 border-b text-lg border-gray-300 hover:text-blue-400 transition-all"
			>
				{{ film.realise_year }}
			</NuxtLink>
			<div class="text-gray-400 text-lg">Directed by</div>
			<NuxtLink
				to="/soon"
				class="text-gray-200 border-b text-lg border-gray-300 hover:text-blue-400 transition-all"
			>
				{{ film.crew.director[0] }}
			</NuxtLink>
		</div>

		<div class="flex justify-between pt-6">
			<div class="text-gray-400 text-lg w-[390px]">
				{{ film.describtion }}
			</div>

			<div>
				<div class="flex flex-col gap-[1px]">
					<div
						class="text-gray-300 bg-gray-700 px-4 py-2 text-center rounded-t text-[15px]"
					>
						Sign in to log, rate or review
					</div>

					<div
						class="text-gray-300 bg-gray-700 px-4 py-2 text-center rounded-b text-[15px]"
					>
						Share
					</div>
				</div>

				<div class="mt-5">
					<widget-title>
						<template #text_1>
							<div class="text-gray-400">RATINGS</div>
						</template>
					</widget-title>

					<div class="flex mt-1 gap-1 items-end">
						<div>
							<img src="./assets/star.png" class="w-5 h-5 mb-2" alt="" />
						</div>

						<div class="flex flex-row gap-[1px] mb-2">
							<div v-for="item in 5">qwe</div>
						</div>

						<div class="flex flex-col items-center justify-end">
							<div class="text-lg text-gray-500">{{ film.rate }}</div>
							<img src="./assets/5stars.png" class="w-11 h-11" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const props = defineProps<{ data: IFilmItem }>()
const film = props.data

const ratingHeight = (rate: number, index: number): number => {
	if (index === 1) {
		return
	} else {
	}

	return 0
}
</script>
rate: 4.4 stars 1 star === 0 2 stars === 10% 3 stars === 20% 4 stars === 40% 5
stars === 30%

<style scoped></style>
