<template>
	<div class="holder flex flex-row gap-3 w-full">
		<NuxtLink
			:to="`/members/
				${data.list.author_name.toLowerCase().replace(/\s+/g, '-')}
				/lists/
				${data.list.list_name.toLowerCase().replace(/\s+/g, '-')}`"
			class="images_holder flex items-center -space-x-10 border-4 border-transparent hover:border-green-600 cursor-pointer transition-all rounded h-[128px]"
		>
			<div
				v-for="(film, index) in data.films_list"
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
					${data.list.author_name.toLowerCase().replace(/\s+/g, '-')}
					/lists/
					${data.list.list_name.toLowerCase().replace(/\s+/g, '-')}`"
				class="font-medium text-white text-xl"
			>
				{{ data.list.list_name }}
			</NuxtLink>

			<div class="flex gap-3 text-sm">
				<NuxtLink
					:to="`/members/
						${data.list.author_name.toLowerCase().replace(/\s+/g, '-')}`"
					class="flex gap-1"
				>
					<Avatar class="w-4 h-4">
						<AvatarImage :src="data.list.author_avatar" alt="@radix-vue" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>

					<div class="whitespace-nowrap">{{ data.list.author_name }}</div>
				</NuxtLink>

				<div class="flex gap-1">
					{{ getKNumber(data.list.films_quantity) }}
					<div>films</div>
				</div>

				<NuxtLink
					:to="`/members/
						${data.list.author_name.toLowerCase().replace(/\s+/g, '-')}
						/lists/
						${data.list.list_name.toLowerCase().replace(/\s+/g, '-')}
						/likes`"
					class="flex gap-1"
				>
					<img class="w-4 h-4" src="@/shared/ui/icons/favorite.png" alt="" />
					{{ getKNumber(data.list.likes) }}
				</NuxtLink>

				<NuxtLink
					:to="`/members/
						${data.list.author_name.toLowerCase().replace(/\s+/g, '-')}
						/lists/
						${data.list.list_name.toLowerCase().replace(/\s+/g, '-')}`"
					class="flex gap-1"
				>
					<img class="w-4 h-4" src="@/shared/ui/icons/comment.png" alt="" />
					{{ getKNumber(data.list.comments_quantity) }}
				</NuxtLink>
			</div>

			<div class="text-lg line-clamp-2">
				{{ data.list.list_description }}
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { getKNumber } from '~/shared/model/funtions/getKNumber'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

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
@media screen and (max-width: 650px) {
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
