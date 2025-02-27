<template>
	<div class="flex justify-between w-[1200px] m-auto holder px-5">
		<div class="any_holder flex flex-col gap-8 items-center w-[375px]">
			<div class="text-gray-400 text-2xl text-center w-full">Import Films</div>

			<div class="font-medium text-gray-400 text-center w-full">
				Free to all members. Create your own CSV file, or import from another
				service. We support these IMDb exports:
			</div>

			<div
				class="options_holder flex flex-col gap-4 m-auto w-[120px] text-gray-400"
			>
				<div class="flex gap-3 items-center text-xl whitespace-nowrap">
					<img class="w-8 h-8" src="./assets/star.png" alt="" />
					<div>Ratings</div>
				</div>

				<div class="flex gap-3 items-center text-xl whitespace-nowrap">
					<img class="w-8 h-8" src="./assets/eye.png" alt="" />
					<div>Check-ins</div>
				</div>

				<div class="flex gap-3 items-center text-xl whitespace-nowrap">
					<img class="w-8 h-8" src="./assets/list.png" alt="" />
					<div>Lists</div>
				</div>

				<div class="flex gap-3 items-center text-xl whitespace-nowrap">
					<img class="w-8 h-8" src="./assets/clock.png" alt="" />
					<div>Watchlists</div>
				</div>
			</div>

			<div>
				<Button class="butt text-white bg-gray-500 text-xl hover:bg-gray-500"
					>Read our IMDb migration guide</Button
				>
			</div>
		</div>

		<div class="holder_content flex flex-col gap-8 items-center w-[730px]">
			<div class="text-gray-400 text-2xl text-center w-full">
				Discover more films
			</div>

			<div class="font-medium text-gray-400 text-center w-full">
				Here’s a selection of our highest rated narrative feature films. The
				complete list of 250 is maintained by the tireless Dave Vis. How many
				have you seen?
			</div>

			<div class="images_holder w-full grid grid-cols-10 grid-rows-2">
				<NuxtLink
					v-for="(film, index) in filmsList"
					:key="index"
					class="w-auto"
					:to="`/films/${generateSlug(film.film_name)}`"
				>
					<cover-item>
						<template #card_image>
							<img
								class="h-full w-full object-cover"
								:src="film.film_image"
								alt=""
							/>
						</template>
					</cover-item>
				</NuxtLink>
			</div>

			<div>
				<Button class="text-white bg-gray-500 text-xl hover:bg-gray-500"
					>See the Letterboxd Top 250</Button
				>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useMediaQuery } from '@vueuse/core'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const isMediumScreen = useMediaQuery('(max-width:750px)')

const props = defineProps<{ data: IFilmItem[] }>()
const films = props.data

const filmsList: ComputedRef<IFilmItem[]> = computed(() => {
	if (isMediumScreen.value) {
		return films.slice(0, 10)
	} else {
		return films
	}
})
console.log(films)
</script>

<style scoped>
@media screen and (max-width: 1200px) {
	.holder {
		width: 100%;
		flex-direction: column;
		align-items: center;
		gap: 50px;
	}
	.options_holder {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-template-rows: repeat(2, minmax(0, 1fr));
		width: auto;
	}
}
@media screen and (max-width: 750px) {
	.images_holder {
		display: flex;
		justify-content: center;
		gap: 0px;
		align-items: center;
		flex-wrap: wrap;
	}
	.holder_content {
		width: 100%;
	}
}
@media screen and (max-width: 385px) {
	.any_holder {
		width: 100%;
	}
	.butt {
		font-size: 16px;
	}
}
</style>
