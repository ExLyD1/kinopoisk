<template>
	<div>
		<widget-title>
			<template #text_1>
				<NuxtLink to="/members/total">Featured Members</NuxtLink>
			</template>
		</widget-title>

		<div
			v-if="usersList.length > 0"
			class="members_holder flex gap-5 justify-between mt-5"
		>
			<div v-for="(user, index) in usersList" :key="index">
				<member-card-item :data="user"></member-card-item>
			</div>
		</div>
		<LoadingSpinner v-else class="my-10" />
	</div>
</template>

<script setup lang="ts">
import type { IUser } from '~/shared/model/interfaces/userInterface'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const usersList: Ref<{ user: IUser; favFilms: IFilmItem[] }[]> = ref([])

onMounted(async () => {
	const usersDataList = await $fetch<IUser[]>('/api/user/list?quantity=5')

	const usersWithFavoritesData = await Promise.all(
		usersDataList.map(async user => {
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
	.members_holder {
		flex-wrap: wrap;
		justify-content: center;
	}
}
@media screen and (max-width: 445px) {
	.members_holder {
		gap: 35px;
	}
}
@media screen and (max-width: 417px) {
	.members_holder {
		flex-wrap: nowrap;
		overflow-x: auto;
		justify-content: flex-start;
	}
}
</style>
