<template>
	<div
		class="flex flex-col border border-gray-700 rounded shadow-sm w-full mt-7 text-gray-400"
	>
		<div class="flex justify-between items-center w-full p-3 bg-gray-800">
			<div class="text-sm">WHERE TO WATCH</div>

			<div class="flex gap-1 items-center text-sm cursor-pointer">
				<img src="./assets/trailer.png" class="w-5 h-5 rounded-3xl" alt="" />
				<div>Trailer</div>
			</div>
		</div>

		<div v-for="(item, index) in watchingPlatforms" :key="index">
			<div class="flex items-center gap-2 text-sm w-full p-3 pl-3">
				<img :src="item.img" class="w-5 h-5 rounded-lg cursor-pointer" alt="" />
				<div class="hover:text-white transition-all cursor-pointer">
					{{ item.text }}
				</div>

				<div
					class="bg-gray-800 text-xs hover:bg-white transition-all cursor-pointer p-1 rounded"
				>
					RENT
				</div>
				<div
					class="bg-gray-800 text-xs hover:bg-white transition-all cursor-pointer p-1 rounded"
				>
					BUY
				</div>
			</div>

			<div
				v-if="index !== watchingPlatforms.length - 1"
				class="border-b border-gray-700"
			></div>
		</div>

		<div class="border-b border-gray-700"></div>

		<div class="flex justify-between items-center w-full p-3">
			<div
				class="text-xs text-blue-500 hover:text-gray-400 transition-all cursor-pointer"
			>
				All services…
			</div>

			<div class="hover:text-yellow-400 transition-all text-xs cursor-pointer">
				JustWatch
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { watchingPlatforms } from '../model/whereToWatch'
</script>

<style scoped></style>
