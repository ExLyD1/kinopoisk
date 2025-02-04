<template>
	<div>
		<widget-title>
			<template #text_1>Crew lists</template>
			<template #text_2>MORE</template>
		</widget-title>

		<div class="holder justify-between flex gap-3 mt-2">
			<crew-item
				v-for="(item, index) in crewItemsList"
				:key="index"
				:data="item"
			></crew-item>
		</div>
	</div>
</template>

<script setup lang="ts">
import { crewItemsList } from '../model/crewLists'
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
