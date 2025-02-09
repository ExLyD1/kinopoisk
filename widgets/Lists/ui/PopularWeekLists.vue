<template>
	<div>
		<widget-title>
			<template #text_1>
				<NuxtLink to="/lists/total">Popular lists</NuxtLink>
			</template>
			<template #text_2>
				<NuxtLink to="/lists/total">MORE</NuxtLink>
			</template>
		</widget-title>

		<div class="holder flex flex-row gap-10">
			<popular-week-lists-item
				v-for="(list, index) in listsData"
				:key="index"
				:data="list"
			></popular-week-lists-item>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'

const { data: filmsListsData } = await useAsyncData<IFilmsList[]>(
	'filmsListsData',
	() => $fetch<IFilmsList[]>('/api/getFilmsListsData?quantity=3')
)

const listsData = ref<{ list: IFilmsList; films_list: any[] }[]>([])

watchEffect(async () => {
	if (!filmsListsData.value) return

	const resolvedFilmsLists = await Promise.all(
		filmsListsData.value.map(async list => {
			if (!list.films || list.films.length === 0) return null

			const films_list = await Promise.all(
				list.films.map(film_id =>
					$fetch<any>(`/api/getFilmsList?id=${film_id}`)
				)
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
@media screen and (max-width: 1000px) {
	.holder {
		flex-wrap: wrap;
	}
}
@media screen and (max-width: 800px) {
	.holder {
		flex-wrap: nowrap;
		flex-direction: column;
	}
}
</style>
