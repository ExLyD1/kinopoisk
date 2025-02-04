<template>
	<div class="holder_content flex flex-col gap-1">
		<div class="holder_image w-[310px] h-[170px]">
			<img
				class="w-full h-full object-cover rounded"
				:src="data.image"
				alt=""
			/>
		</div>

		<div class="holder_text w-[200px]">
			<div class="font-medium text-white text-lg">{{ data.list_name }}</div>

			<div class="line-clamp-2">{{ data.description }}</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IRecentShowDownsItem } from '~/widgets/Lists/model/recentShowdownsLists.ts'
const props = defineProps<{ data: IRecentShowDownsItem }>()
const data = props.data
</script>

<style scoped>
@media screen and (max-width: 1000px) {
	.holder_content {
		flex-direction: row;
		gap: 10px;
	}
}
@media screen and (max-width: 540px) {
	.holder_content {
		flex-direction: column;
		gap: 6px;
		width: 310px;
	}
	.holder_text {
		width: 100%;
	}
}
@media screen and (max-width: 350px) {
	.holder_image,
	.holder_content {
		width: 280px;
	}
}
</style>
