<template>
	<div v-if="user">{{ user.user_name }}`s {{ mSection }}</div>
</template>

<script setup lang="ts">
import type { IUser } from '~/shared/model/interfaces/userInterface'
import { useMemberStore } from '~/features/Member/memberStore'
import { useMediaQuery } from '@vueuse/core'

const memberStore = useMemberStore()

const route = useRoute()
const { member: member_name, mSection } = route.params as {
	member: string
	mSection: string
}

const user = ref<IUser>()

onMounted(async () => {
	user.value = await $fetch<IUser>(
		`/api/user/by/name/${memberStore.memberName}`
	)
})

definePageMeta({
	layout: 'member-page-info-layout',
})
</script>

<style scoped></style>
