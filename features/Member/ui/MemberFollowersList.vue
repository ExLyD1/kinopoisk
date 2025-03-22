<template>
	<div class="w-full text-gray-400 pb-[200px] flex gap-10">
		<div class="w-full">
			<!-- links and filters bar -->
			<div
				class="flex justify-between w-full items-center border-b border-gray-600 pb-2"
			>
				<!-- links -->
				<div class="flex items-center gap-3 relative">
					<!-- Following -->
					<NuxtLink
						:to="memberSectionsLink(user.user_name, 'following', 1)"
						class="adapt_links_text text-green-600 text-lg cursor-pointer"
					>
						<span
							class="adapt_hover relative after:absolute after:left-0 after:bottom-[-11px] after:w-full after:h-[1px] after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
							:class="{
								'text-white after:bg-white after:scale-x-100 hover:text-white':
									memberStore.memberSection === 'following',
							}"
						>
							Following
						</span>
					</NuxtLink>

					<!-- Followers -->
					<NuxtLink
						:to="memberSectionsLink(user.user_name, 'followers', 1)"
						class="adapt_links_text text-green-600 text-lg cursor-pointer"
					>
						<span
							class="adapt_hover relative after:absolute after:left-0 after:bottom-[-11px] after:w-full after:h-[1px] after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
							:class="{
								'text-white after:bg-white after:scale-x-100 hover:text-white':
									memberStore.memberSection === 'followers',
							}"
						>
							Followers
						</span>
					</NuxtLink>
				</div>
			</div>

			<!-- users table -->
			<table class="w-full table-auto border-collapse">
				<!-- table head -->
				<thead>
					<tr class="bg-[#14181c] text-sm text-white">
						<th class="px-4 py-2 font-normal text-left">Name</th>
						<th
							v-if="!isModalTable"
							class="px-4 py-2 font-normal text-left w-[75px]"
						>
							Watched
						</th>
						<th
							v-if="!isModalTable"
							class="px-4 py-2 font-normal text-left w-[70px]"
						>
							Lists
						</th>
						<th
							v-if="!isModalTable"
							class="px-4 py-2 font-normal text-left w-[70px]"
						>
							Likes
						</th>
					</tr>
				</thead>

				<!-- table body content -->
				<tbody v-if="!isLoading && isUsers">
					<tr
						v-for="(user, index) in followingList"
						:key="user.id"
						class="border-y border-gray-800 transition-colors"
					>
						<!-- User data left -->
						<td class="px-4 py-2 flex items-center gap-2">
							<!-- avatar -->
							<NuxtLink :to="`/members/${generateSlug(user.user_name)}`">
								<Avatar class="w-10 h-10">
									<AvatarImage :src="user.user_avatar" :alt="user.user_name" />
									<AvatarFallback>{{ user.user_name[0] }}</AvatarFallback>
								</Avatar>
							</NuxtLink>

							<!-- user data -->
							<div class="flex flex-col">
								<!-- user name -->
								<NuxtLink :to="`/members/${generateSlug(user.user_name)}`">
									<span
										class="text-white hover:text-blue-400 transition-all text-[15px] font-[500]"
									>
										{{ user.user_name }}
									</span>
								</NuxtLink>

								<div class="text-xs text-gray-500">
									<NuxtLink
										class="hover:text-gray-200 transition-all"
										:to="memberSectionsLink(user.user_name, 'followers', 1)"
									>
										{{ user.user_followers_quantity }}
										followers
									</NuxtLink>
									,
									<NuxtLink
										class="hover:text-gray-200 transition-all"
										:to="memberSectionsLink(user.user_name, 'following', 1)"
									>
										{{ user.user_following_quantity }}
										following
									</NuxtLink>
								</div>
							</div>
						</td>

						<!-- Watched -->
						<td v-if="!isModalTable" class="px-4 py-2 text-sm">
							<NuxtLink
								:to="memberSectionsLink(user.user_name, 'films', 1)"
								class="flex items-center gap-[2px] hover:text-white transition-all"
							>
								<img src="/public/images/eye.png" class="w-6 h-6" alt="" />
								<p>{{ user.user_films_quantity }}</p>
							</NuxtLink>
						</td>

						<!-- Lists -->
						<td v-if="!isModalTable" class="px-4 py-2 text-sm">
							<NuxtLink
								:to="memberSectionsLink(user.user_name, 'lists', 1)"
								class="flex items-center gap-[2px] hover:text-white transition-all"
							>
								<img src="/public/images/list.png" class="w-6 h-6" alt="" />

								<p>{{ user.user_lists_quantity }}</p>
							</NuxtLink>
						</td>

						<!-- Likes -->
						<td v-if="!isModalTable" class="px-4 py-2 text-sm">
							<NuxtLink
								:to="memberSectionsLink(user.user_name, 'likes-films', 1)"
								class="flex items-center gap-[2px] hover:text-white transition-all"
							>
								<img
									src="/public/images/favorite_orange.png"
									class="w-6 h-6"
									alt=""
								/>

								<p>{{ user.user_favorite_films_quantity }}</p>
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
				v-if="!isLoading && isUsers"
				class="w-full flex justify-between mt-4"
			>
				<!-- prev -->
				<div class="w-[55px]">
					<NuxtLink
						v-show="memberStore.currentPage > 1"
						:to="getPageLink(memberStore.currentPage - 1)"
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
						:class="{ 'text-white': memberStore.currentPage === 1 }"
						>1</NuxtLink
					>

					<div v-if="startPage > 2">...</div>

					<!-- pages -->
					<NuxtLink
						v-for="(item, index) in paginate"
						:to="getPageLink(item)"
						:class="{ 'text-white': memberStore.currentPage === item }"
						>{{ item }}</NuxtLink
					>

					<div v-if="endPage < memberStore.totalPages - 1">...</div>

					<!-- last page -->
					<NuxtLink
						v-if="memberStore.totalPages > 1"
						:to="getPageLink(memberStore.totalPages)"
						:class="{
							'text-white': memberStore.currentPage === memberStore.totalPages,
						}"
						>{{ memberStore.totalPages }}</NuxtLink
					>
				</div>

				<!-- next -->
				<div class="w-[55px]">
					<NuxtLink
						v-show="memberStore.currentPage !== memberStore.totalPages"
						:to="getPageLink(memberStore.currentPage + 1)"
						class="w-[55px] rounded bg-gray-700 text-gray-400 text-xs px-3 py-1"
					>
						Next
					</NuxtLink>
				</div>
			</div>
		</div>

		<div class="ads mt-5">
			<img src="/public/images/ads.png" alt="" />
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IUser } from '~/shared/model/interfaces/userInterface'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useMemberStore } from '../model/memberStore'
import { useMediaQuery } from '@vueuse/core'

const isModalTable = useMediaQuery('(max-width:555px)')
const memberStore = useMemberStore()
const props = defineProps<{ data: IUser }>()
const user = props.data

const getPageLink = (page: number) => {
	return memberSectionsLink(user.user_name, memberStore.memberSection, page)
}

const maxVisiblePages = 5
const paginate = computed(() => {
	const total = memberStore.totalPages
	const current = memberStore.currentPage

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

const followingList = ref<IUser[]>()
const isLoading = ref<boolean>(true)
const isUsers = ref<boolean>(false)

interface IResponse {
	data: IUser[]
	totalPages: number
}

onMounted(async () => {
	try {
		const response = await $fetch<IResponse>(
			`/api/user/${user.id}/followers-by-page/${memberStore.currentPage}`
		)

		if (response.data.length === 0) {
			isLoading.value = false
			return
		}

		followingList.value = response.data
		memberStore.totalPages = response.totalPages
		isUsers.value = true
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
