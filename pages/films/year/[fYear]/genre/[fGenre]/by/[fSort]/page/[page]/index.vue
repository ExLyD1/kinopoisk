<template>
	<div class="mt-3">
		<years-and-decades-bar></years-and-decades-bar>
	</div>
	<div>decade by pagaaa</div>
</template>

<script setup lang="ts">
import checkFDecade from '~/middleware/films/checkFDecade'

definePageMeta({
	layout: 'films-search-layout',
	middleware: checkFDecade,
})
</script>

<style scoped></style>
