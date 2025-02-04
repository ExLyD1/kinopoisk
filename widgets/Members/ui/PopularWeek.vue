<template>
	<div>
		<widget-title>
			<template #text_1
				><NuxtLink to="/soon">Popular this week</NuxtLink></template
			>
			<template #text_2><NuxtLink to="/soon">MORE</NuxtLink></template>
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

const usersList = useState<Array<IUser>>('usersList')

const membersList = usersList.value.slice(4, 8).map((user, index) => {
	const user_favorite_films = user?.user_favorite_films?.slice(
		16 + index * 4,
		16 + index * 4 + 4
	)
	return {
		user,
		user_favorite_films,
	}
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
