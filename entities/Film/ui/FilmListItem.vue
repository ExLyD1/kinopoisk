<template>
	<div class="full_holder flex flex-row gap-3">
		<!-- list cover -->
		<NuxtLink
			:to="`/members/
				${generateSlug(list.author_name)}
				/lists/
				${generateSlug(list.list_name)}`"
			class="images_holder flex items-center -space-x-8 border-4 border-transparent hover:border-green-600 cursor-pointer transition-all rounded h-[128px] w-[280px]"
		>
			<div
				v-for="(film, index) in filmsList"
				:key="index"
				class="flex-shrink-0 w-[80px] h-[120px]"
			>
				<img
					class="h-full w-full object-contain"
					:src="film.film_image"
					alt=""
				/>
			</div>
		</NuxtLink>

		<div class="flex flex-col gap-2">
			<!-- list name -->
			<div>
				<NuxtLink
					:to="`/members/
				${generateSlug(list.author_name)}
				/lists/
				${generateSlug(list.list_name)}`"
					class="text-white text-xl"
					>{{ list.list_name }}</NuxtLink
				>
			</div>

			<!-- list description -->
			<div class="description flex gap-5 items-center">
				<!-- author description -->
				<div class="flex gap-2">
					<!-- author avatar -->
					<NuxtLink
						:to="`/members/${generateSlug(
							list.author_name
						)}/lists/${generateSlug(list.list_name)}`"
						class="flex items-center justify-center"
					>
						<Avatar class="w-5 h-5">
							<AvatarImage
								class="w-5 h-5"
								:src="list.author_avatar"
								alt="@unovue"
							/>
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</NuxtLink>

					<!-- author name -->
					<NuxtLink
						:to="`/members/${generateSlug(
							list.author_name
						)}/lists/${generateSlug(list.list_name)}`"
						class="font-medium text-gray-300 text-sm flex items-center justify-center"
					>
						{{ list.author_name }}
					</NuxtLink>
				</div>

				<!-- list description -->
				<div class="gap-4 flex items-center text-sm">
					<!-- films quantity -->
					<div class="flex gap-1 items-center">
						{{ getKNumber(list.films_quantity) }}
						<div>films</div>
					</div>

					<!-- likes -->
					<NuxtLink
						:to="`/members/
						${generateSlug(list.author_name)}
						/lists/
						${generateSlug(list.list_name)}
						/likes`"
						class="flex gap-1 items-center"
					>
						<img class="w-4 h-4" src="@/shared/ui/icons/favorite.png" alt="" />
						{{ getKNumber(list.likes) }}
					</NuxtLink>

					<!-- comments -->
					<NuxtLink
						:to="`/members/
						${generateSlug(list.author_name)}
						/lists/
						${generateSlug(list.list_name)}`"
						class="flex gap-1 items-center"
					>
						<img class="w-4 h-4" src="@/shared/ui/icons/comment.png" alt="" />
						{{ getKNumber(list.comments_quantity) }}
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'

import { getKNumber } from '~/shared/model/funtions/getKNumber'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const props = defineProps<{ data: IFilmsList }>()
const list = props.data

const filmsList = ref<IFilmItem[]>([])

onMounted(async () => {
	const filmIds = list.films.slice(0, 5)
	const fetchPromises = filmIds.map(id =>
		$fetch<IFilmItem>(`/api/movie/by-id/${id}`).catch(error => {
			console.error(`Failed to fetch film with ID ${id}:`, error)
			return null
		})
	)
	const results = await Promise.all(fetchPromises)
	filmsList.value = results.filter((film): film is IFilmItem => film !== null)
})
</script>

<style scoped>
@media screen and (max-width: 705px) {
	.full_holder {
		flex-direction: column;
	}
}
@media screen and (max-width: 400px) {
	.description {
		flex-direction: column;
		align-items: start;
	}
}
</style>
