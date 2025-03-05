<template>
	<NuxtLoadingIndicator />
	<NuxtLayout>
		<Suspense>
			<NuxtPage :key="$route.fullPath" keep-alive />

			<template #fallback>
				<LoadingPage />
			</template>
		</Suspense>
	</NuxtLayout>
</template>

<script setup></script>

<style>
.main_holder {
	width: 60%;
}

@media screen and (max-width: 1530px) {
	.main_holder {
		width: 80%;
	}
}
@media screen and (max-width: 1170px) {
	.main_holder {
		width: 100%;
	}
}
</style>
