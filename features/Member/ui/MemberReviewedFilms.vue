<template>
	<div class="pb-36">
		<!-- links and filters bar -->
		<div class="flex w-full items-center border-b border-gray-600 pb-2">
			<!-- links -->
			<div class="flex items-center gap-3 relative">
				<!-- Watched -->
				<NuxtLink
					:to="
						memberSectionsLink(user.user_name, 'films', memberStore.currentPage)
					"
					class="adapt_links_text text-green-600 text-lg cursor-pointer"
				>
					<span
						class="adapt_hover relative after:absolute after:left-0 after:bottom-[-11px] after:w-full after:h-[1px] after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
						:class="{
							'text-white after:bg-white after:scale-x-100 hover:text-white':
								memberStore.memberSection === 'films',
						}"
					>
						Watched
					</span>
				</NuxtLink>

				<!-- Reviews -->
				<NuxtLink
					:to="
						memberSectionsLink(
							user.user_name,
							'reviews',
							memberStore.currentPage
						)
					"
					class="adapt_links_text text-green-600 text-lg cursor-pointer"
				>
					<span
						class="adapt_hover relative after:absolute after:left-0 after:bottom-[-11px] after:w-full after:h-[1px] after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
						:class="{
							'text-white after:bg-white after:scale-x-100 hover:text-white':
								memberStore.memberSection === 'reviews',
						}"
					>
						Reviews
					</span>
				</NuxtLink>
			</div>
		</div>

		<!-- reviews -->
		<div
			v-if="isReviews === true && !isLoading"
			class="films_holder flex flex-col gap-3 w-full mt-4 text-gray-400"
		>
			<div v-for="(item, index) in finalData" class="w-full" :key="index">
				<member-recent-review-item :data="item"></member-recent-review-item>

				<div
					v-if="index + 1 !== finalData?.length"
					class="my-5 border-b border-gray-600 w-full"
				></div>
			</div>
		</div>

		<!-- loading spinner -->
		<LoadingSpinner v-if="isLoading" />

		<!-- pagination -->
		<div
			v-if="isReviews && !isLoading"
			class="flex items-center justify-between w-full border-t border-gray-700 mt-3 pt-5"
		>
			<!-- Prev -->
			<div class="w-[55px]">
				<NuxtLink
					v-if="memberStore.currentPage > 1"
					:to="getPageLink(memberStore.currentPage - 1)"
					class="rounded bg-gray-700 text-gray-400 text-xs px-3 py-1 cursor-pointer hover:bg-gray-800"
				>
					Prev
				</NuxtLink>
			</div>

			<!-- Pagination Numbers -->
			<div class="flex items-center gap-3 text-gray-600">
				<!-- first page -->
				<NuxtLink
					:to="getPageLink(1)"
					:class="{ 'text-white': memberStore.currentPage === 1 }"
				>
					1
				</NuxtLink>

				<div v-if="startPage > 2">...</div>

				<NuxtLink
					v-for="(item, index) in pagination"
					:key="index"
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

			<!-- Next -->
			<div class="w-[55px]">
				<NuxtLink
					v-if="memberStore.currentPage < memberStore.totalPages"
					:to="getPageLink(memberStore.currentPage + 1)"
					class="rounded bg-gray-700 text-gray-400 text-xs px-3 py-1 cursor-pointer hover:bg-gray-800"
				>
					Next
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IUser } from '~/shared/model/interfaces/userInterface'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import { memberFilmsOptions } from '../model/memberLinksData'
import { useMemberStore } from '../model/memberStore'
import type { IReview } from '~/shared/model/interfaces/reviewInterface'

const memberStore = useMemberStore()

const props = defineProps<{ data: IUser }>()
const user = props.data

const finalData = ref<{ review: IReview; film: IFilmItem; user: IUser }[]>()
const isReviews = ref<boolean>(false)
const isLoading = ref<boolean>(true)

interface IResponse {
	data: IReview[]
	totalPages: number
}

// Функция для генерации ссылки на страницу
const getPageLink = (page: number) => {
	return `${memberSectionsLink(
		memberStore.memberName,
		memberStore.memberSection,
		page
	)}/`
}

// Логика пагинации
const maxVisiblePages = 5 // Максимум видимых страниц (кроме первой и последней)
const pagination = computed(() => {
	const total = memberStore.totalPages
	const current = memberStore.currentPage

	if (total <= maxVisiblePages + 2) {
		return Array.from({ length: total - 2 }, (_, i) => i + 2)
	}

	const half = Math.floor(maxVisiblePages / 2)
	let start = Math.max(2, current - half)
	let end = Math.min(total - 1, current + 2)

	if (end - start + 1 < maxVisiblePages) {
		if (current <= half + 1) {
			end = maxVisiblePages + 1
		} else {
			start = total - maxVisiblePages
		}
	}

	return Array.from({ length: end - start + 1 }, (_, i) => start + i)
})
const startPage = computed(() => pagination.value[0])
const endPage = computed(() => pagination.value[pagination.value.length - 1])

// Загрузка данных
onMounted(async () => {
	let response = await $fetch<IResponse>(
		`/api/user/${user.id}/reviewed-by-page/${memberStore.currentPage}`
	)

	if (response.data.length === 0) {
		finalData.value = []
		isReviews.value = false
		isLoading.value = false
		return
	}

	const packDataPromised = response.data.map(async (review, index) => {
		const film = await $fetch<IFilmItem>(`/api/movie/by-id/${review.item_id}`)

		return {
			review: review,
			film: film,
			user: user,
		}
	})

	const packData: any = await Promise.all(packDataPromised)

	finalData.value = packData
	memberStore.totalPages = response.totalPages

	isLoading.value = false
	isReviews.value = true
})
</script>

<style scoped>
@media screen and (max-width: 550px) {
	.adapt_links_text {
		font-size: 16px;
	}
	.adapt_hover::after {
		bottom: -13px;
	}
}
</style>
