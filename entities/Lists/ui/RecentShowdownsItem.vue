<template>
	<div class="holder_content flex flex-col gap-1">
		<NuxtLink to="/soon" class="holder_image w-[310px] h-[170px]">
			<img
				v-if="film?.film_image"
				class="w-full h-full object-cover rounded"
				:src="film.film_image"
				alt=""
			/>
		</NuxtLink>

		<div class="holder_text w-[200px]">
			<NuxtLink to="/soon" class="font-medium text-white text-lg">
				{{ list.list_name }}
			</NuxtLink>

			<div class="line-clamp-2">{{ list.list_description }}</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const props = defineProps<{ data: IFilmsList }>()

const list = ref(props.data)
const film: Ref<IFilmItem | null> = ref(null)

onMounted(async () => {
	film.value = await $fetch<IFilmItem>(`/api/movie/by-id/${list.value.id}`)
})
</script>

<style scoped>
@media screen and (max-width: 1000px) {
	.holder_content {
		flex-direction: row;
		gap: 10px;
	}
}
@media screen and (max-width: 540px) {
	.holder_content {
		flex-direction: column;
		gap: 6px;
		width: 310px;
	}
	.holder_text {
		width: 100%;
	}
}
@media screen and (max-width: 350px) {
	.holder_image,
	.holder_content {
		width: 280px;
	}
}
</style>
