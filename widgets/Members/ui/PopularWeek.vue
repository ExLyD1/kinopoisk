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

		<div
			v-if="usersList.length > 0"
			class="popularWeek_holder flex gap-5 justify-between mt-5"
		>
			<div v-for="(user, index) in usersList" :key="index">
				<member-card-item :data="user"></member-card-item>
			</div>
		</div>
		<LoadingSpinner v-else class="my-5" />
	</div>
</template>

<script setup lang="ts">
import type { IUser } from '~/shared/model/interfaces/userInterface'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const usersList: Ref<{ user: IUser; favFilms: IFilmItem[] }[]> = ref([])

onMounted(async () => {
	const usersDataList = await $fetch<IUser[]>('/api/user/list?quantity=10')

	const usersWithFavoritesData = await Promise.all(
		usersDataList.slice(5, 10).map(async user => {
			const userFavoriteFilms = await $fetch<IFilmItem[]>(
				`/api/favFilms/list?id=${user.id}&quantity=4`
			)

			return {
				user: user,
				favFilms: userFavoriteFilms,
			}
		})
	)

	usersList.value = usersWithFavoritesData
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
