<template>
	<div>
		<widget-title>
			<template #text_1>Recent Showdowns</template>
			<template #text_2>MORE</template>
		</widget-title>

		<div class="holder flex gap-3 mt-4">
			<recent-showdowns-item
				v-for="(item, index) in recentShowdownsItemsList"
				:key="index"
				:data="item"
			></recent-showdowns-item>
		</div>
	</div>
</template>

<script setup lang="ts">
import { recentShowdownsItemsList } from '../model/recentShowdownsLists'
</script>

<style scoped>
@media screen and (max-width: 1000px) {
	.holder {
		flex-direction: column;
		gap: 20px;
	}
}
</style>
