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
		route_query: 'likes-films',
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

// watched films genre
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

// liked films decade
export const memberLikedFilmsOptions: IMemberOptionsList[] = [
	{
		label: 'Decade',
		width: 'w-[130px]',
		anyLabel: 'Any Decade',
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
	},
]

export const decades = [
	{
		decade: '1870s',
		years: [
			'1870',
			'1871',
			'1872',
			'1873',
			'1874',
			'1875',
			'1876',
			'1877',
			'1878',
			'1879',
		],
	},
	{
		decade: '1880s',
		years: [
			'1880',
			'1881',
			'1882',
			'1883',
			'1884',
			'1885',
			'1886',
			'1887',
			'1888',
			'1889',
		],
	},
	{
		decade: '1890s',
		years: [
			'1890',
			'1891',
			'1892',
			'1893',
			'1894',
			'1895',
			'1896',
			'1897',
			'1898',
			'1899',
		],
	},
	{
		decade: '1900s',
		years: [
			'1900',
			'1901',
			'1902',
			'1903',
			'1904',
			'1905',
			'1906',
			'1907',
			'1908',
			'1909',
		],
	},
	{
		decade: '1910s',
		years: [
			'1910',
			'1911',
			'1912',
			'1913',
			'1914',
			'1915',
			'1916',
			'1917',
			'1918',
			'1919',
		],
	},
	{
		decade: '1920s',
		years: [
			'1920',
			'1921',
			'1922',
			'1923',
			'1924',
			'1925',
			'1926',
			'1927',
			'1928',
			'1929',
		],
	},
	{
		decade: '1930s',
		years: [
			'1930',
			'1931',
			'1932',
			'1933',
			'1934',
			'1935',
			'1936',
			'1937',
			'1938',
			'1939',
		],
	},
	{
		decade: '1940s',
		years: [
			'1940',
			'1941',
			'1942',
			'1943',
			'1944',
			'1945',
			'1946',
			'1947',
			'1948',
			'1949',
		],
	},
	{
		decade: '1950s',
		years: [
			'1950',
			'1951',
			'1952',
			'1953',
			'1954',
			'1955',
			'1956',
			'1957',
			'1958',
			'1959',
		],
	},
	{
		decade: '1960s',
		years: [
			'1960',
			'1961',
			'1962',
			'1963',
			'1964',
			'1965',
			'1966',
			'1967',
			'1968',
			'1969',
		],
	},
	{
		decade: '1970s',
		years: [
			'1970',
			'1971',
			'1972',
			'1973',
			'1974',
			'1975',
			'1976',
			'1977',
			'1978',
			'1979',
		],
	},
	{
		decade: '1980s',
		years: [
			'1980',
			'1981',
			'1982',
			'1983',
			'1984',
			'1985',
			'1986',
			'1987',
			'1988',
			'1989',
		],
	},
	{
		decade: '1990s',
		years: [
			'1990',
			'1991',
			'1992',
			'1993',
			'1994',
			'1995',
			'1996',
			'1997',
			'1998',
			'1999',
		],
	},
	{
		decade: '2000s',
		years: [
			'2000',
			'2001',
			'2002',
			'2003',
			'2004',
			'2005',
			'2006',
			'2007',
			'2008',
			'2009',
		],
	},
	{
		decade: '2010s',
		years: [
			'2010',
			'2011',
			'2012',
			'2013',
			'2014',
			'2015',
			'2016',
			'2017',
			'2018',
			'2019',
		],
	},
	{
		decade: '2020s',
		years: [
			'2020',
			'2021',
			'2022',
			'2023',
			'2024',
			'2025',
			'2026',
			'2027',
			'2028',
			'2029',
		],
	},
]
