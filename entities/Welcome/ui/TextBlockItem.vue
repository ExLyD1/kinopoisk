<template>
	<div class="item_holder w-[375px]">
		<div class="title text-white text-xl font-bold pb-4">
			<slot name="title"></slot>
		</div>

		<div class="content text-gray-400 text-lg">
			<slot name="text_content"></slot>
		</div>

		<div class="button_holder">
			<Button
				v-if="$slots.button_text"
				class="text-white bg-green-500 hover:bg-green-700 mt-5"
			>
				<slot name="button_text"></slot>
			</Button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<style scoped>
@media screen and (max-width: 1270px) {
	.item_holder {
		width: 100%;
	}
	.title {
		text-align: center;
	}
	.content {
		text-align: center;
		padding: 0 50px;
	}
	.button_holder {
		display: flex;
		justify-content: center;
	}
}
@media screen and (max-width: 530px) {
	.content {
		font-size: 16px;
		padding: 0;
	}
}
</style>
