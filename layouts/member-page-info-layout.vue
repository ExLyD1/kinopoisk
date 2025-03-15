<template>
	<div
		v-if="!isLoading"
		class="min-h-[100vh] flex flex-col justify-between bg-dark"
	>
		<div class="bg-[#1e2631]">
			<HeaderFeature />
		</div>

		<div class="bg-dark">
			<div class="w-[1050px] m-auto">
				<!-- top bar -->
				<div
					v-if="user"
					class="flex justify-between bg-gray-700 rounded shadow-md px-3 py-2"
				>
					<!-- user data -->
					<div class="flex items-center gap-2">
						<NuxtLink
							:to="`/members/${generateSlug(memberStore.memberName)}`"
							class="flex items-center"
						>
							<Avatar class="w-8 h-8">
								<AvatarImage
									class="w-8 h-8"
									:src="user.user_avatar"
								></AvatarImage>
							</Avatar>
						</NuxtLink>

						<NuxtLink :to="`/members/${generateSlug(memberStore.memberName)}`">
							<div class="text-white hover:text-blue-400 transition-all">
								{{ memberStore.memberName }}
							</div>
						</NuxtLink>
					</div>

					<!-- sections list -->
					<div class="flex gap-4 relative items-center">
						<NuxtLink
							:to="memberSectionsLink(user.user_name, item.route_query)"
							v-for="(item, index) in memberLinksList"
							class="text-gray-400 hover:text-blue-400 transition-all relative after:absolute after:left-0 after:bottom-[-12px] after:w-full after:h-[1px] after:bg-green-600 after:scale-x-0 after:transition-transform"
							:class="{
								'text-white after:bg-green-600 after:scale-x-100 hover:text-white ':
									item.route_query === memberStore.memberSection,
							}"
						>
							{{ item.label }}
						</NuxtLink>
					</div>

					<!-- white space -->
					<div class="w-[20px]"></div>
				</div>

				<div class="mt-24">
					<slot />
				</div>
			</div>
		</div>

		<div class="bg-[#2c3440]">
			<FooterFeature />
		</div>
	</div>

	<div v-else>
		<div class="h-[80px] w-full bg-[#1e2631]"></div>

		<div class="h-[120vh] w-full bg-dark">
			<div class="loading-container">
				<div class="loading-spinner"></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IUser } from '~/shared/model/interfaces/userInterface'
import { useMemberStore } from '~/features/Member/memberStore'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { memberLinksList } from '~/features/Member/memberLinksData'

const memberStore = useMemberStore()

const route = useRoute()

const user = ref<IUser>()

onMounted(async () => {
	const user_name = route.params.member as string
	if (user_name) {
		memberStore.memberName = user_name
	}

	user.value = await $fetch<IUser>(
		`/api/user/by/name/${memberStore.memberName}`
	)
})

const { isLoading, finishLoading } = useLoading()

setTimeout(() => {
	finishLoading()
}, 100)
</script>

<style scoped>
.loading-container {
	@apply fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-opacity-80 z-50;
}

.loading-spinner {
	@apply border-8 border-t-8 border-gray-300 border-t-green-500 rounded-full w-16 h-16 animate-spin;
}
</style>
