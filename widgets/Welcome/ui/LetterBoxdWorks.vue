<template>
	<div class="holder w-[1200px] flex flex-col items-center gap-24 px-5">
		<div class="item flex gap-32 items-center justify-between ml-24">
			<text-block-item>
				<template #title>Tell us what you’ve seen</template>
				<template #text_content>
					Get your Letterboxd underway by visiting our
					<span><NuxtLink to="/films/all">Popular</NuxtLink></span> section and
					marking a few films you’ve seen. Click the
					<span>
						<img
							class="w-6 h-6 inline-block"
							src="@/shared/ui/icons/eye.png"
							alt=""
						/>
					</span>
					on any film poster to tell us you’ve watched it (add a
					<span>
						<img
							class="w-6 h-6 inline-block"
							src="@/shared/ui/icons/favorite_orange.png"
							alt=""
						/>
					</span>
					if you liked it and/or a rating). We add all watched titles to your
					Films tab and then we can show you reviews containing spoilers
					(usually hidden) and other cool stuff. If you’re Pro we compute
					detailed stats based on all your watched films (see below).
				</template>
			</text-block-item>

			<div class="img_holder">
				<img
					class="h-full w-full object-contain"
					src="./assets/guide1.jpg"
					alt=""
				/>
			</div>
		</div>

		<div class="item flex flex-row-reverse gap-20 items-center justify-between">
			<text-block-item>
				<template #title>Browse your watched films</template>
				<template #text_content>
					Now that you’ve added some films, you can find them in the Films tab
					of your profile. As you add more content, your profile starts to
					reflect your taste. You can also browse the films of other members, or
					the
					<span>
						<NuxtLink
							class="hover:text-blue-300 transition-all text-white"
							to="/films/by/rating"
						>
							community
						</NuxtLink>
					</span>
					, with Hide watched films activated to find more great films to watch.
					If you’ve previously saved film-related activity at IMDb or another
					service, we can help you import this, too.
				</template>
			</text-block-item>

			<div class="img_holder">
				<img
					class="h-full w-full object-contain"
					src="./assets/guide2.jpg"
					alt=""
				/>
			</div>
		</div>

		<div class="item flex gap-32 items-center justify-between ml-24">
			<text-block-item>
				<template #title>Save films to watch later</template>
				<template #text_content>
					One of our most-loved features, the Watchlist, lets you keep a list of
					films you want to see. Start in Most Anticipated and mark a few films
					you want to see—use the ‘clock’ on a film or review page, or open the
					options menu on any poster (shown opposite). If you subsequently log
					or mark a film as watched, we’ll move it from your Watchlist to your
					Films (and add it to your Diary, if you provide a date—more on that
					below).
				</template>
			</text-block-item>

			<div class="img_holder">
				<img
					class="h-full w-full object-contain"
					src="./assets/guide3.jpg"
					alt=""
				/>
			</div>
		</div>

		<div class="item flex flex-row-reverse gap-20 items-center justify-between">
			<text-block-item>
				<template #title>Your account, profile and settings</template>
				<template #text_content>
					Click your username (at the top of each page) for shortcuts to the
					main sections of your account. Your Profile, Films, Diary, Watchlist
					and other pages are here. You can customize your name, location,
					website, bio and favorite films in Settings. We use your X / Twitter
					avatar if you connect your account, or a Gravatar matching the email
					on your profile. Note: your profile (and any other content you
					publish, with the exception of private lists) is visible to others,
					and to search engines.

					<span>
						<NuxtLink
							class="hover:text-blue-300 transition-all text-white"
							to="/films/by/rating"
						>
							community
						</NuxtLink>
					</span>
					, with Hide watched films activated to find more great films to watch.
					If you’ve previously saved film-related activity at IMDb or another
					service, we can help you import this, too.
				</template>
			</text-block-item>

			<div class="img_holder">
				<img
					class="h-full w-full object-contain"
					src="./assets/guide4.jpg"
					alt=""
				/>
			</div>
		</div>

		<div class="item flex gap-32 items-center justify-between ml-24">
			<text-block-item>
				<template #title>Log a film</template>
				<template #text_content>
					Log a film to tell us you watched it on a particular date, and to
					attach a review, rating and tags. We put all films you log with a date
					into your Diary, a great reference for when it comes time to compile
					your year-end list. You can rate films without logging them too,
					either on a film or review page, or from the ‘more options’ menu on a
					poster.
				</template>
				<template #button_text>
					<div @click="useHeaderStore().isModalSignInOpened = true">
						SIGN IN TO ADD FILMS
					</div>
				</template>
			</text-block-item>

			<div class="img_holder">
				<img
					class="h-full w-full object-contain"
					src="./assets/guide5.jpg"
					alt=""
				/>
			</div>
		</div>

		<div class="item flex flex-row-reverse gap-20 items-center justify-between">
			<text-block-item>
				<template #title>Following and activity</template>
				<template #text_content>
					The best way to find members to follow is by reading reviews of films
					you like, to identify the voices and opinions you dig. Our
					<span
						><NuxtLink
							class="text-white hover:text-blue-300 transition-all"
							to="/members"
						>
							Members
						</NuxtLink>
					</span>
					page lists popular accounts. As you follow more people, we create a
					personalized Activity stream full of reviews and recommendations from
					these members (and you’re bound to find new people to follow from the
					Likes included here). Use the Incoming tab to see who’s interacting
					with you, and upgrade to Pro to personalize the types of activity you
					see on each device.

					<span>
						<NuxtLink
							class="hover:text-blue-300 transition-all text-white"
							to="/films/by/rating"
						>
							community
						</NuxtLink>
					</span>
					, with Hide watched films activated to find more great films to watch.
					If you’ve previously saved film-related activity at IMDb or another
					service, we can help you import this, too.
				</template>
			</text-block-item>

			<div class="img_holder">
				<img
					class="h-full w-full object-contain"
					src="./assets/guide6.jpg"
					alt=""
				/>
			</div>
		</div>

		<div class="item flex gap-32 items-center justify-between ml-24">
			<text-block-item>
				<template #title>Make and share lists</template>
				<template #text_content>
					Lists are a great way to share a collection of related films, or to
					rank the films of your favorite genre, star, director or franchise.
					It’s fun to welcome suggestions for your lists from other members.
					Start a list on your Lists tab, then add films on the ‘Edit’ screen
					(or from the ‘more options’ menu on a poster). The first time you make
					a list public, it’s shared with your followers.
				</template>
				<template #button_text>
					<div @click="useHeaderStore().isModalSignInOpened = true">
						SIGN IN TO MAKE LISTS
					</div>
				</template>
			</text-block-item>

			<div class="img_holder">
				<img
					class="h-full w-full object-contain"
					src="./assets/guide7.jpg"
					alt=""
				/>
			</div>
		</div>

		<div class="item flex flex-row-reverse gap-20 items-center justify-between">
			<text-block-item>
				<template #title>Upgrade for stats + more!</template>
				<template #text_content>
					The more films you log on Letterboxd, the more ways we have to analyze
					your movie-watching habits. Upgrade to a Pro or Patron account and
					we’ll generate all-time stats based on every film you’ve added to your
					profile, and annual stats for each year with at least ten films
					logged. Stats include overview by week/year, highest rated decades,
					most watched and highest rated actors and directors, progress against
					milestone lists, genre, language and country breakdowns, and lots
					more.
				</template>
			</text-block-item>

			<div class="img_holder">
				<img
					class="h-full w-full object-contain"
					src="./assets/guide8.jpg"
					alt=""
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useHeaderStore } from '~/features/Header/headerStore'
</script>

<style scoped>
@media screen and (max-width: 1270px) {
	.item {
		flex-direction: column;
		margin-left: 0;
		gap: 40px;
		justify-content: center;
	}
	.item img {
		object-fit: cover;
	}
	.img_holder {
		width: 500px;
	}
	.holder {
		width: 100%;
		gap: 70px;
	}
}
@media screen and (max-width: 530px) {
	.img_holder {
		width: 400px;
		height: 300px;
	}
}
@media screen and (max-width: 410px) {
	.img_holder {
		width: 300px;
		height: 300px;
	}
}
</style>
