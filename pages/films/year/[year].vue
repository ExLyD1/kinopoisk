<template>
	<div class="text-white text-4xl text-center pt-24 pb-[600px]" v-if="year">
		{{ year }}
	</div>
	<div v-else>Loading...</div>
</template>

<script setup lang="ts">
const route = useRoute()
const { year } = route.params as { year: string }
</script>

<style scoped></style>
