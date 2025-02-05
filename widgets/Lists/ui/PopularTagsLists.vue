<template>
	<div class="holder w-[280px]">
		<widget-title>
			<template #text_1>
				<div class="text-[#9ab] cursor-text">Popular tags</div>
			</template>
		</widget-title>

		<div class="flex flex-row flex-wrap gap-2">
			<div v-for="(tag, index) in popularTagsListsItemsList" :key="index">
				<popular-tags-lists-item
					:data="tag"
					class="mr-[12px]"
				></popular-tags-lists-item>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { popularTagsListsItemsList } from '../model/popularTagsLists'
</script>

<style scoped>
@media screen and (max-width: 1000px) {
	.holder {
		width: 100%;
	}
}
</style>
