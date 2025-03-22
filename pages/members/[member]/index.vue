<template>
	<div
		v-if="user"
		class="p-4 relative main_holder pt-6 m-auto pb-24 text-gray-400"
	>
		<member-profile-data
			:data="user"
			class="memberProfile w-[950px] m-auto"
		></member-profile-data>

		<div
			class="content_holder flex justify-between mt-10 gap-5 w-[950px] m-auto"
		>
			<!-- main data -->
			<div class="main_data w-[630px] flex flex-col gap-12">
				<member-favorite-films :data="user"></member-favorite-films>

				<member-recent-reviews :data="user"></member-recent-reviews>
			</div>

			<!-- ads -->
			<div>
				<NuxtLink to="/soon">
					<img src="/public/images/ads2.png" class="ads2 mt-12" alt="" />
				</NuxtLink>

				<NuxtLink to="/soon">
					<img src="/public/images/ads.png" class="ads1 mt-12" alt="" />
				</NuxtLink>
			</div>
		</div>

		<div
			class="bottom_holder flex justify-between gap-5 w-[950px] m-auto mt-12"
		>
			<member-following :data="user"></member-following>
			<member-recent-lists :data="user"></member-recent-lists>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useMemberStore } from '~/features/Member/model/memberStore'
import type { IUser } from '~/shared/model/interfaces/userInterface'

const memberStore = useMemberStore()
const route = useRoute()

const user = ref<IUser>()

onMounted(async () => {
	if (Array.isArray(route.params.member)) {
		memberStore.memberName = route.params.member[0]
	} else {
		memberStore.memberName = route.params.member
	}

	const response = await $fetch<IUser>(
		`/api/user/by/name/${memberStore.memberName}`
	)
	user.value = response
})
</script>

<style scoped>
@media screen and (max-width: 995px) {
	.memberProfile,
	.content_holder,
	.bottom_holder {
		width: 100%;
	}
}
@media screen and (max-width: 945px) {
	.ads1 {
		display: none;
	}
	.ads2 {
		margin-top: 10px;
	}
	.content_holder {
		flex-direction: column;
		align-items: center;
	}
}

@media screen and (max-width: 795px) {
	.bottom_holder {
		flex-direction: column-reverse;
		width: 630px;
		gap: 35px;
	}
}

@media screen and (max-width: 670px) {
	.main_data,
	.bottom_holder {
		width: 100%;
	}
}
</style>
