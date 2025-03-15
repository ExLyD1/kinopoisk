<template>
	<div>
		<!-- links and filters bar -->
		<div
			class="flex justify-between w-full items-center border-b border-gray-600 pb-2"
		>
			<!-- links -->
			<div class="flex items-center gap-3 relative">
				<!-- Watched -->
				<NuxtLink
					:to="memberSectionsLink(user.user_name, 'films')"
					class="text-green-600 text-lg cursor-pointer"
				>
					<span
						class="relative after:absolute after:left-0 after:bottom-[-11px] after:w-full after:h-[1px] after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
						:class="{
							'text-white after:bg-white after:scale-x-100 hover:text-white':
								memberStore.memberSection === 'films',
						}"
					>
						Watched
					</span>
				</NuxtLink>

				<!-- Reviews -->
				<NuxtLink
					:to="memberSectionsLink(user.user_name, 'reviews')"
					class="text-green-600 text-lg cursor-pointer"
				>
					<span
						class="relative after:absolute after:left-0 after:bottom-[-11px] after:w-full after:h-[1px] after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
						:class="{
							'text-white after:bg-white after:scale-x-100 hover:text-white':
								memberStore.memberSection === 'reviews',
						}"
					>
						Reviews
					</span>
				</NuxtLink>
			</div>

			<div></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IUser } from '~/shared/model/interfaces/userInterface'

import { useMemberStore } from './memberStore'
import { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const memberStore = useMemberStore()

const props = defineProps<{ data: IUser }>()
const user = props.data

const filmsList = ref<IFilmItem[]>()

// ^^^ розробка сервера пагінації і фільмів

onMounted(async () => {
	const response = await $fetch<any>(`/api/`)
})
</script>

<style scoped></style>
