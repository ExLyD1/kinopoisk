import type { IUser } from '../interfaces/userInterface'
import type { IFilmItem } from '../interfaces/filmInterface'

import { filmsListsData } from './filmsListsData'
import { filmsList } from './filmsData'

export const usersList: Array<IUser> = [
	{
		id: 1,
		user_avatar: '/avatars/avatar10.jpg',
		user_name: 'James Cameron',

		user_lists_quantity: 7,
		user_following_quantity: 33,
		user_followers_quantity: 13,

		user_reviews_quantity: 23567,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 34565,
		user_bio: 'Living life one movie at a time.',
		user_lists: [1],
		user_favorite_films_quantity: 1235,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 2,
		user_avatar: '/avatars/avatar12.jpg',
		user_name: 'Emma Stone',

		user_lists_quantity: 1,
		user_following_quantity: 15,
		user_followers_quantity: 64,

		user_reviews_quantity: 5530,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 3530,
		user_bio: 'Film critic with an eye for detail.',
		user_lists: [2],
		user_favorite_films_quantity: 6775,
		user_favorite_films: [
			17, 19, 22, 15, 20, 25, 30, 35, 40, 45, 2, 6, 11, 16, 21, 26, 31, 36, 41,
			46, 3, 7, 12, 17, 22, 27, 32, 37, 42, 47, 4, 8, 13, 18, 23, 28, 33, 38,
			43, 48, 9, 14, 19, 24, 29, 34, 39, 44, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 3,
		user_avatar: '/avatars/avatar1.jpg',
		user_name: 'Sophia Loren',

		user_lists_quantity: 3,
		user_following_quantity: 77,
		user_followers_quantity: 135,

		user_reviews_quantity: 2667677,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 1122,
		user_bio: 'A passionate movie lover and a film critic.',
		user_lists: [3],
		user_favorite_films_quantity: 5568,
		user_favorite_films: [
			12, 24, 36, 48, 6, 18, 30, 42, 2, 14, 26, 38, 50, 8, 20, 32, 44, 4, 16,
			28, 40, 9, 21, 33, 45, 1, 13, 25, 37, 49, 7, 19, 31, 43, 5, 17, 29, 41, 3,
			15, 27, 39, 11, 23, 35, 47, 10, 22, 34, 46,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 4,
		user_avatar: '/avatars/avatar4.jpg',
		user_name: 'Olivia Wilde',

		user_lists_quantity: 10,
		user_following_quantity: 23,
		user_followers_quantity: 174,

		user_reviews_quantity: 3852,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 5685684,
		user_bio: 'Film enthusiast with a special interest in sci-fi.',
		user_lists: [4],
		user_favorite_films_quantity: 9995,
		user_favorite_films: [],

		user_films: [
			2, 22, 14, 35, 48, 2, 30, 44, 6, 18, 26, 8, 50, 38, 20, 32, 4, 16, 40, 28,
			9, 21, 45, 1, 13, 25, 37, 49, 7, 19, 31, 43, 5, 17, 29, 41, 3, 15, 27, 39,
			11, 23, 34, 46, 12, 24, 36, 47, 10, 42, 33,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 5,
		user_avatar: '/avatars/avatar8.jpg',
		user_name: 'Emma Stone',

		user_lists_quantity: 3,
		user_following_quantity: 25,
		user_followers_quantity: 25,

		user_reviews_quantity: 536,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 8827,
		user_bio: 'Lover of everything cinematic.',
		user_lists: [5],
		user_favorite_films_quantity: 3455,
		user_favorite_films: [],

		user_films: [
			2, 5, 12, 27, 45, 22, 34, 19, 46, 6, 37, 3, 9, 25, 50, 31, 15, 41, 18, 44,
			14, 26, 42, 1, 33, 11, 48, 39, 23, 7, 21, 32, 17, 38, 8, 4, 36, 30, 24,
			29, 2, 13, 10, 20, 28, 16, 40, 49, 35, 43, 47,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 6,
		user_avatar: '/avatars/avatar1.jpg',
		user_name: 'James Cameron',

		user_lists_quantity: 2,
		user_following_quantity: 76,
		user_followers_quantity: 197,

		user_reviews_quantity: 22,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 5,
		user_bio: 'A movie a day keeps the boredom away.',
		user_lists: [6],
		user_favorite_films_quantity: 35,
		user_favorite_films: [],

		user_films: [
			2, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33,
			32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15,
			14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 7,
		user_avatar: '/avatars/avatar3.jpg',
		user_name: 'Michael Bay',

		user_lists_quantity: 2,
		user_following_quantity: 24,
		user_followers_quantity: 118,

		user_reviews_quantity: 20,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 31,
		user_bio: 'A passionate movie lover and a film critic.',
		user_lists: [7],
		user_favorite_films_quantity: 5234234,
		user_favorite_films: [
			5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 1, 6, 11, 16, 21, 26, 31, 36, 41,
			46, 2, 7, 12, 17, 22, 27, 32, 37, 42, 47, 3, 8, 13, 18, 23, 28, 33, 38,
			43, 48, 4, 9, 14, 19, 24, 29, 34, 39, 44, 49,
		],

		user_films: [
			2, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 1, 6, 11, 16, 21, 26, 31, 36,
			41, 46, 2, 7, 12, 17, 22, 27, 32, 37, 42, 47, 3, 8, 13, 18, 23, 28, 33,
			38, 43, 48, 4, 9, 14, 19, 24, 29, 34, 39, 44, 49,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 8,
		user_avatar: '/avatars/avatar2.jpg',
		user_name: 'Christopher Nolan',

		user_lists_quantity: 9,
		user_following_quantity: 32,
		user_followers_quantity: 30,

		user_reviews_quantity: 16,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 57,
		user_bio: 'Just another movie buff trying to find the best films.',
		user_lists: [8],
		user_favorite_films_quantity: 2345,
		user_favorite_films: [
			50, 5, 25, 10, 30, 15, 40, 20, 35, 45, 1, 6, 26, 21, 16, 46, 31, 36, 41,
			47, 2, 7, 22, 12, 17, 37, 32, 27, 42, 3, 8, 48, 23, 13, 18, 28, 33, 38,
			43, 9, 4, 49, 44, 14, 19, 24, 29, 34, 39, 11,
		],

		user_films: [
			2, 48, 36, 24, 12, 50, 38, 26, 14, 2, 44, 32, 20, 8, 46, 34, 22, 10, 4,
			16, 28, 40, 9, 21, 33, 45, 1, 13, 25, 37, 49, 7, 19, 31, 43, 5, 17, 29,
			41, 3, 15, 27, 39, 11, 23, 35, 47, 10, 22, 34, 42,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 9,
		user_avatar: '/avatars/avatar4.jpg',
		user_name: 'Lily Walker',

		user_lists_quantity: 3,
		user_following_quantity: 25,
		user_followers_quantity: 10,

		user_reviews_quantity: 11,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 59,
		user_bio: 'Living life one movie at a time.',
		user_lists: [9],
		user_favorite_films_quantity: 4235,
		user_favorite_films: [
			5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 1, 6, 11, 16, 21, 26, 31, 36, 41,
			46, 2, 7, 12, 17, 22, 27, 32, 37, 42, 47, 3, 8, 13, 18, 23, 28, 33, 38,
			43, 48, 4, 9, 14, 19, 24, 29, 34, 39, 44, 49,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 10,
		user_avatar: '/avatars/avatar2.jpg',
		user_name: 'Chloe Grace Moretz',

		user_lists_quantity: 9,
		user_following_quantity: 32,
		user_followers_quantity: 124,

		user_reviews_quantity: 30,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 87,
		user_bio: 'Film fan, writer, and aspiring director.',
		user_lists: [10],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 11,
		user_avatar: '/avatars/avatar1.jpg',
		user_name: 'Isabella Thomas',

		user_lists_quantity: 7,
		user_following_quantity: 13,
		user_followers_quantity: 82,

		user_reviews_quantity: 35,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 85,
		user_bio: "If you want movie recommendations, I'm your person!",
		user_lists: [11],
		user_favorite_films_quantity: 12345,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 12,
		user_avatar: '/avatars/avatar11.jpg',
		user_name: 'Olivia Wilde',

		user_lists_quantity: 2,
		user_following_quantity: 24,
		user_followers_quantity: 187,

		user_reviews_quantity: 31,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 96,
		user_bio: "If you want movie recommendations, I'm your person!",
		user_lists: [12],
		user_favorite_films_quantity: 3125,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 13,
		user_avatar: '/avatars/avatar2.jpg',
		user_name: 'Daniel Craig',

		user_lists_quantity: 5,
		user_following_quantity: 50,
		user_followers_quantity: 179,

		user_reviews_quantity: 5,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 53,
		user_bio: 'Fan of both classic films and modern blockbusters.',
		user_lists: [13],
		user_favorite_films_quantity: 35,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 14,
		user_avatar: '/avatars/avatar12.jpg',
		user_name: 'John Doe',

		user_lists_quantity: 1,
		user_following_quantity: 86,
		user_followers_quantity: 4,

		user_reviews_quantity: 37,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 31,
		user_bio: 'Exploring new movies every day, sharing reviews.',
		user_lists: [14],
		user_favorite_films_quantity: 3555,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 15,
		user_avatar: '/avatars/avatar11.jpg',
		user_name: 'Lily Walker',

		user_lists_quantity: 7,
		user_following_quantity: 78,
		user_followers_quantity: 10,

		user_reviews_quantity: 0,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 92,
		user_bio: 'A passionate movie lover and a film critic.',
		user_lists: [15],
		user_favorite_films_quantity: 52355,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 16,
		user_avatar: '/avatars/avatar10.jpg',
		user_name: 'Jane Smith',

		user_lists_quantity: 8,
		user_following_quantity: 5,
		user_followers_quantity: 152,

		user_reviews_quantity: 0,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 72,
		user_bio: "If you want movie recommendations, I'm your person!",
		user_lists: [16],
		user_favorite_films_quantity: 7895,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 17,
		user_avatar: '/avatars/avatar4.jpg',
		user_name: 'Lily Walker',

		user_lists_quantity: 10,
		user_following_quantity: 92,
		user_followers_quantity: 177,

		user_reviews_quantity: 47,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 15,
		user_bio: "If you want movie recommendations, I'm your person!",
		user_lists: [17],
		user_favorite_films_quantity: 6795,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 18,
		user_avatar: '/avatars/avatar5.jpg',
		user_name: 'Madison Lee',

		user_lists_quantity: 3,
		user_following_quantity: 63,
		user_followers_quantity: 175,

		user_reviews_quantity: 17,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 47,
		user_bio: "If you want movie recommendations, I'm your person!",
		user_lists: [18],
		user_favorite_films_quantity: 10105,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 19,
		user_avatar: '/avatars/avatar13.jpg',
		user_name: 'David Wilson',

		user_lists_quantity: 2,
		user_following_quantity: 98,
		user_followers_quantity: 156,

		user_reviews_quantity: 37,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 83,
		user_bio: 'A passionate movie lover and a film critic.',
		user_lists: [19],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 20,
		user_avatar: '/avatars/avatar15.jpg',
		user_name: 'Chloe Grace Moretz',

		user_lists_quantity: 6,
		user_following_quantity: 76,
		user_followers_quantity: 146,

		user_reviews_quantity: 32,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 45,
		user_bio: 'Exploring new movies every day, sharing reviews.',
		user_lists: [20],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 21,
		user_avatar: '/avatars/avatar5.jpg',
		user_name: 'David Wilson',

		user_lists_quantity: 2,
		user_following_quantity: 95,
		user_followers_quantity: 115,

		user_reviews_quantity: 17,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 70,
		user_bio: 'Lover of everything cinematic.',
		user_lists: [21],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 22,
		user_avatar: '/avatars/avatar8.jpg',
		user_name: 'Lucas Adams',

		user_lists_quantity: 2,
		user_following_quantity: 73,
		user_followers_quantity: 142,

		user_reviews_quantity: 38,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 3,
		user_bio: 'Film enthusiast with a special interest in sci-fi.',
		user_lists: [22],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 23,
		user_avatar: '/avatars/avatar2.jpg',
		user_name: 'Daniel Young',

		user_lists_quantity: 5,
		user_following_quantity: 56,
		user_followers_quantity: 49,

		user_reviews_quantity: 21,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 82,
		user_bio: 'Exploring new movies every day, sharing reviews.',
		user_lists: [23],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 24,
		user_avatar: '/avatars/avatar3.jpg',
		user_name: 'Michael Bay',

		user_lists_quantity: 2,
		user_following_quantity: 17,
		user_followers_quantity: 83,

		user_reviews_quantity: 3,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 11,
		user_bio: 'Movie lover with an ever-growing watchlist.',
		user_lists: [24],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 25,
		user_avatar: '/avatars/avatar7.jpg',
		user_name: 'Jane Smith',

		user_lists_quantity: 4,
		user_following_quantity: 98,
		user_followers_quantity: 31,

		user_reviews_quantity: 22,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 79,
		user_bio: 'Movie lover with an ever-growing watchlist.',
		user_lists: [25],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 26,
		user_avatar: '/avatars/avatar4.jpg',
		user_name: 'Charlie Davis',

		user_lists_quantity: 5,
		user_following_quantity: 46,
		user_followers_quantity: 91,

		user_reviews_quantity: 19,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 18,
		user_bio: 'Fan of both classic films and modern blockbusters.',
		user_lists: [26],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 27,
		user_avatar: '/avatars/avatar3.jpg',
		user_name: 'John Doe',

		user_lists_quantity: 7,
		user_following_quantity: 10,
		user_followers_quantity: 157,

		user_reviews_quantity: 44,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 31,
		user_bio: 'Film critic with an eye for detail.',
		user_lists: [27],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 28,
		user_avatar: '/avatars/avatar4.jpg',
		user_name: 'Bob Brown',

		user_lists_quantity: 3,
		user_following_quantity: 14,
		user_followers_quantity: 101,

		user_reviews_quantity: 0,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 25,
		user_bio: 'Just another movie buff trying to find the best films.',
		user_lists: [28],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 29,
		user_avatar: '/avatars/avatar6.jpg',
		user_name: 'David Wilson',

		user_lists_quantity: 2,
		user_following_quantity: 17,
		user_followers_quantity: 153,

		user_reviews_quantity: 5,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 8,
		user_bio: 'Discovering the hidden gems of cinema.',
		user_lists: [29],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 30,
		user_avatar: '/avatars/avatar7.jpg',
		user_name: 'Sophia Clark',

		user_lists_quantity: 2,
		user_following_quantity: 73,
		user_followers_quantity: 30,

		user_reviews_quantity: 22,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 93,
		user_bio: 'Living life one movie at a time.',
		user_lists: [30],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 31,
		user_avatar: '/avatars/avatar5.jpg',
		user_name: 'Jane Smith',

		user_lists_quantity: 5,
		user_following_quantity: 47,
		user_followers_quantity: 9,

		user_reviews_quantity: 43,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 50,
		user_bio: 'Discovering the hidden gems of cinema.',
		user_lists: [31],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 32,
		user_avatar: '/avatars/avatar12.jpg',
		user_name: 'Emily Taylor',

		user_lists_quantity: 5,
		user_following_quantity: 32,
		user_followers_quantity: 97,

		user_reviews_quantity: 15,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 99,
		user_bio: 'Film enthusiast with a special interest in sci-fi.',
		user_lists: [32],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 33,
		user_avatar: '/avatars/avatar11.jpg',
		user_name: 'Madison Lee',

		user_lists_quantity: 6,
		user_following_quantity: 0,
		user_followers_quantity: 58,

		user_reviews_quantity: 18,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 30,
		user_bio: 'Just another movie buff trying to find the best films.',
		user_lists: [33],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 34,
		user_avatar: '/avatars/avatar7.jpg',
		user_name: 'Sophia Loren',

		user_lists_quantity: 9,
		user_following_quantity: 63,
		user_followers_quantity: 21,

		user_reviews_quantity: 25,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 30,
		user_bio: 'A movie a day keeps the boredom away.',
		user_lists: [34],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 35,
		user_avatar: '/avatars/avatar8.jpg',
		user_name: 'Alice Johnson',

		user_lists_quantity: 3,
		user_following_quantity: 26,
		user_followers_quantity: 85,

		user_reviews_quantity: 43,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 24,
		user_bio: "Movies are more than just entertainment, they're art.",
		user_lists: [35],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 36,
		user_avatar: '/avatars/avatar6.jpg',
		user_name: 'David Wilson',

		user_lists_quantity: 2,
		user_following_quantity: 74,
		user_followers_quantity: 87,

		user_reviews_quantity: 2,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 98,
		user_bio: 'Discovering the hidden gems of cinema.',
		user_lists: [36],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 37,
		user_avatar: '/avatars/avatar8.jpg',
		user_name: 'Daniel Young',

		user_lists_quantity: 1,
		user_following_quantity: 48,
		user_followers_quantity: 31,

		user_reviews_quantity: 14,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 14,
		user_bio: 'Film critic with an eye for detail.',
		user_lists: [37],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 38,
		user_avatar: '/avatars/avatar12.jpg',
		user_name: 'Daniel Craig',

		user_lists_quantity: 5,
		user_following_quantity: 33,
		user_followers_quantity: 197,

		user_reviews_quantity: 14,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 39,
		user_bio: 'Movie lover with an ever-growing watchlist.',
		user_lists: [38],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 39,
		user_avatar: '/avatars/avatar11.jpg',
		user_name: 'Jane Smith',

		user_lists_quantity: 2,
		user_following_quantity: 32,
		user_followers_quantity: 188,

		user_reviews_quantity: 24,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 35,
		user_bio: 'Living life one movie at a time.',
		user_lists: [39],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 40,
		user_avatar: '/avatars/avatar2.jpg',
		user_name: 'John Doe',

		user_lists_quantity: 3,
		user_following_quantity: 75,
		user_followers_quantity: 131,

		user_reviews_quantity: 49,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 23,
		user_bio: 'A passionate movie lover and a film critic.',
		user_lists: [40],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 41,
		user_avatar: '/avatars/avatar5.jpg',
		user_name: 'Grace Harris',

		user_lists_quantity: 1,
		user_following_quantity: 33,
		user_followers_quantity: 93,

		user_reviews_quantity: 37,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 66,
		user_bio: 'Movie lover with an ever-growing watchlist.',
		user_lists: [41],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 42,
		user_avatar: '/avatars/avatar9.jpg',
		user_name: 'Grace Harris',

		user_lists_quantity: 9,
		user_following_quantity: 24,
		user_followers_quantity: 37,

		user_reviews_quantity: 1,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 70,
		user_bio: 'Lover of everything cinematic.',
		user_lists: [42],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 43,
		user_avatar: '/avatars/avatar14.jpg',
		user_name: 'David Wilson',

		user_lists_quantity: 3,
		user_following_quantity: 67,
		user_followers_quantity: 41,

		user_reviews_quantity: 0,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 84,
		user_bio: "Movies are more than just entertainment, they're art.",
		user_lists: [43],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 44,
		user_avatar: '/avatars/avatar1.jpg',
		user_name: 'Daniel Young',

		user_lists_quantity: 1,
		user_following_quantity: 13,
		user_followers_quantity: 165,

		user_reviews_quantity: 35,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 50,
		user_bio: 'Movie lover with an ever-growing watchlist.',
		user_lists: [44],
		user_favorite_films_quantity: 5,
		user_favorite_films: [1, 2],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 45,
		user_avatar: '/avatars/avatar1.jpg',
		user_name: 'Lily Walker',

		user_lists_quantity: 1,
		user_following_quantity: 13,
		user_followers_quantity: 165,

		user_reviews_quantity: 35,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 50,
		user_bio: 'Film enthusiast with a special interest in sci-fi.',
		user_lists: [49, 50],
		user_favorite_films_quantity: 5,
		user_favorite_films: [1, 2],

		user_films: [2, 7, 47],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [43, 44],
	},
	{
		id: 46,
		user_avatar: '/avatars/avatar8.jpg',
		user_name: 'Alice Johnson',

		user_lists_quantity: 3,
		user_following_quantity: 26,
		user_followers_quantity: 85,

		user_reviews_quantity: 43,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 24,
		user_bio: "Movies are more than just entertainment, they're art.",
		user_lists: [35],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 47,
		user_avatar: '/avatars/avatar6.jpg',
		user_name: 'David Wilson',

		user_lists_quantity: 2,
		user_following_quantity: 74,
		user_followers_quantity: 87,

		user_reviews_quantity: 2,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 98,
		user_bio: 'Discovering the hidden gems of cinema.',
		user_lists: [36],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 48,
		user_avatar: '/avatars/avatar8.jpg',
		user_name: 'Daniel Young',

		user_lists_quantity: 1,
		user_following_quantity: 48,
		user_followers_quantity: 31,

		user_reviews_quantity: 14,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 14,
		user_bio: 'Film critic with an eye for detail.',
		user_lists: [37],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 49,
		user_avatar: '/avatars/avatar12.jpg',
		user_name: 'Daniel Craig',

		user_lists_quantity: 5,
		user_following_quantity: 33,
		user_followers_quantity: 197,

		user_reviews_quantity: 14,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 39,
		user_bio: 'Movie lover with an ever-growing watchlist.',
		user_lists: [38],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 50,
		user_avatar: '/avatars/avatar11.jpg',
		user_name: 'Jane Smith',

		user_lists_quantity: 2,
		user_following_quantity: 32,
		user_followers_quantity: 188,

		user_reviews_quantity: 24,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 35,
		user_bio: 'Living life one movie at a time.',
		user_lists: [39],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 51,
		user_avatar: '/avatars/avatar2.jpg',
		user_name: 'John Doe',

		user_lists_quantity: 3,
		user_following_quantity: 75,
		user_followers_quantity: 131,

		user_reviews_quantity: 49,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 23,
		user_bio: 'A passionate movie lover and a film critic.',
		user_lists: [40],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 52,
		user_avatar: '/avatars/avatar5.jpg',
		user_name: 'Grace Harris',

		user_lists_quantity: 1,
		user_following_quantity: 33,
		user_followers_quantity: 93,

		user_reviews_quantity: 37,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 66,
		user_bio: 'Movie lover with an ever-growing watchlist.',
		user_lists: [41],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 53,
		user_avatar: '/avatars/avatar9.jpg',
		user_name: 'Grace Harris',

		user_lists_quantity: 9,
		user_following_quantity: 24,
		user_followers_quantity: 37,

		user_reviews_quantity: 1,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 70,
		user_bio: 'Lover of everything cinematic.',
		user_lists: [42],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 54,
		user_avatar: '/avatars/avatar14.jpg',
		user_name: 'David Wilson',

		user_lists_quantity: 3,
		user_following_quantity: 67,
		user_followers_quantity: 41,

		user_reviews_quantity: 0,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 84,
		user_bio: "Movies are more than just entertainment, they're art.",
		user_lists: [43],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],

		user_films: [
			1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 55,
		user_avatar: '/avatars/avatar1.jpg',
		user_name: 'Daniel Young',

		user_lists_quantity: 1,
		user_following_quantity: 13,
		user_followers_quantity: 165,

		user_reviews_quantity: 35,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 50,
		user_bio: 'Movie lover with an ever-growing watchlist.',
		user_lists: [44],
		user_favorite_films_quantity: 5,
		user_favorite_films: [1, 2],

		user_films: [
			1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
		],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [1, 2, 3, 4, 5, 6, 7, 45],
	},
	{
		id: 56,
		user_avatar: '/avatars/avatar1.jpg',
		user_name: 'Lily Walker',

		user_lists_quantity: 1,
		user_following_quantity: 13,
		user_followers_quantity: 165,

		user_reviews_quantity: 35,
		user_reviews: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		],

		user_films_quantity: 50,
		user_bio: 'Film enthusiast with a special interest in sci-fi.',
		user_lists: [49, 50],
		user_favorite_films_quantity: 5,
		user_favorite_films: [1, 2],

		user_films: [7, 47],
		user_favorite_lists_quantity: 13,
		user_favorite_lists: [43, 44],
	},
]
