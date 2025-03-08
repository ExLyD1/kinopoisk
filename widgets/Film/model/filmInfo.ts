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
					{ option: 'Earliest First', route_query: 'earliest' },
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
					{ option: 'Earliest First', route_query: 'earliest' },
				],
			},
		],
		isSort: true,
	},
]

import { useFilmFiltersStore } from '~/features/Film/model/filmFiltersStore'
export const getOptionsReviewsList = (): IFilmOptionsList[] => {
	const filmFilterStore = useFilmFiltersStore()

	return [
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
			label: 'When Reviewed',
			width: 'w-[130px]',
			deep_options: filmFilterStore.isAnyRating
				? [
						{
							label: 'When Reviewed',
							options: [
								{ option: 'Newest First', route_query: '' },
								{ option: 'Earliest First', route_query: 'earliest' },
							],
						},
						{
							label: 'Review Rating',
							options: [
								{ option: 'Highest First', route_query: 'rating-highest' },
								{ option: 'Lowest First', route_query: 'rating-lowest' },
							],
						},
				  ]
				: [
						{
							label: 'When Reviewed',
							options: [
								{ option: 'Newest First', route_query: '' },
								{ option: 'Earliest First', route_query: 'earliest' },
							],
						},
				  ],
			isSort: true,
		},
	]
}

export const optionsListsList: IFilmOptionsList[] = [
	{
		label: 'When Published',
		width: 'w-[130px]',
		options: [{ option: 'List Name', route_query: 'name' }],
		deep_options: [
			{
				label: 'When Published',
				options: [
					{ option: 'Newest First', route_query: '' },
					{ option: 'Oldest First', route_query: 'oldest' },
				],
			},
		],
		isSort: true,
	},
]
