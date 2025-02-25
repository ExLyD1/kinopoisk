<template>
	<div class="flex flex-col gap-5">
		<!-- Items CREW -->
		<div class="flex gap-2" v-for="(arr, key) in film.details" :key="key">
			<div class="flex gap-2">
				<div class="text-sm">{{ key.toUpperCase() }}</div>
				<div
					class="border_line border-t border-dotted border-[#456] mt-[12px] w-[102px]"
				></div>
			</div>

			<div class="flex flex-wrap gap-[6px] min-h-[30px]">
				<description-item v-for="item in arr" class="h-auto">
					<template #person_name>{{ item }}</template>
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
