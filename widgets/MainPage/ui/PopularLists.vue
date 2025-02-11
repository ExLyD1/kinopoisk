<template>
	<div class="w-[250px] holder">
		<widget-title>
			<template #text_1>
				<NuxtLink to="/lists/total">Popular lists</NuxtLink>
			</template>
			<template #text_2>
				<NuxtLink to="/lists/total">MORE</NuxtLink>
			</template>
		</widget-title>

		<div v-if="listsData.length > 0" class="flex flex-col gap-10">
			<list-item
				v-for="(item, index) in listsData"
				:key="index"
				:data="item"
			></list-item>
		</div>
		<LoadingSpinner v-else />
	</div>
</template>

<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface.ts'

const listsData = ref<IFilmsList[]>([])

onMounted(async () => {
	listsData.value = await $fetch<IFilmsList[]>(
		'/api/list/lists?type=popular&quantity=5'
	)
})
</script>

<style scoped>
@media screen and (max-width: 860px) {
	.holder {
		width: 100%;
	}
	.image {
		width: 100px;
	}
}
</style>
