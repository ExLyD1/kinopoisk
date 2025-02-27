<template>
	<div
		v-if="list"
		class="p-4 page_container relative main_holder pt-6 m-auto pb-24 text-gray-400"
	>
		<div class="holder_all flex justify-between gap-5 w-[1050px] mx-auto p-5">
			<div class="content w-[670px]">
				<list-description :data="list"></list-description>
				<list-page-films class="mt-6" :data="list"></list-page-films>
			</div>

			<div class="aside w-[230px]">
				<list-aside-data :data="list"></list-aside-data>
			</div>
		</div>
		<list-comments class="mt-16" :data="list"></list-comments>
	</div>
</template>

<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'
import { useListPagesStore } from '~/features/List/listPagesStore'

const listPageStore = useListPagesStore()

const route = useRoute()
const { list: list_name, page } = route.params as {
	list: string
	page: string
}

const list: Ref<IFilmsList | null> = ref(null)

onMounted(async () => {
	const {
		list: list_name,
		page,
		member,
	} = route.params as {
		list: string
		page: string
		member: string
	}

	if (isNaN(Number(page))) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Number of page is more than number of maximum pages',
		})
	}

	list.value = await $fetch<IFilmsList>(`/api/list/by/name/${list_name}`)

	listPageStore.totalPages = Math.ceil(list.value.films.length / 100)
	listPageStore.curentPage = Number(page)
})
</script>

<style scoped>
@media screen and (max-width: 1055px) {
	.holder_all {
		width: 100%;
	}
}
@media screen and (max-width: 850px) {
	.holder_all {
		flex-direction: column;
	}
	.content,
	.aside {
		width: 100%;
	}
}
</style>
