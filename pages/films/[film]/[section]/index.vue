<template>
	<div class="text-white text-4xl text-center pt-24 pb-[600px]" v-if="film">
		section {{ section }} of film {{ film }}
	</div>
	<div v-else class="text-white text-4xl text-center pt-24 pb-[600px]">
		Loading...
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const { film, section } = route.params as { film: string; section: string }

definePageMeta({
	layout: 'film-info-layout',
})
</script>

<style scoped></style>
