<template>
	<div class="w-full text-gray-400 flex gap-10">
		<div class="w-full">
			<!-- users table -->
			<table class="w-full table-auto border-collapse h-auto">
				<!-- table head -->
				<thead>
					<tr class="bg-[#14181c] text-sm text-white">
						<th class="px-4 py-2 font-normal text-left">Name</th>
						<th
							v-if="!isModalTable"
							class="px-4 py-2 font-normal text-left w-[75px]"
						>
							Rating
						</th>
						<th
							v-if="!isModalTable"
							class="px-4 py-2 font-normal text-left w-[70px]"
						>
							Like
						</th>
						<th
							v-if="!isModalTable"
							class="px-4 py-2 font-normal text-left w-[70px]"
						>
							Review
						</th>
					</tr>
				</thead>

				<!-- table body content -->
				<tbody v-if="!isLoading && finalData">
					<tr
						v-for="(item, index) in finalData"
						:key="user.id"
						class="border-y border-gray-800 transition-colors"
					>
						<!-- User data left -->
						<td class="px-4 py-2 flex items-center gap-2">
							<!-- avatar -->
							<NuxtLink :to="`/members/${generateSlug(item.user.user_name)}`">
								<Avatar class="w-10 h-10">
									<AvatarImage
										:src="item.user.user_avatar"
										:alt="item.user.user_name"
									/>
								</Avatar>
							</NuxtLink>

							<!-- user data -->
							<div class="flex flex-col">
								<!-- user name -->
								<NuxtLink :to="`/members/${generateSlug(item.user.user_name)}`">
									<span
										class="text-white hover:text-blue-400 transition-all text-[15px] font-[500]"
									>
										{{ item.user.user_name }}
									</span>
								</NuxtLink>

								<div class="text-xs text-gray-500">
									<NuxtLink
										class="hover:text-gray-200 transition-all"
										:to="
											memberSectionsLink(item.user.user_name, 'followers', 1)
										"
									>
										{{ item.user.user_followers_quantity }}
										followers
									</NuxtLink>
									,
									<NuxtLink
										class="hover:text-gray-200 transition-all"
										:to="
											memberSectionsLink(item.user.user_name, 'following', 1)
										"
									>
										{{ item.user.user_following_quantity }}
										following
									</NuxtLink>
								</div>
							</div>
						</td>

						<!-- Rating -->
						<td v-if="!isModalTable" class="px-4 py-2">
							<div v-if="item.ratingFilm" class="flex items-center gap-1">
								<svg
									v-for="(icon, index) in getRatingIcons(item.ratingFilm)"
									:key="index"
									class="shrink-0 size-5"
									:class="[
										icon
											? 'text-green-400 dark:text-green-400'
											: 'text-gray-300 dark:text-neutral-600',
									]"
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									viewBox="0 0 16 16"
									aria-hidden="true"
								>
									<path
										d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
									/>
								</svg>
							</div>
						</td>

						<!-- Liked -->
						<td v-if="!isModalTable" class="px-4 py-2 pl-6">
							<img
								v-if="item.isLikedFilm"
								class="w-4 h-4"
								src="/public/images/favorite_orange.png"
								alt="Liked"
							/>
						</td>

						<!-- Reviewed -->
						<td v-if="!isModalTable" class="px-4 py-2 pl-7">
							<NuxtLink
								:to="`/members/${generateSlug(
									item.user.user_name
								)}/reviews/${generateSlug(film.film_name)}`"
							>
								<img
									v-if="item.isReviewedFilm"
									class="w-4 h-4"
									src="/public/images/list.png"
									alt="Reviewed"
								/>
							</NuxtLink>
						</td>
					</tr>
				</tbody>

				<!-- loading spinner -->
				<tbody v-if="isLoading">
					<tr>
						<td colspan="2" class="py-4 text-center">
							<LoadingSpinner />
						</td>
					</tr>
				</tbody>
			</table>

			<!-- pagination buttons -->
			<div
				v-if="!isLoading && finalData"
				class="w-full flex justify-between mt-4"
			>
				<!-- prev -->
				<div class="w-[55px]">
					<NuxtLink
						v-show="reviewStore.currentPage > 1"
						:to="getPageLink(reviewStore.currentPage - 1)"
						class="w-[55px] rounded bg-gray-700 text-gray-400 text-xs px-3 py-1"
					>
						Prev
					</NuxtLink>
				</div>

				<!-- pagination buttons -->
				<div class="flex items-center gap-3 text-gray-600">
					<!-- first page -->
					<NuxtLink
						:to="getPageLink(1)"
						:class="{ 'text-white': reviewStore.currentPage === 1 }"
						>1</NuxtLink
					>

					<div v-if="startPage > 2">...</div>

					<!-- pages -->
					<NuxtLink
						v-for="(item, index) in paginate"
						:to="getPageLink(item)"
						:class="{ 'text-white': reviewStore.currentPage === item }"
						>{{ item }}</NuxtLink
					>

					<div v-if="endPage < reviewStore.totalPages - 1">...</div>

					<!-- last page -->
					<NuxtLink
						v-if="reviewStore.totalPages > 1"
						:to="getPageLink(reviewStore.totalPages)"
						:class="{
							'text-white': reviewStore.currentPage === reviewStore.totalPages,
						}"
						>{{ reviewStore.totalPages }}</NuxtLink
					>
				</div>

				<!-- next -->
				<div class="w-[55px]">
					<NuxtLink
						v-show="reviewStore.currentPage !== reviewStore.totalPages"
						:to="getPageLink(reviewStore.currentPage + 1)"
						class="w-[55px] rounded bg-gray-700 text-gray-400 text-xs px-3 py-1"
					>
						Next
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IUser } from '~/shared/model/interfaces/userInterface'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import type { IReview } from '~/shared/model/interfaces/reviewInterface'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useMediaQuery } from '@vueuse/core'
import { getRatingIcons } from '~/shared/model/funtions/getRatingIcon'
import { useReviewStore } from './newReviewStore'

const isModalTable = useMediaQuery('(max-width:555px)')
const reviewStore = useReviewStore()

const props = defineProps<{ user: IUser; film: IFilmItem; review: IReview }>()
const user = props.user
const film = props.film
const review = props.review

const getPageLink = (page: number) => {
	return `/members/${generateSlug(user.user_name)}/reviews/${generateSlug(
		film.film_name
	)}/page/${page}`
}

const maxVisiblePages = 5
const paginate = computed(() => {
	const total = reviewStore.totalPages
	const current = reviewStore.currentPage

	if (total <= maxVisiblePages + 2) {
		return Array.from({ length: total - 2 }, (_, i) => i + 2)
	}

	const half = Math.floor(maxVisiblePages / 2)
	let start = Math.max(2, current - half)
	let end = Math.min(total - 1, current + half)

	if (end - start + 1 < maxVisiblePages) {
		if (current <= half + 1) {
			end = maxVisiblePages + 1
		} else {
			start = total - maxVisiblePages
		}
	}

	return Array.from({ length: end - start + 1 }, (_, i) => start + i)
})

const startPage = computed(() => paginate.value[0])
const endPage = computed(() => paginate.value[paginate.value.length - 1])

const usersList = ref<IUser[]>()
const isLoading = ref<boolean>(true)
const isUsers = ref<boolean>(false)

interface IResponse {
	data: IUser[]
	totalPages: number
}

const finalData = ref<
	{
		user: IUser
		isLikedFilm: boolean
		isReviewedFilm: boolean
		ratingFilm: number
	}[]
>()

onMounted(async () => {
	try {
		const response = await $fetch<IResponse>(
			`/api/review/${review.id}/userLiked-by-page/${reviewStore.currentPage}`
		)

		if (response.data.length === 0) {
			isLoading.value = false
			return
		}

		usersList.value = response.data
		reviewStore.totalPages = response.totalPages
		isUsers.value = true

		const finalDataPromised = usersList.value.map(async u => {
			const isLiked = await $fetch<boolean>(
				`/api/user/${u.id}/${film.id}/isLiked`
			)
			const isReviewedFilm = await $fetch<boolean>(
				`/api/user/${u.id}/${film.id}/isReviewed`
			)
			const ratingFilm = await $fetch<number>(
				`/api/user/${u.id}/${film.id}/rating`
			)

			return {
				user: u,
				isLikedFilm: isLiked,
				isReviewedFilm: isReviewedFilm,
				ratingFilm: ratingFilm,
			}
		})

		finalData.value = await Promise.all(finalDataPromised)
	} catch (error) {
		console.error('Ошибка загрузки данных:', error)
	} finally {
		isLoading.value = false
	}
})
</script>

<style scoped>
table {
	width: 100%;
	min-width: 670px; /* Минимальная ширина таблицы */
}

th,
td {
	vertical-align: middle;
}

@media screen and (max-width: 880px) {
	.ads {
		display: none;
	}
}

@media screen and (max-width: 700px) {
	table {
		width: 100%;
		min-width: 100%; /* Минимальная ширина таблицы */
	}
}
</style>
