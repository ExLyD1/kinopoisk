<template>
	<div class="w-[250px] holder">
		<widget-title>
			<template #text_1>
				<NuxtLink to="/lists/total">Popular lists</NuxtLink>
			</template>
			<template #text_2>
				<NuxtLink to="/lists/total">MORE</NuxtLink>
			</template>
		</widget-title>

		<div class="flex flex-col gap-10">
			<list-item
				v-for="(item, index) in visibleLists"
				:key="index"
				:data="item"
			></list-item>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface.ts'

const filmsListsData = useState<IFilmsList[]>('filmsListsData')

const visibleLists = computed(() => {
	return filmsListsData.value
		.map((list, index) => {
			if (!list.films[index].film_image) {
				return
			}
			const listItem: any = {
				author_name: list.author_name,
				author_avatar: list.author_avatar,
				comments_quantity: list.comments_quantity,
				likes: list.likes,
				list_name: list.list_name,
				films_images: [],
			}
			for (let i = 0; i < 5; i++) {
				if (!list.films[index * 5 + i]) {
					return
				}
				listItem.films_images.push(list.films[index * 5 + i].film_image)
			}
			return listItem
		})
		.slice(0, 4)
})
</script>

<style scoped>
@media screen and (max-width: 860px) {
	.holder {
		width: 100%;
	}
	.image {
		width: 100px;
	}
}
</style>
