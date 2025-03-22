<template>
	<div class="container_content w-[230px]">
		<!-- first block -->
		<div class="p-4 w-full rounded bg-gray-700 text-gray-400">
			<span
				class="cursor-pointer text-white hover:text-blue-400 transition-all"
			>
				<NuxtLink :to="`/members/${generateSlug(user.user_name)}`">
					{{ user.user_name }}
				</NuxtLink>
			</span>
			is using Letterboxd to share film reviews and lists with friends.
			<span
				@click="headerStore.isModalSignUpOpened = true"
				class="cursor-pointer text-white hover:text-blue-400 transition-all"
			>
				Join here.
			</span>
		</div>

		<!-- 2 mini blocks -->
		<div class="flex flex-col w-full gap-[1px] mt-6">
			<!-- log in -->
			<div
				@click="headerStore.isModalSignInOpened = true"
				class="cursor-pointer py-2 w-full text-center bg-gray-700 text-gray-400 hover:text-gray-200 transition-all rounded-t"
			>
				Sign in to log, rate or review
			</div>

			<!-- share this review -->
			<div
				class="cursor-pointer py-2 w-full text-center bg-gray-700 text-gray-400 hover:text-gray-200 transition-all rounded-b"
			>
				Share this review
			</div>
		</div>

		<div class="ads mt-24">
			<img src="/public/images/ads.png" alt="" />
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IUser } from '~/shared/model/interfaces/userInterface'
import { useHeaderStore } from '~/features/Header/headerStore'

const headerStore = useHeaderStore()

const props = defineProps<{ user: IUser }>()
const user = props.user
</script>

<style scoped>
@media screen and (max-width: 980px) {
	.container_content {
		width: 100%;
		max-width: 700px;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.ads {
		display: none;
	}
}
</style>
