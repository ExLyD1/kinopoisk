<template>
	<div class="tag">{{ tagText }}</div>
</template>

<script setup lang="ts">
const props = defineProps<{ data: string }>()
const tagText = props.data
</script>

<style scoped>
.tag {
	display: inline-block;
	background-color: #3a3f44; /* Цвет фона */
	color: #c7ccd1; /* Цвет текста */
	font-size: 10.77px; /* 14px / 1.3 */
	font-weight: bold;
	font-family: Arial, sans-serif;
	padding: 3.85px 15.38px 3.85px 11.54px; /* Отступы: 5px / 1.3, 20px / 1.3, 5px / 1.3, 15px / 1.3 */
	border-radius: 3.08px 4.5px 4.5px 3.08px; /* 4px / 1.3, 7px / 1.3 */
	position: relative;
	white-space: nowrap; /* Чтобы текст не переносился */
}

.tag::after {
	content: '';
	position: absolute;
	top: 50%;
	right: -9.23px; /* -12px / 1.3 */
	transform: translateY(-51%);
	border-style: solid;
	border-width: 11.54px 0 11.54px 11.54px; /* 15px / 1.3 */
	border-color: transparent transparent transparent #3a3f44;
}
</style>
