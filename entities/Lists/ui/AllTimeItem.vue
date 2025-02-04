<template>
	<div class="item_holder flex flex-col w-[448px]">
		<div
			class="images_holder flex items-center -space-x-10 border-4 border-transparent hover:border-green-600 cursor-pointer transition-all rounded w-full h-[128px]"
		>
			<div
				v-for="(image, index) in visibleImages"
				:key="index"
				class="image flex-shrink-0 w-[80px] h-[120px]"
			>
				<img class="h-full w-full object-contain" :src="image" alt="" />
			</div>
		</div>

		<div class="text-white font-medium w-full">{{ data.list_name }}</div>

		<div
			class="flex items-center gap-1 text-gray-500 text-sm font-light w-full"
		>
			<img
				class="inline-block size-6 rounded-full"
				:src="data.avatar"
				alt="Avatar"
			/>

			<div>
				Created By
				<span class="font-medium text-gray-400">{{ data.author_name }}</span>
			</div>

			<div>
				{{ getTimeAgo(data.timeAgoFromPublished) }}
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import type { IAllTimeItem } from '~/widgets/Lists/model/allTimeLists'
import { getTimeAgo } from '~/shared/model/funtions/getTimeAgo'

const props = defineProps<{ data: IAllTimeItem }>()
const data = props.data

const isSmallScreen = useMediaQuery('(max-width: 570px)')
const visibleImages = computed(() => {
	return isSmallScreen.value ? data.images.slice(0, 5) : data.images
})
</script>

<style scoped>
@media screen and (max-width: 950px) {
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -0.1rem;
		margin-right: -0.1rem;
	}
	.item_holder {
		width: 781px;
	}
}
@media screen and (max-width: 820px) {
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -1rem;
		margin-right: -1rem;
	}
	.item_holder {
		width: 536px;
	}
}
@media screen and (max-width: 570px) {
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -0.1rem;
		margin-right: -0.1rem;
	}
	.item_holder {
		width: 397px;
	}
}
@media screen and (max-width: 425px) {
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -1.1rem;
		margin-right: -1.1rem;
	}
	.item_holder {
		width: 285px;
	}
}
</style>
