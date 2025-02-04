<template>
	<div class="px-5 main_holder m-auto pb-24">
		<div class="flex justify-center">
			<h1 class="text-3xl text-gray-300 text-center pt-24">
				Film lovers, critics and friends — find popular members.
			</h1>
		</div>

		<div class="featuresMembers_holder text-gray-500 mt-16 w-[950px] m-auto">
			<featured-members></featured-members>
		</div>

		<div class="popularWeekMembers_holder text-gray-500 mt-16 w-[950px] m-auto">
			<popular-week></popular-week>
		</div>

		<div class="memberList_holder text-gray-500 mt-16 w-[950px] m-auto">
			<HQ-members></HQ-members>
			<members-list></members-list>
		</div>
	</div>
</template>

<script setup lang="ts">
const { data: usersList } = await useAsyncData('usersList', () =>
	import('~/shared/model/data/usersData').then(module => module.usersList)
)

useState('usersList', () => usersList)
</script>

<style scoped>
@media screen and (max-width: 990px) {
	.featuresMembers_holder,
	.popularWeekMembers_holder,
	.memberList_holder {
		width: 91.666667%;
	}
}
</style>
