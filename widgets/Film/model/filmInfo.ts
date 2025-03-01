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
}

export const optionsViewersList: IFilmOptionsList[] = [
	{
		label: 'Rating',
		width: '200px',
		options: [
			{ option: 'Any Rating', route_query: '/soon' },
			{ option: 'No Rating', route_query: '/soon' },
		],
	},
	{
		label: 'When Added',
		width: '200px',
		options: [{ option: 'Member Name', route_query: '/soon' }],
		deep_options: [
			{
				label: 'When Added',
				options: [
					{ option: 'Newest First', route_query: '/soon' },
					{ option: 'Earlies First', route_query: '/soon' },
				],
			},
		],
	},
]

export const optionsLikesList: IFilmOptionsList[] = [
	{
		label: 'When Liked',
		width: '170px',
		options: [
			{ option: 'Member', route_query: '/soon' },
			{ option: 'When liked', route_query: '/soon' },
		],
	},
]

export const optionsReviewsList: IFilmOptionsList[] = [
	{
		label: 'Rating',
		width: '230px',
		options: [
			{ option: 'Any rating', route_query: '/soon' },
			{ option: 'No rating', route_query: '/soon' },
		],
	},
	{
		label: 'When Liked',
		width: '170px',
		deep_options: [
			{
				label: 'When reviewed',
				options: [
					{ option: 'Newest first', route_query: '/soon' },
					{ option: 'Earlies first', route_query: '/soon' },
				],
			},
			{
				label: 'Review rating',
				options: [
					{ option: 'Hihgest first', route_query: '/soon' },
					{ option: 'Lowest first', route_query: '/soon' },
				],
			},
		],
	},
]

export const optionsListsList: IFilmOptionsList[] = [
	{
		label: 'When Updated',
		width: '170px',
		options: [{ option: 'List name', route_query: '/soon' }],
		deep_options: [
			{
				label: 'When published',
				options: [
					{ option: 'Newest first', route_query: '/soon' },
					{ option: 'Oldest first', route_query: '/soon' },
				],
			},
		],
	},
]
