<template>
	<div>
		<total-films-search-table></total-films-search-table>
	</div>
</template>

<script setup lang="ts">
import checkFDecade from '~/middleware/films/checkFDecade'

definePageMeta({
	layout: 'films-search-layout',
	middleware: checkFDecade,
})
</script>

<style scoped></style>
