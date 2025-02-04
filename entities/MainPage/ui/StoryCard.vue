<template>
	<div class="w-[300px] flex flex-col rounded">
		<NuxtLink to="/soon" class="w-full h-[150px]">
			<img
				:src="story.story_image"
				alt="title_img"
				class="h-full w-full object-fill"
			/>
		</NuxtLink>

		<div class="bg-gray-800 flex flex-col p-3 gap-3">
			<NuxtLink to="/soon" class="flex flex-row gap-2 items-center">
				<Avatar>
					<AvatarImage :src="story.user_avatar" alt="author_img" />
					<AvatarFallback>author_img</AvatarFallback>
				</Avatar>
				<div>
					{{ story.user_name }}
				</div>
			</NuxtLink>

			<NuxtLink to="/soon" class="text-white text-2xl line-clamp-2">
				{{ story.story_name }}
			</NuxtLink>

			<div class="text-sm text-gray-400 line-clamp-4 w-full">
				{{ story.story_text }}
			</div>

			<NuxtLink
				to="/soon"
				class="font-medium hover:text-blue-400 transition-all cursor-pointer"
			>
				Read Story
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const props = defineProps<{
	data: {
		story_image: string
		story_name: string
		story_text: string
		user_avatar: string
		user_name: string
	}
}>()
const story = props.data
</script>

<style scoped></style>
