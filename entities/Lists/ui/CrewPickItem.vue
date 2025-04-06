<template>
	<div v-if="user" class="holder flex flex-col gap-1">
		<NuxtLink
			:to="`/members/
				${generateSlug(user.user_name)}
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

		<div>
			<NuxtLink
				:to="`/members/
					${generateSlug(user.user_name)}
					/lists/
					${generateSlug(list.list_name)}`"
				class="text-white text-lg font-medium"
			>
				{{ list.list_name }}
			</NuxtLink>

			<div class="flex flex-row gap-2 items-center">
				<NuxtLink
					:to="`/members/
						${generateSlug(user.user_name)}`"
					class="flex items-center gap-1"
				>
					<Avatar class="w-6 h-6">
						<AvatarImage :src="user.user_avatar" alt="@radix-vue" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>

					<div class="whitespace-nowrap text-sm text-gray-300">
						{{ user.user_name }}
					</div>
				</NuxtLink>

				<NuxtLink
					:to="`/members/
						${generateSlug(user.user_name)}
						/lists/
						${generateSlug(list.list_name)}`"
					class="flex gap-1 text-sm text-gray-500"
				>
					{{ getKNumber(list.films_quantity) }}
					<div>films</div>
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
import type { IUser } from '~/shared/model/interfaces/userInterface'

const props = defineProps<{ data: IFilmsList }>()

const list = props.data
const filmsList: Ref<IFilmItem[]> = ref([])
const user = ref<IUser>()

onMounted(async () => {
	const requests = list.films
		.slice(0, 5)
		.map(id => $fetch<IFilmItem>(`/api/movie/by-id/${id}`))

	filmsList.value = await Promise.all(requests)
	user.value = await $fetch<IUser>(`/api/user/${list.user_id}`)
})
</script>

<style scoped>
@media screen and (max-width: 1000px) {
	.holder {
		flex-direction: row;
	}
}
@media screen and (max-width: 540px) {
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
