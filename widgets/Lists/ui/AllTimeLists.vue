<template>
	<div>
		<widget-title>
			<template #text_1>
				<div class="text-[#9ab] cursor-text">All-time lists</div>
			</template>
		</widget-title>

		<div class="holder justify-between flex gap-3 mt-4">
			<all-time-item
				v-for="(item, index) in listsData"
				:key="index"
				:data="item"
			></all-time-item>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'

const { data: filmsListsData } = await useAsyncData<IFilmsList[]>(
	'filmsListsData',
	() => $fetch<IFilmsList[]>('/api/getFilmsListsData?quantity=5')
)

const listsData = ref<{ list: IFilmsList; films_list: any[] }[]>([])

watchEffect(async () => {
	if (!filmsListsData.value) return

	const resolvedFilmsLists = await Promise.all(
		filmsListsData.value
			.slice(3, 5) // Берем элементы с 3 по 5
			.map(async (list, index) => {
				if (!list.films || list.films.length === 0) return null

				// Запрос для каждого фильма в срезе списка
				const films_list = await Promise.all(
					list.films
						.slice(index * 10 + 20, index * 10 + 30) // Берем фильмы с 20-го по 30-й
						.map(film_id => $fetch(`/api/getFilmsList?id=${film_id}`))
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
@media screen and (max-width: 950px) {
	.holder {
		flex-direction: column;
		gap: 25px;
	}
}
@media screen and (max-width: 625px) {
	.holder {
		flex-direction: column;
		gap: 20px;
	}
}
</style>
