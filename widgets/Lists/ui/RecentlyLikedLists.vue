<template>
	<div class="w-[600px] holder">
		<widget-title>
			<template #text_1>
				<div class="text-[#9ab] cursor-text">Recently liked</div>
			</template>
		</widget-title>

		<div v-if="listsData.length > 0">
			<div
				v-for="(list, index) in listsData"
				:key="index"
				class="flex flex-col gap-2 w-full"
			>
				<recently-liked-item
					:data="list"
					class="mt-2 mb-2"
				></recently-liked-item>

				<div
					v-if="index !== listsData.length - 1"
					class="border-b border-gray-700"
				></div>
			</div>
		</div>
		<LoadingSpinner v-else />
	</div>
</template>

<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface.ts'

const listsData = ref<IFilmsList[]>([])

onMounted(async () => {
	const data = await $fetch<IFilmsList[]>(
		'/api/list/lists?type=popular&quantity=9'
	)
	listsData.value = data.slice(3, 9)
})
</script>

<style scoped>
@media screen and (max-width: 1000px) {
	.holder {
		width: 100%;
	}
}
</style>
