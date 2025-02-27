<template>
	<div class="w-[600px] holder">
		<widget-title>
			<template #text_1>
				<div class="text-[#9ab] cursor-text">POPULAR LISTS</div>
			</template>
		</widget-title>

		<div v-if="lists.length > 0">
			<div
				v-for="(list, index) in lists"
				:key="index"
				class="flex flex-col gap-2 w-full"
			>
				<film-popular-list-item
					:data="list"
					class="mt-2 mb-2"
				></film-popular-list-item>

				<div
					v-if="index !== lists.length - 1"
					class="border-b border-gray-700"
				></div>
			</div>
		</div>
		<LoadingSpinner v-else class="mt-5" />
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'
import { useMediaQuery } from '@vueuse/core'

const props = defineProps<{ data: IFilmItem }>()
const film = props.data

const lists: Ref<IFilmsList[] | []> = ref([])

const isMediumScreen = useMediaQuery('(max-width:720px) and (min-width:470px)')
const isSmallScreen = useMediaQuery('(max-width:470px)')

onMounted(async () => {
	const totalLists = await $fetch<IFilmsList[]>(
		`/api/list/by/film-id/${film.id}`
	)

	lists.value = totalLists.slice(0, 3)
})
</script>

<style scoped>
@media screen and (max-width: 1000px) {
	.holder {
		width: 100%;
	}
}
</style>
