<template>
	<div class="holder flex flex-row gap-3 w-full">
		<NuxtLink
			:to="`/members/
				${generateSlug(list.author_name)}
				/lists/
				${generateSlug(list.list_name)}`"
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
		</NuxtLink>

		<div class="data_holder flex flex-col gap-3">
			<NuxtLink
				:to="`/members/
					${generateSlug(list.author_name)}
					/lists/
					${generateSlug(list.list_name)}`"
				class="font-medium text-white text-xl"
			>
				{{ list.list_name }}
			</NuxtLink>

			<div class="flex gap-3 text-sm">
				<NuxtLink
					:to="`/members/
						${generateSlug(list.author_name)}`"
					class="flex gap-1"
				>
					<Avatar class="w-4 h-4">
						<AvatarImage :src="list.author_avatar" alt="@radix-vue" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>

					<div class="whitespace-nowrap">{{ list.author_name }}</div>
				</NuxtLink>

				<div class="flex gap-1">
					{{ getKNumber(list.films_quantity) }}
					<div>films</div>
				</div>

				<NuxtLink
					:to="`/members/
						${generateSlug(list.author_name)}
						/lists/
						${generateSlug(list.list_name)}
						/likes`"
					class="flex gap-1"
				>
					<img class="w-4 h-4" src="@/shared/ui/icons/favorite.png" alt="" />
					{{ getKNumber(list.likes) }}
				</NuxtLink>

				<NuxtLink
					:to="`/members/
						${generateSlug(list.author_name)}
						/lists/
						${generateSlug(list.list_name)}`"
					class="flex gap-1"
				>
					<img class="w-4 h-4" src="@/shared/ui/icons/comment.png" alt="" />
					{{ getKNumber(list.comments_quantity) }}
				</NuxtLink>
			</div>

			<div class="text-lg line-clamp-2">
				{{ list.list_description }}
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
@media screen and (max-width: 905px) {
	.holder {
		flex-direction: column;
		gap: 6px;
	}
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -0.5rem;
		margin-right: -0.5rem;
	}
	.images_holder {
		width: 352px;
	}
	.data_holder {
		gap: 6px;
	}
}
@media screen and (max-width: 390px) {
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -1rem;
		margin-right: -1rem;
	}
	.images_holder {
		width: 296px;
	}
}
</style>
