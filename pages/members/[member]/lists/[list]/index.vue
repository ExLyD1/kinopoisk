<template>
	<div
		class="text-white text-4xl text-center pt-24 pb-[600px]"
		v-if="list_name"
	>
		{{ member }}`s LIST {{ list_name }}
	</div>
	<div v-else>Loading...</div>
</template>

<script setup lang="ts">
const route = useRoute()
const { list, member } = route.params as { list: string; member: string }
const list_name = list.replaceAll('-', ' ')
</script>

<style scoped></style>
