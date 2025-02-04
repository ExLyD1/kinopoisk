<template>
	<div>
		<div class="border-b border-gray-700 mb-2"></div>
		<div
			v-for="(member, index) in membersList"
			:key="index"
			class="flex flex-col gap-2 w-full"
		>
			<member-list-item :data="member" class="mt-2 mb-2"></member-list-item>

			<div class="border-b border-gray-700"></div>
		</div>

		<div class="mt-6 flex justify-center">
			<NuxtLink to="members/total">
				<Button class="text-gray-300 bg-gray-700 hover:bg-gray-800 text-sm px-6"
					>View more</Button
				>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import type { IUser } from '~/shared/model/interfaces/userInterface'

const usersList = useState<Array<IUser>>('usersList')

const membersList = usersList.value.slice(0, 17)
</script>

<style scoped></style>
