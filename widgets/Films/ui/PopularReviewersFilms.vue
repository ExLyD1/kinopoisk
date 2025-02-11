<template>
	<div>
		<widget-title>
			<template #text_1>
				<NuxtLink to="members/total">Popular Reviewers</NuxtLink>
			</template>
			<template #text_2>
				<NuxtLink to="members/total">MORE</NuxtLink>
			</template>
		</widget-title>

		<div v-if="usersList.length > 0" class="flex flex-col gap-2 mt-3">
			<div v-for="(user, index) in usersList" :key="index">
				<popular-reviewers-item :data="user"> </popular-reviewers-item>

				<div class="border-b border-gray-700 pt-3"></div>
			</div>
		</div>
		<LoadingSpinner v-else class="my-5" />
	</div>
</template>

<script setup lang="ts">
import type { IUser } from '~/shared/model/interfaces/userInterface'

const usersList: Ref<IUser[]> = ref([])

onMounted(async () => {
	usersList.value = await $fetch<IUser[]>('/api/user/list?quantity=5')
})
</script>

<style scoped></style>
