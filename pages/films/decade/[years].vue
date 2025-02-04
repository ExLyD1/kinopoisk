<template>
	<div class="text-white text-4xl text-center pt-24 pb-[600px]" v-if="years">
		{{ years }}
	</div>
	<div v-else>Loading...</div>
</template>

<script setup lang="ts">
const route = useRoute()
const { years } = route.params as { years: string }
</script>

<style scoped></style>
