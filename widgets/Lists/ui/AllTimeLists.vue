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

const filmsListsData = useState<Array<IFilmsList>>('filmsListsData')

const listsData = filmsListsData.value.slice(3, 5).map((list, index) => {
	const films_list = list.films.slice(index * 10 + 20, index * 10 + 30)
	return {
		list,
		films_list,
	}
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
