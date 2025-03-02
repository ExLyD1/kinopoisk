export const filmInfoCategoriesList = ['Members', 'Likes', 'Reviews', 'Lists']

export interface IFilmOptionsList {
	label: string
	width: string
	options?: Array<{
		option: string | number
		route_query: string
	}>
	deep_options?: {
		label: string
		options: { option: string | number; route_query: string }[]
	}[]
	isSort: boolean
}

export const optionsMembersList: IFilmOptionsList[] = [
	{
		label: 'Rating',
		width: 'w-[100px]',
		options: [
			{ option: 'Any Rating', route_query: '' },
			{ option: 'No Rating', route_query: 'rated/none' },
		],
		isSort: false,
	},
	{
		label: 'When Added',
		width: 'w-[130px]',
		options: [{ option: 'Member Name', route_query: 'name' }],
		deep_options: [
			{
				label: 'When Added',
				options: [
					{ option: 'Newest First', route_query: '' },
					{ option: 'Earlies First', route_query: 'earliest' },
				],
			},
		],
		isSort: true,
	},
]

export const optionsLikesList: IFilmOptionsList[] = [
	{
		label: 'When Liked',
		width: 'w-[130px]',
		options: [{ option: 'Member Name', route_query: 'name' }],
		deep_options: [
			{
				label: 'When Liked',
				options: [
					{ option: 'Newest First', route_query: '' },
					{ option: 'Earlies First', route_query: 'earliest' },
				],
			},
		],
		isSort: true,
	},
]

export const optionsReviewsList: IFilmOptionsList[] = [
	{
		label: 'Rating',
		width: 'w-[100px]',
		options: [
			{ option: 'Any Rating', route_query: '' },
			{ option: 'No Rating', route_query: 'rated/none' },
		],
		isSort: false,
	},
	{
		label: 'When Liked',
		width: 'w-[130px]',
		deep_options: [
			{
				label: 'When reviewed',
				options: [
					{ option: 'Newest First', route_query: '' },
					{ option: 'Earlies First', route_query: 'earliest' },
				],
			},
			{
				label: 'Review rating',
				options: [
					{ option: 'Hihgest first', route_query: 'rating-highest' },
					{ option: 'Lowest first', route_query: 'rating-lowest' },
				],
			},
		],
		isSort: true,
	},
]

export const optionsListsList: IFilmOptionsList[] = [
	{
		label: 'When Updated',
		width: 'w-[130px]',
		options: [{ option: 'List Name', route_query: 'name' }],
		deep_options: [
			{
				label: 'When published',
				options: [
					{ option: 'Newest First', route_query: '' },
					{ option: 'Oldest First', route_query: 'oldest' },
				],
			},
		],
		isSort: true,
	},
]
