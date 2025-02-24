<template>
	<div>
		<!-- main title -->
		<div class="flex gap-2 items-center">
			<div class="text-3xl text-white">{{ film.film_name }}</div>
			<NuxtLink
				to="/soon"
				class="text-gray-200 border-b text-lg border-gray-300 hover:text-blue-400 transition-all"
			>
				{{ film.realise_year }}
			</NuxtLink>
			<div class="text-gray-400 text-lg">Directed by</div>
			<NuxtLink
				to="/soon"
				class="text-gray-200 border-b text-lg border-gray-300 hover:text-blue-400 transition-all"
			>
				{{ film.crew.director[0] }}
			</NuxtLink>
		</div>

		<!-- desription -->
		<div class="flex justify-between pt-6">
			<div class="text-gray-400 text-lg w-[390px]">
				{{ film.describtion }}
			</div>

			<!-- aside description -->
			<div>
				<!-- buttons -->
				<div class="flex flex-col gap-[1px]">
					<div
						class="text-gray-300 bg-gray-700 px-4 py-2 text-center rounded-t text-[15px]"
					>
						Sign in to log, rate or review
					</div>

					<div
						class="text-gray-300 bg-gray-700 px-4 py-2 text-center rounded-b text-[15px]"
					>
						Share
					</div>
				</div>

				<!-- Rating -->
				<div class="mt-5">
					<widget-title>
						<template #text_1>
							<div class="text-gray-400">RATINGS</div>
						</template>
					</widget-title>

					<div class="flex mt-3 gap-1 items-end h-[80px] justify-between">
						<div>
							<img src="./assets/star.png" class="w-5 h-5 mb-2" alt="" />
						</div>

						<div class="flex flex-row gap-[1px] mb-2 h-full items-end relative">
							<div
								v-for="(height, index) in heightsList"
								:key="index"
								:style="{ height: height + '%' }"
								class="w-[25px] rounded-t bg-[#456] hover:bg-[#678] cursor-pointer transition-all relative group"
							>
								<!-- Tooltip -->
								<div
									class="absolute top-[-35px] mb-2 left-1/2 -translate-x-1/2 bg-[#262b30] text-white text-xs px-2 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity w-[170px] h-[20px] z-10 flex items-center justify-center"
								>
									<div class="relative">
										<span
											>{{ getRatingLength(index) }} ratings ({{
												height
											}}%)</span
										>

										<!-- Arrow -->
										<div
											class="absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-t-[#262b30] border-l-transparent border-r-transparent top-[18px]"
										></div>
									</div>
								</div>
							</div>
						</div>

						<div class="flex flex-col items-center justify-end">
							<div class="text-lg text-gray-500">
								{{
									getFilmRate([
										film.rating1,
										film.rating2,
										film.rating3,
										film.rating4,
										film.rating5,
									])
								}}
							</div>
							<img src="./assets/5stars.png" class="w-11 h-11" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- data details -->
		<div class="mt-12 w-[390px]">
			<div class="mt-12">
				<div class="flex gap-5 border-b border-gray-500">
					<button
						v-for="(tab, index) in tabs"
						:key="index"
						:class="[
							'tab-button',
							{
								active: currentTab === tab,
								'text-green-600': currentTab === tab,
							},
						]"
						class="hover:border-b pb-[1px] hover:pb-0 box-border"
						@click="currentTab = tab"
					>
						{{ tab }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const props = defineProps<{ data: IFilmItem }>()
const film = props.data

const heightsList = computed(() =>
	ratingHeight([
		film.rating1,
		film.rating2,
		film.rating3,
		film.rating4,
		film.rating5,
	])
)

function getRatingLength(index: number): number {
	return (
		(film[`rating${index + 1}` as keyof IFilmItem] as number[])?.length || 0
	)
}

const currentTab = ref<string>('Home')

const tabs: string[] = ['CAST', 'CREW', 'DETAILS', 'GENRES', 'RELEASES']
</script>

<style scoped>
.tab-button {
	box-sizing: border-box;
	color: #00e054;
	border-color: #00e054;
}

.tab-button.active {
	color: white;
	border-bottom: 1px solid white;
	padding-bottom: 0px;
}
</style>
