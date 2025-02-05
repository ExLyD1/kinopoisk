<template>
	<div class="text-white text-4xl text-center pt-24 pb-[600px]" v-if="film">
		people who liked the film "{{ film }}"
	</div>
	<div v-else class="text-white text-4xl text-center pt-24 pb-[600px]">
		Loading...
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const { film } = route.params as { film: string }
</script>

<style scoped></style>
