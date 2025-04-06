<template>
	<div v-if="user" class="item_holder flex flex-col w-[448px]">
		<NuxtLink
			:to="`/members/
				${generateSlug(user.user_name)}
				/lists/
				${generateSlug(list.list_name)}`"
			class="images_holder flex items-center -space-x-10 border-4 border-transparent hover:border-green-600 cursor-pointer transition-all rounded w-full h-[128px]"
		>
			<div
				v-for="(film, index) in visibleFilms"
				:key="index"
				class="image flex-shrink-0 w-[80px] h-[120px]"
			>
				<img
					class="h-full w-full object-contain"
					:src="film.film_image"
					alt=""
				/>
			</div>
		</NuxtLink>

		<NuxtLink
			:to="`/members/
				${generateSlug(user.user_name)}
				/lists/
				${generateSlug(list.list_name)}`"
			class="text-white font-medium w-full"
		>
			{{ list.list_name }}
		</NuxtLink>

		<div
			class="flex items-center gap-1 text-gray-500 text-sm font-light w-full"
		>
			<NuxtLink
				:to="`/members/
					${generateSlug(user.user_name)}`"
			>
				<img
					class="inline-block size-6 rounded-full"
					:src="user.user_avatar"
					alt="Avatar"
				/>
			</NuxtLink>

			<div>
				Created By
				<span class="font-medium text-gray-400">
					<NuxtLink
						:to="`/members/
							${generateSlug(user.user_name)}`"
						>{{ user.user_name }}</NuxtLink
					>
				</span>
			</div>

			<div>
				{{ getTimeAgo(list.publishedDate) }}
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { getTimeAgo } from '~/shared/model/funtions/getTimeAgo'
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import type { IUser } from '~/shared/model/interfaces/userInterface'

const isSmallScreen = useMediaQuery('(max-width: 570px)')

const props = defineProps<{ data: IFilmsList }>()

const list = props.data
const user = ref<IUser>()
const filmsList: Ref<IFilmItem[]> = ref([])
const visibleFilms = computed(() => {
	return isSmallScreen.value ? filmsList.value.slice(0, 5) : filmsList.value
})

onMounted(async () => {
	const requests = list.films
		.slice(0, 10)
		.map(id => $fetch<IFilmItem>(`/api/movie/by-id/${id}`))

	filmsList.value = await Promise.all(requests)
	user.value = await $fetch<IUser>(`/api/user/${list.user_id}`)
})
</script>

<style scoped>
@media screen and (max-width: 950px) {
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -0.1rem;
		margin-right: -0.1rem;
	}
	.item_holder {
		width: 781px;
	}
}
@media screen and (max-width: 820px) {
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -1rem;
		margin-right: -1rem;
	}
	.item_holder {
		width: 536px;
	}
}
@media screen and (max-width: 570px) {
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -0.1rem;
		margin-right: -0.1rem;
	}
	.item_holder {
		width: 397px;
	}
}
@media screen and (max-width: 425px) {
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -1.1rem;
		margin-right: -1.1rem;
	}
	.item_holder {
		width: 285px;
	}
}
</style>
