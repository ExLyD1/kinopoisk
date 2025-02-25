<template>
	<div>
		<!-- info about author -->
		<div
			class="flex items-center gap-2 text-sm border-b w-full border-gray-700 pb-2"
		>
			<NuxtLink :to="`members/${generateSlug(list.author_name)}`">
				<Avatar class="w-7 h-7">
					<AvatarImage :src="list.author_avatar" alt="@unovue" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</NuxtLink>

			<div class="text-gray-500">List by</div>

			<NuxtLink
				:to="`members/${generateSlug(list.author_name)}`"
				class="font-medium"
				>{{ list.author_name }}</NuxtLink
			>
		</div>

		<!-- film description -->
		<div class="mt-6">
			<div class="text-white font-bold text-2xl">{{ list.list_name }}</div>

			<div class="mt-5 text-[17px]/[200%]">{{ list.list_description }}</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmsList } from '~/shared/model/interfaces/filmsListInterface'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const props = defineProps<{ data: IFilmsList }>()
const list = props.data
</script>

<style scoped></style>
