<template>
	<div
		class="w-[75px] h-[110px] rounded-lg cursor-pointer transition-all overflow-hidden relative border-4 border-transparent hover:border-green-600"
	>
		<slot name="card_image"></slot>
	</div>
</template>

<style scoped>
div {
	box-sizing: border-box;
	transition: border-color 0.3s ease-in-out;
}

img {
	display: block;
}
</style>
