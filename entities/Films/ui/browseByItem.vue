<template>
	<div
		class="option relative min-w-[120px] select-none"
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
				v-for="(option, index) in optionsList"
				:key="index"
				:to="option.route_query"
				class="px-3 py-2 hover:bg-gray-600 cursor-pointer hover:text-white whitespace-nowrap"
			>
				{{ option.option }}
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IOptionsList } from '~/features/Films/optionValues'

// Получаение данных из родителя
const props = defineProps<{ data: IOptionsList }>()
const label = props.data.label
const optionsList = props.data.options
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

// Передача данных в родительский компонент
const emit = defineEmits(['update:selectedOption'])

const selectOption = (option: string | number) => {
	selectedOption.value = option
	emit('update:selectedOption', option) // Отправляем данные в родителя
	isDropdownVisible.value = false
}
</script>

<style scoped>
.option {
	border-right: 1px solid gray;
	border-radius: none;
}
</style>
