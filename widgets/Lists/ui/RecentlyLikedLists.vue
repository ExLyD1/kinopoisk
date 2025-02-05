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

const filmsListsData = useState<Array<IFilmsList>>('filmsListsData')

const listsData = filmsListsData.value
	.slice(3, 13)
	.map((list, index) => {
		const films_list = list.films.slice(index * 5, index * 5 + 5)
		return {
			list,
			films_list,
		}
	})
	.reverse()
</script>

<style scoped>
@media screen and (max-width: 1000px) {
	.holder {
		width: 100%;
	}
}
</style>
