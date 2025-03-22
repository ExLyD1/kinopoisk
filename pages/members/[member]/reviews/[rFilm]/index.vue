<template>
	<div
		v-if="!isLoading && film && review && user"
		class="page_container relative main_holder pt-16 m-auto pb-24"
	>
		<div class="holder_all flex justify-between w-full gap-10">
			<!-- main data mainstream -->
			<div class="main w-[700px]">
				<review-main-data
					:film="film"
					:review="review"
					:user="user"
				></review-main-data>

				<review-main-comments :review="review"></review-main-comments>
			</div>

			<!-- aside line -->
			<div v-if="!isSmallScreen" class="aside w-[230px] mr-24">
				<review-aside-block :user="user"></review-aside-block>
			</div>
		</div>
	</div>

	<div v-if="isLoading" class="h-[120vh] w-full bg-dark">
		<div class="loading-container">
			<div class="loading-spinner"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import type { IReview } from '~/shared/model/interfaces/reviewInterface'
import type { IUser } from '~/shared/model/interfaces/userInterface'

import { useMediaQuery } from '@vueuse/core'

const isSmallScreen = useMediaQuery('(max-width:650px)')

const route = useRoute()
const { member: member_name, rFilm: film_name } = route.params as {
	member: string
	rFilm: string
}

const isLoading = ref<boolean>(true)

const user = ref<IUser>()
const film = ref<IFilmItem>()
const review = ref<IReview>()

onMounted(async () => {
	try {
		user.value = await $fetch<IUser>(
			`/api/user/by/name/${generateSlug(member_name)}`
		)
		film.value = await $fetch<IFilmItem>(
			`/api/movie/by-name/${generateSlug(film_name)}`
		)

		review.value = await $fetch<IReview>(
			`/api/user/${user.value!.id}/${generateSlug(
				film.value!.film_name
			)}/review`
		)
	} catch (error) {
		console.error('Some error happened : ', error)
	} finally {
		isLoading.value = false
	}
})
</script>

<style scoped>
.loading-container {
	@apply fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-opacity-80 z-50;
}

.loading-spinner {
	@apply border-8 border-t-8 border-gray-300 border-t-green-500 rounded-full w-16 h-16 animate-spin;
}

@media screen and (max-width: 1170px) {
	.aside {
		margin-right: 0px;
	}
	.holder_all {
		margin: auto;
		width: 950px;
	}
}
@media screen and (max-width: 980px) {
	.holder_all {
		flex-direction: column;
		width: 100%;
		padding: 0px 20px;
	}
	.main {
		width: 100%;
		max-width: 700px;
		margin: auto;
	}
	.aside {
		width: 100%;
	}
}
</style>
