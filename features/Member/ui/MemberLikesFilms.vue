<template>
	<div class="pb-36">
		<!-- links and filters bar -->
		<div
			class="flex justify-between w-full items-center border-b border-gray-600 pb-2"
		>
			<!-- links -->
			<div class="flex items-center gap-3 relative">
				<!-- Films -->
				<NuxtLink
					:to="memberSectionsLink(user.user_name, 'likes-films', 1)"
					class="adapt_links_text text-green-600 text-lg cursor-pointer"
				>
					<span
						class="adapt_hover relative after:absolute after:left-0 after:bottom-[-11px] after:w-full after:h-[1px] after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
						:class="{
							'text-white after:bg-white after:scale-x-100 hover:text-white':
								memberStore.memberSection === 'likes-films',
						}"
					>
						Films
					</span>
				</NuxtLink>

				<!-- Reviews -->
				<NuxtLink
					:to="memberSectionsLink(user.user_name, 'likes-reviews', 1)"
					class="adapt_links_text text-green-600 text-lg cursor-pointer"
				>
					<span
						class="adapt_hover relative after:absolute after:left-0 after:bottom-[-11px] after:w-full after:h-[1px] after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
						:class="{
							'text-white after:bg-white after:scale-x-100 hover:text-white':
								memberStore.memberSection === 'likes-reviews',
						}"
					>
						Reviews
					</span>
				</NuxtLink>

				<!-- Lists -->
				<NuxtLink
					:to="memberSectionsLink(user.user_name, 'likes-lists', 1)"
					class="adapt_links_text text-green-600 text-lg cursor-pointer"
				>
					<span
						class="adapt_hover relative after:absolute after:left-0 after:bottom-[-11px] after:w-full after:h-[1px] after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
						:class="{
							'text-white after:bg-white after:scale-x-100 hover:text-white':
								memberStore.memberSection === 'likes-lists',
						}"
					>
						Lists
					</span>
				</NuxtLink>
			</div>

			<!-- filters -->
			<div>
				<member-filter-by
					v-for="(optionBlocks, index) in memberLikedFilmsOptions"
					:data="optionBlocks"
				>
				</member-filter-by>
			</div>
		</div>

		<!-- years bar -->
		<div
			v-if="memberStore.decade && !isLoading"
			class="flex justify-evenly items-center gap-3 mt-6 mb-4 text-gray-400 h-6"
		>
			<!-- prev decade -->
			<div class="w-[40px]">
				<img
					v-show="memberStore.decade !== '1870s'"
					@click="routeDecadePrev"
					class="w-5 h-5 rotate-180 cursor-pointer"
					src="/public/images/triangle.png"
					alt=""
				/>
			</div>

			<!-- years -->
			<div
				class="years_holder flex items-center rounded h-[27px]"
				:class="{
					'justify-center': isMediumScreen,
				}"
			>
				<NuxtLink
					:to="getPageLink(memberStore.currentPage)"
					class="border border-gray-600 rounded-l text-center flex px-5 h-full items-center justify-center"
					:class="{
						'bg-gray-600': memberStore.decade === decadeFromUrl,
						'w-[140px] h-[30px] rounded py-2 text-[17px]': isMediumScreen,
					}"
					>{{ memberStore.decade }}</NuxtLink
				>
				<NuxtLink
					v-if="!isMediumScreen"
					:to="
						memberSectionsLink(
							memberStore.memberName,
							memberStore.memberSection,
							memberStore.currentPage
						) + `/year/${item}`
					"
					v-for="(item, index) in decadeYears"
					:key="index"
					class="border-gray-600 border text-center flex px-5 h-full items-center justify-center"
					:class="{
						'bg-gray-600':
							memberStore.year === item && memberStore.decade !== decadeFromUrl,
						'rounded-r': index === 9,
					}"
				>
					{{ item }}
				</NuxtLink>
			</div>

			<!-- next decade -->
			<div class="w-[40px]">
				<img
					v-show="memberStore.decade !== '2020s'"
					@click="routeDecadeNext"
					class="w-5 h-5 cursor-pointer"
					src="/public/images/triangle.png"
					alt=""
				/>
			</div>
		</div>

		<!-- adaptive years -->
		<div
			v-if="isMediumScreen"
			class="grid grid-cols-5 grid-rows-2 text-gray-400 max-w-[500px] m-auto mt-8"
		>
			<NuxtLink
				:to="
					memberSectionsLink(
						memberStore.memberName,
						memberStore.memberSection,
						memberStore.currentPage
					) + `/year/${item}`
				"
				v-for="(item, index) in decadeYears"
				:key="index"
				class="border-gray-600 border text-center flex px-5 h-full items-center justify-center font-light text-[15px]"
				:class="{
					'bg-gray-600':
						memberStore.year === item && memberStore.decade !== decadeFromUrl,
					'rounded-r': index === 9,
				}"
			>
				{{ item }}
			</NuxtLink>
		</div>

		<!-- watched in decade -->
		<div
			v-if="!isLoading && isFilms && filmsList && memberStore.decade"
			class="text-center flex items-center justify-center w-full bg-gray-700 rounded text-gray-400 mt-6 mb-3 py-2 px-1"
		>
			{{ user.user_name }} has liked {{ filmsList.length }} films in the
			{{ memberStore.decade }}
		</div>

		<!-- films -->
		<div
			v-if="isFilms === true && !isLoading"
			class="films_holder flex flex-wrap gap-3 w-full mt-4"
		>
			<member-watched-film-item
				v-for="(film, index) in filmsList"
				:key="index"
				:data="film"
				:userId="user.id"
			></member-watched-film-item>
		</div>

		<!-- hasn`t liked` -->
		<div
			v-if="isFilms === false && !isLoading && !filmsList"
			class="flex justify-center items-center bg-gray-800 rounded shadow-lg px-3 py-5 w-full text-center text-gray-300 mt-5 text-sm"
		>
			{{ user.user_name }} hasn’t liked any films
		</div>

		<!-- loading spinner -->
		<LoadingSpinner v-if="isLoading" />

		<!-- pagination -->
		<div
			v-if="isFilms && !isLoading"
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
import { memberLikedFilmsOptions } from '../model/memberLinksData'
import { useMemberStore } from '../model/memberStore'
import { useMediaQuery } from '@vueuse/core'

const isMediumScreen = useMediaQuery('(max-width:960px)')
const memberStore = useMemberStore()
const props = defineProps<{ data: IUser }>()
const user = props.data
const router = useRouter()
const route = useRoute()

const decadeFromUrl = route.params.mDecade as string

const filmsList = ref<IFilmItem[]>()
const isFilms = ref<boolean>(false)
const isLoading = ref<boolean>(true)

interface IResponse {
	data: IFilmItem[]
	totalPages: number
}

// Функция для генерации ссылки на страницу
const getPageLink = (page: number) => {
	return `${memberSectionsLink(
		memberStore.memberName,
		memberStore.memberSection,
		page
	)}/${memberStore.decade ? 'decade/' + memberStore.decade : ''}`
}

// Функция для генерации ссылки на decade prev
const routeDecadePrev = () => {
	const decadeIndex = memberStore.decadesList.findIndex(
		decade => decade === memberStore.decade
	)

	return router.push(
		memberSectionsLink(
			memberStore.memberName,
			memberStore.memberSection,
			memberStore.currentPage
		) + `/decade/${memberStore.decadesList[decadeIndex + 1]}`
	)
}

// Функция для генерации ссылки на decade next
const routeDecadeNext = () => {
	const decadeIndex = memberStore.decadesList.findIndex(
		decade => decade === memberStore.decade
	)

	return router.push(
		memberSectionsLink(
			memberStore.memberName,
			memberStore.memberSection,
			memberStore.currentPage
		) + `/decade/${memberStore.decadesList[decadeIndex - 1]}`
	)
}
// Функция для генерации years
const decadeYears = computed(() => {
	const decadeStore = memberStore.decade

	const decade = Number(decadeStore.slice(0, decadeStore.length - 1))

	return Array.from({ length: 10 }, (_, i) => decade + i)
})
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
	try {
		let response: IResponse

		// by year
		if (memberStore.year) {
			response = await $fetch<IResponse>(
				`/api/user/${user.id}/likes-films-by-page/${memberStore.currentPage}?year=${memberStore.year}`
			)
		}

		// by decade
		else if (memberStore.decade) {
			response = await $fetch<IResponse>(
				`/api/user/${user.id}/likes-films-by-page/${memberStore.currentPage}?decade=${memberStore.decade}`
			)
		}

		// by nothing
		else {
			response = await $fetch<IResponse>(
				`/api/user/${user.id}/likes-films-by-page/${memberStore.currentPage}`
			)
		}

		if (response.data.length === 0) {
			isLoading.value = false
			return
		}

		filmsList.value = response.data
		memberStore.totalPages = response.totalPages
		isFilms.value = true
	} catch (error) {
		console.error('Some error happened : ', error)
	} finally {
		isLoading.value = false
	}
})
</script>

<style scoped>
@media screen and (max-width: 960px) {
	.years_holder {
		height: auto;
	}
}

@media screen and (max-width: 550px) {
	.adapt_links_text {
		font-size: 16px;
	}
	.adapt_hover::after {
		bottom: -13px;
	}
}
</style>
