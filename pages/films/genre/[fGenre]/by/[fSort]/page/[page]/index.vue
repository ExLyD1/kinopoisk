<template>
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
