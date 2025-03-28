<template>
	<div class="text-gray-400 pb-52">
		<div class="border-b border-gray-700 pb-2 w-full">Lists</div>

		<!-- films data -->
		<div v-if="!isLoading && isLists" class="flex flex-col mt-4 w-full">
			<div v-for="(list, index) in userLists" :key="index">
				<member-recent-list-item :data="list"></member-recent-list-item>

				<div
					v-if="index + 1 !== userLists?.length"
					class="border-b border-gray-700 w-full my-4"
				></div>
			</div>
		</div>

		<LoadingSpinner v-if="isLoading" />

		<!-- pagination -->
		<div
			v-if="!isLoading && isLists"
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
				<!-- First page -->
				<NuxtLink
					:to="getPageLink(1)"
					:class="{ 'text-white': memberStore.currentPage === 1 }"
				>
					1
				</NuxtLink>

				<div v-if="startPage > 2">...</div>

				<NuxtLink
					v-for="item in paginate"
					:class="{ 'text-white': memberStore.currentPage === item }"
					:to="getPageLink(item)"
					>{{ item }}</NuxtLink
				>

				<div v-if="endPage <= memberStore.totalPages - 2">...</div>

				<!-- Last page -->
				<NuxtLink
					v-if="memberStore.totalPages > 1"
					:class="{
						'text-white': memberStore.currentPage === memberStore.totalPages,
					}"
					:to="getPageLink(memberStore.totalPages)"
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
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'
import type { IUser } from '~/shared/model/interfaces/userInterface'
import { useMemberStore } from '../model/memberStore'

const memberStore = useMemberStore()
const props = defineProps<{ data: IUser }>()
const user = props.data

const userLists = ref<IFilmsList[]>()
const isLoading = ref<boolean>(true)
const isLists = ref<boolean>(false)

// get page
const getPageLink = (page: number): string => {
	return memberSectionsLink(
		memberStore.memberName,
		memberStore.memberSection,
		page
	)
}

// pagination function
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
		if (current + half >= total) {
			start = total - maxVisiblePages
		} else {
			end = maxVisiblePages + 1
		}
	}

	return Array.from({ length: end - start + 1 }, (_, i) => start + i)
})
const startPage = computed(() => paginate.value[0])
const endPage = computed(() => paginate.value[paginate.value.length - 1])

interface IResponse {
	data: IFilmsList[]
	totalPages: number
}
onMounted(async () => {
	const response = await $fetch<IResponse>(
		`/api/user/${user.id}/lists-by-page/${memberStore.currentPage}`
	)

	if (response.data.length === 0) {
		isLoading.value = false
		return
	}

	userLists.value = response.data
	memberStore.totalPages = response.totalPages
	isLists.value = true
	isLoading.value = false
})
</script>

<style scoped></style>
