<template>
	<div v-if="user" class="item_holder flex flex-col gap-1 w-[250px]">
		<!-- list films images -->
		<NuxtLink
			:to="`/members/${generateSlug(user.user_name)}/lists/${generateSlug(
				list.list_name
			)}`"
		>
			<div
				class="images_holder flex items-center -space-x-10 border-4 border-transparent hover:border-green-600 cursor-pointer transition-all rounded h-[128px]"
			>
				<div
					v-for="(film, index) in filmsList"
					:key="index"
					class="image flex-shrink-0 w-[80px] h-[120px]"
				>
					<img
						class="h-full w-full object-contain"
						:src="film.film_image"
						alt=""
					/>
				</div>
			</div>
		</NuxtLink>

		<!-- list name -->
		<NuxtLink
			:to="`/members/${generateSlug(user.user_name)}/lists/${generateSlug(
				list.list_name
			)}`"
		>
			<div class="flex gap-2 items-center">
				<div class="text-white text-xl truncate">{{ list.list_name }}</div>
				<div class="text-sm text-gray-600 whitespace-nowrap pt-1">
					films {{ list.films.length }}
				</div>
			</div>
		</NuxtLink>

		<!-- data -->
		<div class="flex items-center flex-row gap-4">
			<!-- likes -->
			<NuxtLink
				:to="`/members/${generateSlug(user.user_name)}/lists/${generateSlug(
					list.list_name
				)}/likes`"
			>
				<div class="flex flex-row items-center gap-1">
					<img class="h-3 w-3" src="/public/images/favorite.png" alt="" />
					<div class="pr-2">{{ getKNumber(list.likes) }}</div>
				</div>
			</NuxtLink>

			<!-- comments -->
			<NuxtLink
				:to="`/members/${generateSlug(user.user_name)}/lists/${generateSlug(
					list.list_name
				)}`"
			>
				<div class="flex flex-row items-center gap-1">
					<img class="h-3 w-3" src="/public/images/comment.png" alt="" />
					<div class="pr-2">{{ getKNumber(list.comments_quantity) }}</div>
				</div>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getKNumber } from '~/shared/model/funtions/getKNumber'

import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import type { IUser } from '~/shared/model/interfaces/userInterface'

const props = defineProps<{ data: IFilmsList }>()
const list: any = props.data
const user = ref<IUser>()

const filmsList: Ref<IFilmItem[]> = ref([])

onMounted(async () => {
	for (let i = 0; i < 5; i++) {
		const film = await $fetch<IFilmItem>(`/api/movie/by-id/${list.films[i]}`)

		filmsList.value.push(film)
	}
	user.value = await $fetch<IUser>(`/api/user/${list.author_id}`)
})
</script>

<style scoped>
div {
	box-sizing: border-box;
	transition: border-color 0.3s ease-in-out;
}
@media screen and (max-width: 860px) {
	.item_holder {
		width: 100%;
	}

	.images_holder > :not([hidden]) ~ :not([hidden]) {
		margin-right: -0.0005rem;
		margin-left: -0.0005rem;
	}
	.images_holder {
		width: 458px;
		height: 143px;
	}
	.image {
		height: 140px;
		width: 90px;
	}
}
@media screen and (max-width: 540px) {
	.images_holder > :not([hidden]) ~ :not([hidden]) {
		margin-right: -1rem;
		margin-left: -1rem;
	}
	.images_holder {
		width: 346px;
	}
}
@media screen and (max-width: 410px) {
	.images_holder > :not([hidden]) ~ :not([hidden]) {
		margin-right: -1.7rem;
		margin-left: -1.7rem;
	}
	.images_holder {
		width: 268px;
	}
}
</style>
