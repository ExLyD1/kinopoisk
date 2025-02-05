<template>
	<div
		class="modal fixed w-[420px] z-50 p-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded bg-[#456]"
	>
		<div class="flex justify-between items-center w-full mb-4">
			<div class="text-[#bcccdb] font-medium">Join Letterboxd</div>
			<img
				@click="useHeaderStore().closeAllModals"
				class="w-6 h-6 cursor-pointer"
				src="../icons/close.png"
				alt=""
			/>
		</div>
		<form class="flex flex-col">
			<label for="" class="text-white">Username/Email</label>
			<input
				class="rounded outline-none w-full bg-[#cde] focus:bg-white my-2 px-2 py-1"
				type="text"
				placeholder="example@gmail.com"
			/>

			<label for="" class="text-white">Password</label>
			<input
				class="rounded outline-none w-full bg-[#cde] focus:bg-white my-2 px-3 py-1"
				type="password"
			/>
		</form>

		<div class="flex pt-2 text-sm text-white">
			You have not still had the account?
			<span
				class="text-blue-200 hover:text-blue-400 transition-all cursor-pointer"
				@click="useHeaderStore().openModalSignUp"
				>Sign Up</span
			>
		</div>

		<Button class="bg-green-700 hover:bg-green-800 transition-all mt-5">
			SIGN IN</Button
		>
	</div>
</template>

<script setup lang="ts">
import { useHeaderStore } from '~/features/Header/headerStore'
</script>

<style scoped>
@media screen and (max-width: 500px) {
	.modal {
		width: 350px;
	}
}

@media screen and (max-width: 380px) {
	.modal {
		width: 300px;
	}
}
</style>
