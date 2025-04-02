<template>
	<div
		v-if="!isLoading"
		class="min-h-[100vh] flex flex-col justify-between bg-dark"
	>
		<div class="bg-[#1e2631]">
			<HeaderFeature />
		</div>

		<div class="bg-dark">
			<div class="content_holder w-[1050px] m-auto mt-12 text-gray-400 p-5">
				<!-- filters -->
				<div
					class="content flex justify-between items-center border-b border-gray-700"
				>
					<!-- films title and adaptive filter images -->
					<div class="films flex w-full justify-between">
						<div>Films</div>

						<!-- adaptive filters image -->
						<div v-if="isSmallScreen">
							<!-- not opened filters image -->
							<img
								v-if="!isOpenedFilters"
								@click="toggleFilters"
								src="/public/images/filterUnactive.png"
								class="w-4 h-4"
								alt=""
							/>
							<!-- opened filters image -->
							<img
								v-else
								@click="toggleFilters"
								src="/public/images/filter.png"
								class="w-4 h-4"
								alt=""
							/>
						</div>
					</div>

					<!-- filters blocks -->
					<div v-if="!isSmallScreen" class="flex items-center gap-2">
						<total-films-filters-item
							v-for="(item, index) in filtersList"
							:key="index"
							:data="item"
						>
							<template #sortByText v-if="item.isSort"
								><div class="text-xs mr-[-10px] whitespace-nowrap">
									Sort by
								</div></template
							>
						</total-films-filters-item>
					</div>

					<!-- Adaptive filters -->
					<div
						v-if="isOpenedFilters && isSmallScreen"
						class="flex flex-col items-start w-full gap-1 text-sm my-[10px] border-b border-gray-700"
					>
						<total-films-filters-item
							v-for="(item, index) in filtersList"
							:key="index"
							:data="item"
							class="ml-[-10px]"
						>
							<template #sortByText v-if="item.isSort"
								><div class="text-xs ml-[12px] mr-[-10px] whitespace-nowrap">
									Sort by
								</div></template
							>
						</total-films-filters-item>
					</div>
				</div>

				<!-- main -->
				<div>
					<slot />
				</div>
			</div>
		</div>

		<div class="bg-[#2c3440]">
			<FooterFeature />
		</div>
	</div>

	<div v-else>
		<div class="h-[80px] w-full bg-[#1e2631]"></div>

		<div class="h-[120vh] w-full bg-dark">
			<div class="loading-container">
				<div class="loading-spinner"></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmOptionsList } from '~/features/Film/model/filmsSearchData'

import {
	decadesOptionsList,
	genresOptionsList,
	sortingOptionsList,
} from '~/features/Film/model/filmsSearchData'

import { useMediaQuery } from '@vueuse/core'

const isSmallScreen = useMediaQuery('(max-width:555px)')
const isOpenedFilters = ref<boolean>(false)

const toggleFilters = () => {
	isOpenedFilters.value = !isOpenedFilters.value
}

const filtersList: IFilmOptionsList[] = [
	decadesOptionsList,
	genresOptionsList,
	sortingOptionsList,
]

const { isLoading, finishLoading } = useLoading()
setTimeout(() => {
	finishLoading()
}, 100)
</script>

<style scoped>
.loading-container {
	@apply fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-opacity-80 z-50;
}

.loading-spinner {
	@apply border-8 border-t-8 border-gray-300 border-t-green-500 rounded-full w-16 h-16 animate-spin;
}
@media screen and (max-width: 1060px) {
	.content_holder {
		width: 100%;
	}
}
@media screen and (max-width: 555px) {
	.content {
		flex-direction: column;
		border: none;
	}
	.films {
		border-bottom: 1px solid #374151;
	}
}
</style>
