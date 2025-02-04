<template>
	<div>
		<widget-title>
			<template #text_1>All-time lists</template>
		</widget-title>

		<div class="holder justify-between flex gap-3 mt-4">
			<all-time-item
				v-for="(item, index) in allTimeItemsList"
				:key="index"
				:data="item"
			></all-time-item>
		</div>
	</div>
</template>

<script setup lang="ts">
import { allTimeItemsList } from '../model/allTimeLists'
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
