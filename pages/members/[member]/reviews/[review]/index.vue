<template>
	<div class="text-white text-4xl text-center pt-24 pb-[600px]" v-if="review">
		Review {{ review }}
	</div>
	<div v-else>Loading...</div>
</template>

<script setup lang="ts">
const route = useRoute()
const { review } = route.params as { review: string }
</script>

<style scoped></style>
