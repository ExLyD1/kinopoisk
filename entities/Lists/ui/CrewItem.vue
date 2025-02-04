<template>
	<div class="item_holder flex flex-col w-[280px]">
		<div
			class="images_holder flex items-center -space-x-8 border-4 border-transparent hover:border-green-600 cursor-pointer transition-all rounded w-full h-[128px]"
		>
			<div
				v-for="(image, index) in data.images"
				:key="index"
				class="image flex-shrink-0 w-[80px] h-[120px]"
			>
				<img class="h-full w-full object-contain" :src="image" alt="" />
			</div>
		</div>

		<div class="text-white font-medium p-1">
			{{ data.list_name }}
		</div>
	</div>
</template>

<script setup lang="ts">
import type { ICrewItem } from '~/widgets/Lists/model/crewLists'
const props = defineProps<{ data: ICrewItem }>()
const data = props.data
</script>

<style scoped>
@media screen and (max-width: 620px) {
	.item_holder {
		flex-direction: column;
	}
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -0.1rem;
		margin-right: -0.1rem;
	}
	.images_holder {
		width: 397px;
	}
}
@media screen and (max-width: 430px) {
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -0.5rem;
		margin-right: -0.5rem;
	}
	.images_holder {
		width: 352px;
	}
}
@media screen and (max-width: 390px) {
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -1rem;
		margin-right: -1rem;
	}
	.images_holder {
		width: 296px;
	}
}
</style>
