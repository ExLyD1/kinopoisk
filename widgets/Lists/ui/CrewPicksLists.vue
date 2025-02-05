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

const filmsListsData = useState<Array<IFilmsList>>('filmsListsData')

const listsData = filmsListsData.value.slice(13, 18).map((list, index) => {
	const films_list = list.films.slice(index * 5 + 20, index * 5 + 5 + 20)
	return {
		list,
		films_list,
	}
})
</script>

<style scoped>
@media screen and (max-width: 1000px) {
	.holder {
		width: 100%;
	}
}
</style>
