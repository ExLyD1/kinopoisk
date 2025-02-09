<template>
	<div>
		<widget-title>
			<template #text_1>
				<NuxtLink to="/soon">Crew lists</NuxtLink>
			</template>
			<template #text_2>
				<NuxtLink to="/soon">MORE</NuxtLink>
			</template>
		</widget-title>

		<div class="holder justify-between flex gap-3 mt-2">
			<crew-item
				v-for="(item, index) in listsData"
				:key="index"
				:data="item"
			></crew-item>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'
import type { Ref } from 'vue'

// Явное указание типа данных, которые вернутся из $fetch
const { data: filmsListsData } = await useAsyncData<IFilmsList[]>(
	'filmsListsData',
	() => $fetch<IFilmsList[]>('/api/getFilmsListsData?quantity=3')
)

// Объявление переменной для списков с типом Ref
const listsData = ref<{ list: IFilmsList; films_list: any[] }[]>([])

watchEffect(async () => {
	if (!filmsListsData.value) return

	const resolvedFilmsLists = await Promise.all(
		filmsListsData.value.slice(0, 3).map(async (list, index) => {
			if (!list.films || list.films.length === 0) return null

			// Запрос для каждого фильма с типизацией
			const films_list = await Promise.all(
				list.films
					.slice(index * 5, index * 5 + 5)
					.map(film_id => $fetch(`/api/getFilmsList?id=${film_id}`))
			)

			return {
				list,
				films_list,
			}
		})
	)

	// Отфильтровываем null и переворачиваем
	listsData.value = resolvedFilmsLists.filter(list => list !== null).reverse()
})
</script>

<style scoped>
@media screen and (max-width: 1000px) {
	.holder {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: start;
		gap: 20px;
	}
}
@media screen and (max-width: 625px) {
	.holder {
		flex-direction: column;
		gap: 20px;
	}
}
</style>
