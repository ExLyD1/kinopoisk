<template>
	<div>
		<widget-title>
			<template #text_1>
				<div class="text-[#9ab] cursor-text">All-time lists</div>
			</template>
		</widget-title>

		<div
			v-if="listsData.length > 0"
			class="holder justify-between flex gap-3 mt-4"
		>
			<all-time-item
				v-for="(item, index) in listsData"
				:key="index"
				:data="item"
			></all-time-item>
		</div>
		<LoadingSpinner v-else class="my-5" />
	</div>
</template>

<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface.ts'

const listsData = ref<IFilmsList[]>([])

onMounted(async () => {
	const data = await $fetch<IFilmsList[]>(
		'/api/list/lists?type=popular&quantity=8'
	)
	listsData.value = data.slice(6, 8)
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
