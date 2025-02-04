<template>
	<div class="flex flex-row justify-between gap-3 flex-wrap">
		<advantage-card
			v-for="(card, index) in advantageCardsList"
			:key="index"
			class="card"
			:data="card"
		>
		</advantage-card>
	</div>
</template>

<script setup lang="ts">
// * =====================================
// * REFACTORED = TRUE
// * =====================================
import { advantageCardsList } from '../model/advantagesList'
</script>

<style scoped>
@media screen and (max-width: 1355px) {
	.card {
		width: 49%;
	}
}
@media screen and (max-width: 700px) {
	.card {
		width: 100%;
	}
}
</style>
