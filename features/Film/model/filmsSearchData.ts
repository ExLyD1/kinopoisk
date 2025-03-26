export interface IFilmOptionsList {
	label: string
	width: string
	type: string
	anyLabel?: string
	isSort: boolean
	options: {
		option: string | number
		route_query: string
		isOptedMore: boolean
	}[]
	deep_options?: {
		label: string
		options: { option: string | number; route_query: string }[]
	}[]
}

export const decadesOptionsList: IFilmOptionsList = {
	label: 'Decade',
	width: 'w-[130px]',
	type: 'decade',
	anyLabel: 'Any Decade',
	isSort: false,
	options: [
		{ option: '2020s', route_query: '2020s', isOptedMore: false },
		{ option: '2010s', route_query: '2010s', isOptedMore: false },
		{ option: '2000s', route_query: '2000s', isOptedMore: false },
		{ option: '1990s', route_query: '1990s', isOptedMore: false },
		{ option: '1980s', route_query: '1980s', isOptedMore: false },
		{ option: '1970s', route_query: '1970s', isOptedMore: false },
		{ option: '1960s', route_query: '1960s', isOptedMore: false },
		{ option: '1950s', route_query: '1950s', isOptedMore: false },
		{ option: '1940s', route_query: '1940s', isOptedMore: false },
		{ option: '1930s', route_query: '1930s', isOptedMore: false },
		{ option: '1920s', route_query: '1920s', isOptedMore: false },
		{ option: '1910s', route_query: '1910s', isOptedMore: false },
		{ option: '1900s', route_query: '1900s', isOptedMore: false },
		{ option: '1890s', route_query: '1890s', isOptedMore: false },
		{ option: '1880s', route_query: '1880s', isOptedMore: false },
		{ option: '1870s', route_query: '1870s', isOptedMore: false },
	],
}

export const genresOptionsList: IFilmOptionsList = {
	label: 'Genre',
	width: 'w-[130px]',
	type: 'genre',
	anyLabel: 'Any genre',
	isSort: false,
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
}

export const sortingOptionsList: IFilmOptionsList = {
	label: 'Average Rating',
	width: 'w-[130px]',
	type: 'sorting',
	isSort: true,
	options: [{ option: 'Film name', route_query: 'name', isOptedMore: false }],
	deep_options: [
		{
			label: 'Release Date',
			options: [
				{ option: 'Newest First', route_query: 'newest' },
				{ option: 'Earliest First', route_query: 'earliest' },
			],
		},
		{
			label: 'Avarage Rating',
			options: [
				{ option: 'Highest First', route_query: 'rating-highest' },
				{ option: 'Lowest First', route_query: 'rating-lowest' },
			],
		},
		{
			label: 'Film length',
			options: [
				{ option: 'Shortest First', route_query: 'shortest' },
				{ option: 'Longest First', route_query: 'longest' },
			],
		},
	],
}
