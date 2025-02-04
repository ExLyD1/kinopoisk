<template>
	<div class="full w-[580px]">
		<widget-title>
			<template #text_1><NuxtLink to="/soon">HQ Members</NuxtLink></template>
			<template #text_2><NuxtLink to="/soon">ALL</NuxtLink></template>
		</widget-title>

		<div class="holder flex flex-wrap pt-1 pb-10 gap-2">
			<NuxtLink to="/soon" v-for="(item, index) in HQMembers" :key="index">
				<Avatar class="w-[40px]">
					<AvatarImage :src="item" alt="avatar" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { HQMembers } from '../model/HQMembers'
</script>

<style scoped>
@media screen and (max-width: 680px) {
	.full {
		width: 100%;
	}
	.holder {
		gap: 4px;
	}
}
</style>
