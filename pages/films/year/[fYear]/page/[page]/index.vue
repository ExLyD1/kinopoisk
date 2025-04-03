<template>
	<div>
		<div>
			<years-and-decades-bar></years-and-decades-bar>
		</div>
		<div>
			<total-films-search-table></total-films-search-table>
		</div>
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
