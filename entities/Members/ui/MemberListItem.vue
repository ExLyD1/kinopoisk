<template>
	<div class="card flex justify-between items-center">
		<div class="flex gap-3">
			<NuxtLink :to="`members/${generateSlug(member.user_name)}`">
				<Avatar>
					<AvatarImage :src="member.user_avatar" alt="@radix-vue" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</NuxtLink>
			<div class="flex flex-col">
				<NuxtLink
					:to="`members/${generateSlug(member.user_name)}`"
					class="text-white text-bold"
				>
					{{ member.user_name }}
				</NuxtLink>

				<NuxtLink
					:to="memberSectionsLink(member.user_name, 'reviews', 1)"
					class="text-gray-500 text-sm"
				>
					{{ member.user_reviews_quantity }} reviews
				</NuxtLink>
			</div>
		</div>

		<div class="data flex items-center gap-5">
			<NuxtLink
				:to="memberSectionsLink(member.user_name, 'films', 1)"
				class="flex items-center gap-1 w-[90px]"
			>
				<img class="w-7 h-7" src="/public/images/eye.png" alt="" />
				<div>{{ member.user_films_quantity }}</div>
			</NuxtLink>

			<NuxtLink
				:to="memberSectionsLink(member.user_name, 'lists', 1)"
				class="flex items-center w-[60px]"
			>
				<img class="w-7 h-7" src="/public/images/list.png" alt="" />
				<div>{{ member.user_lists_quantity }}</div>
			</NuxtLink>

			<NuxtLink
				:to="memberSectionsLink(member.user_name, 'likes-films', 1)"
				class="flex items-center gap-1 w-[80px]"
			>
				<img class="w-7 h-7" src="/public/images/favorite_orange.png" alt="" />
				<div>{{ member.user_favorite_films_quantity }}</div>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { IUser } from '~/shared/model/interfaces/userInterface'

const props = defineProps<{ data: IUser }>()
const member = props.data
</script>

<style scoped>
@media screen and (max-width: 600px) {
	.data {
		display: none;
	}
}
</style>
