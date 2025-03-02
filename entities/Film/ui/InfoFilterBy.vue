<template>
	<div v-if="film" class="flex items-center justify-center gap-1">
		<slot name="sortByText"></slot>
		<div
			class="relative min-w-[120px] select-none"
			@mouseenter="openDropDown"
			@mouseleave="handleMouseLeave"
		>
			<!-- Заголовок селекта -->
			<div
				class="w-auto px-3 py-2 text-gray-400 cursor-pointer whitespace-nowrap"
			>
				{{ label }}
			</div>

			<!-- Выпадающее меню -->
			<div
				v-if="isDropdownVisible"
				class="flex flex-col absolute left-0 top-0 mt-1 border border-gray-600 bg-gray-800 rounded shadow-lg z-10 overflow-hidden dropdown-menu"
				:class="[widthList]"
				@mouseenter="isDropdownVisible = true"
				@mouseleave="isDropdownVisible = false"
			>
				<!-- label -->
				<div class="px-3 py-2 whitespace-nowrap">
					{{ label }}
				</div>

				<!-- default options -->
				<NuxtLink
					v-for="(option, index) in props.data.options"
					:key="index"
					:to="
						props.data.isSort
							? `/films/${generateSlug(film.film_name)}${
									filmFiltersStore.section ? '/' + filmFiltersStore.section : ''
							  }${
									filmFiltersStore.no_rated === false ? '' : '/rated/none'
							  }/by/${option.route_query}`
							: `/films/${generateSlug(film.film_name)}/${
									filmFiltersStore.section
							  }${option.route_query ? '/' + option.route_query : ''}${
									filmFiltersStore.sort ? '/by/' + filmFiltersStore.sort : ''
							  }`
					"
					class="px-3 py-2 hover:bg-gray-600 cursor-pointer hover:text-white whitespace-nowrap"
				>
					{{ option.option }}
				</NuxtLink>

				<!-- deep options -->
				<div
					v-if="props.data.deep_options"
					v-for="(deep_option, index) in props.data.deep_options"
					:key="index"
					class="py-2 whitespace-nowrap flex flex-col"
				>
					<div class="ml-3">{{ deep_option.label }}</div>
					<div class="flex flex-col pt-2">
						<NuxtLink
							v-for="(option, index) in deep_option.options"
							:key="index"
							:to="`/films/${generateSlug(film.film_name)}${
								filmFiltersStore.section ? '/' + filmFiltersStore.section : ''
							}/${filmFiltersStore.no_rated === false ? '' : 'rated/none/'}${
								option.route_query === '' ? '' : 'by/' + option.route_query
							}`"
							class="pl-7 py-2 hover:bg-gray-600 cursor-pointer hover:text-white whitespace-nowrap text-xs flex items-center gap-1"
							:class="{
								'text-white ml-[-15px]': selectedOption === option.option,
							}"
						>
							<img
								v-if="
									filmFiltersStore.sort === option.route_query ||
									(option.route_query === '' &&
										filmFiltersStore.sort === undefined)
								"
								class="w-3 h-3 ml-[-15px]"
								src="./assets/selected.svg"
								alt=""
							/>
							{{ option.option }}
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmOptionsList } from '~/widgets/Film/model/filmInfo'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import { useFilmFiltersStore } from '~/features/Film/model/filmFiltersStore'

const filmFiltersStore = useFilmFiltersStore()

// Получаение данных из родителя
const props = defineProps<{ data: IFilmOptionsList; film: IFilmItem }>()
const label = props.data.label
const widthList = props.data.width
const film = props.film

const isDropdownVisible = ref(false)
const selectedOption: Ref<string | number> = ref(label)

const openDropDown = () => {
	return (isDropdownVisible.value = true)
}
// Закрытие меню только если курсор ушел ВНЕ контейнера и dropdown
const handleMouseLeave = (event: MouseEvent) => {
	const relatedTarget = event.relatedTarget as HTMLElement
	if (relatedTarget && relatedTarget.closest('.dropdown-menu')) return
	isDropdownVisible.value = false
}

const route = useRoute()
</script>

<style scoped></style>
