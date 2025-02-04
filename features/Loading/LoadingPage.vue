<template>
	<div class="h-[100vh] bg-dark w-full">
		<div class="loading-container">
			<div class="loading-spinner"></div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.loading-container {
	@apply fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-opacity-80 z-50;
}

.loading-spinner {
	@apply border-8 border-t-8 border-gray-300 border-t-green-500 rounded-full w-16 h-16 animate-spin;
}
</style>
