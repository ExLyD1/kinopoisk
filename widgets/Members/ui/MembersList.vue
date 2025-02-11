<template>
	<div v-if="usersList.length > 0">
		<div class="border-b border-gray-700 mb-2"></div>
		<div
			v-for="(user, index) in usersList"
			:key="index"
			class="flex flex-col gap-2 w-full"
		>
			<member-list-item :data="user" class="mt-2 mb-2"></member-list-item>

			<div class="border-b border-gray-700"></div>
		</div>

		<div class="mt-6 flex justify-center">
			<NuxtLink to="members/total">
				<Button class="text-gray-300 bg-gray-700 hover:bg-gray-800 text-sm px-6"
					>View more</Button
				>
			</NuxtLink>
		</div>
	</div>
	<LoadingSpinner v-else class="my-12" />
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import type { IUser } from '~/shared/model/interfaces/userInterface'

const usersList: Ref<IUser[]> = ref([])

onMounted(async () => {
	usersList.value = await $fetch<IUser[]>('/api/user/list?quantity=17')
})
</script>

<style scoped></style>
