<template>
	<div
		v-if="user"
		class="p-4 relative main_holder pt-6 m-auto pb-24 text-gray-400"
	>
		<member-profile-data :data="user"></member-profile-data>
	</div>
</template>

<script setup lang="ts">
import { useMemberStore } from '~/features/Member/memberStore'
import type { IUser } from '~/shared/model/interfaces/userInterface'

const memberStore = useMemberStore()
const route = useRoute()

const user = ref<IUser>()

onMounted(async () => {
	if (Array.isArray(route.params.member)) {
		memberStore.memberName = route.params.member[0]
	} else {
		memberStore.memberName = route.params.member
	}

	const response = await $fetch<IUser>(
		`/api/user/by/name/${memberStore.memberName}`
	)
	user.value = response
})
</script>

<style scoped></style>
