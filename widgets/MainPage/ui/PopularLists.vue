<template>
	<div class="w-[250px] holder">
		<widget-title>
			<template #text_1>
				<NuxtLink to="/lists/total">Popular lists</NuxtLink>
			</template>
			<template #text_2>
				<NuxtLink to="/lists/total">MORE</NuxtLink>
			</template>
		</widget-title>

		<div class="flex flex-col gap-10">
			<list-item
				v-for="(item, index) in listsData"
				:key="index"
				:data="item"
			></list-item>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface.ts'

const { data: filmsListsData } = await useAsyncData<IFilmsList[]>(
	'filmsListsData-5',
	() => $fetch<IFilmsList[]>('/api/getFilmsListsData?quantity=5')
)

const listsData = ref<{ list: IFilmsList; films_list: any[] }[]>([])

watchEffect(async () => {
	if (!filmsListsData.value) return

	const resolvedFilmsLists = await Promise.all(
		filmsListsData.value.map(async (list, index) => {
			// Запрос для каждого фильма

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

	listsData.value = resolvedFilmsLists.filter(list => list !== null)
})
</script>

<style scoped>
@media screen and (max-width: 860px) {
	.holder {
		width: 100%;
	}
	.image {
		width: 100px;
	}
}
</style>
