<template>
	<div class="flex items-center flex-col">
		<!-- years bar -->
		<div
			v-if="filmsStore.decade"
			class="flex justify-evenly items-center gap-3 mt-6 mb-4 text-gray-400 h-6"
		>
			<!-- prev decade -->
			<div class="w-[40px]">
				<img
					v-show="filmsStore.decade !== '1870s'"
					@click="routeDecadePrev"
					class="w-5 h-5 rotate-180 cursor-pointer"
					src="/public/images/triangle.png"
					alt=""
				/>
			</div>

			<!-- years -->
			<div class="years_holder flex items-center rounded h-[27px]">
				<!-- decade button -->
				<NuxtLink
					:to="
						getFilmsSearchPageLink(
							'decade',
							filmsStore.currentPage,
							filmsStore.decade
						)
					"
					class="border border-gray-600 rounded-l text-center flex px-5 h-full items-center justify-center"
					:class="{
						'bg-gray-600': filmsStore.decade === decadeFromUrl,
						'w-[140px] h-[30px] rounded py-2 text-[17px]': isMediumScreen,
					}"
					>{{ filmsStore.decade }}</NuxtLink
				>

				<!-- years buttons -->
				<NuxtLink
					v-if="!isMediumScreen"
					:to="
						getFilmsSearchPageLink('year', filmsStore.currentPage, String(item))
					"
					v-for="(item, index) in decadeYears"
					:key="index"
					class="border-gray-600 border text-center flex px-5 h-full items-center justify-center"
					:class="{
						'bg-gray-600':
							filmsStore.year === item && filmsStore.decade !== decadeFromUrl,
						'rounded-r': index === 9,
					}"
				>
					{{ item }}
				</NuxtLink>
			</div>

			<!-- next decade -->
			<div class="w-[40px]">
				<img
					v-show="filmsStore.decade !== '2020s'"
					@click="routeDecadeNext"
					class="w-5 h-5 cursor-pointer"
					src="/public/images/triangle.png"
					alt=""
				/>
			</div>
		</div>

		<!-- adaptive years -->
		<div
			v-if="isMediumScreen"
			class="adaptive_years grid grid-cols-5 grid-rows-2 place-items-center w-[500px] border-gray-600 border rounded"
		>
			<NuxtLink
				:to="
					getFilmsSearchPageLink('year', filmsStore.currentPage, String(item))
				"
				v-for="(item, index) in decadeYears"
				:key="index"
				class="text-center flex px-5 h-full items-center justify-center w-full"
				:class="{
					'bg-gray-600':
						filmsStore.year === item && filmsStore.decade !== decadeFromUrl,
					'border-b border-gray-600': index < 5,
					'border-r border-gray-600': index !== 4 && index !== 9,
				}"
			>
				{{ item }}
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useFilmsStore } from '~/features/Films/filmsStore'
import { validDecades } from '~/shared/model/validRoutes/validDecade'
import { useMediaQuery } from '@vueuse/core'

const router = useRouter()
const route = useRoute()
const filmsStore = useFilmsStore()
const decadeFromUrl = route.params.fDecade as string
const isMediumScreen = useMediaQuery('(max-width:960px)')

// Функция для генерации ссылки на decade prev
const routeDecadePrev = () => {
	const decadeIndex = validDecades.findIndex(
		decade => decade === filmsStore.decade
	)

	return router.push(
		getFilmsSearchPageLink(
			'decade',
			filmsStore.currentPage,
			validDecades[decadeIndex + 1]
		)
	)
}

// Функция для генерации ссылки на decade next
const routeDecadeNext = () => {
	const decadeIndex = validDecades.findIndex(
		decade => decade === filmsStore.decade
	)

	return router.push(
		getFilmsSearchPageLink(
			'decade',
			filmsStore.currentPage,
			validDecades[decadeIndex - 1]
		)
	)
}
// Функция для генерации years
const decadeYears = computed(() => {
	const decadeStore = filmsStore.decade

	let decade = 0
	if (decadeStore) {
		decade = Number(decadeStore.slice(0, decadeStore.length - 1))
	}

	return Array.from({ length: 10 }, (_, i) => decade + i)
})
</script>

<style scoped>
@media screen and (max-width: 520px) {
	.adaptive_years {
		width: auto;
	}
}
@media screen and (max-width: 370px) {
	.adaptive_years {
		font-size: 14px;
	}
}
</style>
