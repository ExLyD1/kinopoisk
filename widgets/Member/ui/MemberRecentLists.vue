<template>
	<div class="content_holder_qwe w-[520px]">
		<widget-title>
			<template #text_1>
				<NuxtLink to="/soon">Lists</NuxtLink>
			</template>
		</widget-title>

		<div
			v-if="listsList.length > 0"
			class="lists_holder mt-4 flex flex-row justify-end gap-4 flex-wrap"
		>
			<div v-for="(item, index) in listsList">
				<member-recent-list-item :data="item"></member-recent-list-item>
			</div>
		</div>

		<LoadingSpinner v-else />
	</div>
</template>

<script setup lang="ts">
import type { IUser } from '~/shared/model/interfaces/userInterface'
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'

import { useMemberStore } from '~/features/Member/memberStore'
import { useMediaQuery } from '@vueuse/core'

const memberStore = useMemberStore()
const props = defineProps<{ data: IUser }>()
const user = props.data

const listsList = ref<IFilmsList[]>([])

onMounted(async () => {
	const response = (listsList.value = await $fetch<IFilmsList[]>(
		`/api/user/${user.id}/lists?quantity=3`
	))

	listsList.value = response
	console.log(response)
})
</script>

<style scoped>
@media screen and (max-width: 995px) {
	.lists_holder {
		justify-content: start;
		flex-direction: column;
	}
	.content_holder_qwe {
		width: auto;
	}
}
</style>
