<template>
	<div v-if="user" class="item_holder flex flex-col w-[280px]">
		<NuxtLink
			:to="`/members/
				${generateSlug(user.user_name)}
				/lists/
				${generateSlug(list.list_name)}`"
			class="images_holder flex items-center -space-x-8 border-4 border-transparent hover:border-green-600 cursor-pointer transition-all rounded w-full h-[128px]"
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

		<NuxtLink
			:to="`/members/
				${generateSlug(user.user_name)}
				/lists/
				${generateSlug(list.list_name)}`"
			class="text-white font-medium p-1"
		>
			{{ list.list_name }}
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
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
@media screen and (max-width: 620px) {
	.item_holder {
		flex-direction: column;
	}
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -0.1rem;
		margin-right: -0.1rem;
	}
	.images_holder {
		width: 397px;
	}
}
@media screen and (max-width: 430px) {
	.images_holder > *:not([hidden]) ~ :not([hidden]) {
		margin-left: -0.5rem;
		margin-right: -0.5rem;
	}
	.images_holder {
		width: 352px;
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
