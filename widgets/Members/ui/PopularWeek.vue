<template>
	<div>
		<widget-title>
			<template #text_1>
				<NuxtLink to="/members/total">Popular this week</NuxtLink>
			</template>

			<template #text_2>
				<NuxtLink to="/members/total">MORE</NuxtLink>
			</template>
		</widget-title>

		<div class="popularWeek_holder flex gap-5 justify-between mt-5">
			<div v-for="(member, index) in membersList" :key="index">
				<member-card-item :data="member"></member-card-item>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IUser } from '~/shared/model/interfaces/userInterface'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const { data: usersList } = await useAsyncData<IUser[]>('usersList', () =>
	$fetch<IUser[]>('/api/getUsersList?quantity=8')
)
const membersList: any = ref([])

watchEffect(async () => {
	if (!usersList.value) return

	const resolvedMembers = await Promise.all(
		usersList.value.map(async (user, index) => {
			if (!user.user_favorite_films || user.user_favorite_films.length === 0)
				return null

			const user_favorite_films = await Promise.all(
				user.user_favorite_films
					.slice(4 * index, 4 * (1 + index))
					.map(film_id => $fetch<IFilmItem>(`/api/getFilmsList?id=${film_id}`))
			)
			return user_favorite_films
		})
	)

	membersList.value = resolvedMembers
})
</script>

<style scoped>
@media screen and (max-width: 990px) {
	.popularWeek_holder {
		flex-wrap: wrap;
		justify-content: center;
	}
}
@media screen and (max-width: 445px) {
	.popularWeek_holder {
		gap: 35px;
	}
}
@media screen and (max-width: 417px) {
	.popularWeek_holder {
		flex-wrap: nowrap;
		overflow-x: auto;
		justify-content: flex-start;
	}
}
</style>
