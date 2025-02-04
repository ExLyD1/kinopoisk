import type { IHqUser } from '../interfaces/hqUserInterface'
import { storiesList } from './storiesData'

export const hqUsersList: Ref<Array<IHqUser>> = ref([
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar1.jpg',
			import.meta.url
		).href,
		user_name: 'John Doe',
		user_followers: 2500,
		user_likes: 350,
		user_lists: 12,
		user_stories: storiesList,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar2.jpg',
			import.meta.url
		).href,
		user_name: 'Jane Smith',
		user_followers: 1800,
		user_likes: 290,
		user_lists: 8,
		user_stories: storiesList,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar3.jpg',
			import.meta.url
		).href,
		user_name: 'Alice Johnson',
		user_followers: 3200,
		user_likes: 420,
		user_lists: 15,
		user_stories: storiesList,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar4.jpg',
			import.meta.url
		).href,
		user_name: 'David Brown',
		user_followers: 1300,
		user_likes: 210,
		user_lists: 5,
		user_stories: storiesList,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar5.jpg',
			import.meta.url
		).href,
		user_name: 'Mary White',
		user_followers: 2700,
		user_likes: 350,
		user_lists: 9,
		user_stories: storiesList,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar6.jpg',
			import.meta.url
		).href,
		user_name: 'Robert Clark',
		user_followers: 1100,
		user_likes: 150,
		user_lists: 3,
		user_stories: storiesList,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar7.jpg',
			import.meta.url
		).href,
		user_name: 'Sophia Lee',
		user_followers: 2100,
		user_likes: 310,
		user_lists: 10,
		user_stories: storiesList,
	},
])
