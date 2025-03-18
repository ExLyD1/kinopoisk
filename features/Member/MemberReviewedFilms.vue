<template>
	<div class="pb-36">
		<!-- links and filters bar -->
		<div
			class="flex justify-between w-full items-center border-b border-gray-600 pb-2"
		>
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

			<!-- filters -->
			<div>
				<member-filter-by
					v-for="(optionBlocks, index) in memberFilmsOptions"
					:data="optionBlocks"
				>
				</member-filter-by>
			</div>
		</div>

		<!-- films -->
		<div
			v-if="filmsList"
			class="films_holder justify-between flex flex-wrap gap-3 w-full mt-4"
		>
			<member-watched-film-item
				v-for="(film, index) in filmsList"
				:key="index"
				:data="film"
				:userId="user.id"
			></member-watched-film-item>
		</div>

		<LoadingSpinner v-else />

		<!-- pagination -->
		<div
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
				<!-- Первая страница -->
				<NuxtLink
					:to="getPageLink(1)"
					:class="{ 'text-white': memberStore.currentPage === 1 }"
				>
					1
				</NuxtLink>

				<!-- Многоточие перед серединой -->
				<span v-if="startPage > 2">...</span>

				<!-- Средние страницы -->
				<NuxtLink
					v-for="page in visiblePages"
					:key="page"
					:to="getPageLink(page)"
					:class="{ 'text-white': memberStore.currentPage === page }"
				>
					{{ page }}
				</NuxtLink>

				<!-- Многоточие после середины -->
				<span v-if="endPage < memberStore.totalPages - 1">...</span>

				<!-- Последняя страница -->
				<NuxtLink
					v-if="memberStore.totalPages > 1"
					:to="getPageLink(memberStore.totalPages)"
					:class="{
						'text-white': memberStore.currentPage === memberStore.totalPages,
					}"
				>
					{{ memberStore.totalPages }}
				</NuxtLink>
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
import { memberFilmsOptions } from './memberLinksData'
import { useMemberStore } from './memberStore'

const memberStore = useMemberStore()

const props = defineProps<{ data: IUser }>()
const user = props.data

const filmsList = ref<IFilmItem[]>()

interface IResponse {
	data: IFilmItem[]
	totalItems: number
	totalPages: number
	currentPage: number
	perPage: number
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
const visiblePages = computed(() => {
	const current = memberStore.currentPage
	const total = memberStore.totalPages

	// Если страниц мало, показываем все
	if (total <= maxVisiblePages + 2) {
		return Array.from({ length: total - 2 }, (_, i) => i + 2)
	}

	// Определяем границы видимых страниц
	const half = Math.floor(maxVisiblePages / 2)
	let start = Math.max(2, current - half)
	let end = Math.min(total - 1, current + half)

	// Корректируем границы, чтобы всегда показывать maxVisiblePages страниц
	if (end - start + 1 < maxVisiblePages) {
		if (current <= half + 1) {
			end = maxVisiblePages + 1
		} else {
			start = total - maxVisiblePages
		}
	}

	return Array.from({ length: end - start + 1 }, (_, i) => start + i)
})

const startPage = computed(() => visiblePages.value[0])
const endPage = computed(
	() => visiblePages.value[visiblePages.value.length - 1]
)

// Загрузка данных
onMounted(async () => {
	const response = await $fetch<IResponse>(
		`/api/user/${user.id}/watched-by-page/${memberStore.currentPage}?genre=any`
	)

	filmsList.value = response.data
	memberStore.totalPages = response.totalPages
	memberStore.currentPage = response.currentPage // Синхронизация с сервером
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
