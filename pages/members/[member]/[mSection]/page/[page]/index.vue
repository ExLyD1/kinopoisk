<template>
	<div v-if="user">
		<member-watched-films
			v-if="mSection === 'films'"
			:data="user"
		></member-watched-films>

		<member-reviewed-films
			v-if="mSection === 'reviews'"
			:data="user"
		></member-reviewed-films>

		<member-lists v-if="mSection === 'lists'" :data="user"></member-lists>

		<member-likes-films
			v-if="mSection === 'likes-films'"
			:data="user"
		></member-likes-films>

		<member-likes-reviews
			v-if="mSection === 'likes-reviews'"
			:data="user"
		></member-likes-reviews>

		<member-likes-lists
			v-if="mSection === 'likes-lists'"
			:data="user"
		></member-likes-lists>

		<member-following-users-list
			v-if="mSection === 'following'"
			:data="user"
		></member-following-users-list>

		<member-followers-list
			v-if="mSection === 'followers'"
			:data="user"
		></member-followers-list>
	</div>
</template>

<script setup lang="ts">
import type { IUser } from '~/shared/model/interfaces/userInterface'
import { useMemberStore } from '~/features/Member/model/memberStore'
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
