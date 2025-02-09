<template>
	<div>
		<widget-title>
			<template #text_1>
				<NuxtLink to="/soon">Recent Showdowns</NuxtLink>
			</template>
			<template #text_2>
				<NuxtLink to="/soon">MORE</NuxtLink>
			</template>
		</widget-title>

		<div class="holder flex gap-3 mt-4">
			<recent-showdowns-item
				v-for="(item, index) in listsData"
				:key="index"
				:data="item"
			></recent-showdowns-item>
		</div>
	</div>
</template>
<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const { data: filmsListsData } = await useAsyncData<IFilmsList[]>(
	'filmsListsData',
	() => $fetch<IFilmsList[]>('/api/getFilmsListsData?quantity=3')
)

const listsData = ref<{ list: IFilmsList; film: IFilmItem | null }[]>([])

watch(
	filmsListsData,
	async newLists => {
		if (!newLists) return

		console.log('Films lists:', newLists)

		const resolvedLists = await Promise.all(
			newLists.map(async list => {
				// Получаем фильм с сервера, ожидаем, что film будет либо объектом, либо null
				const film = await $fetch<IFilmItem | null>(
					`/api/getFilmsList?id=${list.films[0]}`
				)

				// Проверяем, что фильм существует и соответствует типу IFilmItem
				if (film && film !== undefined) {
					return { list, film }
				}
				return { list, film: null }
			})
		)

		listsData.value = resolvedLists
	},
	{ immediate: true }
)
</script>

<style scoped>
@media screen and (max-width: 1000px) {
	.holder {
		flex-direction: column;
		gap: 20px;
	}
}
</style>
