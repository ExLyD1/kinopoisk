<template>
	<div class="text-white text-4xl text-center pt-24 pb-[600px]">
		LIKES OF REVIEW fILM"{{ review }}" = {{ member }}
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const { member, review } = route.params as { review: string; member: string }
</script>

<style scoped></style>
