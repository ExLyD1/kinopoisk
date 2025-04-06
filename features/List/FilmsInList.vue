<template>
	<div v-if="user">
		<div>
			<div
				v-if="filmsList.length > 0"
				class="films_holder flex gap-1 justify-between flex-wrap"
			>
				<!-- films items -->
				<div v-for="(film, index) in filmsList" :key="index">
					<!-- IMG -->
					<NuxtLink
						class="w-[121px] h-[193px] flex"
						:to="`/films/${generateSlug(film.film_name)}`"
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
						:to="`/members/${generateSlug(user.user_name)}/lists/${generateSlug(
							list.list_name
						)}/page/${listPageStore.curentPage - 1}`"
						class="rounded bg-gray-700 py-1 px-2 text-center cursor-pointer transition-all hover:bg-gray-600"
					>
						Prev
					</NuxtLink>
				</div>

				<!-- pagination buttons for more than 6 pages -->
				<div
					v-if="Math.ceil(list.films.length / 100) > 5"
					class="flex gap-2 pb-2 items-center justify-center"
				>
					<NuxtLink
						:to="`/members/${generateSlug(user.user_name)}/lists/${generateSlug(
							list.list_name
						)}/page/1`"
					>
						1
					</NuxtLink>

					<NuxtLink
						:to="`/members/${generateSlug(user.user_name)}/lists/${generateSlug(
							list.list_name
						)}/page/2`"
					>
						2
					</NuxtLink>

					<NuxtLink
						:to="`/members/${generateSlug(user.user_name)}/lists/${generateSlug(
							list.list_name
						)}/page/3`"
					>
						3
					</NuxtLink>

					<div>...</div>
					<NuxtLink
						:to="`/members/${generateSlug(user.user_name)}/lists/${generateSlug(
							list.list_name
						)}/page/${Math.ceil(list.films.length / 100)}`"
						>{{ Math.ceil(list.films.length / 100) }}</NuxtLink
					>
				</div>

				<!-- buttons from 1 to 5 -->
				<div v-else class="flex gap-2 pb-2 items-center justify-center">
					<NuxtLink
						v-for="page in Math.ceil(list.films.length / 100)"
						:to="`/members/${generateSlug(user.user_name)}/lists/${generateSlug(
							list.list_name
						)}/page/${page}`"
					>
						{{ page }}
					</NuxtLink>
				</div>

				<!-- button next -->
				<div class="w-[50px]">
					<NuxtLink
						v-show="listPageStore.totalPages > 1"
						:to="`/members/${generateSlug(user.user_name)}/lists/${generateSlug(
							list.list_name
						)}/page/${listPageStore.curentPage + 1}`"
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
import type { IUser } from '~/shared/model/interfaces/userInterface'

import { useListPagesStore } from './listPagesStore'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const props = defineProps<{ data: IFilmsList }>()
const list = props.data
const user = ref<IUser>()

const listPageStore = useListPagesStore()

const filmsList: Ref<IFilmItem[] | []> = ref([])

onMounted(async () => {
	const films = await $fetch<IFilmItem[]>(
		`/api/list/${list.id}/films-by-page/1`
	)

	filmsList.value = films
	user.value = await $fetch<IUser>(`/api/user/${list.user_id}`)
})
</script>

<style scoped>
@media screen and (max-width: 850px) {
	.films_holder {
		justify-content: space-evenly;
	}
}
</style>
