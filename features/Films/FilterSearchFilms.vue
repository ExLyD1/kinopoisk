<template>
	<div ref="outerContainer" class="item_holder w-full flex justify-between">
		<div class="flex items-center justify-start gap-4">
			<div class="browse_by">BROWSE BY</div>
			<div class="browse_holder flex border border-gray-600 rounded">
				<div class="wrapper flex">
					<browse-by-item
						class="browse_item"
						:data="optionsYearsList"
					></browse-by-item>
					<browse-by-item
						class="browse_item"
						:data="optionsRatingList"
					></browse-by-item>
				</div>

				<div class="wrapper flex">
					<browse-by-item
						class="browse_item"
						:data="optionsGenreList"
					></browse-by-item>
					<browse-by-item
						class="border-r-none browse_item"
						:data="optionsOtherList"
					></browse-by-item>
				</div>
			</div>
		</div>

		<div class="find_film_holder flex items-center gap-4">
			<div>FIND A FILM</div>
			<div class="relative flex items-center">
				<div
					class="flex items-center bg-gray-600 rounded focus-within:bg-white"
				>
					<input
						v-model="searchQuery"
						class="input_field text-black bg-gray-600 rounded outline-none p-2 pl-2 focus:bg-white"
						type="text"
					/>

					<div v-if="isLoading" class="spinner absolute ml-[160px] mt-1">
						<div
							class="animate-spin inline-block size-7 border-[3px] border-current border-t-transparent text-green-600 rounded-full"
							role="status"
							aria-label="loading"
						>
							<span class="sr-only">Loading...</span>
						</div>
					</div>
				</div>

				<div
					ref="contentArea"
					v-if="searchResultsList.length != 0"
					class="border-gray-600 bg-gray-500 text-white flex flex-col absolute left-0 top-[40px] w-full rounded p-2 z-10"
				>
					<NuxtLink
						class="pb-2 last:pb-0"
						v-for="(item, index) in searchResultsList"
						:key="index"
						:to="`/films/${generateSlug(item.film_name)}`"
					>
						{{ item.film_name }}
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	optionsYearsList,
	optionsRatingList,
	optionsGenreList,
	optionsOtherList,
} from './optionValues'

import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
const filmsList = useState<Array<IFilmItem>>('filmsList')

const searchQuery: Ref<string> = ref('')

const isLoading: Ref<boolean> = ref(false)
const searchResultsList: Ref<Array<IFilmItem>> = ref([])

watch(searchQuery, async newVal => {
	if (newVal === '') {
		searchResultsList.value = []
		return
	}
	searchResultsList.value = []
	isLoading.value = true
	try {
		const response = await $fetch(`/api/movie/search?name=${newVal}`)
		if (Array.isArray(response)) {
			searchResultsList.value = response
		}
	} catch (err) {
		console.error('Ошибка запроса:', err)
		searchResultsList.value = []
	} finally {
		isLoading.value = false
	}
})

const outerContainer = ref<HTMLDivElement | null>(null)
const contentArea = ref<HTMLDivElement | null>(null)

const handleClick = (event: MouseEvent) => {
	if (contentArea.value && !contentArea.value.contains(event.target as Node)) {
		searchQuery.value = ''
		searchResultsList.value = []
	}
}

onMounted(() => {
	document.addEventListener('click', handleClick)
})

onUnmounted(() => {
	document.removeEventListener('click', handleClick)
})
</script>

<style scoped>
@media screen and (max-width: 980px) {
	.item_holder {
		flex-direction: column;
		gap: 50px;
		justify-content: center;
		align-items: center;
	}
	.browse_by {
		display: none;
	}
	.find_film_holder {
		flex-direction: column;
		gap: 10px;
	}
	.input_field {
		width: 500px;
	}
	.spinner {
		margin-left: 460px;
	}
}
@media screen and (max-width: 530px) {
	.browse_holder {
		width: 350px;
	}
	.wrapper {
		width: 50%;
		flex-direction: column;
	}
	.wrapper .browse_item {
		border-color: #4b5563;
	}
	.wrapper:last-child .browse_item {
		border-right: none;
	}
	.wrapper .browse_item:first-child {
		border-bottom: 1px solid #4b5563;
	}
	.input_field {
		width: 290px;
	}
	.spinner {
		margin-left: 250px;
	}
}

@media screen and (max-width: 370px) {
	.browse_holder {
		width: 250px;
	}
	.wrapper {
		width: 50%;
		flex-direction: column;
	}
	.input_field {
		width: 290px;
	}
}
</style>
