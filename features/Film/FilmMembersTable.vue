<template>
	<div class="w-full">
		<table class="w-full table-auto border-collapse">
			<!-- table head -->
			<thead>
				<tr class="bg-[#14181c] text-sm text-white">
					<th class="px-4 py-2 font-normal text-left">Name</th>
					<th v-if="!isModalTable" class="px-4 py-2 font-normal text-left">
						Rating
					</th>
					<th v-if="!isModalTable" class="px-4 py-2 font-normal text-left">
						Like
					</th>
					<th v-if="!isModalTable" class="px-4 py-2 font-normal text-left">
						Review
					</th>
				</tr>
			</thead>

			<!-- table body content -->
			<tbody v-if="finalList">
				<tr
					v-for="item in finalList"
					:key="item.user.id"
					class="border-y border-gray-800 transition-colors"
				>
					<!-- User Name -->
					<td class="px-4 py-2 flex items-center gap-2">
						<NuxtLink :to="`/members/${generateSlug(item.user.user_name)}`">
							<Avatar class="w-10 h-10">
								<AvatarImage
									:src="item.user.user_avatar"
									:alt="item.user.user_name"
								/>
								<AvatarFallback>{{ item.user.user_name[0] }}</AvatarFallback>
							</Avatar>
						</NuxtLink>
						<NuxtLink :to="`/members/${generateSlug(item.user.user_name)}`">
							<span class="text-white font-light">{{
								item.user.user_name
							}}</span></NuxtLink
						>
					</td>

					<!-- Rating -->
					<td v-if="!isModalTable" class="px-4 py-2">
						<div v-if="item.user_film_rate" class="flex items-center gap-1">
							<svg
								v-for="(icon, index) in getRatingIcons(item.user_film_rate)"
								:key="index"
								class="shrink-0 size-5"
								:class="[
									icon
										? 'text-yellow-400 dark:text-yellow-600'
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
					<td v-if="!isModalTable" class="px-4 py-2">
						<img
							v-if="item.isLiked"
							class="w-4 h-4"
							src="@/shared/ui/icons/favorite_orange.png"
							alt="Liked"
						/>
					</td>

					<!-- Reviewed -->
					<td v-if="!isModalTable" class="px-4 py-2">
						<img
							v-if="item.isReviewed"
							class="w-4 h-4"
							src="@/shared/ui/icons/list.png"
							alt="Reviewed"
						/>
					</td>
				</tr>
			</tbody>

			<!-- loading spinner -->
			<tbody v-else>
				<tr>
					<td colspan="2" class="py-4 text-center">
						<LoadingSpinner />
					</td>
				</tr>
			</tbody>
		</table>

		<!-- pagination buttons -->
		<div v-if="finalList" class="w-full flex justify-between mt-4">
			<!-- prev -->
			<div class="w-[55px]">
				<NuxtLink
					v-show="
						filmFiltersStore.currentPage !== 1 && filmFiltersStore.currentPage
					"
					:to="`/films/${generateSlug(film.film_name)}${
						filmFiltersStore.section ? '/' + filmFiltersStore.section : ''
					}/page/${filmFiltersStore.currentPage - 1}${
						filmFiltersStore.isAnyRating ? '' : '/rated/none'
					}${filmFiltersStore.sort ? '/by/' + filmFiltersStore.sort : ''}`"
					class="w-[55px] rounded bg-gray-700 text-gray-400 text-xs px-3 py-1"
				>
					Prev
				</NuxtLink>
			</div>
			<!-- next -->
			<div class="w-[55px]">
				<NuxtLink
					v-show="
						filmFiltersStore.currentPage !== filmFiltersStore.totalPages &&
						filmFiltersStore.currentPage < filmFiltersStore.totalPages
					"
					:to="`/films/${generateSlug(film.film_name)}${
						filmFiltersStore.section ? '/' + filmFiltersStore.section : ''
					}/page/${filmFiltersStore.currentPage + 1}${
						filmFiltersStore.isAnyRating ? '' : '/rated/none'
					}${filmFiltersStore.sort ? '/by/' + filmFiltersStore.sort : ''}`"
					class="w-[55px] rounded bg-gray-700 text-gray-400 text-xs px-3 py-1"
				>
					Next
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import type { IUser } from '~/shared/model/interfaces/userInterface'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getRatingIcons } from '~/shared/model/funtions/getRatingIcon'
import { useFilmFiltersStore } from './model/filmFiltersStore'
import { useMediaQuery } from '@vueuse/core'

const isModalTable = useMediaQuery('(max-width:555px)')

const filmFiltersStore = useFilmFiltersStore()

// Интерфейс для итогового списка
interface IFinalListItem {
	user: IUser
	user_film_rate: number
	isLiked: boolean
	isReviewed: boolean
}

const props = defineProps<{ data: IFilmItem }>()
const film = props.data

const finalList = ref<IFinalListItem[] | undefined>()

onMounted(async () => {
	try {
		let users = ref<IUser[]>([])

		if (filmFiltersStore.isAnyRating === true) {
			// any rate + sort by name
			if (filmFiltersStore.isSortByMemberName === true) {
				const response = await $fetch<{
					data: IUser[]
					totalItems: number
					totalPages: number
				}>(
					`/api/movie/${film.id}/usersWatched-by-page/${filmFiltersStore.currentPage}?rating=any&sort=name`
				)
				filmFiltersStore.totalPages = response.totalPages
				users.value = response.data
				if (!Array.isArray(response.data)) {
					return (finalList.value = [])
				}
			}

			// any rate + earliest
			else if (filmFiltersStore.isSortByEarliest === true) {
				const response = await $fetch<{
					data: IUser[]
					totalItems: number
					totalPages: number
				}>(
					`/api/movie/${film.id}/usersWatched-by-page/${filmFiltersStore.currentPage}?rating=any&sort=earliest`
				)
				filmFiltersStore.totalPages = response.totalPages
				users.value = response.data
				if (!Array.isArray(response.data)) {
					return (finalList.value = [])
				}
			}

			// any rate + newest
			else {
				const response = await $fetch<{
					data: IUser[]
					totalItems: number
					totalPages: number
				}>(
					`/api/movie/${film.id}/usersWatched-by-page/${filmFiltersStore.currentPage}?rating=any&sort=newest`
				)
				filmFiltersStore.totalPages = response.totalPages
				users.value = response.data
				if (!Array.isArray(response.data)) {
					return (finalList.value = [])
				}
			}
		} else if (filmFiltersStore.isNoRating === true) {
			// none rated + sort by name
			if (filmFiltersStore.isSortByMemberName === true) {
				const response = await $fetch<{
					data: IUser[]
					totalItems: number
					totalPages: number
				}>(
					`/api/movie/${film.id}/usersWatched-by-page/${filmFiltersStore.currentPage}?rating=none&sort=name`
				)
				filmFiltersStore.totalPages = response.totalPages
				users.value = response.data
				if (!Array.isArray(response.data)) {
					return (finalList.value = [])
				}
			}

			// none rated + sort by earliest
			else if (filmFiltersStore.isSortByEarliest === true) {
				const response = await $fetch<{
					data: IUser[]
					totalItems: number
					totalPages: number
				}>(
					`/api/movie/${film.id}/usersWatched-by-page/${filmFiltersStore.currentPage}?rating=none&sort=earliest`
				)
				filmFiltersStore.totalPages = response.totalPages
				users.value = response.data
				if (!Array.isArray(response.data)) {
					return (finalList.value = [])
				}
			}

			// none rated + newest
			else {
				const response = await $fetch<{
					data: IUser[]
					totalItems: number
					totalPages: number
				}>(
					`/api/movie/${film.id}/usersWatched-by-page/${filmFiltersStore.currentPage}?rating=none`
				)
				filmFiltersStore.totalPages = response.totalPages
				users.value = response.data
				if (!Array.isArray(response.data)) {
					return (finalList.value = [])
				}
			}
		}

		if (!users.value.length) {
			return
		}

		finalList.value = await Promise.all(
			users.value.map(async user => {
				const [rate, isLiked, isReviewed] = await Promise.all([
					$fetch<number>(`/api/user/${user.id}/${film.id}/rating`),
					$fetch<boolean>(`/api/user/${user.id}/${film.id}/isLiked`),
					$fetch<boolean>(`/api/user/${user.id}/${film.id}/isReviewed`),
				])
				return {
					user,
					user_film_rate: rate,
					isLiked,
					isReviewed,
				}
			})
		)
	} catch (error) {
		console.error('Ошибка загрузки данных:', error)
		finalList.value = [] // Пустой массив в случае ошибки
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

@media screen and (max-width: 700px) {
	table {
		width: 100%;
		min-width: 100%; /* Минимальная ширина таблицы */
	}
}
</style>
