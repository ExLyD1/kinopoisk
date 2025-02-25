<template>
	<div class="flex flex-col gap-5">
		<!-- GENRES -->
		<div class="flex gap-2">
			<div class="flex items-center gap-2">
				<div>GENRES</div>
				<div
					class="border_line border-b border-dotted border-[#456] mt-[2px] w-[122px]"
				></div>
			</div>

			<div class="flex flex-wrap gap-[6px] min-h-[30px]">
				<description-item v-for="genre in film.genres" class="h-auto">
					<template #person_name>{{ genre }}</template>
				</description-item>
			</div>
		</div>

		<!-- THEMES -->
		<div class="flex gap-2">
			<div class="flex gap-2">
				<div>THEMES</div>
				<div
					class="border_line border-t border-dotted border-[#456] mt-[12px] w-[122px]"
				></div>
			</div>

			<div class="flex flex-wrap gap-[6px] min-h-[30px]">
				<description-item v-for="theme in film.themes" class="h-auto">
					<template #person_name>{{ theme }}</template>
				</description-item>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const props = defineProps<{ data: IFilmItem }>()
const film = props.data
</script>

<style scoped>
@media screen and (max-width: 450px) {
	.border_line {
		width: 50px;
	}
}
</style>
