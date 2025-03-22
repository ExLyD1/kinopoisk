<template>
	<div class="text-gray-400 mt-24">
		<!-- header comments  -->
		<div class="w-full pb-2 border-b border-gray-700">
			<div>{{ getKNumber(review.review_comments_users.length) }} Comments</div>
		</div>

		<div class="mt-3">
			<div v-for="(comment, index) in commentsList" :key="index">
				<review-main-comment-item :comment="comment"></review-main-comment-item>

				<div class="border-b border-gray-800 my-3"></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { getKNumber } from '~/shared/model/funtions/getKNumber'
import type { IReview } from '~/shared/model/interfaces/reviewInterface'
import type { IComment } from '~/shared/model/interfaces/commentInterface'

const props = defineProps<{ review: IReview }>()
const review = props.review

const commentsList = ref<IComment[]>()

onMounted(async () => {
	commentsList.value = await $fetch<IComment[]>(
		`/api/review/${review.id}/comments`
	)
})
</script>

<style scoped></style>
