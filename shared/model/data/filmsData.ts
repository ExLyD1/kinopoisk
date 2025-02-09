import type { IFilmItem } from '../interfaces/filmInterface'
import { reviewsList } from './reviewsData'

import image1 from '../../ui/icons/filmCovers/filmCover1.jpg'

export const filmsList: Array<IFilmItem> = [
	{
		id: 1,
		film_name: 'The Last Adventure',
		realise_year: 2018,
		film_image: '/filmCovers/filmCover1.jpg',
		author_name: 'Laura Martinez',
		rate: 4.3,
		describtion:
			'The truth behind the legend is more terrifying than anyone expected.',
		cast: ['Actor 83', 'Actor 22'],
		duration: 98,
		views: 1951561,
		list_contains: 992315,
		likes: 103456,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 666,
		reviews: [1, 2, 3, 4, 5],
	},
	{
		id: 2,
		film_name: 'Eternal Night',
		realise_year: 2011,
		film_image: '/filmCovers/filmCover2.jpg',
		author_name: 'Jane Smith',
		rate: 2.7,
		describtion: 'Where time itself becomes the enemy.',
		cast: ['Actor 54', 'Actor 83'],
		duration: 100,
		views: 283523,
		list_contains: 1111,
		likes: 484993,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 4285,
		reviews: [2, 22, 23, 4, 5],
	},
	{
		id: 3,
		film_name: 'The Last Adventure',
		realise_year: 2016,
		film_image: '/filmCovers/filmCover3.jpg',
		author_name: 'James Taylor',
		rate: 3.5,
		describtion: 'Fate intertwined with destiny in a world full of secrets.',
		cast: ['Actor 100', 'Actor 59'],
		duration: 155,
		views: 518162,
		list_contains: 5543,
		likes: 462586,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 3296,
		reviews: [31, 32, 42, 1, 15],
	},
	{
		id: 4,
		film_name: "The Phantom's Lair",
		realise_year: 2002,
		film_image: '/filmCovers/filmCover4.jpg',
		author_name: 'James Taylor',
		rate: 1.3,
		describtion: 'A gripping saga of survival and hope.',
		cast: ['Actor 25', 'Actor 80'],
		duration: 151,
		views: 95991,
		list_contains: 12567,
		likes: 340962,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 4634,
		reviews: [31, 32, 42, 1, 15],
	},
	{
		id: 5,
		film_name: 'Silent Shadows',
		realise_year: 2010,
		film_image: '/filmCovers/filmCover5.jpg',
		author_name: 'James Taylor',
		rate: 4.2,
		describtion: 'The battle between good and evil unfolds.',
		cast: ['Actor 20', 'Actor 32'],
		duration: 131,
		views: 611433,
		list_contains: 96756,
		likes: 112744,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 4792,
		reviews: [31, 32, 42, 1, 15],
	},
	{
		id: 6,
		film_name: 'Edge of Tomorrow',
		realise_year: 2000,
		film_image: '/filmCovers/filmCover6.jpg',
		author_name: 'Emily White',
		rate: 5,
		describtion: 'Fate intertwined with destiny in a world full of secrets.',
		cast: ['Actor 1', 'Actor 2'],
		duration: 126,
		views: 636470,
		list_contains: 56,
		likes: 402706,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 2906,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 7,
		film_name: 'The Dark Legacy',
		realise_year: 2009,
		film_image: '/filmCovers/filmCover7.jpg',
		author_name: 'Michael Brown',
		rate: 0,
		describtion: 'An unforgettable journey into the unknown.',
		cast: ['Actor 8', 'Actor 35'],
		duration: 91,
		views: 568195,
		list_contains: 75,
		likes: 482098,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 4866,
		reviews: [11, 12, 13, 14, 6],
	},
	{
		id: 8,
		film_name: 'The Last Adventure',
		realise_year: 2011,
		film_image: '/filmCovers/filmCover8.jpg',
		author_name: 'Laura Martinez',
		rate: 2,
		describtion: 'Where time itself becomes the enemy.',
		cast: ['Actor 64', 'Actor 1'],
		duration: 122,
		views: 479342,
		list_contains: 0,
		likes: 23535,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 3412,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 9,
		film_name: 'Heroes Among Us',
		realise_year: 2016,
		film_image: '/filmCovers/filmCover9.jpg',
		author_name: 'Sophia Wilson',
		rate: 1.2,
		describtion: 'An unforgettable journey into the unknown.',
		cast: ['Actor 4', 'Actor 16'],
		duration: 177,
		views: 972103,
		list_contains: 0,
		likes: 33300,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 1169,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 10,
		film_name: 'Silent Shadows',
		realise_year: 2015,
		film_image: '/filmCovers/filmCover10.jpg',
		author_name: 'David Lee',
		rate: 4.8,
		describtion: 'A gripping saga of survival and hope.',
		cast: ['Actor 21', 'Actor 82'],
		duration: 153,
		views: 620045,
		list_contains: 0,
		likes: 414588,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 111,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 11,
		film_name: 'The Last Adventure',
		realise_year: 2006,
		film_image: '/filmCovers/filmCover11.jpg',
		author_name: 'John Doe',
		rate: 4.1,
		describtion: 'Where time itself becomes the enemy.',
		cast: ['Actor 9', 'Actor 93'],
		duration: 130,
		views: 830689,
		list_contains: 0,
		likes: 311629,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 4545,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 12,
		film_name: 'Shattered Dreams',
		realise_year: 2010,
		film_image: '/filmCovers/filmCover12.jpg',
		author_name: 'Michael Brown',
		rate: 3.3,
		describtion:
			'The truth behind the legend is more terrifying than anyone expected.',
		cast: ['Actor 75', 'Actor 58'],
		duration: 154,
		views: 803753,
		list_contains: 1,
		likes: 251639,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 3775,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 13,
		film_name: 'Heroes Among Us',
		realise_year: 2003,
		film_image: '/filmCovers/filmCover13.jpg',
		author_name: 'David Lee',
		rate: 3.3,
		describtion: 'Fate intertwined with destiny in a world full of secrets.',
		cast: ['Actor 85', 'Actor 40'],
		duration: 179,
		views: 990879,
		list_contains: 1,
		likes: 175978,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 3406,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 14,
		film_name: 'Heroes Among Us',
		realise_year: 2021,
		film_image: '/filmCovers/filmCover14.jpg',
		author_name: 'Sophia Wilson',
		rate: 2.7,
		describtion:
			'The truth behind the legend is more terrifying than anyone expected.',
		cast: ['Actor 19', 'Actor 2'],
		duration: 130,
		views: 297057,
		list_contains: 1,
		likes: 37125,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 463,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 15,
		film_name: 'Beyond the Stars',
		realise_year: 2001,
		film_image: '/filmCovers/filmCover15.jpg',
		author_name: 'Sophia Wilson',
		rate: 1.3,
		describtion: 'Fate intertwined with destiny in a world full of secrets.',
		cast: ['Actor 39', 'Actor 75'],
		duration: 117,
		views: 998649,
		list_contains: 0,
		likes: 234424,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 2144,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 16,
		film_name: 'The Last Adventure',
		realise_year: 2016,
		film_image: '/filmCovers/filmCover16.jpg',
		author_name: 'Emily White',
		rate: 3.5,
		describtion: 'Fate intertwined with destiny in a world full of secrets.',
		cast: ['Actor 28', 'Actor 53'],
		duration: 165,
		views: 870082,
		list_contains: 0,
		likes: 357092,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 1964,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 17,
		film_name: 'Edge of Tomorrow',
		realise_year: 2008,
		film_image: '/filmCovers/filmCover17.jpg',
		author_name: 'Ethan Clark',
		rate: 3,
		describtion: 'A hero’s journey filled with challenges.',
		cast: ['Actor 69', 'Actor 100'],
		duration: 149,
		views: 984323,
		list_contains: 1,
		likes: 122222,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 4038,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 18,
		film_name: 'Lost in Time',
		realise_year: 2005,
		film_image: '/filmCovers/filmCover18.jpg',
		author_name: 'James Taylor',
		rate: 2,
		describtion:
			'The truth behind the legend is more terrifying than anyone expected.',
		cast: ['Actor 79', 'Actor 41'],
		duration: 110,
		views: 329600,
		list_contains: 1,
		likes: 410144,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 2016,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 19,
		film_name: 'Shattered Dreams',
		realise_year: 2009,
		film_image: '/filmCovers/filmCover19.jpg',
		author_name: 'Jane Smith',
		rate: 1,
		describtion: 'Fate intertwined with destiny in a world full of secrets.',
		cast: ['Actor 18', 'Actor 65'],
		duration: 94,
		views: 390989,
		list_contains: 1,
		likes: 138585,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 3784,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 20,
		film_name: 'Shattered Dreams',
		realise_year: 2006,
		film_image: '/filmCovers/filmCover20.jpg',
		author_name: 'Jane Smith',
		rate: 3.9,
		describtion: 'A tale of love, betrayal, and revenge.',
		cast: ['Actor 29', 'Actor 31'],
		duration: 108,
		views: 794243,
		list_contains: 1,
		likes: 12790,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 3840,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 21,
		film_name: 'Shattered Dreams',
		realise_year: 2008,
		film_image: '/filmCovers/filmCover21.jpg',
		author_name: 'Sophia Wilson',
		rate: 2.5,
		describtion: 'Fate intertwined with destiny in a world full of secrets.',
		cast: ['Actor 10', 'Actor 32'],
		duration: 153,
		views: 751331,
		list_contains: 1,
		likes: 428042,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 3744,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 22,
		film_name: 'Edge of Tomorrow',
		realise_year: 2011,
		film_image: '/filmCovers/filmCover22.jpg',
		author_name: 'Emily White',
		rate: 4.8,
		describtion:
			'The truth behind the legend is more terrifying than anyone expected.',
		cast: ['Actor 20', 'Actor 19'],
		duration: 151,
		views: 456510,
		list_contains: 0,
		likes: 33601,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 1282,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 23,
		film_name: 'Lost in Time',
		realise_year: 2008,
		film_image: '/filmCovers/filmCover23.jpg',
		author_name: 'John Doe',
		rate: 4.6,
		describtion:
			'The truth behind the legend is more terrifying than anyone expected.',
		cast: ['Actor 40', 'Actor 99'],
		duration: 170,
		views: 19289,
		list_contains: 1,
		likes: 242421,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 1462,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 24,
		film_name: 'Shattered Dreams',
		realise_year: 2007,
		film_image: '/filmCovers/filmCover24.jpg',
		author_name: 'Jane Smith',
		rate: 3.0,
		describtion: 'An unforgettable journey into the unknown.',
		cast: ['Actor 39', 'Actor 61'],
		duration: 130,
		views: 193010,
		list_contains: 0,
		likes: 304342,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 749,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 25,
		film_name: 'Heroes Among Us',
		realise_year: 2001,
		film_image: '/filmCovers/filmCover25.jpg',
		author_name: 'Sophia Wilson',
		rate: 2.3,
		describtion: 'An unforgettable journey into the unknown.',
		cast: ['Actor 26', 'Actor 68'],
		duration: 149,
		views: 653096,
		list_contains: 1,
		likes: 9123,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 3860,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 26,
		film_name: 'The Dark Legacy',
		realise_year: 2011,
		film_image: '/filmCovers/filmCover26.jpg',
		author_name: 'Emily White',
		rate: 1.6,
		describtion: 'A gripping saga of survival and hope.',
		cast: ['Actor 79', 'Actor 57'],
		duration: 174,
		views: 623536,
		list_contains: 1,
		likes: 65247,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 4134,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 27,
		film_name: 'Silent Shadows',
		realise_year: 2006,
		film_image: '/filmCovers/filmCover27.jpg',
		author_name: 'Emily White',
		rate: 4.9,
		describtion:
			'The truth behind the legend is more terrifying than anyone expected.',
		cast: ['Actor 30', 'Actor 2'],
		duration: 131,
		views: 601469,
		list_contains: 0,
		likes: 390143,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 1013,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 28,
		film_name: 'Shattered Dreams',
		realise_year: 2016,
		film_image: '/filmCovers/filmCover28.jpg',
		author_name: 'James Taylor',
		rate: 2.6,
		describtion: 'A hero’s journey filled with challenges.',
		cast: ['Actor 4', 'Actor 92'],
		duration: 170,
		views: 419460,
		list_contains: 0,
		likes: 253681,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 1094,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 29,
		film_name: 'Heroes Among Us',
		realise_year: 2016,
		film_image: '/filmCovers/filmCover29.jpg',
		author_name: 'James Taylor',
		rate: 2.8,
		describtion: 'Fate intertwined with destiny in a world full of secrets.',
		cast: ['Actor 58', 'Actor 39'],
		duration: 142,
		views: 743656,
		list_contains: 1,
		likes: 491196,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 3959,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 30,
		film_name: 'Lost in Time',
		realise_year: 2007,
		film_image: '/filmCovers/filmCover30.jpg',
		author_name: 'Jane Smith',
		rate: 2.2,
		describtion: 'Fate intertwined with destiny in a world full of secrets.',
		cast: ['Actor 40', 'Actor 83'],
		duration: 164,
		views: 175398,
		list_contains: 0,
		likes: 29497,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 700,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 31,
		film_name: 'The Dark Legacy',
		realise_year: 2019,
		film_image: '/filmCovers/filmCover31.jpg',
		author_name: 'Ethan Clark',
		rate: 3,
		describtion: 'Fate intertwined with destiny in a world full of secrets.',
		cast: ['Actor 46', 'Actor 1'],
		duration: 140,
		views: 533500,
		list_contains: 1,
		likes: 398697,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 1602,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 32,
		film_name: "The Phantom's Lair",
		realise_year: 2018,
		film_image: '/filmCovers/filmCover32.jpg',
		author_name: 'Sophia Wilson',
		rate: 2.7,
		describtion: 'Mystery and adventure in a world on the brink of collapse.',
		cast: ['Actor 98', 'Actor 51'],
		duration: 180,
		views: 111133,
		list_contains: 0,
		likes: 79803,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 2370,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 33,
		film_name: 'Silent Shadows',
		realise_year: 2016,
		film_image: '/filmCovers/filmCover33.jpg',
		author_name: 'James Taylor',
		rate: 4.3,
		describtion: 'A hero’s journey filled with challenges.',
		cast: ['Actor 87', 'Actor 85'],
		duration: 157,
		views: 983431,
		list_contains: 1,
		likes: 307758,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 3633,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 34,
		film_name: 'Silent Shadows',
		realise_year: 2023,
		film_image: '/filmCovers/filmCover34.jpg',
		author_name: 'Sarah Johnson',
		rate: 4.9,
		describtion: 'A gripping saga of survival and hope.',
		cast: ['Actor 24', 'Actor 35'],
		duration: 125,
		views: 715413,
		list_contains: 0,
		likes: 268197,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 2701,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 35,
		film_name: 'Shattered Dreams',
		realise_year: 2012,
		film_image: '/filmCovers/filmCover35.jpg',
		author_name: 'David Lee',
		rate: 1.5,
		describtion: 'A tale of love, betrayal, and revenge.',
		cast: ['Actor 74', 'Actor 20'],
		duration: 162,
		views: 963055,
		list_contains: 1,
		likes: 481510,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 2041,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 36,
		film_name: 'Shattered Dreams',
		realise_year: 2006,
		film_image: '/filmCovers/filmCover36.jpg',
		author_name: 'Sarah Johnson',
		rate: 4.4,
		describtion: 'Fate intertwined with destiny in a world full of secrets.',
		cast: ['Actor 29', 'Actor 7'],
		duration: 160,
		views: 160408,
		list_contains: 1,
		likes: 386304,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 3497,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 37,
		film_name: 'Silent Shadows',
		realise_year: 2011,
		film_image: '/filmCovers/filmCover37.jpg',
		author_name: 'Sarah Johnson',
		rate: 1.1,
		describtion: 'A gripping saga of survival and hope.',
		cast: ['Actor 74', 'Actor 67'],
		duration: 176,
		views: 118597,
		list_contains: 0,
		likes: 421656,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 3658,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 38,
		film_name: 'Lost in Time',
		realise_year: 2012,
		film_image: '/filmCovers/filmCover38.jpg',
		author_name: 'Sophia Wilson',
		rate: 1.3,
		describtion:
			'The truth behind the legend is more terrifying than anyone expected.',
		cast: ['Actor 12', 'Actor 100'],
		duration: 106,
		views: 732856,
		list_contains: 1,
		likes: 178665,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 2138,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 39,
		film_name: 'Edge of Tomorrow',
		realise_year: 2012,
		film_image: '/filmCovers/filmCover39.jpg',
		author_name: 'Emily White',
		rate: 2.2,
		describtion: 'A gripping saga of survival and hope.',
		cast: ['Actor 54', 'Actor 11'],
		duration: 155,
		views: 821123,
		list_contains: 0,
		likes: 401465,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 1724,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 40,
		film_name: 'Edge of Tomorrow',
		realise_year: 2002,
		film_image: '/filmCovers/filmCover40.jpg',
		author_name: 'James Taylor',
		rate: 2.1,
		describtion: 'A tale of love, betrayal, and revenge.',
		cast: ['Actor 81', 'Actor 4'],
		duration: 158,
		views: 77518,
		list_contains: 0,
		likes: 150984,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 4546,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 41,
		film_name: 'Silent Shadows',
		realise_year: 2007,
		film_image: '/filmCovers/filmCover41.jpg',
		author_name: 'Ethan Clark',
		rate: 4.5,
		describtion: 'Where time itself becomes the enemy.',
		cast: ['Actor 91', 'Actor 49'],
		duration: 152,
		views: 781130,
		list_contains: 0,
		likes: 377294,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 3912,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 42,
		film_name: 'Shattered Dreams',
		realise_year: 2005,
		film_image: '/filmCovers/filmCover42.jpg',
		author_name: 'Ethan Clark',
		rate: 2.3,
		describtion: 'The battle between good and evil unfolds.',
		cast: ['Actor 45', 'Actor 83'],
		duration: 108,
		views: 514282,
		list_contains: 1,
		likes: 76442,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 2916,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 43,
		film_name: 'Silent Shadows',
		realise_year: 2005,
		film_image: '/filmCovers/filmCover43.jpg',
		author_name: 'Jane Smith',
		rate: 0,
		describtion: 'A gripping saga of survival and hope.',
		cast: ['Actor 12', 'Actor 99'],
		duration: 143,
		views: 862779,
		list_contains: 1,
		likes: 403652,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 4634,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 44,
		film_name: 'Edge of Tomorrow',
		realise_year: 2009,
		film_image: '/filmCovers/filmCover44.jpg',
		author_name: 'Sophia Wilson',
		rate: 2,
		describtion: 'A hero’s journey filled with challenges.',
		cast: ['Actor 29', 'Actor 81'],
		duration: 114,
		views: 431601,
		list_contains: 1,
		likes: 431450,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 4861,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 45,
		film_name: 'Heroes Among Us',
		realise_year: 2023,
		film_image: '/filmCovers/filmCover45.jpg',
		author_name: 'Emily White',
		rate: 2.9,
		describtion: 'An unforgettable journey into the unknown.',
		cast: ['Actor 83', 'Actor 49'],
		duration: 92,
		views: 250401,
		list_contains: 0,
		likes: 387539,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 2271,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 46,
		film_name: 'Shadow of the Past',
		realise_year: 2021,
		film_image: '/filmCovers/filmCover12.jpg',
		author_name: 'James Monroe',
		rate: 4.5,
		describtion: 'A thrilling mystery that keeps you on edge.',
		cast: ['Actor 12', 'Actor 87'],
		duration: 105,
		views: 345678,
		list_contains: 1,
		likes: 502345,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 1894,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 47,
		film_name: 'Rise of the Titans',
		realise_year: 2022,
		film_image: '/filmCovers/filmCover27.jpg',
		author_name: 'Sophia Carter',
		rate: 3.8,
		describtion: 'Epic battles and legendary heroes in a grand saga.',
		cast: ['Actor 34', 'Actor 98'],
		duration: 130,
		views: 452390,
		list_contains: 0,
		likes: 612834,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 3120,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 48,
		film_name: 'Echoes of Time',
		realise_year: 2020,
		film_image: '/filmCovers/filmCover39.jpg',
		author_name: 'Daniel Evans',
		rate: 4.7,
		describtion: 'A time-travel adventure full of surprises.',
		cast: ['Actor 21', 'Actor 56'],
		duration: 118,
		views: 578203,
		list_contains: 1,
		likes: 723456,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 2745,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 49,
		film_name: 'Neon City',
		realise_year: 2023,
		film_image: '/filmCovers/filmCover52.jpg',
		author_name: 'Olivia Bennett',
		rate: 3.2,
		describtion: 'A cyberpunk adventure in a futuristic metropolis.',
		cast: ['Actor 67', 'Actor 42'],
		duration: 110,
		views: 399230,
		list_contains: 0,
		likes: 523490,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 2483,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 50,
		film_name: 'Frozen Echo',
		realise_year: 2019,
		film_image: '/filmCovers/filmCover11.jpg',
		author_name: 'Michael Frost',
		rate: 4.1,
		describtion: 'A chilling tale of survival in the arctic wilderness.',
		cast: ['Actor 9', 'Actor 78'],
		duration: 98,
		views: 267890,
		list_contains: 1,
		likes: 435678,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 1876,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 51,
		film_name: 'The Last Horizon',
		realise_year: 2024,
		film_image: '/filmCovers/filmCover65.jpg',
		author_name: 'Lily Anderson',
		rate: 3.9,
		describtion: 'A gripping sci-fi thriller beyond the stars.',
		cast: ['Actor 31', 'Actor 89'],
		duration: 115,
		views: 520345,
		list_contains: 0,
		likes: 643210,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 2893,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 52,
		film_name: 'Crimson Skies',
		realise_year: 2022,
		film_image: '/filmCovers/filmCover33.jpg',
		author_name: 'Henry Wallace',
		rate: 4.6,
		describtion: 'High-flying adventure and breathtaking aerial battles.',
		cast: ['Actor 14', 'Actor 65'],
		duration: 125,
		views: 410298,
		list_contains: 1,
		likes: 589731,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 2671,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 53,
		film_name: 'Secrets of the Deep',
		realise_year: 2021,
		film_image: '/filmCovers/filmCover77.jpg',
		author_name: 'Alice Porter',
		rate: 4.3,
		describtion: 'An oceanic expedition full of wonders and dangers.',
		cast: ['Actor 55', 'Actor 77'],
		duration: 102,
		views: 372890,
		list_contains: 0,
		likes: 531890,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 2110,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 54,
		film_name: 'The Silent Forest',
		realise_year: 2020,
		film_image: '/filmCovers/filmCover89.jpg',
		author_name: 'Nathan Reynolds',
		rate: 3.7,
		describtion: 'A mysterious horror set in an abandoned forest.',
		cast: ['Actor 44', 'Actor 71'],
		duration: 112,
		views: 298670,
		list_contains: 1,
		likes: 478910,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 1958,
		reviews: [31, 32, 33, 44, 1],
	},
	{
		id: 55,
		film_name: 'Golden Hour',
		realise_year: 2018,
		film_image: '/filmCovers/filmCover98.jpg',
		author_name: 'Emma Lawrence',
		rate: 4.8,
		describtion: 'A heartwarming story of love and self-discovery.',
		cast: ['Actor 32', 'Actor 69'],
		duration: 120,
		views: 601234,
		list_contains: 0,
		likes: 759321,
		liked_by_users: [1, 2, 3, 4, 5],
		reviews_quontity: 3124,
		reviews: [31, 32, 33, 44, 1],
	},
]
