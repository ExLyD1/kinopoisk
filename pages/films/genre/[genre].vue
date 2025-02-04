<template>
	<div class="text-white text-4xl text-center pt-24 pb-[600px]" v-if="genre">
		{{ genre }}
	</div>
	<div v-else>Loading...</div>
</template>

<script setup lang="ts">
const route = useRoute()
const { genre } = route.params as { genre: string }
</script>

<style scoped></style>
