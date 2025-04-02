<template>
	<div class="backImg h-[100vh] bg-no-repeat object-fill w-full p-10">
		<div>
			<NuxtLink to="/">
				<img class="logo w-64 h-6" src="/public/images/logo.png" alt="" />
			</NuxtLink>
		</div>
		<div class="text_1 mt-8 text-white text-xl w-[600px]">
			This page will be done soon. We are working as fast as possible for us. We
			are apologizing about it sooo!
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: false,
})
</script>
<style scoped>
.backImg {
	background-image: url('../../public/images/soonPage.jpg');
	background-size: cover;
}
@media screen and (max-width: 650px) {
	.text_1 {
		width: 300px;
		font-size: 18px;
	}
}
</style>
