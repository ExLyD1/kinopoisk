<template>
	<!-- Хеадер -->
	<div
		ref="outerContainer"
		class="main_holder m-auto flex flex-row items-center justify-between py-5 gap-5 px-5"
	>
		<!-- LOGO img -->
		<div>
			<router-link to="/">
				<img class="logo w-64 h-6" src="/public/images/logo.png" alt="" />
			</router-link>
		</div>

		<!-- Версия хеадера не адаптив -->
		<div v-if="!isAdaptiveVisible" class="nav_holder flex flex-row gap-14">
			<!-- Ссылки в хеадере -->
			<div class="flex flex-row gap-5 items-center justify-center">
				<div
					v-for="(item, index) in unauth_list"
					:key="index"
					class="text-white text-lg cursor-pointer hover:text-gray-400"
				>
					<NuxtLink :to="item.path" @click="item.function" class="nav_text">{{
						item.label
					}}</NuxtLink>
				</div>
			</div>

			<!-- Блок Инпута -->
			<div
				class="input_holder bg-gray-600 rounded-full w-36 h-10 flex flex-col justify-center relative"
			>
				<div class="flex flex-row justify-between items-center">
					<input
						v-model="searchQuery"
						class="w-full bg-gray-600 text-white p-2 pl-4 rounded-full h-8 text-sm outline-none"
						type="text"
					/>
					<img
						v-if="!isLoading"
						class="w-7 h-7 m-2 cursor-pointer"
						src="/public/images/search.svg"
						alt=""
					/>
					<div v-else class="spinner absolute ml-[110px] mt-1">
						<div
							class="animate-spin inline-block size-7 border-[3px] border-current border-t-transparent text-green-600 rounded-full"
							role="status"
							aria-label="loading"
						>
							<span class="sr-only">Loading...</span>
						</div>
					</div>

					<div
						ref="contentArea"
						v-if="searchResultsList.length != 0"
						class="border-gray-600 bg-gray-600 text-white flex flex-col absolute left-[-10px] top-full mt-2 w-[170px] max-h-[500px] overflow-y-auto rounded p-3 px-4 z-10 custom-scrollbar"
					>
						<NuxtLink
							class="pb-3 last:pb-0"
							v-for="(item, index) in searchResultsList"
							:key="index"
							:to="`/films/${generateSlug(item.film_name)}`"
						>
							{{ item.film_name }}
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>

		<!-- Адаптивная версия хеадера -->
		<div
			v-else
			class="nav_holder flex flex-row gap-14 justify-center items-center"
		>
			<div class="flex">
				<!-- Иконка для открытия поиска -->
				<div
					v-if="!isSearchVisible"
					class="bg-myLightDark cursor-pointer adapt_input"
				>
					<img
						@click="openSearch"
						class="search w-7 h-7"
						src="/public/images/search.svg"
						alt=""
					/>
				</div>

				<!-- Адаптивное поле поиска -->
				<div
					v-else
					:class="{ activeSearch: isSearchVisible }"
					class="bg-gray-600 rounded-full w-36 h-10 flex justify-center relative"
				>
					<div class="flex flex-row justify-between items-center w-full">
						<!-- Убрали relative, добавили w-full -->
						<img
							class="w-7 h-7 m-2 cursor-pointer"
							src="/public/images/search.svg"
							alt=""
						/>
						<input
							v-model="searchQuery"
							class="w-full bg-gray-600 text-white p-2 pl-4 rounded-full h-8 text-sm outline-none"
							type="text"
						/>
						<p
							class="mr-2 text-white"
							@click="closeSearch"
							v-if="isSearchVisible && !isLoading"
						>
							✕
						</p>
						<div v-else class="spinner absolute ml-[220px] mt-1">
							<div
								class="animate-spin inline-block size-7 border-[3px] border-current border-t-transparent text-green-600 rounded-full"
								role="status"
								aria-label="loading"
							>
								<span class="sr-only">Loading...</span>
							</div>
						</div>

						<div
							ref="contentArea"
							v-if="searchResultsList.length != 0"
							class="border-gray-200 bg-gray-600 text-white flex flex-col absolute left-0 top-[calc(100%+8px)] w-[250px] max-h-[500px] overflow-y-auto rounded p-3 px-4 z-20 custom-scrollbar"
						>
							<NuxtLink
								class="pb-3 last:pb-0"
								v-for="(item, index) in searchResultsList"
								:key="index"
								:to="`/films/${generateSlug(item.film_name)}`"
							>
								{{ item.film_name }}
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>

			<!-- Иконка меню -->
			<div>
				<img
					ref="dropdownButton"
					class="menu w-10 h-10 cursor-pointer"
					src="@/widgets/MainPage/icons/menu.svg"
					alt=""
					@click="toggleDropdown()"
					v-if="!useHeaderStore().isDropDownVisible"
				/>
				<img
					class="menu w-10 h-10 cursor-pointer"
					src="/public/images/close.png"
					alt=""
					@click="toggleDropdown()"
					v-else
				/>
			</div>
		</div>
	</div>

	<!-- Drop Down Menu -->
	<div
		v-if="useHeaderStore().isDropDownVisible"
		ref="dropdownMenu"
		class="flex flex-col gap-4 px-3 py-5 absolute top-[60px] w-full bg-[#1e2631] slide-down z-20"
	>
		<div v-for="(item, index) in navUnauthItems" :key="index">
			<div @click="item.function" class="flex items-center gap-2 text-gray-300">
				<img class="h-5 w-5" :src="item.image" alt="qwe" />
				<NuxtLink :to="item.path">{{ item.label }}</NuxtLink>
			</div>

			<div
				v-if="index !== navUnauthItems.length - 1"
				class="border-b py-2 border-gray-700"
			></div>
		</div>
	</div>

	<!-- Модалки авторизации -->
	<teleport to="body">
		<!-- Затемнение -->
		<div
			v-if="
				useHeaderStore().isModalSignUpOpened ||
				useHeaderStore().isModalSignInOpened
			"
			class="fixed inset-0 bg-black bg-opacity-50 z-40"
		></div>

		<!-- Модалка SignUp -->
		<div v-if="useHeaderStore().isModalSignUpOpened">
			<SignUp />
		</div>

		<!-- Модалка SignIn -->
		<div v-if="useHeaderStore().isModalSignInOpened">
			<SignIn />
		</div>
	</teleport>
</template>

<script setup lang="ts">
import { navUnauthItems } from './headerConfig'
import { useHeaderStore } from './headerStore'
import { useMediaQuery } from '@vueuse/core'
import { createPopper } from '@popperjs/core'
import type { NavItem } from './headerConfig'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import logo from '~/shared/ui/icons/logo.png'

// =========================================================
// список ссылок в хеадере
// =========================================================
const unauth_list: Ref<Array<NavItem>> = ref(navUnauthItems)

// =========================================================
// Для адаптивности поиска константы
// =========================================================
const isSearchVisible: Ref<boolean> = ref(false)

// =========================================================
// Проверка адаптива с помощью useMediaQuery
// =========================================================
const isAdaptiveVisible: Ref<boolean> = ref(true)
if (import.meta.client) {
	const mediaQuery = useMediaQuery('(max-width: 830px)')
	isAdaptiveVisible.value = mediaQuery.value
}

// =========================================================
// Проверка адаптива
// =========================================================
const handleResize: () => void = () => {
	if (typeof window !== 'undefined') {
		isAdaptiveVisible.value = window.innerWidth <= 830
	}
}

// =========================================================
// Поиск открытие/закрытие
// =========================================================

const openSearch: () => void = () => {
	isSearchVisible.value = true
}

const closeSearch: () => void = () => {
	isSearchVisible.value = false
}

// =========================================================
// При загрузке проекта проверка размера экрана
// =========================================================

onMounted(() => {
	if (typeof window !== 'undefined') {
		handleResize() // Проверяем размер экрана при монтировании
		window.addEventListener('resize', handleResize) // Обработчик изменения размера
	}
})
// =========================================================
// Поиск
// =========================================================
const searchQuery: Ref<string> = ref('')

const isLoading: Ref<boolean> = ref(false)
const searchResultsList: Ref<Array<IFilmItem>> = ref([])

watch(searchQuery, async newVal => {
	if (newVal === '') {
		searchResultsList.value = []
		return
	}
	searchResultsList.value = []
	isLoading.value = true
	try {
		const response = await $fetch(`/api/movie/search?name=${newVal}`)
		if (Array.isArray(response)) {
			searchResultsList.value = response
		}
	} catch (err) {
		console.error('Ошибка запроса:', err)
		searchResultsList.value = []
	} finally {
		isLoading.value = false
	}
})

const outerContainer = ref<HTMLDivElement | null>(null)
const contentArea = ref<HTMLDivElement | null>(null)

const handleClick = (event: MouseEvent) => {
	if (contentArea.value && !contentArea.value.contains(event.target as Node)) {
		searchQuery.value = ''
		searchResultsList.value = []
	}
}

onMounted(() => {
	document.addEventListener('click', handleClick)
})

onUnmounted(() => {
	document.removeEventListener('click', handleClick)
})

// =========================================================
// DropDown Menu
// =========================================================

const dropdownButton = ref<HTMLElement | null>(null)
const dropdownMenu = ref<HTMLElement | null>(null)
let popperInstance: any = null

// =========================================================
// Открытие/закрытие dropdown
// =========================================================
const toggleDropdown = () => {
	useHeaderStore().isDropDownVisible = !useHeaderStore().isDropDownVisible

	if (useHeaderStore().isDropDownVisible) {
		popperInstance = createPopper(dropdownButton.value!, dropdownMenu.value!, {
			placement: 'bottom-start',
			modifiers: [{ name: 'preventOverflow', options: { boundary: 'window' } }],
		})
	}
}
</script>

<style scoped>
/* Анимации и стили для поиска */
.activeSearch {
	position: absolute;
	margin-top: -22px;
	right: 100px;
	animation: expandWidth 0.5s ease-in-out forwards;
	overflow: visible;
}

.custom-scrollbar {
	overflow-y: auto;
	background: #4b5563; /* Убедитесь, что фон виден */
}

/* Увеличим z-index для видимости */
.custom-scrollbar {
	z-index: 20; /* Увеличен с 10 до 20, чтобы быть выше dropdown */
}

@keyframes expandWidth {
	0% {
		width: 0;
	}
	100% {
		width: 250px;
	}
}
.slide-down {
	animation: slideDown 0.25s ease-out;
}

@keyframes slideDown {
	0% {
		transform: translateY(-10px);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
}

/* кастомный скорлбар при поиске */

/* Custom Scrollbar Styling */
.custom-scrollbar {
	overflow-y: auto; /* Ensure vertical scrolling */
}

/* Webkit (Chrome, Safari, Edge) */
.custom-scrollbar::-webkit-scrollbar {
	width: 8px; /* Width of the scrollbar */
}

.custom-scrollbar::-webkit-scrollbar-track {
	background: #4b5563; /* Gray-600 matching the background */
	border-radius: 4px; /* Rounded edges */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
	background: #9ca3af; /* Gray-400 for a subtle contrast */
	border-radius: 4px; /* Rounded thumb */
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
	background: #d1d5db; /* Gray-300 for hover effect */
}

/* Firefox */
.custom-scrollbar {
	scrollbar-width: thin; /* Makes scrollbar thinner */
	scrollbar-color: #9ca3af #4b5563; /* Thumb color and track color */
}

/* Уменьшение всех размеров */
@media screen and (max-width: 950px) {
	.logo {
		width: 200px;
		height: 20px;
	}
	.nav_text {
		font-size: 16px;
	}
	.input_holder {
		height: 35px;
	}
	.nav_holder {
		gap: 30px;
	}
}

/* Появление адаптивного хедера */
@media screen and (max-width: 830px) {
	.closeSearch {
		display: block;
	}
}
/* Редактирование длины поиска */
@media screen and (max-width: 360px) {
	@keyframes expandWidth {
		0% {
			width: 0;
		}
		100% {
			width: 200px;
		}
	}
	.activeSearch {
		right: 80px;
	}
	.custom-scrollbar {
		width: 200px;
	}
}

/* Редактирование всех размеров при адаптиве телефона */
@media screen and (max-width: 375px) {
	.logo {
		width: 180px;
		height: 20px;
	}
	.menu {
		width: 30px;
		height: 30px;
	}
	.search {
		width: 23px;
		height: 23px;
	}
}
</style>
