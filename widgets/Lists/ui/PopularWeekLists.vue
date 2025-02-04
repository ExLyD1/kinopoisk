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

const filmsListsData = useState<Array<IFilmsList>>('filmsListsData')

const listsData = filmsListsData.value.slice(0, 3).map((list, index) => {
	const films_list = list.films.slice(index * 5, index * 5 + 5)
	return {
		list,
		films_list,
	}
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
