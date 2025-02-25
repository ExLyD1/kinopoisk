<template>
	<div>
		<div class="total flex">
			<!-- aside author info -->
			<div class="author_data flex items-center gap-3 w-[190px]">
				<!-- avatar -->
				<NuxtLink :to="`members/${generateSlug(review.author_name)}`">
					<Avatar class="w-7 h-7">
						<AvatarImage :src="review.author_avatar" alt="@unovue" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</NuxtLink>

				<!-- author info -->
				<div class="info">
					<NuxtLink
						:to="`members/${generateSlug(review.author_name)}`"
						class="hover:text-gray-300 transition-all text-gray-400"
					>
						{{ review.author_name }}
					</NuxtLink>

					<div class="date flex gap-1 items-center text-sm text-gray-600">
						<NuxtLink to="soon" class="hover:text-blue-400 transition-all">
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

const props = defineProps<{ data: IReview }>()
const review = props.data
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
