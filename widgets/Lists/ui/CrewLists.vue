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

const filmsListsData = useState<Array<IFilmsList>>('filmsListsData')

const listsData = filmsListsData.value
	.slice(0, 3)
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
