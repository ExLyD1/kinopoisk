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
		isOptedMore: boolean
	}[]
}

export const memberFilmsOptions: IMemberOptionsList[] = [
	{
		label: 'Genre',
		width: 'w-[130px]',
		anyLabel: 'Any genre',
		options: [
			{ option: 'Action', route_query: 'action', isOptedMore: true },
			{ option: 'Adventure', route_query: 'adventure', isOptedMore: true },
			{ option: 'Animation', route_query: 'animation', isOptedMore: true },
			{ option: 'Comedy', route_query: 'comedy', isOptedMore: true },
			{ option: 'Crime', route_query: 'crime', isOptedMore: true },
			{ option: 'Documentary', route_query: 'documentary', isOptedMore: true },
			{ option: 'Drama', route_query: 'drama', isOptedMore: true },
			{ option: 'Family', route_query: 'family', isOptedMore: true },
			{ option: 'Fantasy', route_query: 'fantasy', isOptedMore: true },
			{ option: 'History', route_query: 'history', isOptedMore: true },
			{ option: 'Horror', route_query: 'horror', isOptedMore: true },
			{ option: 'Music', route_query: 'music', isOptedMore: true },
			{ option: 'Mystery', route_query: 'mystery', isOptedMore: true },
			{ option: 'Romance', route_query: 'romance', isOptedMore: true },
			{ option: 'Science', route_query: 'science', isOptedMore: true },
			{ option: 'Fiction', route_query: 'fiction', isOptedMore: true },
			{ option: 'Thriller', route_query: 'thriller', isOptedMore: true },
			{ option: 'TV', route_query: 'tV', isOptedMore: true },
			{ option: 'Movie', route_query: 'movie', isOptedMore: true },
			{ option: 'War', route_query: 'war', isOptedMore: true },
			{ option: 'Western', route_query: 'western', isOptedMore: true },
		],
	},
]
