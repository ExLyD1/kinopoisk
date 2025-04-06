<template>
	<div v-if="review && user">
		<div class="total flex">
			<!-- aside author info -->
			<div class="author_data flex items-center gap-3 w-[190px]">
				<!-- avatar -->
				<NuxtLink :to="`/members/${generateSlug(user.user_name)}`">
					<Avatar class="w-7 h-7">
						<AvatarImage :src="user.user_avatar" alt="@unovue" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</NuxtLink>

				<!-- author info -->
				<div class="info">
					<NuxtLink
						:to="`/members/${generateSlug(user.user_name)}`"
						class="hover:text-gray-300 transition-all text-gray-400"
					>
						{{ user.user_name }}
					</NuxtLink>

					<div class="date flex gap-1 items-center text-sm text-gray-600">
						<NuxtLink to="/soon" class="hover:text-blue-400 transition-all">
							{{ getTimeAgo(review.published_date) }}
						</NuxtLink>
						<div class="text-xs" v-if="review.isEdited">Edited</div>
					</div>
				</div>
			</div>

			<!-- comment text -->
			<div class="text text-sm w-[670px]">
				{{ review.review_text }}
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getTimeAgo } from '~/shared/model/funtions/getTimeAgo'

import type { IReview } from '~/shared/model/interfaces/reviewInterface'
import type { IUser } from '~/shared/model/interfaces/userInterface'

const props = defineProps<{ data: IReview }>()
const review = props.data

const user = ref<IUser>()

onMounted(async () => {
	user.value = await $fetch<IUser>(`/api/user/${review.user_id}`)
})
</script>

<style scoped>
@media screen and (max-width: 715px) {
	.total {
		flex-direction: column;
		gap: 5px;
	}
	.author_data {
		width: 100%;
	}
	.info {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.date {
		margin-right: 20px;
	}
	.text {
		width: 100%;
	}
}
</style>
