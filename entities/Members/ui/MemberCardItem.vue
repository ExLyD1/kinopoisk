<template>
	<div class="card flex items-center flex-col gap-1 w-[175px]">
		<NuxtLink
			:to="`members/${member.user.user_name
				.toLowerCase()
				.replace(/\s+/g, '-')}`"
		>
			<Avatar class="w-[130px] h-[130px]">
				<AvatarImage
					:src="member.user.user_avatar"
					:alt="member.user.user_name"
				/>
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
		</NuxtLink>

		<NuxtLink
			:to="`members/${member.user.user_name
				.toLowerCase()
				.replace(/\s+/g, '-')}`"
			class="text-white pt-2 font-bold"
		>
			{{ member.user.user_name }}
		</NuxtLink>

		<div class="text-sm text-gray-400">
			<NuxtLink
				:to="`members/${member.user.user_name
					.toLowerCase()
					.replace(/\s+/g, '-')}/films`"
			>
				{{ getKNumber(member.user.user_films_quantity) }} films
			</NuxtLink>
			<NuxtLink
				:to="`members/${member.user.user_name
					.toLowerCase()
					.replace(/\s+/g, '-')}/reviews`"
			>
				{{ getKNumber(member.user.user_reviews_quantity) }} reviews
			</NuxtLink>
		</div>

		<div class="flex flex-row">
			<NuxtLink
				class="w-[45px] h-[66px] rounded-lg cursor-pointer transition-all duration-300 ease-in-out overflow-hidden relative border-4 border-transparent hover:border-green-600 box-border"
				v-for="(film, index) in member.user_favorite_films"
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
import type { IUser } from '~/shared/model/interfaces/userInterface'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import { getKNumber } from '~/shared/model/funtions/getKNumber'

const props = defineProps<{
	data: {
		user: IUser
		user_favorite_films: Array<IFilmItem> | undefined
	}
}>()
const member = props.data
</script>

<style scoped>
@media screen and (max-width: 445px) {
	.card {
		width: 155px;
	}
}
</style>
