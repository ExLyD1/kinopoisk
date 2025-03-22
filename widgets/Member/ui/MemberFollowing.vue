<template>
	<div class="main_holder_qwe w-[283px]">
		<widget-title>
			<template #text_1>
				<NuxtLink :to="memberSectionsLink(user.user_name, 'following', 1)"
					>Following</NuxtLink
				>
			</template>
			<template #text_2>
				<NuxtLink :to="memberSectionsLink(user.user_name, 'following', 1)">{{
					followingsList.length
				}}</NuxtLink>
			</template>
		</widget-title>

		<div v-if="followingsList.length > 0" class="flex gap-2 mt-2 flex-wrap">
			<NuxtLink
				v-for="(item, index) in followingsList"
				:to="`/members/${generateSlug(item.user_name)}`"
			>
				<Avatar
					class="border-gray-500 border hover:border-gray-300 transition-all cursor-pointer"
				>
					<AvatarImage class="w-8 h-8" :src="item.user_avatar" alt="@unovue" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</NuxtLink>
		</div>

		<LoadingSpinner v-else />
	</div>
</template>

<script setup lang="ts">
import type { IUser } from '~/shared/model/interfaces/userInterface'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useMemberStore } from '~/features/Member/model/memberStore'

const props = defineProps<{ data: IUser }>()
const user = props.data

const followingsList = ref<IUser[]>([])

onMounted(async () => {
	followingsList.value = await $fetch<IUser[]>(`/api/user/${user.id}/following`)
})
</script>

<style scoped></style>
