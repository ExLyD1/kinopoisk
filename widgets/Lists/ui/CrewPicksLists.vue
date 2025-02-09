<template>
	<div class="holder w-[280px]">
		<widget-title>
			<template #text_1>
				<div class="text-[#9ab] cursor-text">Crew picks</div>
			</template>
		</widget-title>

		<div
			v-for="(item, index) in listsData"
			:key="index"
			class="flex flex-col gap-2 w-full"
		>
			<crew-pick-item :data="item" class="mt-2 mb-2"></crew-pick-item>

			<div
				v-if="index !== listsData.length - 1"
				class="border-b border-gray-700"
			></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const { data: filmsListsData } = await useAsyncData<IFilmsList[]>(
	'filmsListsData',
	() => $fetch<IFilmsList[]>('/api/getFilmsListsData?quantity=18') // Убираем строгую типизацию для обхода ошибки
)

const listsData = ref<{ list: IFilmsList; films_list: any[] }[]>([])

watchEffect(async () => {
	if (!filmsListsData.value) return

	const resolvedFilmsLists = await Promise.all(
		filmsListsData.value
			.slice(13, 18) // Берем с 13 по 18 элемент
			.map(async (list, index) => {
				if (!list.films || list.films.length === 0) return null

				// Запрос для каждого фильма в срезе списка
				const films_list = await Promise.all(
					list.films
						.slice(index * 5 + 20, index * 5 + 5 + 20) // Берем фильмы с 20-го элемента
						.map(film_id =>
							$fetch<IFilmItem>(`/api/getFilmsList?id=${film_id}`)
						) // Убираем строгую типизацию
				)

				return {
					list,
					films_list,
				}
			})
	)

	// Отфильтровываем null значения
	listsData.value = resolvedFilmsLists.filter(list => list !== null)
})
</script>

<style scoped>
@media screen and (max-width: 1000px) {
	.holder {
		width: 100%;
	}
}
</style>
