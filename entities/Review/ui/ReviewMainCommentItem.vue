<template>
	<div v-if="user" class="text-gray-400 flex gap-5">
		<!-- author data -->
		<div class="flex items-center gap-2 w-[170px]">
			<!-- avatar -->
			<NuxtLink :to="`/members/${generateSlug(user.user_name)}`">
				<Avatar
					class="w-6 h-6 hover:border hover:border-gray-500 transition-all"
				>
					<AvatarImage class="w-6 h-6" :src="user.user_avatar"></AvatarImage>
				</Avatar>
			</NuxtLink>

			<!-- author info -->
			<div>
				<!-- name -->
				<NuxtLink
					:to="`/members/${generateSlug(user.user_name)}`"
					class="text-sm hover:text-gray-300 transition-all"
					>{{ user.user_name }}</NuxtLink
				>

				<!-- published date -->
				<div class="text-gray-500 text-xs">
					{{ getTimeAgo(comment.published_time) }}
				</div>
			</div>
		</div>

		<div class="text-[15px] text-[#99AABB]">{{ comment.comment_text }}</div>
	</div>
</template>

<script setup lang="ts">
import type { IComment } from '~/shared/model/interfaces/commentInterface'
import { Avatar, AvatarImage } from '~/components/ui/avatar'
import { getTimeAgo } from '~/shared/model/funtions/getTimeAgo'
import type { IUser } from '~/shared/model/interfaces/userInterface'

const props = defineProps<{ comment: IComment }>()
const comment = props.comment

const user = ref<IUser>()

onMounted(async () => {
	user.value = await $fetch<IUser>(`/api/user/${comment.author_id}`)
})
</script>

<style scoped></style>
