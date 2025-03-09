<template>
	<div class="pr-3">
		<!-- main title -->
		<div
			class="title_holder flex gap-2 justify-between items-center whitespace-nowrap"
		>
			<div class="title flex gap-2 items-center whitespace-nowrap">
				<div class="film_title text-3xl text-white">{{ film.film_name }}</div>
				<NuxtLink
					to="/soon"
					class="film_year text-gray-200 border-b text-lg border-gray-300 hover:text-blue-400 transition-all"
				>
					{{ film.realise_year }}
				</NuxtLink>
				<div class="film_directed text-gray-400 text-lg">Directed by</div>
				<NuxtLink
					to="/soon"
					class="film_director text-gray-200 border-b text-lg border-gray-300 hover:text-blue-400 transition-all"
				>
					{{ film.crew.director[0] }}
				</NuxtLink>

				<div v-if="isMobileScreen" class="flex gap-2 mt-3 text-sm items-center">
					<div
						class="bg-gray-700 text-gray-400 rounded p-1 flex items-center cursor-pointer gap-1"
					>
						<div><img class="w-4 h-4" src="./assets/play.png" alt="" /></div>
						<div>TRAILER</div>
					</div>
					<div>{{ film.duration }} mins</div>
				</div>
			</div>

			<div v-if="isMobileScreen">
				<div class="img_holder w-[150px] h-[200px]">
					<img
						:src="film.film_image"
						class="w-full h-full object-cover border border-gray-600 rounded"
						alt=""
					/>
				</div>
			</div>
		</div>

		<!-- desription -->
		<div class="description flex justify-between pt-6">
			<div class="description_text text-gray-400 text-lg w-[390px]">
				{{ film.describtion }}
			</div>

			<!-- aside description -->
			<div>
				<!-- buttons -->
				<div class="description_buttons flex flex-col gap-[1px]">
					<div
						@click="headerStore.isModalSignInOpened = true"
						class="text-gray-300 bg-gray-700 px-4 py-2 text-center rounded-t text-[15px] cursor-pointer"
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
				<div class="rating mt-5">
					<widget-title>
						<template #text_1>
							<NuxtLink
								:to="`/films/${generateSlug(film.film_name)}/members`"
								class="text-gray-400"
								>RATINGS</NuxtLink
							>
						</template>
					</widget-title>

					<div class="flex mt-3 gap-1 items-end h-[80px] justify-between">
						<div>
							<img
								src="@/widgets/Film/ui/assets/star.png"
								class="w-5 h-5 mb-2"
								alt=""
							/>
						</div>

						<div class="flex flex-row gap-[1px] mb-2 h-full items-end relative">
							<NuxtLink
								:to="`/films/${generateSlug(film.film_name)}/members`"
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
							</NuxtLink>
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
							<img
								src="@/widgets/Film/ui/assets/5stars.png"
								class="w-11 h-11"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- data details -->
		<div class="data mt-12 w-[390px]">
			<div iv class="mt-12">
				<div class="flex gap-5 border-b border-gray-500">
					<button
						v-for="(component, tab) in tabs"
						:key="tab"
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

				<div class="mt-3">
					<component
						:is="tabs[currentTab]"
						:data="film"
						class="tab"
					></component>
				</div>
			</div>
		</div>

		<!-- time -->
		<div
			v-if="!isMobileScreen"
			class="mt-8 flex gap-3 text-sm text-gray-400 items-center"
		>
			<div>{{ film.duration }} mins</div>
			<div class="flex gap-1 items-center">
				More at
				<div
					class="rounded border-2 border-gray-500 hover:text-white hover:border-white p-1 text-xs cursor-pointer"
				>
					IMDB
				</div>
				<div
					class="rounded border-2 border-gray-500 hover:text-white hover:border-white p-1 text-xs cursor-pointer"
				>
					TMDB
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import { useMediaQuery } from '@vueuse/core'
import { useHeaderStore } from '../Header/headerStore'

import DescriptionCast from '~/widgets/Film/ui/DescriptionCast.vue'
import DescriptionCrew from '~/widgets/Film/ui/DescriptionCrew.vue'
import DescriptionDetails from '~/widgets/Film/ui/DescriptionDetails.vue'
import DescriptionGenres from '~/widgets/Film/ui/DescriptionGenres.vue'

const headerStore = useHeaderStore()

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

const currentTab = ref<keyof typeof tabs>('Cast')

const tabs = {
	Cast: DescriptionCast,
	Crew: DescriptionCrew,
	Details: DescriptionDetails,
	Genres: DescriptionGenres,
}

const isMobileScreen = useMediaQuery('(max-width:680px)')
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
@media screen and (max-width: 985px) {
	.title {
		width: 100%;
	}
	.description {
		flex-direction: column;
		width: 100%;
		gap: 30px;
	}
	.description_buttons {
		width: 420px;
	}
	.rating {
		width: 230px;
	}
}
@media screen and (max-width: 785px) {
	.title {
		flex-wrap: wrap;
		gap: 0px;
	}
	.film_title {
		font-size: 18px;
		width: 100%;
	}
	.film_year,
	.film_directed {
		font-size: 14px;
		color: gray;
		margin: 10px 7px 2px 0px;
		border: none;
		line-height: 10px;
	}
	.film_director {
		width: 100%;
		font-size: 16px;
		color: #789;
		font-weight: 600;
		border: none;
	}

	.description_text {
		width: 100%;
	}
	.description_buttons {
		width: 100%;
	}
}
@media screen and (max-width: 680px) {
	.title_holder {
		align-items: start;
	}
	.title {
		align-items: center;
	}
	.film_title {
		font-size: 28px;
		width: 100%;
	}
	.film_year,
	.film_directed {
		margin: 10px 7px 2px 0px;
	}
	.description_text {
		font-size: 16px;
	}
}
@media screen and (max-width: 450px) {
	.data {
		width: 100%;
	}
}
@media screen and (max-width: 400px) {
	.film_title {
		font-size: 18px;
	}
	.img_holder {
		width: 120px;
		height: 170px;
	}
}
</style>
