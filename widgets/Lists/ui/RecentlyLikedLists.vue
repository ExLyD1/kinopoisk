<template>
	<div class="w-[600px] holder">
		<widget-title>
			<template #text_1>
				<div class="text-[#9ab] cursor-text">Recently liked</div>
			</template>
		</widget-title>

		<div
			v-for="(item, index) in listsData"
			:key="index"
			class="flex flex-col gap-2 w-full"
		>
			<recently-liked-item :data="item" class="mt-2 mb-2"></recently-liked-item>

			<div
				v-if="index !== listsData.length - 1"
				class="border-b border-gray-700"
			></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'

const { data: filmsListsData } = await useAsyncData<IFilmsList[]>(
	'filmsListsData',
	() => $fetch<IFilmsList[]>('/api/getFilmsListsData?quantity=18')
)

const listsData = ref<{ list: IFilmsList; films_list: any[] }[]>([])

watchEffect(async () => {
	if (!filmsListsData.value) return

	const resolvedFilmsLists = await Promise.all(
		filmsListsData.value.map(async list => {
			if (!list.films || list.films.length === 0) return null

			const films_list = await Promise.all(
				list.films.map(film_id => $fetch(`/api/getFilmsList?id=${film_id}`))
			)

			return {
				list,
				films_list,
			}
		})
	)

	listsData.value = resolvedFilmsLists
		.filter(list => list !== null)
		.slice(12, 18)
})
</script>

<style scoped>
@media screen and (max-width: 1000px) {
	.holder {
		width: 100%;
	}
}
</style>
