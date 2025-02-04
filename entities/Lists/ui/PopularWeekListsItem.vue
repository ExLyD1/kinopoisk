<template>
	<div class="item_holder flex flex-col gap-1">
		<NuxtLink
			:to="`/members/
				${data.list.author_name.toLowerCase().replace(/\s+/g, '-')}
				/lists/
				${data.list.list_name.toLowerCase().replace(/\s+/g, '-')}`"
			class="images_holder flex items-center -space-x-20 border-4 border-transparent hover:border-green-600 cursor-pointer transition-all rounded"
		>
			<div v-for="(film, index) in data.films_list" :key="index">
				<img class="image h-[200px]" :src="film.film_image" alt="" />
			</div>
		</NuxtLink>

		<div>
			<NuxtLink
				:to="`/members/
				${data.list.author_name.toLowerCase().replace(/\s+/g, '-')}
				/lists/
				${data.list.list_name.toLowerCase().replace(/\s+/g, '-')}`"
				class="text-white text-lg font-medium"
			>
				{{ data.list.list_name }}
			</NuxtLink>

			<div class="flex items-center flex-row gap-2">
				<NuxtLink
					:to="`/members/
					${data.list.author_name.toLowerCase().replace(/\s+/g, '-')}`"
					class="flex items-center gap-1"
				>
					<Avatar class="w-7 h-7">
						<AvatarImage :src="data.list.author_avatar" />
						<AvatarFallback>Author_Image</AvatarFallback>
					</Avatar>

					<div class="text-gray-500 text-sm">{{ data.list.author_name }}</div>
				</NuxtLink>

				<NuxtLink
					:to="`/members/
					${data.list.author_name.toLowerCase().replace(/\s+/g, '-')}
					/lists/
					${data.list.list_name.toLowerCase().replace(/\s+/g, '-')}
					/likes`"
					class="flex flex-row items-center gap-1"
				>
					<img class="h-4 w-4" src="@/shared/ui/icons/favorite.png" alt="" />
					<div class="pr-2">{{ getKNumber(data.list.likes) }}</div>
				</NuxtLink>

				<NuxtLink
					:to="`/members/
					${data.list.author_name.toLowerCase().replace(/\s+/g, '-')}
					/lists/
					${data.list.list_name.toLowerCase().replace(/\s+/g, '-')}`"
					class="flex flex-row items-center gap-1"
				>
					<img class="h-4 w-4" src="@/shared/ui/icons/comment.png" alt="" />
					<div class="pr-2">{{ getKNumber(data.list.comments_quontity) }}</div>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getKNumber } from '~/shared/model/funtions/getKNumber'

import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const props = defineProps<{
	data: {
		list: IFilmsList
		films_list: Array<IFilmItem>
	}
}>()
const data = props.data
</script>

<style scoped>
div {
	box-sizing: border-box;
	transition: border-color 0.3s ease-in-out;
}
@media screen and (max-width: 800px) {
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -0.1rem;
		margin-right: -0.1rem;
	}
	.images_holder {
		width: 664px;
	}
}
@media screen and (max-width: 700px) {
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -2.5rem;
		margin-right: -2.5rem;
	}
	.images_holder {
		width: 395px;
	}
}
@media screen and (max-width: 425px) {
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -2.6rem;
		margin-right: -2.6rem;
	}
	.images_holder {
		width: 285px;
	}
	.image {
		height: 170px;
	}
}
</style>
