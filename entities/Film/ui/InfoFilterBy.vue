<template>
	<div class="flex items-center justify-center gap-1">
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
				{{ selectedOption }}
			</div>

			<!-- Выпадающее меню -->
			<div
				v-if="isDropdownVisible"
				class="flex flex-col absolute left-0 top-0 mt-1 border border-gray-600 bg-gray-800 rounded shadow-lg z-10 overflow-hidden dropdown-menu"
				:class="[widthList]"
				@mouseenter="isDropdownVisible = true"
				@mouseleave="isDropdownVisible = false"
			>
				<div
					class="px-3 py-2 hover:bg-gray-600 cursor-pointer hover:text-white whitespace-nowrap"
				>
					{{ label }}
				</div>

				<NuxtLink
					v-for="(option, index) in props.data.options"
					:key="index"
					:to="option.route_query"
					class="px-3 py-2 hover:bg-gray-600 cursor-pointer hover:text-white whitespace-nowrap"
				>
					{{ option.option }}
				</NuxtLink>

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
							:to="option.route_query"
							class="pl-7 py-2 hover:bg-gray-600 cursor-pointer hover:text-white whitespace-nowrap text-xs"
							:class="{
								'text-white': selectedOption === option.option,
							}"
						>
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

// Получаение данных из родителя
const props = defineProps<{ data: IFilmOptionsList }>()
const label = props.data.label
const widthList = props.data.width

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
onMounted(() => {
	if (!route.path.includes('by')) {
		selectedOption.value = 'Newest First'
	}
})
</script>

<style scoped></style>
