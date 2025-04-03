<template>
	<div class="flex items-center justify-center gap-1">
		<slot name="sortByText"></slot>
		<div
			class="relative min-w-[120px] select-none"
			@mouseenter="openDropDown"
			@mouseleave="handleMouseLeave"
		>
			<!-- deep options label -->
			<div v-if="props.data.deep_options" class="px-3 py-2 whitespace-nowrap">
				{{ props.data.deep_options[indexSort].label }}
			</div>

			<!-- odinary label -->
			<div
				v-else
				class="w-auto px-3 py-2 text-gray-400 cursor-pointer whitespace-nowrap"
			>
				{{ label }}
			</div>

			<!-- Выпадающее меню -->
			<div
				v-if="isDropdownVisible"
				class="flex flex-col absolute left-0 top-0 mt-1 pb-3 border border-gray-600 bg-gray-800 rounded shadow-lg z-10 overflow-hidden dropdown-menu"
				:class="[widthList]"
				@mouseenter="isDropdownVisible = true"
				@mouseleave="isDropdownVisible = false"
			>
				<!-- label -->
				<div class="px-3 py-2 whitespace-nowrap">
					{{ label }}
				</div>

				<!-- any label -->
				<div
					v-if="props.data.anyLabel"
					class="border-y border-gray-600 w-full flex"
				>
					<!-- selected any label -->
					<div
						v-if="
							(props.data.type === 'decade' &&
								filmsStore.decade === undefined) ||
							(props.data.type === 'genre' && filmsStore.genres.length === 0)
						"
						class="text-white text-sm px-3 w-full py-1"
					>
						{{ props.data.anyLabel }}
					</div>

					<!-- link any label -->
					<NuxtLink
						v-else
						:to="clearFilterLink(props.data.type, filmsStore.currentPage)"
						class="px-3 py-1 hover:text-white hover:bg-gray-600 whitespace-nowrap text-sm w-full"
					>
						{{ props.data.anyLabel }}
					</NuxtLink>
				</div>

				<!-- default options -->
				<NuxtLink
					v-for="(option, index) in props.data.options"
					@click.prevent="
						props.data.type === 'genre'
							? genreFunction(
									props.data.type,
									filmsStore.currentPage,
									option.route_query
							  )
							: ''
					"
					:to="
						props.data.type === 'genre'
							? ''
							: getFilmsSearchPageLink(
									props.data.type,
									filmsStore.currentPage,
									option.route_query
							  )
					"
					:key="index"
					class="px-3 py-1 hover:bg-gray-600 cursor-pointer hover:text-white whitespace-nowrap text-sm flex items-center gap-1"
					:class="{
						'text-white': filmsStore.genres.includes(option.route_query),
						'pl-6': props.data.type === 'genre',
					}"
				>
					<!-- selected image -->
					<img
						v-if="filmsStore.genres.includes(option.route_query)"
						class="w-3 h-3 ml-[-16px]"
						src="/public/images/favorite_green.png"
						alt=""
					/>

					<!-- option -->
					<div
						:class="{
							'text-white':
								option.route_query === filmsStore.decade ||
								filmsStore.genres.includes(option.route_query) ||
								option.route_query === filmsStore.sort,
						}"
					>
						{{ option.option }}
					</div>
				</NuxtLink>

				<!-- deep options -->
				<div
					v-if="props.data.deep_options"
					v-for="(deep_option, index) in props.data.deep_options"
					:key="index"
					class="whitespace-nowrap flex flex-col w-full"
				>
					<!-- label -->
					<div class="ml-3 pt-2 w-full text-sm">{{ deep_option.label }}</div>

					<div class="flex flex-col w-full">
						<!-- link -->
						<NuxtLink
							v-for="(option, index) in deep_option.options"
							:key="index"
							@click="indexSort = index"
							:to="
								getFilmsSearchPageLink(
									props.data.type,
									filmsStore.currentPage,
									option.route_query
								)
							"
							class="pl-7 py-1 hover:bg-gray-600 w-full cursor-pointer hover:text-white whitespace-nowrap text-xs flex items-center gap-1"
							:class="{
								'text-white': filmsStore.sort === option.route_query,
							}"
						>
							<!-- selected image -->
							<img
								v-if="
									filmsStore.sort === option.route_query ||
									(option.route_query === '' && filmsStore.sort === undefined)
								"
								class="w-3 h-3 ml-[-16px]"
								src="/public/images/favorite_green.png"
								alt=""
							/>
							{{ option.option }}
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmOptionsList } from '~/features/Film/model/filmsSearchData'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import { useFilmsStore } from '~/features/Film/model/filmsStore'

const filmsStore = useFilmsStore()

// Получаение данных из родителя
const props = defineProps<{ data: IFilmOptionsList }>()
const label = computed(() => props.data.label)
const widthList = computed(() => props.data.width)

const router = useRouter()

const isDropdownVisible = ref(false)
const selectedOption: Ref<string | number> = ref(label)

const openDropDown = () => {
	return (isDropdownVisible.value = true)
}
// Закрытие меню только если курсор ушел ВНЕ контейнера и dropdown
const handleMouseLeave = (event: MouseEvent) => {
	const relatedTarget = event.relatedTarget as HTMLElement
	if (relatedTarget && relatedTarget.closest('.dropdown-menu')) return
	isDropdownVisible.value = false
}

// any label link
const clearFilterLink = (type: string, page: number) => {
	let url = '/films'

	// decade
	if (type === 'decade') {
		if (filmsStore.genres.length > 0) {
			url += `/genre/${filmsStore.genres.join('+')}`
		}

		if (filmsStore.sort) {
			url += `/by/${filmsStore.sort}`
		}

		if (filmsStore.genres.length === 0 && !filmsStore.sort) {
			url += `/popular`
		}
	}

	// genre
	else if (type === 'genre') {
		if (filmsStore.year) {
			url += `/year/${filmsStore.year}`
		} else if (filmsStore.decade) {
			url += `/decade/${filmsStore.decade}`
		}

		if (filmsStore.sort) {
			url += `/by/${filmsStore.sort}`
		}

		if (!filmsStore.year && !filmsStore.decade && !filmsStore.sort) {
			url += `/popular`
		}
	}

	url += `/page/${page || 1}`

	return url
}

const genreFunction = (type: string, page: number, genre: string) => {
	if (!filmsStore.genres.includes(genre)) {
		filmsStore.genres.push(genre)
	} else {
		filmsStore.genres = filmsStore.genres.filter(g => g !== genre)
	}

	if (filmsStore.genres.length > 0) {
		return router.push(getFilmsSearchPageLink(type, page, genre))
	} else {
		return router.push(clearFilterLink(type, page))
	}
}

const indexSort = ref<number>(2)

// Функция для поиска индекса активной сортировки
const updateIndexSort = () => {
	if (props.data.deep_options) {
		const foundIndex = props.data.deep_options.findIndex(deep_option => {
			const routeQueries = deep_option.options.map(
				(opt: { route_query: string }) => opt.route_query
			)
			switch (filmsStore.sort) {
				case 'name':
					return routeQueries.includes('name')
				case 'newest':
				case 'earliest':
					return (
						routeQueries.includes('newest') || routeQueries.includes('earliest')
					)
				case 'rating-highest':
				case 'rating-lowest':
					return (
						routeQueries.includes('rating-highest') ||
						routeQueries.includes('rating-lowest')
					)
				case 'shortest':
				case 'longest':
					return (
						routeQueries.includes('shortest') ||
						routeQueries.includes('longest')
					)
				default:
					return false
			}
		})
		indexSort.value = foundIndex !== -1 ? foundIndex : 2
	}
}

updateIndexSort()

watch(
	() => filmsStore.sort,
	() => {
		updateIndexSort()
	}
)
</script>

<style scoped></style>
