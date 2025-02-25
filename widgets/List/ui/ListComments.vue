<template>
	<div>
		<widget-title>
			<template #text_1>
				{{ getKNumber(list.comments_quantity) }} Comments
			</template>
		</widget-title>

		<div class="mt-6 flex flex-col gap-5 content_holder">
			<div v-for="(review, index) in listReviews">
				<list-comment-item :data="review"></list-comment-item>

				<div class="w-full border-b border-gray-800 mt-5 line"></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { getKNumber } from '~/shared/model/funtions/getKNumber'
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'
import type { IReview } from '~/shared/model/interfaces/reviewInterface'

const props = defineProps<{ data: IFilmsList }>()
const list = props.data

const listReviews: Ref<IReview[] | []> = ref([])

onMounted(async () => {
	const reviews = await $fetch<IReview[]>(`/api/list/${list.id}/reviews`)

	listReviews.value = reviews
})
</script>

<style scoped>
@media screen and (max-width: 715px) {
	.content_holder {
		gap: 15px;
	}
	.line {
		margin-top: 15px;
	}
}
</style>
