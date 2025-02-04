<template>
	<div class="backImg h-[100vh] bg-no-repeat object-fill w-full p-10">
		<div>
			<NuxtLink to="/">
				<img class="logo w-64 h-6" src="@/shared/ui/icons/logo.png" alt="" />
			</NuxtLink>
		</div>
		<div class="text_1 mt-8 text-white text-xl w-[600px]">
			Sorry, we can’t find the page you’ve requested. Perhaps you imagined it?
			Please contact us if the problem persists.
		</div>
		<div class="mt-4 text-sm text-gray-500">
			Still from David Fincher’s Fight Club (1999)
		</div>
	</div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
	error: Object as () => NuxtError,
})
</script>

<style scoped>
.backImg {
	background-image: url('./public/images/erorrPage.jpg');
	background-size: cover;
}
@media screen and (max-width: 650px) {
	.text_1 {
		width: 300px;
		font-size: 18px;
	}
}
</style>
