<template>
	<div
		class="main_holder m-auto flex flex-row justify-between pb-24 pt-10 px-5"
	>
		<div class="flex flex-col gap-3">
			<div class="tags_holder flex flex-row gap-2">
				<NuxtLink
					class="text-[#9ab] hover:text-[#bce]"
					v-for="(item, index) in footerItemsList"
					:key="index"
					:to="item.pageLink"
				>
					{{ item.label }}
				</NuxtLink>
			</div>
			<div class="text-[#678]">
				© Letterboxd Limited. Made by fans in Aotearoa New Zealand. Film data
				from TMDb. Mobile site.
			</div>
		</div>

		<div class="img_holder flex flex-row gap-2">
			<NuxtLink
				v-for="(item, index) in footerSocialItemsList"
				:key="index"
				:to="item.pageLink"
			>
				<img :src="item.imageLink" alt="" class="w-10 h-10 cursor-pointer" />
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import { footerItemsList, footerSocialItemsList } from './footerConfig'
</script>

<style scoped>
@media screen and (max-width: 1000px) {
	.main_holder {
		flex-direction: column;
	}
	.img_holder {
		margin-top: 20px;
	}
}
@media screen and (max-width: 605px) {
	.tags_holder {
		flex-wrap: wrap;
		width: 75%;
	}
}
</style>
