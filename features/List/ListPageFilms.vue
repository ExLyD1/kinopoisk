<template>
	<div>
		<div>
			<div
				v-if="filmsList.length > 0"
				class="films_holder flex gap-1 justify-between flex-wrap"
			>
				<!-- films items -->
				<div
					v-for="(film, index) in filmsList"
					:key="index"
					:to="`films/${generateSlug(film.film_name)}`"
				>
					<!-- IMG -->
					<NuxtLink
						class="w-[121px] h-[193px] flex"
						:to="`films/${generateSlug(film.film_name)}`"
					>
						<img
							:src="film.film_image"
							class="w-full h-full object-cover hover:border-4 hover:border-green-600 box-border rounded transition-all"
							alt=""
						/>
					</NuxtLink>

					<!-- index -->
					<div class="flex items-center justify-center text-center mt-1 mb-2">
						{{ index + 1 }}
					</div>
				</div>
			</div>

			<LoadingSpinner v-else class="mt-5" />
		</div>

		<div
			v-if="listPageStore.totalPages > 1"
			class="mt-5 border-t border-gray-600 flex items-center justify-end"
		>
			<div class="flex w-full justify-between mt-2">
				<!-- button prev -->
				<div class="w-[50px]">
					<NuxtLink
						v-show="listPageStore.curentPage !== 1"
						:to="`/members/${generateSlug(
							list.author_name
						)}/lists/${generateSlug(list.list_name)}/page/${
							listPageStore.curentPage - 1
						}`"
						class="rounded bg-gray-700 py-1 px-2 text-center cursor-pointer transition-all hover:bg-gray-600"
					>
						Prev
					</NuxtLink>
				</div>

				<!-- pagination buttons for more than 6 pages -->
				<!-- <div
					v-if="Math.ceil(list.films.length / 100) > 5"
					class="flex gap-2 pb-2 items-center justify-center"
				>
					<NuxtLink
						:to="`/members/${generateSlug(
							list.author_name
						)}/lists/${generateSlug(list.list_name)}/page/1`"
					>
						1
					</NuxtLink>

					<NuxtLink
						:to="`/members/${generateSlug(
							list.author_name
						)}/lists/${generateSlug(list.list_name)}/page/2`"
					>
						2
					</NuxtLink>

					<NuxtLink
						:to="`/members/${generateSlug(
							list.author_name
						)}/lists/${generateSlug(list.list_name)}/page/3`"
					>
						3
					</NuxtLink>

					<div>...</div>
					<NuxtLink
						:to="`/members/${generateSlug(
							list.author_name
						)}/lists/${generateSlug(list.list_name)}/page/${Math.ceil(
							list.films.length / 100
						)}`"
						>{{ Math.ceil(list.films.length / 100) }}</NuxtLink
					>
				</div> -->

				<!-- buttons from 1 to 5 -->
				<!-- <div v-else class="flex gap-2 pb-2 items-center justify-center">
					<NuxtLink
						v-for="page in Math.ceil(list.films.length / 100)"
						:to="`/members/${generateSlug(
							list.author_name
						)}/lists/${generateSlug(list.list_name)}/page/${page}`"
					>
						{{ page }}
					</NuxtLink>
				</div> -->

				<div class="flex gap-2 pb-2 items-center justify-center">
					<!-- Первая страница -->
					<NuxtLink
						:to="`/members/${generateSlug(
							list.author_name
						)}/lists/${generateSlug(list.list_name)}/page/1`"
						>1</NuxtLink
					>

					<!-- "..." перед текущим блоком -->
					<span v-if="listPageStore.curentPage > 4">...</span>

					<!-- Диапазон страниц вокруг текущей -->
					<NuxtLink
						v-for="page in visiblePages"
						:key="page"
						:to="`/members/${generateSlug(
							list.author_name
						)}/lists/${generateSlug(list.list_name)}/page/${page}`"
						:class="{ 'text-gray-600': page === listPageStore.curentPage }"
					>
						{{ page }}
					</NuxtLink>

					<!-- "..." после текущего блока -->
					<span v-if="listPageStore.curentPage < listPageStore.totalPages - 3"
						>...</span
					>

					<!-- Последняя страница -->
					<NuxtLink
						:to="`/members/${generateSlug(
							list.author_name
						)}/lists/${generateSlug(list.list_name)}/page/${
							listPageStore.totalPages
						}`"
					>
						{{ listPageStore.totalPages }}
					</NuxtLink>
				</div>

				<!-- button next -->
				<div class="w-[50px]">
					<NuxtLink
						v-show="listPageStore.totalPages > 1"
						:to="`/members/${generateSlug(
							list.author_name
						)}/lists/${generateSlug(list.list_name)}/page/${
							listPageStore.curentPage + 1
						}`"
						class="rounded bg-gray-700 py-1 px-2 text-center cursor-pointer transition-all hover:bg-gray-600"
					>
						Next
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

import { useListPagesStore } from './listPagesStore'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const listPageStore = useListPagesStore()
const props = defineProps<{ data: IFilmsList }>()
const list = props.data

const filmsList: Ref<IFilmItem[] | []> = ref([])

const visiblePages = computed(() => {
	const pages: number[] = []
	const start = Math.max(2, listPageStore.curentPage - 2) // Начинаем с 2, чтобы 1 всегда был отдельно
	const end = Math.min(
		listPageStore.totalPages - 1,
		listPageStore.curentPage + 2
	) // Конец не включает последнюю страницу

	for (let i = start; i <= end; i++) {
		pages.push(i)
	}
	return pages
})

onMounted(async () => {
	const films = await $fetch<IFilmItem[]>(
		`/api/list/${list.id}/films-by-page/1`
	)

	filmsList.value = films
})
</script>

<style scoped>
@media screen and (max-width: 850px) {
	.films_holder {
		justify-content: space-evenly;
	}
}
</style>
