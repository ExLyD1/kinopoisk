<template>
	<div class="text-white text-4xl text-center pt-24 pb-[600px]" v-if="tag_name">
		Total lists sroted by tag "{{ tag_name }}"
	</div>
	<div v-else>Loading...</div>
</template>

<script setup lang="ts">
const route = useRoute()
const { tag } = route.params as { tag: string }
const tag_name = tag.replaceAll('-', ' ')
</script>

<style scoped></style>
