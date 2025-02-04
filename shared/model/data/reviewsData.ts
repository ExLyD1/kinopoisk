import type { IReview } from '../interfaces/reviewInterface'

export const reviewsList: Ref<Array<IReview>> = ref([
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar11.jpg',
			import.meta.url
		).href,
		author_name: 'Rachel',
		review_comments: 6,
		review_likes: 83,
		review_text: 'Random review text 1',
		review_rate: 2,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar12.jpg',
			import.meta.url
		).href,
		author_name: 'Leo',
		review_comments: 19,
		review_likes: 27,
		review_text: 'Random review text 85',
		review_rate: 1,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar15.jpg',
			import.meta.url
		).href,
		author_name: 'Victor',
		review_comments: 11,
		review_likes: 198,
		review_text: 'Random review text 71',
		review_rate: 0,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar14.jpg',
			import.meta.url
		).href,
		author_name: 'Hannah',
		review_comments: 1,
		review_likes: 50,
		review_text: 'Random review text 23',
		review_rate: 4,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar6.jpg',
			import.meta.url
		).href,
		author_name: 'Eve',
		review_comments: 3,
		review_likes: 121,
		review_text: 'Random review text 70',
		review_rate: 4.2,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar10.jpg',
			import.meta.url
		).href,
		author_name: 'Eve',
		review_comments: 28,
		review_likes: 185,
		review_text: 'Random review text 56',
		review_rate: 1.2,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar15.jpg',
			import.meta.url
		).href,
		author_name: 'Charlie',
		review_comments: 0,
		review_likes: 45,
		review_text: 'Random review text 12',
		review_rate: 4.9,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar11.jpg',
			import.meta.url
		).href,
		author_name: 'Charlie',
		review_comments: 2,
		review_likes: 79,
		review_text: 'Random review text 41',
		review_rate: 4.6,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar8.jpg',
			import.meta.url
		).href,
		author_name: 'Tina',
		review_comments: 28,
		review_likes: 29,
		review_text: 'Random review text 61',
		review_rate: 3.3,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar1.jpg',
			import.meta.url
		).href,
		author_name: 'David',
		review_comments: 14,
		review_likes: 9,
		review_text: 'Random review text 89',
		review_rate: 5.0,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar6.jpg',
			import.meta.url
		).href,
		author_name: 'Victor',
		review_comments: 35,
		review_likes: 149,
		review_text: 'Random review text 25',
		review_rate: 2.1,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar13.jpg',
			import.meta.url
		).href,
		author_name: 'Paul',
		review_comments: 27,
		review_likes: 183,
		review_text: 'Random review text 68',
		review_rate: 3.2,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar5.jpg',
			import.meta.url
		).href,
		author_name: 'Quinn',
		review_comments: 4,
		review_likes: 115,
		review_text: 'Random review text 34',
		review_rate: 5.0,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar3.jpg',
			import.meta.url
		).href,
		author_name: 'Tina',
		review_comments: 7,
		review_likes: 176,
		review_text: 'Random review text 75',
		review_rate: 2.4,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar3.jpg',
			import.meta.url
		).href,
		author_name: 'Sam',
		review_comments: 11,
		review_likes: 50,
		review_text: 'Random review text 1',
		review_rate: 1.5,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar3.jpg',
			import.meta.url
		).href,
		author_name: 'David',
		review_comments: 17,
		review_likes: 170,
		review_text: 'Random review text 29',
		review_rate: 1.8,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar3.jpg',
			import.meta.url
		).href,
		author_name: 'Yara',
		review_comments: 33,
		review_likes: 156,
		review_text: 'Random review text 21',
		review_rate: 17,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar11.jpg',
			import.meta.url
		).href,
		author_name: 'Karen',
		review_comments: 24,
		review_likes: 51,
		review_text: 'Random review text 85',
		review_rate: 2.2,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar6.jpg',
			import.meta.url
		).href,
		author_name: 'Ursula',
		review_comments: 35,
		review_likes: 118,
		review_text: 'Random review text 80',
		review_rate: 3.1,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar7.jpg',
			import.meta.url
		).href,
		author_name: 'David',
		review_comments: 19,
		review_likes: 133,
		review_text: 'Random review text 46',
		review_rate: 3.3,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar12.jpg',
			import.meta.url
		).href,
		author_name: 'Grace',
		review_comments: 4,
		review_likes: 111,
		review_text: 'Random review text 13',
		review_rate: 4.8,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar11.jpg',
			import.meta.url
		).href,
		author_name: 'Nathan',
		review_comments: 0,
		review_likes: 92,
		review_text: 'Random review text 2',
		review_rate: 1.9,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar3.jpg',
			import.meta.url
		).href,
		author_name: 'Xander',
		review_comments: 33,
		review_likes: 77,
		review_text: 'Random review text 83',
		review_rate: 4.1,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar15.jpg',
			import.meta.url
		).href,
		author_name: 'Xander',
		review_comments: 45,
		review_likes: 97,
		review_text: 'Random review text 58',
		review_rate: 3.9,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar10.jpg',
			import.meta.url
		).href,
		author_name: 'Paul',
		review_comments: 37,
		review_likes: 130,
		review_text: 'Random review text 83',
		review_rate: 4.9,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar15.jpg',
			import.meta.url
		).href,
		author_name: 'Alice',
		review_comments: 8,
		review_likes: 186,
		review_text: 'Random review text 98',
		review_rate: 4.2,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar11.jpg',
			import.meta.url
		).href,
		author_name: 'David',
		review_comments: 4,
		review_likes: 108,
		review_text: 'Random review text 83',
		review_rate: 3.5,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar2.jpg',
			import.meta.url
		).href,
		author_name: 'Ursula',
		review_comments: 28,
		review_likes: 5,
		review_text: 'Random review text 36',
		review_rate: 3.2,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar4.jpg',
			import.meta.url
		).href,
		author_name: 'Leo',
		review_comments: 39,
		review_likes: 152,
		review_text: 'Random review text 83',
		review_rate: 2.6,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar9.jpg',
			import.meta.url
		).href,
		author_name: 'Wendy',
		review_comments: 28,
		review_likes: 26,
		review_text: 'Random review text 32',
		review_rate: 3.9,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar15.jpg',
			import.meta.url
		).href,
		author_name: 'Isaac',
		review_comments: 49,
		review_likes: 68,
		review_text: 'Random review text 13',
		review_rate: 3.4,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar9.jpg',
			import.meta.url
		).href,
		author_name: 'Victor',
		review_comments: 10,
		review_likes: 184,
		review_text: 'Random review text 84',
		review_rate: 4.4,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar3.jpg',
			import.meta.url
		).href,
		author_name: 'Tina',
		review_comments: 12,
		review_likes: 43,
		review_text: 'Random review text 70',
		review_rate: 4.9,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar12.jpg',
			import.meta.url
		).href,
		author_name: 'Leo',
		review_comments: 45,
		review_likes: 173,
		review_text: 'Random review text 96',
		review_rate: 1.2,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar13.jpg',
			import.meta.url
		).href,
		author_name: 'Olivia',
		review_comments: 33,
		review_likes: 51,
		review_text: 'Random review text 73',
		review_rate: 0.5,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar5.jpg',
			import.meta.url
		).href,
		author_name: 'Jack',
		review_comments: 22,
		review_likes: 91,
		review_text: 'Random review text 29',
		review_rate: 0.0,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar10.jpg',
			import.meta.url
		).href,
		author_name: 'Sam',
		review_comments: 17,
		review_likes: 25,
		review_text: 'Random review text 51',
		review_rate: 2.2,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar9.jpg',
			import.meta.url
		).href,
		author_name: 'Tina',
		review_comments: 50,
		review_likes: 179,
		review_text: 'Random review text 19',
		review_rate: 3.2,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar9.jpg',
			import.meta.url
		).href,
		author_name: 'Charlie',
		review_comments: 18,
		review_likes: 58,
		review_text: 'Random review text 61',
		review_rate: 4.4,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar4.jpg',
			import.meta.url
		).href,
		author_name: 'Zane',
		review_comments: 17,
		review_likes: 190,
		review_text: 'Random review text 66',
		review_rate: 3.7,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar11.jpg',
			import.meta.url
		).href,
		author_name: 'Grace',
		review_comments: 29,
		review_likes: 9,
		review_text: 'Random review text 94',
		review_rate: 3.7,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar3.jpg',
			import.meta.url
		).href,
		author_name: 'Tina',
		review_comments: 46,
		review_likes: 137,
		review_text: 'Random review text 48',
		review_rate: 2.1,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar3.jpg',
			import.meta.url
		).href,
		author_name: 'Charlie',
		review_comments: 8,
		review_likes: 81,
		review_text: 'Random review text 76',
		review_rate: 1.9,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar14.jpg',
			import.meta.url
		).href,
		author_name: 'Alice',
		review_comments: 1,
		review_likes: 154,
		review_text: 'Random review text 17',
		review_rate: 3.9,
	},
	{
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar14.jpg',
			import.meta.url
		).href,
		author_name: 'Hannah',
		review_comments: 18,
		review_likes: 29,
		review_text: 'Random review text 50',
		review_rate: 2.9,
	},
])
