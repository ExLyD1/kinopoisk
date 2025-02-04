<template>
	<div class="text-white text-4xl text-center pt-24 pb-[600px]">
		LIKES "{{ list }}" = {{ member }}
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const { member, list } = route.params as { list: string; member: string }
</script>

<style scoped></style>
