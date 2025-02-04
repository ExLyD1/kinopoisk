<template>
	<div class="holder flex flex-row gap-3 w-full">
		<div
			class="images_holder flex items-center -space-x-10 border-4 border-transparent hover:border-green-600 cursor-pointer transition-all rounded h-[128px]"
		>
			<div
				v-for="(image, index) in data.images"
				:key="index"
				class="image flex-shrink-0 w-[80px] h-[120px]"
			>
				<img class="h-full w-full object-contain" :src="image" alt="" />
			</div>
		</div>

		<div class="data_holder flex flex-col gap-3">
			<div class="font-medium text-white text-xl">{{ data.list_name }}</div>

			<div class="flex gap-3 text-sm">
				<div class="flex gap-1">
					<Avatar class="w-4 h-4">
						<AvatarImage :src="data.avatar" alt="@radix-vue" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>

					<div class="whitespace-nowrap">{{ data.author_name }}</div>
				</div>

				<div class="flex gap-1">
					{{ getKNumber(data.films) }}
					<div>films</div>
				</div>
				<div class="flex gap-1">
					<img class="w-4 h-4" src="@/shared/ui/icons/favorite.png" alt="" />
					{{ getKNumber(data.likes) }}
				</div>
				<div class="flex gap-1">
					<img class="w-4 h-4" src="@/shared/ui/icons/comment.png" alt="" />
					{{ getKNumber(data.comments) }}
				</div>
			</div>

			<div class="text-lg line-clamp-2">
				{{ data.description }}
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { getKNumber } from '~/shared/model/funtions/getKNumber'
import type { IRecentlyLikedListsItem } from '~/widgets/Lists/model/recentlyLikedLists'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const props = defineProps<{ data: IRecentlyLikedListsItem }>()
const data = props.data
</script>

<style scoped>
@media screen and (max-width: 650px) {
	.holder {
		flex-direction: column;
		gap: 6px;
	}
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -0.5rem;
		margin-right: -0.5rem;
	}
	.images_holder {
		width: 352px;
	}
	.data_holder {
		gap: 6px;
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
