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

		<div v-if="listsData.length > 0" class="holder flex gap-3 mt-4">
			<recent-showdowns-item
				v-for="(list, index) in listsData"
				:key="index"
				:data="list"
			></recent-showdowns-item>
		</div>
		<LoadingSpinner v-else class="my-5" />
	</div>
</template>
<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface.ts'

const listsData = ref<IFilmsList[]>([])

onMounted(async () => {
	const data = await $fetch<IFilmsList[]>(
		'/api/list/lists?type=popular&quantity=16'
	)
	listsData.value = data.slice(13, 16)
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
