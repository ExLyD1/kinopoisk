<template>
	<div class="flex flex-row gap-2 items-center">
		<NuxtLink
			:to="`/members/${user.user_name.toLowerCase().replace(/\s+/g, '-')}`"
		>
			<Avatar class="w-8 h-8">
				<AvatarImage :src="user.user_avatar" alt="@radix-vue" />
			</Avatar>
		</NuxtLink>

		<div>
			<NuxtLink
				:to="`/members/${user.user_name.toLowerCase().replace(/\s+/g, '-')}`"
				class="font-medium text-white hover:text-blue-200"
			>
				{{ user.user_name }}
			</NuxtLink>

			<div class="flex gap-2">
				<NuxtLink
					:to="`/members/${user.user_name
						.toLowerCase()
						.replace(/\s+/g, '-')}/films`"
				>
					<div class="text-sm text-gray-600 hover:text-gray-500">
						{{ getKNumber(user.user_films_quantity) }} films,
					</div>
				</NuxtLink>

				<NuxtLink
					:to="`/members/${user.user_name
						.toLowerCase()
						.replace(/\s+/g, '-')}/reviews`"
				>
					<div class="text-sm text-gray-600 hover:text-gray-500">
						{{ getKNumber(user.user_reviews_quantity) }} reviews
					</div>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { IUser } from '~/shared/model/interfaces/userInterface'
import { getKNumber } from '~/shared/model/funtions/getKNumber'

const props = defineProps<{ data: IUser }>()
const user = props.data
</script>

<style scoped></style>
