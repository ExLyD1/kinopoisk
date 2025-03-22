<template>
	<div v-if="user">
		<member-likes-films
			v-if="mSection === 'likes-films'"
			:data="user"
		></member-likes-films>
	</div>
</template>

<script setup lang="ts">
import type { IUser } from '~/shared/model/interfaces/userInterface'
import { useMemberStore } from '~/features/Member/model/memberStore'
import { useMediaQuery } from '@vueuse/core'
import checkMYear from '~/middleware/member/checkMYear'

const memberStore = useMemberStore()

const route = useRoute()
const {
	member: member_name,
	mSection,
	mGenre,
} = route.params as {
	member: string
	mSection: string
	mGenre: string
}

const user = ref<IUser>()

onMounted(async () => {
	user.value = await $fetch<IUser>(
		`/api/user/by/name/${memberStore.memberName}`
	)
})

definePageMeta({
	layout: 'member-page-info-layout',
	middleware: checkMYear,
})
</script>

<style scoped></style>
