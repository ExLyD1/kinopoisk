<template>
	<div v-if="user" class="flex flex-row gap-3">
		<div>
			<NuxtLink
				class="w-[75px] h-[110px] block"
				:to="`/films/${generateSlug(film.film_name)}`"
			>
				<img
					:src="film.film_image"
					alt="review_image"
					class="w-full h-full object-cover rounded hover:border-4 hover:border-green-600 transition-all"
				/>
			</NuxtLink>
		</div>

		<div class="flex flex-col gap-3">
			<div class="flex flex-row items-center gap-2">
				<NuxtLink
					:to="`/members/${generateSlug(user.user_name)}/reviews/${generateSlug(
						film.film_name
					)}`"
					class="text-white text-xl hover:text-blue-300 transition-all cursor-pointer"
				>
					{{ film.film_name }}
				</NuxtLink>
				<NuxtLink
					:to="`/films/year/${generateSlug(String(film.realise_year))}/page/1`"
					class="text-gray-600 hover:text-blue-300 transition-all cursor-pointer"
				>
					{{ film.realise_year }}
				</NuxtLink>
			</div>

			<div class="author_holder flex gap-2">
				<div class="flex items-center gap-2">
					<NuxtLink
						:to="`/members/${generateSlug(user.user_name)}`"
						class="rounded-full border-gray-400 w-7 h-7"
					>
						<img class="rounded-full" :src="user.user_avatar" alt="" />
					</NuxtLink>

					<NuxtLink
						:to="`/members/${generateSlug(user.user_name)}`"
						class="text-gray-500"
					>
						{{ user.user_name }}
					</NuxtLink>
				</div>

				<div v-if="ratingIcons !== undefined" class="flex items-center">
					<svg
						v-for="(icon, index) in ratingIcons"
						:key="index"
						class="shrink-0 size-5"
						:class="
							icon
								? 'text-green-600 dark:text-yellow-600'
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
			</div>

			<div class="text-gray-400">
				{{ review.review_text }}
			</div>

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

				<NuxtLink
					:to="`/films/${generateSlug(film.film_name)}`"
					class="flex flex-row items-center gap-1"
				>
					<img class="h-4 w-4" src="/public/images/comment.png" alt="" />
					{{ getKNumber(review.review_comments) }}
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
	data: {
		review: IReview
		film: IFilmItem
	}
}>()
const film = props.data.film
const review = props.data.review
const user = ref<IUser>()

const ratingIcons = getRatingIcons(review.review_rate)

onMounted(async () => {
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
