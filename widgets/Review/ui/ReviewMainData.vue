<template>
	<div
		class="main_content_holder flex w-full justify-between gap-8 text-gray-400"
	>
		<!-- aside block -->
		<div v-if="!isSmallScreen" class="w-[150px] flex flex-col gap-4">
			<!-- film image -->
			<NuxtLink
				class="image w-[150px] h-[230px]"
				:to="`/films/${generateSlug(film.film_name)}`"
			>
				<img
					:src="film.film_image"
					class="image w-[150px] h-[230px] object-cover hover:border-4 hover:border-green-600 transition-all cursor-pointer rounded-lg"
					alt=""
				/>
			</NuxtLink>

			<!-- trailer -->
			<div
				class="trailer flex flex-col border border-gray-700 rounded shadow-sm w-full mt-7 text-gray-400"
			>
				<div class="flex items-center w-full p-3 bg-gray-800">
					<div class="flex gap-1 items-center text-sm">
						<img :src="trailer" class="w-5 h-5 rounded-3xl" alt="" />
						<div>Trailer</div>
					</div>
				</div>

				<div class="border-b border-gray-700">
					<div class="py-3 pl-2 text-xs">Not Streaming</div>
				</div>

				<div class="flex justify-between items-center w-full p-3">
					<NuxtLink
						to="/soon"
						class="text-xs text-blue-500 hover:text-gray-400 transition-all cursor-pointer"
					>
						More…
					</NuxtLink>

					<NuxtLink
						to="/soon"
						class="hover:text-yellow-400 transition-all text-xs cursor-pointer"
					>
						JustWatch
					</NuxtLink>
				</div>
			</div>
		</div>

		<!-- info block -->
		<div class="w-[470px]">
			<div :class="{ 'flex gap-5 justify-between': isSmallScreen }">
				<!-- author data holder -->
				<div>
					<!-- author data -->
					<div
						class="author_data flex items-center gap-3 pb-2 border-b border-gray-700"
					>
						<!-- avatar -->
						<NuxtLink
							:to="`/members/${generateSlug(user.user_name)}`"
							class="flex items-center justify-center"
						>
							<Avatar
								class="w-7 h-7 hover:border hover:border-gray-400 transition-all"
							>
								<AvatarImage
									class="w-7 h-7"
									:src="user.user_avatar"
								></AvatarImage>
							</Avatar>
						</NuxtLink>

						<!-- name and text -->
						<div class="flex items-center text-sm gap-2">
							<span v-if="!isSmallScreen">Review by</span>
							<NuxtLink
								class="text-medium text-gray-300 hover:text-gray-100 transition-all"
								:to="`/members/${generateSlug(user.user_name)}`"
							>
								{{ user.user_name }}
							</NuxtLink>
						</div>
					</div>

					<!-- film name & year -->
					<div class="film_name_year mt-5">
						<!-- film data -->
						<div class="flex items-center gap-3">
							<NuxtLink
								:to="`/films/${generateSlug(film.film_name)}`"
								class="text-white hover:text-blue-400 transition-all text-2xl"
								>{{ film.film_name }}</NuxtLink
							>
							<NuxtLink
								to="/soon"
								class="font-light hover:text-blue-400 transition-all text-lg pt-1"
								>{{ film.realise_year }}</NuxtLink
							>
						</div>

						<!-- rating & liked -->
						<div v-if="isLiked || isRated" class="mt-2 flex items-center gap-2">
							<!-- rating -->
							<div v-if="isRated">
								<div
									v-if="ratingIcons !== undefined"
									class="flex items-center gap-[1px]"
								>
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

							<!-- liked -->
							<div v-if="isLiked">
								<img
									class="w-6 h-6"
									src="/public/images/favorite_orange.png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>

				<!-- aside image -->
				<NuxtLink
					v-if="isSmallScreen"
					class="image w-[150px] h-[230px]"
					:to="`/films/${generateSlug(film.film_name)}`"
				>
					<img
						:src="film.film_image"
						class="image w-[150px] h-[230px] object-cover hover:border-4 hover:border-green-600 transition-all cursor-pointer rounded-lg"
						alt=""
					/>
				</NuxtLink>
			</div>

			<!-- description -->
			<div class="description flex text-[1.23rem] mt-6 text-[#99AABB]">
				{{ review.review_text }}
			</div>

			<!-- likes -->
			<NuxtLink
				:to="`/members/${generateSlug(user.user_name)}/reviews/${generateSlug(
					film.film_name
				)}/likes`"
				class="mt-5 font-[450] flex items-center gap-1 hover:text-gray-300 transition-all w-[90px]"
			>
				<img class="w-5 h-5" src="/public/images/favorite.png" alt="" />
				<div>{{ getKNumber(review.review_likes) }}</div>
				<div>likes</div>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import type { IUser } from '~/shared/model/interfaces/userInterface'
import type { IReview } from '~/shared/model/interfaces/reviewInterface'

import trailer from '~/widgets/Film/ui/assets/trailer.png'
import { Avatar, AvatarImage } from '~/components/ui/avatar'
import { getRatingIcons } from '~/shared/model/funtions/getRatingIcon'
import { getKNumber } from '~/shared/model/funtions/getKNumber'
import { useMediaQuery } from '@vueuse/core'

const isSmallScreen = useMediaQuery('(max-width:650px)')
const props = defineProps<{ film: IFilmItem; user: IUser; review: IReview }>()

const film = props.film
const user = props.user
const review = props.review

const isRated = ref<boolean>()
const isLiked = ref<boolean>()
const rating = ref<number>()

const ratingIcons = computed<boolean[] | undefined>(() => {
	return getRatingIcons(rating.value)
})

onMounted(async () => {
	isRated.value = await $fetch<boolean>(
		`/api/user/${user.id}/${film.id}/isRated`
	)
	isLiked.value = await $fetch<boolean>(
		`/api/user/${user.id}/${film.id}/isLiked`
	)
	rating.value = await $fetch<number>(`/api/user/${user.id}/${film.id}/rating`)
})
</script>

<style scoped>
.description {
	font-family: Georgia, 'Times New Roman', Times, serif;
}
@media screen and (max-width: 650px) {
	.main_content_holder {
		flex-direction: row-reverse;
	}
	.trailer {
		display: none;
	}
	.image {
		height: 190px;
		width: 130px;
	}
	.author_data {
		border: none;
	}
	.film_name_year {
		margin-top: 10px;
	}
}
</style>
