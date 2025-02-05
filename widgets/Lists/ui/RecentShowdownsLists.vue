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

const filmsListsData = useState<Array<IFilmsList>>('filmsListsData')

const listsData = filmsListsData.value.slice(0, 3).map((list, index) => {
	const film = list.films[index + 3]
	return {
		list,
		film,
	}
})
</script>

<style scoped>
@media screen and (max-width: 1000px) {
	.holder {
		flex-direction: column;
		gap: 20px;
	}
}
</style>
