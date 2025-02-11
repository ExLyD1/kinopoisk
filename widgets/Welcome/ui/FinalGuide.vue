<template>
	<div class="flex justify-between w-[1200px] m-auto holder px-3">
		<div class="flex flex-col gap-8 items-center w-[375px]">
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
				<Button class="text-white bg-gray-500 text-xl hover:bg-gray-500"
					>Read our IMDb migration guide</Button
				>
			</div>
		</div>

		<div class="flex flex-col gap-8 items-center w-[730px]">
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
					v-for="(film, index) in list[0].films"
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
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'

const isMediumScreen = useMediaQuery('(max-width:750px)')

const { data: filmsListsData } = await useAsyncData<IFilmsList[]>(
	'filmsListsData',
	() => $fetch<IFilmsList[]>('/api/getFilmsListsData?quantity=20')
)

const list: any = ref<{ list: IFilmsList; films: any[] }[]>([])

watchEffect(async () => {
	if (!filmsListsData.value || filmsListsData.value.length === 0) return

	const listData = filmsListsData.value[0] // Берем первый элемент из массива

	// Запрос для получения данных о фильмах
	const films = await Promise.all(
		(isMediumScreen.value
			? listData.films.slice(0, 10)
			: listData.films.slice(0, 20)
		).map(film_id => $fetch(`/api/getFilmDetails?id=${film_id}`))
	)

	list.value = [{ ...listData, films }]
})
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
		grid-template-columns: repeat(5, minmax(0, 1fr));
		grid-template-rows: repeat(2, minmax(0, 1fr));
	}
}
</style>
