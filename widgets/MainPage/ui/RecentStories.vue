<template>
	<div class="w-full">
		<widget-title>
			<template #text_1>
				<NuxtLink to="/soon">Recent Stories</NuxtLink>
			</template>
			<template #text_2>
				<NuxtLink to="/soon">All HQs</NuxtLink>
			</template>
		</widget-title>

		<div class="stories_holder flex flex-row flex-wrap w-full mt-5 gap-5">
			<div v-for="(story, index) in storiesData" :key="index">
				<story-card class="story" :data="story"></story-card>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// !! Не переделано, я ебал
import type { IHqUser } from '~/shared/model/interfaces/hqUserInterface'

const hqUsersData = useState<IHqUser[]>('hqUsersList')

const storiesData = computed(() => {
	return hqUsersData.value.map((user, index) => {
		const story: any = {
			user_avatar: user.user_avatar,
			user_name: user.user_name,
		}

		if (user.user_stories) {
			story.story_name = user.user_stories[index].story_name
			story.story_image = user.user_stories[index].story_image
			story.story_text = user.user_stories[index].story_text
		}

		return story
	})
})
</script>

<style scoped>
@media screen and (max-width: 990px) {
	.stories_holder {
		justify-content: center;
	}
}
</style>
