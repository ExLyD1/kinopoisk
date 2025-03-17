export const memberLinksList = [
	{
		label: 'Films',
		route_query: 'films',
	},

	{
		label: 'Reviews',
		route_query: 'reviews',
	},

	{
		label: 'Lists',
		route_query: 'lists',
	},

	{
		label: 'Likes',
		route_query: 'likes',
	},

	{
		label: 'Network',
		route_query: 'following',
	},
]

export interface IMemberOptionsList {
	label: string
	width: string
	anyLabel: string
	options: {
		option: string | number
		route_query: string
	}[]
}

export const memberFilmsOptions: IMemberOptionsList[] = [
	{
		label: 'Genre',
		width: 'w-[130px]',
		anyLabel: 'Any genre',
		options: [
			{ option: 'Action', route_query: 'action' },
			{ option: 'Adventure', route_query: 'adventure' },
			{ option: 'Animation', route_query: 'animation' },
			{ option: 'Comedy', route_query: 'comedy' },
			{ option: 'Crime', route_query: 'crime' },
			{ option: 'Documentary', route_query: 'documentary' },
			{ option: 'Drama', route_query: 'drama' },
			{ option: 'Family', route_query: 'family' },
			{ option: 'Fantasy', route_query: 'fantasy' },
			{ option: 'History', route_query: 'history' },
			{ option: 'Horror', route_query: 'horror' },
			{ option: 'Music', route_query: 'music' },
			{ option: 'Mystery', route_query: 'mystery' },
			{ option: 'Romance', route_query: 'romance' },
			{ option: 'Science', route_query: 'science' },
			{ option: 'Fiction', route_query: 'fiction' },
			{ option: 'Thriller', route_query: 'thriller' },
			{ option: 'TV', route_query: 'tV' },
			{ option: 'Movie', route_query: 'movie' },
			{ option: 'War', route_query: 'war' },
			{ option: 'Western', route_query: 'western' },
		],
	},
]
