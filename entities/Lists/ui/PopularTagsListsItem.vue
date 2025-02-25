<template>
	<NuxtLink :to="`/lists/total/by/tag/${tagText}`" class="tag">
		{{ tagText }}
	</NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{ data: string }>()
const tagText = props.data
</script>

<style scoped>
.tag {
	display: inline-block;
	background-color: #345;
	color: #c7ccd1;
	font-size: 10.77px;
	font-weight: bold;
	font-family: Arial, sans-serif;
	padding: 3.85px 15.38px 3.85px 11.54px;
	border-radius: 3.08px 4.5px 4.5px 3.08px;
	position: relative;
	white-space: nowrap;
}

.tag::after {
	content: '';
	position: absolute;
	top: 50%;
	right: -9.23px;
	transform: translateY(-51%);
	border-style: solid;
	border-width: 11.54px 0 11.54px 11.54px;
	border-color: transparent transparent transparent #345;
}
.tag:hover {
	background-color: #456;
}
.tag:hover::after {
	border-color: transparent transparent transparent #456;
}
</style>
