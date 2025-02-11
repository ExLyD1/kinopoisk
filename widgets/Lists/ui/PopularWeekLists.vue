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

		<div v-if="listsData.length > 0" class="holder flex flex-row gap-10">
			<popular-week-lists-item
				v-for="(list, index) in listsData"
				:key="index"
				:data="list"
			></popular-week-lists-item>
		</div>
		<LoadingSpinner v-else class="my-10" />
	</div>
</template>

<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface.ts'

const listsData = ref<IFilmsList[]>([])

onMounted(async () => {
	listsData.value = await $fetch<IFilmsList[]>(
		'/api/list/lists?type=popular&quantity=3'
	)
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
