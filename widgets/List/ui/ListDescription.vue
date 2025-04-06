<template>
	<div v-if="user">
		<!-- info about author -->
		<div
			class="flex items-center gap-2 text-sm border-b w-full border-gray-700 pb-2"
		>
			<NuxtLink :to="`/members/${generateSlug(user.user_name)}`">
				<Avatar class="w-7 h-7">
					<AvatarImage :src="user.user_avatar" alt="@unovue" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</NuxtLink>

			<div class="text-gray-500">List by</div>

			<NuxtLink
				:to="`members/${generateSlug(user.user_name)}`"
				class="font-medium"
				>{{ user.user_name }}</NuxtLink
			>
		</div>

		<!-- film description -->
		<div class="mt-6">
			<div class="text-white font-bold text-2xl">{{ list.list_name }}</div>

			<div class="mt-5 text-[17px]/[200%]">{{ list.list_description }}</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'
import type { IUser } from '~/shared/model/interfaces/userInterface'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const props = defineProps<{ data: IFilmsList }>()
const list = props.data
const user = ref<IUser>()

onMounted(async () => {
	user.value = await $fetch<IUser>(`/api/user/${list.user_id}`)
})
</script>

<style scoped></style>
