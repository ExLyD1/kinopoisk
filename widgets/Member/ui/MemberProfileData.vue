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
			<div class="flex items-center gap-1">
				<!-- films -->
				<div class="border-r border-gray-800">
					<NuxtLink :to="`/soon`">
						<div class="text-gray-300 text-2xl">
							{{ user.user_films_quantity }}
						</div>
						<div class="text-gray-600 text-sm">FILMS</div>
					</NuxtLink>
				</div>

				<!-- lists -->
				<div class="border-r border-gray-800">
					<NuxtLink :to="`/soon`">
						<div class="text-gray-300 text-2xl">
							{{ user.user_films_quantity }}
						</div>
						<div class="text-gray-600 text-sm">FILMS</div>
					</NuxtLink>
				</div>

				<!-- followings -->
				<div class="border-r border-gray-800">
					<NuxtLink :to="`/soon`">
						<div class="text-gray-300 text-2xl">
							{{ user.user_films_quantity }}
						</div>
						<div class="text-gray-600 text-sm">FILMS</div>
					</NuxtLink>
				</div>

				<!-- followers -->
				<div class="border-r border-gray-800">
					<NuxtLink :to="`/soon`">
						<div class="text-gray-300 text-2xl">
							{{ user.user_films_quantity }}
						</div>
						<div class="text-gray-600 text-sm">FILMS</div>
					</NuxtLink>
				</div>
			</div>
		</div>

		<div></div>
	</div>

	<LoadingSpinner v-else />
</template>

<script setup lang="ts">
import type { IUser } from '~/shared/model/interfaces/userInterface'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const props = defineProps<{ data: IUser }>()
const user = props.data
</script>

<style scoped></style>
