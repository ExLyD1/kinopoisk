<template>
	<div class="flex flex-wrap gap-[6px]">
		<description-item v-for="cast in film.cast">
			<template #person_name>{{ cast }}</template>
		</description-item>
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const props = defineProps<{ data: IFilmItem }>()
const film = props.data
</script>

<style scoped></style>
