<template>
	<div v-if="user" class="item_holder flex w-full text-gray-400 gap-4">
		<!-- images -->
		<NuxtLink
			:to="`/members/
				${generateSlug(user.user_name)}
				/lists/
				${generateSlug(list.list_name)}`"
			class="images_holder flex items-center w-[448px] -space-x-10 border-4 border-transparent hover:border-green-600 cursor-pointer transition-all rounded h-[128px]"
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

		<!-- data -->
		<div class="flex flex-col gap-3">
			<!-- list name -->
			<NuxtLink
				:to="`/lists/${generateSlug(list.list_name)}`"
				class="text-lg font-medium text-white hover:text-blue-400 transition-all"
			>
				{{ list.list_name }}
			</NuxtLink>

			<!-- author and likes data -->
			<div class="flex items-center gap-2 text-sm">
				<!-- author data -->
				<div class="flex items-center gap-1">
					<!-- author avatar -->
					<NuxtLink
						:to="`/members/${generateSlug(user.user_name)}`"
						class="flex items-center justify-center hover:text-blue-400 transition-all"
					>
						<Avatar class="w-4 h-4">
							<AvatarImage
								class="w-4 h-4"
								:src="user.user_avatar"
							></AvatarImage>
						</Avatar>
					</NuxtLink>

					<!-- author name -->
					<NuxtLink
						:to="`/members/${generateSlug(user.user_name)}`"
						class="font-medium hover:text-blue-400 transition-all"
					>
						{{ user.user_name }}
					</NuxtLink>
				</div>

				<!-- films quanitity -->
				<div class="font-light">
					{{ getKNumber(list.films_quantity) }} films
				</div>

				<!-- likes -->
				<NuxtLink
					:to="`/lists/${generateSlug(list.list_name)}/likes`"
					class="flex items-center gap-1 hover:text-blue-400 transition-all"
				>
					<img class="w-4 h-4" src="/public/images/favorite.png" alt="" />
					<div>{{ getKNumber(list.likes) }}</div>
				</NuxtLink>

				<!-- comments -->
				<NuxtLink
					:to="`/lists/${generateSlug(list.list_name)}/comments`"
					class="flex items-center gap-1 hover:text-blue-400 transition-all"
				>
					<img class="w-4 h-4" src="/public/images/comment.png" alt="" />
					<div>{{ getKNumber(list.comments_quantity) }}</div>
				</NuxtLink>
			</div>

			<div class="line-clamp-4 text-gray-300">{{ list.list_description }}</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { getTimeAgo } from '~/shared/model/funtions/getTimeAgo'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import { getKNumber } from '~/shared/model/funtions/getKNumber'
import type { IUser } from '~/shared/model/interfaces/userInterface'

const isSmallScreen = useMediaQuery('(max-width: 570px)')

const props = defineProps<{ data: IFilmsList }>()

const list = props.data
const filmsList: Ref<IFilmItem[]> = ref([])
const visibleFilms = computed(() => {
	return isSmallScreen.value ? filmsList.value.slice(0, 5) : filmsList.value
})
const user = ref<IUser>()

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
	.images_holder {
		width: 781px;
	}
	.item_holder {
		flex-direction: column;
	}
}
@media screen and (max-width: 820px) {
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -1rem;
		margin-right: -1rem;
	}
	.images_holder {
		width: 536px;
	}
}
@media screen and (max-width: 570px) {
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -0.1rem;
		margin-right: -0.1rem;
	}
	.images_holder {
		width: 397px;
	}
}
@media screen and (max-width: 425px) {
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -1.1rem;
		margin-right: -1.1rem;
	}
	.images_holder {
		width: 285px;
	}
}
</style>
