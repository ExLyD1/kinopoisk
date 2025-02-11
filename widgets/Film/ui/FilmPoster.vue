<template>
	<div class="text-white text-center text-2xl">
		{{ film }}
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const film: Ref<IFilmItem | null> = ref(null)

const route = useRoute()
const { film: film_name } = route.params as { film: string }

onMounted(async () => {
	film.value = await $fetch<IFilmItem>(`/api/movie/by-name/${film_name}`)
})
</script>

<style scoped></style>
