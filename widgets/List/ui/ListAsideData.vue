<template>
	<div v-if="user" class="main">
		<!-- sign up block -->
		<div class="singUp text-gray-300 bg-gray-700 rounded p-4">
			<NuxtLink
				:to="`/members/${generateSlug(user.user_name)}`"
				class="text-blue-200 cursor-pointer transition-all hover:text-blue-400"
				>{{ user.user_name }}</NuxtLink
			>
			is using Letterboxd to share film reviews and lists with friends.
			<span
				class="text-blue-200 cursor-pointer transition-all hover:text-blue-400"
				@click="useHeaderStore().isModalSignUpOpened = true"
			>
				Join here.</span
			>
		</div>

		<!-- button block -->
		<div class="mt-4 flex flex-col gap-[1px] text-gray-300 w-full">
			<!-- sing in -->
			<div
				@click="useHeaderStore().isModalSignInOpened = true"
				class="bg-gray-700 py-2 px-4 rounded-t h-[42px] text-sm whitespace-nowrap flex items-center justify-center cursor-pointer"
			>
				Sign in to create or like lists
			</div>

			<!-- likes -->
			<NuxtLink
				:to="`/members/${generateSlug(user.user_name)}/lists/${generateSlug(
					list.list_name
				)}/likes`"
				class="bg-gray-700 py-2 px-4 flex items-center h-[42px] text-sm whitespace-nowrap justify-center gap-1"
			>
				<img src="/public/images/favorite.png" class="w-5 h-5" alt="" />
				<div>{{ list.likes }}</div>
				<div>likes</div>
			</NuxtLink>

			<!-- share -->
			<NuxtLink
				to="/soon"
				class="bg-gray-700 py-2 px-4 rounded-b h-[42px] text-sm whitespace-nowrap flex items-center justify-center"
			>
				Share
			</NuxtLink>
		</div>

		<!-- tags -->
		<div class="mt-8">
			<widget-title>
				<template #text_1>Tagged</template>
			</widget-title>

			<div class="mt-2 flex flex-wrap gap-2">
				<popular-tags-lists-item
					v-for="(tag, index) in list.tags"
					:key="index"
					:data="tag"
					class="mr-1"
				></popular-tags-lists-item>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'
import type { IUser } from '~/shared/model/interfaces/userInterface'
import { useHeaderStore } from '~/features/Header/headerStore'

const props = defineProps<{ data: IFilmsList }>()
const list = props.data
const user = ref<IUser>()

onMounted(async () => {
	user.value = await $fetch<IUser>(`/api/user/${list.user_id}`)
})
</script>

<style scoped>
@media screen and (max-width: 850px) {
	.main {
		display: flex;
		flex-wrap: wrap;
	}
	.singUp {
		width: 100%;
		text-align: center;
	}
}
</style>
