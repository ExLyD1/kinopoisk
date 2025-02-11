<template>
	<div class="card flex items-center flex-col gap-1 w-[175px]">
		<NuxtLink
			:to="`members/${user.user_name.toLowerCase().replace(/\s+/g, '-')}`"
		>
			<Avatar class="w-[130px] h-[130px]">
				<AvatarImage :src="user.user_avatar" :alt="user.user_name" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
		</NuxtLink>

		<NuxtLink
			:to="`members/${user.user_name.toLowerCase().replace(/\s+/g, '-')}`"
			class="text-white pt-2 font-bold"
		>
			{{ user.user_name }}
		</NuxtLink>

		<div class="text-sm text-gray-400">
			<NuxtLink
				:to="`members/${user.user_name
					.toLowerCase()
					.replace(/\s+/g, '-')}/films`"
			>
				{{ getKNumber(user.user_films_quantity) }} films
			</NuxtLink>
			<NuxtLink
				:to="`members/${user.user_name
					.toLowerCase()
					.replace(/\s+/g, '-')}/reviews`"
			>
				{{ getKNumber(user.user_reviews_quantity) }} reviews
			</NuxtLink>
		</div>

		<div class="flex flex-row">
			<NuxtLink
				class="w-[45px] h-[66px] rounded-lg cursor-pointer transition-all duration-300 ease-in-out overflow-hidden relative border-4 border-transparent hover:border-green-600 box-border"
				v-for="(film, index) in favFilms"
				:key="index"
				:to="`films/${film.film_name.toLowerCase().replace(/\s+/g, '-')}`"
			>
				<img
					class="img w-full h-full object-cover rounded"
					:src="film.film_image"
					alt=""
				/>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getKNumber } from '~/shared/model/funtions/getKNumber'

import type { IUser } from '~/shared/model/interfaces/userInterface'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const props = defineProps<{
	data: {
		user: IUser
		favFilms: IFilmItem[]
	}
}>()

const user = props.data.user
const favFilms = props.data.favFilms
</script>

<style scoped>
@media screen and (max-width: 445px) {
	.card {
		width: 155px;
	}
}
</style>
