export interface IOptionsList {
	label: string
	width: string
	options: Array<{
		option: string | number
		route_query: string
	}>
}
export const optionsYearsList: Ref<IOptionsList> = ref({
	label: 'Year',
	width: 'w-[120px]',
	options: [
		{ option: 'All', route_query: '/films/popular' },
		{ option: 'Upcoming', route_query: '/films/popular' },
		{ option: '2020s', route_query: '/films/decade/2020s' },
		{ option: '2010s', route_query: '/films/decade/2010s' },
		{ option: '2000s', route_query: '/films/decade/2000s' },
		{ option: '1990s', route_query: '/films/decade/1990s' },
		{ option: '1980s', route_query: '/films/decade/1980s' },
		{ option: '1970s', route_query: '/films/decade/1970s' },
		{ option: '1960s', route_query: '/films/decade/1960s' },
		{ option: '1950s', route_query: '/films/decade/1950s' },
		{ option: '1940s', route_query: '/films/decade/1940s' },
	],
})

export const optionsRatingList: Ref<IOptionsList> = ref({
	label: 'Rating',
	width: 'w-[170px]',
	options: [
		{
			option: 'The most liked',
			route_query: '/films/by/rating-highest',
		},
		{
			option: 'The lowest liked',
			route_query: '/films/by/rating-lowest',
		},
	],
})

export const optionsGenreList: Ref<IOptionsList> = ref({
	label: 'Genre',
	width: '150px',
	options: [
		{ option: 'Action', route_query: '/films/genre/action' },
		{ option: 'Adventure', route_query: '/films/genre/adventure' },
		{ option: 'Animation', route_query: '/films/genre/animation' },
		{ option: 'Comedy', route_query: '/films/genre/comedy' },
		{ option: 'Crime', route_query: '/films/genre/crime' },
		{ option: 'Documentary', route_query: '/films/genre/documentary' },
		{ option: 'Drama', route_query: '/films/genre/drama' },
		{ option: 'Family', route_query: '/films/genre/family' },
		{ option: 'Fantasy', route_query: '/films/genre/fantasy' },
		{ option: 'History', route_query: '/films/genre/history' },
		{ option: 'Horror', route_query: '/films/genre/horror' },
		{ option: 'Music', route_query: '/films/genre/music' },
		{ option: 'Mystery', route_query: '/films/genre/mystery' },
		{ option: 'Romance', route_query: '/films/genre/romance' },
		{ option: 'Science Fiction', route_query: '/films/genre/science-fiction' },
		{ option: 'Thriller', route_query: '/films/genre/thriller' },
	],
})

export const optionsOtherList: Ref<IOptionsList> = ref({
	label: 'Other',
	width: '300px',
	options: [
		{ option: 'Opening Soon (US)', route_query: '/films/popular' },
		{ option: 'Film Name (A–Z)', route_query: '/films/by/name' },
	],
})
