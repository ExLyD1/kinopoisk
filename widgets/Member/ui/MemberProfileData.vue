<template>
	<div v-if="user" class="flex flex-col gap-5">
		<!-- user top data -->
		<div class="w-full flex justify-between items-center">
			<!-- avatar / name -->
			<div class="flex items-center gap-3">
				<Avatar class="w-11 h-11">
					<AvatarImage
						class="w-11 h-11"
						:src="user.user_avatar"
						alt="@unovue"
					/>
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>

				<div class="text-white text-2xl">{{ user.user_name }}</div>
			</div>

			<!-- aside data -->
			<div class="flex items-center justify-center">
				<!-- films -->
				<div class="border-r border-gray-800 px-2 text-center group">
					<NuxtLink :to="`/soon`">
						<div class="text-gray-200 text-2xl">
							{{ user.user_films_quantity }}
						</div>
						<div
							class="text-gray-500 text-sm group-hover:text-blue-400 transition-all"
						>
							FILMS
						</div>
					</NuxtLink>
				</div>

				<!-- lists -->
				<div class="border-r border-gray-800 px-2 text-center group">
					<NuxtLink :to="`/soon`">
						<div class="text-gray-200 text-2xl">
							{{ user.user_lists_quantity }}
						</div>
						<div
							class="text-gray-500 text-sm group-hover:text-blue-400 transition-all"
						>
							LISTS
						</div>
					</NuxtLink>
				</div>

				<!-- followings -->
				<div class="border-r border-gray-800 px-2 text-center group">
					<NuxtLink :to="`/soon`">
						<div class="text-gray-200 text-2xl">
							{{ user.user_following_quantity }}
						</div>
						<div
							class="text-gray-500 text-sm group-hover:text-blue-400 transition-all"
						>
							FOLLOWINGS
						</div>
					</NuxtLink>
				</div>

				<!-- followers -->
				<div class="border-r border-gray-800 px-2 text-center group">
					<NuxtLink :to="`/soon`">
						<div class="text-gray-200 text-2xl">
							{{ user.user_followers_quantity }}
						</div>
						<div
							class="text-gray-500 text-sm group-hover:text-blue-400 transition-all"
						>
							FOLLOWERS
						</div>
					</NuxtLink>
				</div>
			</div>
		</div>

		<!-- links -->
		<div
			class="flex items-center justify-center w-full rounded border border-gray-800 py-2 gap-4"
		>
			<!-- profile -->
			<NuxtLink
				:to="`/members/${generateSlug(memberStore.memberName)}`"
				class="relative box-border"
			>
				<span
					class="text-gray-400 text-lg hover:text-blue-400 transition-all after:absolute after:left-0 after:w-full after:bottom-[-9px] after:h-[1px] after:bg-green-600 after:scale-x-0"
					:class="{
						' text-white after:bg-green-400 after:scale-x-100 hover:text-white ':
							!memberStore.memberSection,
					}"
				>
					Profile
				</span>
			</NuxtLink>

			<!-- films -->
			<NuxtLink
				to="/soon"
				class="text-gray-400 text-lg hover:text-blue-400 transition-all"
			>
				Films
			</NuxtLink>

			<!-- reviews -->
			<NuxtLink
				to="/soon"
				class="text-gray-400 text-lg hover:text-blue-400 transition-all"
			>
				Reviews
			</NuxtLink>

			<!-- lists -->
			<NuxtLink
				to="/soon"
				class="text-gray-400 text-lg hover:text-blue-400 transition-all"
			>
				Lists
			</NuxtLink>

			<!-- likes -->
			<NuxtLink
				to="/soon"
				class="text-gray-400 text-lg hover:text-blue-400 transition-all"
			>
				Likes
			</NuxtLink>

			<!-- network -->
			<NuxtLink
				to="/soon"
				class="text-gray-400 text-lg hover:text-blue-400 transition-all"
			>
				Network
			</NuxtLink>
		</div>
	</div>

	<LoadingSpinner v-else />
</template>

<script setup lang="ts">
import type { IUser } from '~/shared/model/interfaces/userInterface'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useMemberStore } from '~/features/Member/memberStore'

const memberStore = useMemberStore()

const route = useRoute()

const props = defineProps<{ data: IUser }>()
const user = props.data
</script>

<style scoped></style>
