<template>
	<div v-if="review && film && user" class="flex flex-row gap-3">
		<NuxtLink
			:to="`/members/${generateSlug(user.user_name)}`"
			class="rounded-full border-gray-400 w-11 h-11"
		>
			<img class="rounded-full" :src="user.user_avatar" alt="" />
		</NuxtLink>

		<div class="flex flex-col gap-3">
			<div class="author_holder flex gap-2">
				<div class="flex items-center gap-2">
					<NuxtLink
						:to="`/members/${generateSlug(
							user.user_name
						)}/reviews/${generateSlug(film.film_name)}`"
						class="flex gap-1"
					>
						<div class="text-gray-600 text-sm">Review by</div>
						<div class="text-gray-500 font-medium text-sm">
							{{ user.user_name }}
						</div>
					</NuxtLink>
				</div>

				<!-- Stars Rating -->
				<div v-if="ratingIcons !== undefined" class="flex items-center">
					<svg
						v-for="(icon, index) in ratingIcons"
						:key="index"
						class="shrink-0 size-5"
						:class="
							icon
								? 'text-yellow-400 dark:text-yellow-600'
								: 'text-gray-300 dark:text-neutral-600'
						"
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path
							d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
						></path>
					</svg>
				</div>

				<!-- comments -->
				<NuxtLink
					:to="`/members/${generateSlug(user.user_name)}/reviews/${generateSlug(
						film.film_name
					)}`"
					class="flex flex-row items-center gap-1"
				>
					<img class="h-4 w-4" src="/public/images/comment.png" alt="" />
					{{ getKNumber(review.review_comments) }}
				</NuxtLink>
			</div>

			<!-- review text -->
			<div class="text-gray-400">
				{{ review.review_text }}
			</div>

			<!-- likes -->
			<div class="flex gap-4">
				<NuxtLink
					:to="`/members/${generateSlug(user.user_name)}/reviews/${generateSlug(
						film.film_name
					)}/likes`"
					class="text-gray-500 flex items-center flex-row gap-1"
				>
					<img class="w-5 h-5" src="/public/images/favorite.png" alt="" />
					<div>{{ getKNumber(review.review_likes) }}</div>
					<p>likes</p>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { getKNumber } from '~/shared/model/funtions/getKNumber'
import { getRatingIcons } from '~/shared/model/funtions/getRatingIcon'

import type { IReview } from '~/shared/model/interfaces/reviewInterface'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import type { IUser } from '~/shared/model/interfaces/userInterface'

const props = defineProps<{
	data: IReview
}>()
const review = props.data

const ratingIcons = ref<boolean[] | undefined>()
if (review.review_rate) {
	ratingIcons.value = getRatingIcons(review.review_rate)
} else {
	ratingIcons.value = undefined
}

const film = ref<IFilmItem>()
const user = ref<IUser>()

onMounted(async () => {
	film.value = await $fetch<IFilmItem>(`/api/movie/by-id/${review.item_id}`)
	user.value = await $fetch<IUser>(`/api/user/${review.user_id}`)
})
</script>

<style scoped>
@media screen and (max-width: 400px) {
	.author_holder {
		flex-direction: column;
	}
}
</style>
