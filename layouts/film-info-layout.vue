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
					<div class="flex justify-between w-[1050px] m-auto">
						<div class="w-[670px]">
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
								class="mt-7 border-y border-gray-700 w-full flex justify-between items-center"
							>
								<!-- Links to pages -->
								<div class="flex gap-3 relative -mb-[1px]">
									<NuxtLink
										v-for="(item, index) in filmInfoCategoriesList"
										:key="index"
										:to="`/soon`"
										class="text-green-600 pb-1 box-border relative"
										:class="{
											'border-b border-white text-white': section === item,
										}"
									>
										<span
											class="relative after:absolute after:left-0 after:bottom-[-11px] after:w-full after:h-[1px] after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
										>
											{{ item }}
										</span>
									</NuxtLink>
								</div>

								<!-- filters -->
								<div class="flex gap-2 text-sm">
									<info-filter-by
										v-for="(optionBlocks, index) in optionsViewersList"
										:data="optionBlocks"
									>
										<template v-if="index === 1" #sortByText
											><div class="text-xs mr-[-10px]">Sort by</div></template
										>
									</info-filter-by>
								</div>
							</div>
						</div>

						<div class="w-[230px]">
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
	optionsViewersList,
	optionsLikesList,
	optionsReviewsList,
	optionsListsList,
} from '~/widgets/Film/model/filmInfo'

const route = useRoute()
const { film: film_name, section } = route.params as {
	film: string
	section: string
}

const film: Ref<IFilmItem | null> = ref(null)

onMounted(async () => {
	film.value = await $fetch<IFilmItem>(`/api/movie/by-name/${film_name}`)
})

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
