<template>
	<div class="main_holder pt-8 m-auto pb-24 text-gray-400">
		<div
			v-if="film && !isLoading && user && review"
			class="full_holder flex w-[1050px] m-auto justify-between"
		>
			<!-- main -->
			<div class="main w-[770px]">
				<!-- header title -->
				<div class="border-b border-gray-700 pb-10">
					<div>Likes for {{ member_name }}`s reviews of</div>

					<div class="mt-2 flex items-center gap-2">
						<NuxtLink
							:to="`/films/${generateSlug(film.film_name)}`"
							class="text-white text-2xl hover:text-blue-400 transition-all"
						>
							{{ film.film_name }}
						</NuxtLink>

						<NuxtLink
							:to="getFilmsSearchPageLink('year', 1, String(film.realise_year))"
							class="font-light text-[17px] text-2xl hover:text-blue-400 transition-all mb-[-3px]"
						>
							{{ film.realise_year }}
						</NuxtLink>
					</div>
				</div>

				<!-- main table with data -->
				<div>
					<review-likes-table :user :film :review></review-likes-table>
				</div>
			</div>

			<!-- aside -->
			<div>
				<film-poster :data="film"></film-poster>

				<!-- advertisment -->
				<div class="ads">
					<img class="mt-10" src="/public/images/ads.png" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'
import type { IUser } from '~/shared/model/interfaces/userInterface'
import type { IReview } from '~/shared/model/interfaces/reviewInterface'

const route = useRoute()
const { member: member_name, rFilm: film_name } = route.params as {
	member: string
	rFilm: string
}

const user = ref<IUser>()
const film = ref<IFilmItem>()
const review = ref<IReview>()

const isLoading = ref<boolean>(true)

onMounted(async () => {
	user.value = await $fetch<IUser>(
		`/api/user/by/name/${generateSlug(member_name)}`
	)
	film.value = await $fetch<IFilmItem>(
		`/api/movie/by-name/${generateSlug(film_name)}`
	)
	review.value = await $fetch<IReview>(
		`/api/user/${user.value.id}/${generateSlug(film_name)}/review`
	)

	isLoading.value = false
})
</script>

<style scoped>
@media screen and (max-width: 1080px) {
	.main {
		width: 100%;
	}
	.full_holder {
		width: 100%;
		gap: 40px;
		padding-left: 20px;
		padding-right: 20px;
	}
}
@media screen and (max-width: 980px) {
	.full_holder {
		flex-direction: column;
	}
	.ads {
		display: none;
	}
}
</style>
