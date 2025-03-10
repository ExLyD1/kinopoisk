<template>
	<div class="item_holder flex flex-col gap-1">
		<NuxtLink
			v-if="filmsList.length > 0"
			:to="`/members/
				${generateSlug(list.author_name)}
				/lists/
				${generateSlug(list.list_name)}`"
			class="images_holder flex items-center -space-x-20 border-4 border-transparent hover:border-green-600 cursor-pointer transition-all rounded"
		>
			<div v-for="(film, index) in filmsList" :key="index">
				<img class="image h-[200px]" :src="film.film_image" alt="" />
			</div>
		</NuxtLink>

		<div>
			<NuxtLink
				:to="`/members/
				${generateSlug(list.author_name)}
				/lists/
				${generateSlug(list.list_name)}`"
				class="text-white text-lg font-medium"
			>
				{{ list.list_name }}
			</NuxtLink>

			<div class="flex items-center flex-row gap-2">
				<NuxtLink
					:to="`/members/
					${generateSlug(list.author_name)}`"
					class="flex items-center gap-1"
				>
					<Avatar class="w-7 h-7">
						<AvatarImage :src="list.author_avatar" />
						<AvatarFallback>Author_Image</AvatarFallback>
					</Avatar>

					<div class="text-gray-500 text-sm">{{ list.author_name }}</div>
				</NuxtLink>

				<NuxtLink
					:to="`/members/
					${generateSlug(list.author_name)}
					/lists/
					${generateSlug(list.list_name)}
					/likes`"
					class="flex flex-row items-center gap-1"
				>
					<img class="h-4 w-4" src="/public/images/favorite.png" alt="" />
					<div class="pr-2">{{ getKNumber(list.likes) }}</div>
				</NuxtLink>

				<NuxtLink
					:to="`/members/
					${generateSlug(list.author_name)}
					/lists/
					${generateSlug(list.list_name)}`"
					class="flex flex-row items-center gap-1"
				>
					<img class="h-4 w-4" src="/public/images/comment.png" alt="" />
					<div class="pr-2">{{ getKNumber(list.comments_quantity) }}</div>
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

const props = defineProps<{ data: IFilmsList }>()

const list = ref(props.data)
const filmsList: Ref<IFilmItem[]> = ref([])

onMounted(async () => {
	const requests = list.value.films
		.slice(0, 5)
		.map(id => $fetch<IFilmItem>(`/api/movie/by-id/${id}`))

	filmsList.value = await Promise.all(requests)
})
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
