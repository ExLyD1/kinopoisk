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

		<div
			v-if="listsData.length > 0"
			class="holder justify-between flex gap-3 mt-2"
		>
			<crew-item
				v-for="(list, index) in listsData"
				:key="index"
				:data="list"
			></crew-item>
		</div>
		<LoadingSpinner v-else class="my-5" />
	</div>
</template>

<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface.ts'

const listsData = ref<IFilmsList[]>([])

onMounted(async () => {
	const data = await $fetch<IFilmsList[]>(
		'/api/list/lists?type=popular&quantity=19'
	)
	listsData.value = data.slice(3, 6)
})
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
