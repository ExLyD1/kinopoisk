<template>
	<div
		class="text-white text-4xl text-center pt-24 pb-[600px]"
		v-if="list_name"
	>
		{{ member }}`s LIST {{ list_name }}
	</div>
	<div v-else>Loading...</div>
</template>

<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'

const route = useRoute()
const { list: list_name } = route.params as {
	list: string
}

const list: Ref<IFilmsList | null> = ref(null)

onMounted(async () => {
	list.value = await $fetch<IFilmsList>(`/api/list/by/name/${list_name}`)
})
</script>

<style scoped></style>
