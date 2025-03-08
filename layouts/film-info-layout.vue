<template>
	<div
		v-if="!isLoading"
		class="min-h-[100vh] flex flex-col justify-between bg-dark"
	>
		<div class="bg-[#1e2631]">
			<HeaderFeature />
		</div>

		<div class="bg-dark">
			<div v-if="film">
				<div class="pt-8 m-auto pb-24 main_holder text-gray-400">
					<div
						class="holder_content_all flex justify-between w-[1050px] m-auto p-5"
					>
						<div class="main_content_holder w-[670px]">
							<div>Everyone who has watched</div>
							<!-- title -->
							<div class="flex items-end gap-1">
								<NuxtLink
									:to="`/films/${generateSlug(film.film_name)}`"
									class="text-white text-2xl transition-all hover:text-blue-500"
									>{{ film.film_name }}</NuxtLink
								>
								<NuxtLink
									to="/soon"
									class="text-gray-600 transition-all hover:text-blue-400"
									>{{ film.realise_year }}</NuxtLink
								>
							</div>

							<!-- bordered links -->
							<div
								class="bordered_links mt-7 border-t border-gray-700 w-full flex justify-between items-center"
								:class="{
									'border-b': !isModalTable || isOpenedFilters,
								}"
							>
								<!-- Links to pages -->
								<div
									class="links_holder flex justify-between items-center w-full"
								>
									<div class="flex gap-3 relative">
										<NuxtLink
											v-for="(item, index) in filmInfoCategoriesList"
											:key="index"
											:to="`/films/${generateSlug(
												film.film_name
											)}/${item.toLowerCase()}`"
											class="text-green-600 pb-1 box-border relative"
										>
											<span
												class="relative after:absolute after:left-0 after:bottom-[-11px] after:w-full after:h-[1px] after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
												:class="{
													'text-white after:bg-white after:scale-x-100 hover:none':
														filmFiltersStore.section === item.toLowerCase(),
												}"
											>
												{{ item }}
											</span>
										</NuxtLink>
									</div>

									<div v-if="isModalTable" class="pr-2">
										<img
											v-if="!isOpenedFilters"
											@click="toggleFilters"
											class="object-contain w-6 h-6"
											src="/public/images/filterUnactive.png"
											alt=""
										/>

										<img
											v-if="isOpenedFilters"
											@click="toggleFilters"
											class="object-contain w-6 h-6"
											src="/public/images/filter.png"
											alt=""
										/>
									</div>
								</div>

								<!-- filters -->
								<div v-if="!isModalTable" class="flex gap-2 text-sm">
									<info-filter-by
										v-for="(optionBlocks, index) in optionsList"
										:data="optionBlocks"
										:film="film"
									>
										<template
											v-if="index === 1 || optionsList?.length === 1"
											#sortByText
											><div class="text-xs mr-[-10px] whitespace-nowrap">
												Sort by
											</div></template
										>
									</info-filter-by>
								</div>

								<!-- Adaptive filters -->
								<div
									v-if="isOpenedFilters && isModalTable"
									class="flex gap-2 text-sm"
								>
									<info-filter-by
										v-for="(optionBlocks, index) in optionsList"
										:data="optionBlocks"
										:film="film"
									>
										<template
											v-if="index === 1 || optionsList?.length === 1"
											#sortByText
											><div class="text-xs mr-[-10px] whitespace-nowrap">
												Sort by
											</div></template
										>
									</info-filter-by>
								</div>
							</div>

							<div class="mt-5">
								<slot />
							</div>
						</div>

						<!-- aside poster -->
						<div class="w-[230px]" :class="{ 'mt-8': isModalTable }">
							<film-poster :data="film"></film-poster>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="bg-[#2c3440]">
			<FooterFeature />
		</div>
	</div>

	<!-- Loading -->
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
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import {
	filmInfoCategoriesList,
	optionsMembersList,
	optionsLikesList,
	getOptionsReviewsList,
	optionsListsList,
} from '~/widgets/Film/model/filmInfo'

import { useFilmFiltersStore } from '~/features/Film/model/filmFiltersStore'
import { useMediaQuery } from '@vueuse/core'

const isModalTable = useMediaQuery('(max-width:555px)')

const filmFiltersStore = useFilmFiltersStore()

const route = useRoute()
const { film: film_name, section } = route.params as {
	film: string
	section: string
}

const optionsList = computed(() => {
	if (filmFiltersStore.section === 'members') {
		return optionsMembersList
	} else if (filmFiltersStore.section === 'likes') {
		return optionsLikesList
	} else if (filmFiltersStore.section === 'reviews') {
		const optionsReviewsList = getOptionsReviewsList()
		return optionsReviewsList
	} else if (filmFiltersStore.section === 'lists') {
		return optionsListsList
	}
})

const film: Ref<IFilmItem | null> = ref(null)

onMounted(async () => {
	film.value = await $fetch<IFilmItem>(`/api/movie/by-name/${film_name}`)
})

const { isLoading, finishLoading } = useLoading()

setTimeout(() => {
	finishLoading()
}, 100)

const isOpenedFilters = ref<boolean>(false)
const toggleFilters = () => {
	return (isOpenedFilters.value = !isOpenedFilters.value)
}

watch(
	() => route.path,
	() => {
		isOpenedFilters.value = false
	}
)
</script>

<style scoped>
.loading-container {
	@apply fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-opacity-80 z-50;
}
.loading-spinner {
	@apply border-8 border-t-8 border-gray-300 border-t-green-500 rounded-full w-16 h-16 animate-spin;
}

@media screen and (max-width: 1070px) {
	.holder_content_all {
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
}
@media screen and (max-width: 700px) {
	.main_content_holder {
		/* min-width: 310px; */
		width: 100%;
		max-width: 700px;
	}
}
@media screen and (max-width: 555px) {
	.bordered_links {
		flex-direction: column;
		align-items: start;
		padding-top: 5px;
	}
	.main_content_holder {
		max-width: 545px;
		width: 100%;
	}
	.links_holder {
		border-bottom: 1px solid #374151;
		padding-bottom: 4px;
	}
}
</style>
