<template>
	<div class="text-white text-4xl text-center pt-24 pb-[600px]" v-if="film">
		section {{ section }} of film {{ film }} rated by None and sorted by
		{{ sort }}
	</div>
	<div v-else class="text-white text-4xl text-center pt-24 pb-[600px]">
		Loading...
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const { film, section, sort } = route.params as {
	film: string
	section: string
	sort: string
}

definePageMeta({
	layout: 'film-info-layout',
})
</script>

<style scoped></style>
