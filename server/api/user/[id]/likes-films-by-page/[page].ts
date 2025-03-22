import { defineEventHandler, getRouterParam, getQuery } from 'h3'
import type { IFilmItem } from '~/shared/model/interfaces/filmInterface'

const paginate = (list: IFilmItem[], currentPage: number, perPage: number) => {
	const start = (currentPage - 1) * perPage
	const end = start + perPage
	return list.slice(start, end)
}

export default defineEventHandler(async event => {
	const query = getQuery(event)
	const perPage = 36

	const userIdStr = getRouterParam(event, 'id')
	const userId = Number(userIdStr)
	if (!userId) {
		throw createError({
			statusCode: 400,
			message: 'User ID is required',
		})
	}

	const pageStr = getRouterParam(event, 'page')
	const page = Number(pageStr)
	if (!page || isNaN(page)) {
		throw createError({
			statusCode: 400,
			message: 'Invalid page data',
		})
	}

	const [usersModule, filmsModule] = await Promise.all([
		import('~/shared/model/data/usersData'),
		import('~/shared/model/data/filmsData'),
	])

	const user = usersModule.usersList.find(user => user.id === userId)
	if (!user) {
		throw createError({
			statusCode: 404,
			message: 'User not found ',
		})
	}

	const mapFilmsList = new Map(
		filmsModule.filmsList.map(film => [film.id, film])
	)

	let filmsOnPage: IFilmItem[] = []
	let totalItems

	const likedFilmsIds = user.user_favorite_films

	let likedFilms = likedFilmsIds
		.map(f_id => mapFilmsList.get(f_id))
		.filter((film): film is IFilmItem => film !== undefined)

	const decadeStr = query.decade as string
	const yearStr = query.year as string

	const validDecades = [
		'2020s',
		'2010s',
		'2000s',
		'1990s',
		'1980s',
		'1970s',
		'1960s',
		'1950s',
		'1940s',
		'1930s',
		'1920s',
		'1910s',
		'1900s',
		'1890s',
		'1880s',
		'1870s',
	]
	const validYears = [
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
	]

	// validate incoming data
	if (decadeStr) {
		if (!validDecades.includes(decadeStr)) {
			throw createError({
				statusCode: 400,
				message: 'Invalid decade',
			})
		}
	} else if (yearStr) {
		if (!validYears.includes(yearStr)) {
			throw createError({
				statusCode: 400,
				message: 'Invalid year',
			})
		}
	}

	if (decadeStr) {
		const firstYear = Number(decadeStr.slice(0, decadeStr.length - 1))

		const lastYear = firstYear + 9

		likedFilms = likedFilms.filter(
			film => film.realise_year >= firstYear && film.realise_year <= lastYear
		)
	} else if (yearStr) {
		const year = Number(yearStr)
		likedFilms = likedFilms.filter(film => film.realise_year === year)
	}

	filmsOnPage = paginate(likedFilms, page, perPage)

	totalItems = likedFilms.length

	const totalPages = Math.ceil(totalItems / perPage)

	return {
		data: filmsOnPage,
		totalPages,
	}
})
