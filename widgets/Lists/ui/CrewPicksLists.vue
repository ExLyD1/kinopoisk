<template>
	<div class="holder w-[280px]">
		<widget-title>
			<template #text_1>
				<div class="text-[#9ab] cursor-text">Crew picks</div>
			</template>
		</widget-title>

		<div v-if="listsData.length > 0">
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
		<LoadingSpinner v-else class="my-5" />
	</div>
</template>

<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface.ts'

const listsData = ref<IFilmsList[]>([])

onMounted(async () => {
	const data = await $fetch<IFilmsList[]>(
		'/api/list/lists?type=popular&quantity=13'
	)
	listsData.value = data.slice(9, 13)
})
</script>

<style scoped>
@media screen and (max-width: 1000px) {
	.holder {
		width: 100%;
	}
}
</style>
