<template>
	<div class="holder flex flex-col py-10 w-[1200px] m-auto">
		<div class="text-gray-200 text-3xl text-center pb-12 font-light px-3">
			Here’s what you’ll find in our main sections…
		</div>

		<div class="items_holder flex justify-between gap-10">
			<div class="item flex flex-col gap-5 w-[270px]">
				<div class="border-gray-700 border w-full h-[192px]">
					<img
						class="object-cover w-full h-full"
						src="./assets/tip1.jpg"
						alt=""
					/>
				</div>

				<div
					class="text-gray-200 text-lg font-medium hover:text-blue-400 transition-all"
				>
					Film actions
				</div>

				<div class="text-gray-400">
					If you’re signed in, you’ll see a selection of popular films, reviews
					and lists from Letterboxd members. As you follow more people, we
					personalize this page to show what’s popular in your network.
				</div>
			</div>

			<div class="item flex flex-col gap-5 w-[273px]">
				<div class="border-gray-700 border w-full h-[192px]">
					<img
						class="object-cover w-full h-full"
						src="./assets/tip2.jpg"
						alt=""
					/>
				</div>

				<div
					class="text-gray-200 text-lg font-medium hover:text-blue-400 transition-all"
				>
					Tagging films
				</div>

				<div class="text-gray-400">
					This section shows which films our members are watching and reviewing
					the most. It’s also your starting point for browsing the whole
					database, by decade/year, genre, popularity, rating, streaming service
					and more.
				</div>
			</div>

			<div class="item flex flex-col gap-5 w-[273px]">
				<div class="border-gray-700 border w-full h-[192px]">
					<img
						class="object-cover w-full h-full"
						src="./assets/tip3.jpg"
						alt=""
					/>
				</div>

				<div
					class="text-gray-200 text-lg font-medium hover:text-blue-400 transition-all"
				>
					Reordering lists
				</div>

				<div class="text-gray-400">
					This section shows our most popular lists, and a selection of recently
					added content. From here you can create a list of your own, browse
					more popular lists, or browse by the tags applied to each by its
					creator.
				</div>
			</div>

			<div class="item flex flex-col gap-5 w-[273px]">
				<div class="border-gray-700 border w-full h-[192px]">
					<img
						class="object-cover w-full h-full"
						src="./assets/tip4.jpg"
						alt=""
					/>
				</div>

				<div
					class="text-gray-200 text-lg font-medium hover:text-blue-400 transition-all"
				>
					Upgrade to Pro!
				</div>

				<div class="text-gray-400">
					Here you’ll find others whose content is being enjoyed most by our
					community. Click through to see if you like their style, or locate
					your real-life Facebook friends that also use Letterboxd.
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
@media screen and (max-width: 1230px) {
	.items_holder {
		display: grid;
		place-content: center;
		grid-template-columns: repeat(2, 273px);
		grid-template-rows: repeat(2, auto);
		justify-items: center;
		gap: 20px; /* Уменьшает расстояние между элементами */
	}
	.holder {
		width: 100%;
	}
}

@media screen and (max-width: 625px) {
	.items_holder {
		grid-template-columns: repeat(1, 273px);
		grid-template-rows: auto;
		gap: 15px; /* Можно уменьшить для мобильных */
	}
}
</style>
