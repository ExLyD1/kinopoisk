<template>
	<div class="px-5 main_holder m-auto pb-24">
		<div class="flex justify-center">
			<h1 class="text-3xl text-gray-300 text-center pt-24">
				Collect, curate, and share. Lists are the perfect way to group films.
			</h1>
		</div>

		<div class="flex justify-center mt-10">
			<Button
				@click="useHeaderStore().isModalSignUpOpened = true"
				class="hover:text-gray-300"
			>
				Start your own list
			</Button>
		</div>

		<div class="popular_week_holder text-gray-400 mt-16 m-auto w-[950px]">
			<popular-week-lists></popular-week-lists>
		</div>

		<div
			class="lists_holder flex gap-4 justify-between text-gray-400 mt-16 m-auto w-[950px]"
		>
			<recently-liked-lists></recently-liked-lists>
			<div class="holder_items flex flex-col gap-4">
				<crew-picks-lists></crew-picks-lists>
				<popular-tags-lists></popular-tags-lists>
			</div>
		</div>

		<div
			class="showdowns_holder text-gray-400 mt-16 flex flex-col gap-16 m-auto w-[950px]"
		>
			<recent-showdowns-lists></recent-showdowns-lists>
			<crew-lists></crew-lists>
			<all-time-lists></all-time-lists>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useHeaderStore } from '~/features/Header/headerStore'
</script>

<style scoped>
@media screen and (max-width: 1000px) {
	.lists_holder {
		width: 100%;
		flex-wrap: wrap;
	}
	.holder_items,
	.showdowns_holder,
	.crewLists_holder,
	.popular_week_holder {
		width: 100%;
	}
}
</style>
