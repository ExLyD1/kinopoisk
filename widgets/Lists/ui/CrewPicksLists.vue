<template>
	<div class="holder w-[280px]">
		<widget-title>
			<template #text_1>Crew picks</template>
		</widget-title>

		<div
			v-for="(item, index) in crewPickListsItemsList"
			:key="index"
			class="flex flex-col gap-2 w-full"
		>
			<crew-pick-item :data="item" class="mt-2 mb-2"></crew-pick-item>

			<div
				v-if="index !== crewPickListsItemsList.length - 1"
				class="border-b border-gray-700"
			></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { crewPickListsItemsList } from '../model/crewPickLists'
</script>

<style scoped>
@media screen and (max-width: 1000px) {
	.holder {
		width: 100%;
	}
}
</style>
