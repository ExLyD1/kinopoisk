<template>
	<NuxtLink
		to="/welcome"
		class="flex flex-row items-center justify-between py-4 px-8 gap-3 rounded-lg bg-[#456] text-gray-200 w-[310px] cursor-pointer hover:bg-[#2c3a47] transition-all duration-300"
	>
		<div class="w-[100px]">
			<img :src="data.link" class="w-[47px] h-[47px]" alt="" />
		</div>
		<div class="w-full text-sm">
			{{ data.text }}
		</div>
	</NuxtLink>
</template>

<script setup lang="ts">
import type { IAdvantageCard } from '~/widgets/MainPage/model/advantagesList.ts'

const props = defineProps<{ data: IAdvantageCard }>()
const data = props.data
</script>

<style scoped></style>
