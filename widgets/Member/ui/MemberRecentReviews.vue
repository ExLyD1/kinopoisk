<template>
	<div>
		<widget-title>
			<template #text_1>
				<NuxtLink :to="memberSectionsLink(user.user_name, 'reviews', 1)"
					>Reviews</NuxtLink
				>
			</template>
		</widget-title>

		<div v-if="finalData.length > 0" class="mt-4">
			<div v-for="(item, index) in finalData">
				<member-recent-review-item :data="item"></member-recent-review-item>

				<div
					v-if="index + 1 !== finalData.length"
					class="border-b border-gray-600 my-4"
				></div>
			</div>
		</div>

		<LoadingSpinner v-else />
	</div>
</template>

<script setup lang="ts">
import type { IUser } from '~/shared/model/interfaces/userInterface'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

import { useMemberStore } from '~/features/Member/model/memberStore'
import { useMediaQuery } from '@vueuse/core'
import type { IReview } from '~/shared/model/interfaces/reviewInterface'

const memberStore = useMemberStore()
const props = defineProps<{ data: IUser }>()
const user = props.data

const finalData = ref<{ review: IReview; film: IFilmItem; user: IUser }[]>([])

onMounted(async () => {
	const reviewsList = await $fetch<IReview[]>(
		`/api/user/${user.id}/reviews?quantity=5`
	)

	const packDataPromised = reviewsList.map(async (review, index) => {
		const film = await $fetch(`/api/movie/by-id/${review.item_id}`)

		return {
			review: review,
			film: film,
			user: user,
		}
	})

	const packData: any = await Promise.all(packDataPromised)

	finalData.value = packData
})
</script>

<style scoped></style>
