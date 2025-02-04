<template>
    <div class="border-b border-gray-500 flex flex-row justify-between w-full mb-2">
        <p class=" hover:text-blue-300 transition-all cursor-pointer">
            <slot name="text_1"></slot>
        </p>
        <p class="text-sm watched_num hover:text-blue-300 transition-all cursor-pointer">
            <slot name="text_2"></slot>
        </p>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>