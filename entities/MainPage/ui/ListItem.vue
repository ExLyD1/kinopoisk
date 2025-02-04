<template>
	<div class="item_holder flex flex-col gap-1 w-[250px]">
		<NuxtLink
			:to="`/members/${data.author_name
				.toLowerCase()
				.replace(/\s+/g, '-')}/lists/${data.list_name
				.toLowerCase()
				.replace(/\s+/g, '-')}`"
		>
			<div
				class="images_holder flex items-center -space-x-10 border-4 border-transparent hover:border-green-600 cursor-pointer transition-all rounded h-[128px]"
			>
				<div
					v-for="(image, index) in data.films_images"
					:key="index"
					class="image flex-shrink-0 w-[80px] h-[120px]"
				>
					<img class="h-full w-full object-contain" :src="image" alt="" />
				</div>
			</div>
		</NuxtLink>

		<NuxtLink
			:to="`/members/${data.author_name
				.toLowerCase()
				.replace(/\s+/g, '-')}/lists/${data.list_name
				.toLowerCase()
				.replace(/\s+/g, '-')}`"
		>
			<div class="text-white">
				{{ data.list_name }}
			</div>
		</NuxtLink>

		<div class="flex items-center flex-row gap-4">
			<div class="flex items-center gap-2">
				<NuxtLink
					:to="`/members/${data.author_name
						.toLowerCase()
						.replace(/\s+/g, '-')}`"
				>
					<Avatar class="w-8 h-8">
						<AvatarImage :src="data.author_avatar" />
						<AvatarFallback>Author_Image</AvatarFallback>
					</Avatar>
				</NuxtLink>

				<NuxtLink
					:to="`/members/${data.author_name
						.toLowerCase()
						.replace(/\s+/g, '-')}`"
				>
					<div class="text-gray-500 whitespace-nowrap">
						{{ data.author_name }}
					</div>
				</NuxtLink>
			</div>

			<NuxtLink
				:to="`/members/${data.author_name
					.toLowerCase()
					.replace(/\s+/g, '-')}/lists/${data.list_name
					.toLowerCase()
					.replace(/\s+/g, '-')}/likes`"
			>
				<div class="flex flex-row items-center gap-1">
					<img class="h-3 w-3" src="@/shared/ui/icons/favorite.png" alt="" />
					<div class="pr-2">{{ getKNumber(data.likes) }}</div>
				</div>
			</NuxtLink>

			<NuxtLink
				:to="`/members/${data.author_name
					.toLowerCase()
					.replace(/\s+/g, '-')}/lists/${data.list_name
					.toLowerCase()
					.replace(/\s+/g, '-')}`"
			>
				<div class="flex flex-row items-center gap-1">
					<img class="h-3 w-3" src="@/shared/ui/icons/comment.png" alt="" />
					<div class="pr-2">{{ getKNumber(data.comments_quontity) }}</div>
				</div>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getKNumber } from '~/shared/model/funtions/getKNumber'

const props = defineProps<{
	data: {
		author_avatar: string
		author_name: string
		comments_quontity: number
		likes: number
		films_images: Array<string>
		list_name: string
	}
}>()
const data = props.data
</script>

<style scoped>
div {
	box-sizing: border-box;
	transition: border-color 0.3s ease-in-out;
}
@media screen and (max-width: 860px) {
	.item_holder {
		width: 100%;
	}

	.images_holder > :not([hidden]) ~ :not([hidden]) {
		margin-right: -0.0005rem;
		margin-left: -0.0005rem;
	}
	.images_holder {
		width: 458px;
		height: 143px;
	}
	.image {
		height: 140px;
		width: 90px;
	}
}
@media screen and (max-width: 540px) {
	.images_holder > :not([hidden]) ~ :not([hidden]) {
		margin-right: -1rem;
		margin-left: -1rem;
	}
	.images_holder {
		width: 346px;
	}
}
@media screen and (max-width: 410px) {
	.images_holder > :not([hidden]) ~ :not([hidden]) {
		margin-right: -1.7rem;
		margin-left: -1.7rem;
	}
	.images_holder {
		width: 268px;
	}
}
</style>
