<template>
	<div class="flex items-center justify-center gap-1 text-gray-400">
		<slot name="sortByText"></slot>
		<div
			class="relative min-w-[120px] select-none"
			@mouseenter="openDropDown"
			@mouseleave="handleMouseLeave"
		>
			<!-- Заголовок селекта -->
			<div class="w-auto px-3 text-gray-400 cursor-pointer whitespace-nowrap">
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

				<!-- any label -->
				<div
					v-if="memberStore.genre.length === 0 && !memberStore.decade"
					class="px-3 py-1 border-y border-gray-500 text-white whitespace-nowrap text-sm"
				>
					{{ anyLabel }}
				</div>
				<!-- link any label -->
				<NuxtLink
					v-else
					:to="
						memberSectionsLink(
							memberStore.memberName,
							memberStore.memberSection,
							memberStore.currentPage
						)
					"
					class="px-3 py-1 hover:bg-gray-600 border-y border-gray-500 hover:text-white whitespace-nowrap text-sm w-full"
				>
					{{ anyLabel }}
				</NuxtLink>

				<!-- default options -->
				<NuxtLink
					v-for="(option, index) in props.data.options"
					:key="index"
					:to="
						memberSectionsLink(
							memberStore.memberName,
							memberStore.memberSection,
							memberStore.currentPage
						) +
						`/${
							option.isOptedMore && option.route_query
								? ''
								: `decade/${option.route_query}`
						}`
					"
					@click="option.isOptedMore ? genreFunc(option.route_query) : ''"
					class="px-3 pl-7 py-1 hover:bg-gray-600 cursor-pointer hover:text-white whitespace-nowrap text-xs flex items-center gap-1"
					:class="{
						'!pl-2 text-white': memberStore.genre.includes(option.route_query),
						'text-white': memberStore.decade === option.route_query,
					}"
				>
					<img
						v-if="memberStore.genre.includes(option.route_query)"
						src="/public/images/favorite_green.png"
						class="w-4 h-4"
						alt=""
					/>
					<div>{{ option.option }}</div>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IMemberOptionsList } from '~/features/Member/model/memberLinksData'
import { useMemberStore } from '~/features/Member/model/memberStore'

const memberStore = useMemberStore()

// Получаение данных из родителя
const props = defineProps<{ data: IMemberOptionsList }>()
const label = computed(() => props.data.label)
const anyLabel = computed(() => props.data.anyLabel)
const widthList = computed(() => props.data.width)

const isDropdownVisible = ref(false)
const selectedOption: Ref<string | number> = ref(label)

// set genres in store
const genreFunc = (genre: string) => {
	if (memberStore.genre.includes(genre)) {
		memberStore.genre = memberStore.genre.filter(g => g !== genre)
		if (memberStore.genre.length === 0) {
			return useRouter().push(
				memberSectionsLink(
					memberStore.memberName,
					memberStore.memberSection,
					memberStore.currentPage
				)
			)
		}
	} else {
		memberStore.genre.push(genre)
	}
	useRouter().push(
		memberSectionsLink(
			memberStore.memberName,
			memberStore.memberSection,
			memberStore.currentPage
		) + `/genre/${memberStore.genre.join('+')}`
	)
}

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
