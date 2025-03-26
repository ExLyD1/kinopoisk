<template>
	<div
		v-if="!isLoading"
		class="min-h-[100vh] flex flex-col justify-between bg-dark"
	>
		<div class="bg-[#1e2631]">
			<HeaderFeature />
		</div>

		<div class="bg-dark">
			<div class="main_holder m-auto mt-12 text-gray-400">
				<!-- filters -->
				<div
					class="flex justify-between items-center w-full pb-2 border-b border-gray-700"
				>
					<div>Films</div>

					<!-- filters blocks -->
					<div class="flex items-center gap-2">
						<total-films-filters-item
							v-for="(item, index) in filtersList"
							:key="index"
							:data="item"
						>
							<template #sortByText v-if="item.isSort"
								><div class="text-xs mr-[-10px]">Sort by</div></template
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
</style>
