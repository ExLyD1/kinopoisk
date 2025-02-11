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

		<div class="flex flex-col gap-2 mt-3">
			<!-- <div v-for="(user, index) in usersList" :key="index">
				<popular-reviewers-item :data="user"> </popular-reviewers-item>

				<div class="border-b border-gray-700 pt-3"></div>
			</div> -->
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IUser } from '~/shared/model/interfaces/userInterface'

// const { data: usersData } = await useAsyncData<IUser[]>('usersData', async () =>
// 	$fetch<IUser[]>('/api/getUsersList?quantity=5')
// )

// const usersList = computed(() => usersData.value || [])
</script>

<style scoped></style>
