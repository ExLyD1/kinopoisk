import type { IUser } from '../interfaces/userInterface'
import type { IFilmItem } from '../interfaces/filmInterface'

import { filmsListsData } from './filmsListsData'
import { filmsList } from './filmsData'

export const usersList: Ref<Array<IUser>> = ref([
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar10.jpg',
			import.meta.url
		).href,
		user_name: 'Madison Lee',
		user_films_quantity: 34565,
		user_lists_quantity: 7,
		user_following_quantity: 33,
		user_followers_quantity: 13,
		user_reviews_quantity: 23567,
		user_bio: 'Living life one movie at a time.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 1235,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar12.jpg',
			import.meta.url
		).href,
		user_name: 'Ethan Martin',
		user_films_quantity: 3530,
		user_lists_quantity: 1,
		user_following_quantity: 15,
		user_followers_quantity: 64,
		user_reviews_quantity: 5530,
		user_bio: 'Film critic with an eye for detail.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 6775,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar1.jpg',
			import.meta.url
		).href,
		user_name: 'Grace Harris',
		user_films_quantity: 1122,
		user_lists_quantity: 3,
		user_following_quantity: 77,
		user_followers_quantity: 135,
		user_reviews_quantity: 2667677,
		user_bio: 'A passionate movie lover and a film critic.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5568,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar4.jpg',
			import.meta.url
		).href,
		user_name: 'Grace Harris',
		user_films_quantity: 5685684,
		user_lists_quantity: 10,
		user_following_quantity: 23,
		user_followers_quantity: 174,
		user_reviews_quantity: 3852,
		user_bio: 'Film enthusiast with a special interest in sci-fi.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 9995,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar8.jpg',
			import.meta.url
		).href,
		user_name: 'Lucas Adams',
		user_films_quantity: 8827,
		user_lists_quantity: 3,
		user_following_quantity: 25,
		user_followers_quantity: 25,
		user_reviews_quantity: 536,
		user_bio: 'Lover of everything cinematic.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 3455,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar1.jpg',
			import.meta.url
		).href,
		user_name: 'Charlie Davis',
		user_films_quantity: 5,
		user_lists_quantity: 2,
		user_following_quantity: 76,
		user_followers_quantity: 197,
		user_reviews_quantity: 22,
		user_bio: 'A movie a day keeps the boredom away.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 35,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar3.jpg',
			import.meta.url
		).href,
		user_name: 'Madison Lee',
		user_films_quantity: 31,
		user_lists_quantity: 2,
		user_following_quantity: 24,
		user_followers_quantity: 118,
		user_reviews_quantity: 20,
		user_bio: 'A passionate movie lover and a film critic.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5234234,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar2.jpg',
			import.meta.url
		).href,
		user_name: 'Bob Brown',
		user_films_quantity: 57,
		user_lists_quantity: 9,
		user_following_quantity: 32,
		user_followers_quantity: 30,
		user_reviews_quantity: 16,
		user_bio: 'Just another movie buff trying to find the best films.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 2345,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar4.jpg',
			import.meta.url
		).href,
		user_name: 'Lily Walker',
		user_films_quantity: 59,
		user_lists_quantity: 3,
		user_following_quantity: 25,
		user_followers_quantity: 10,
		user_reviews_quantity: 11,
		user_bio: 'Living life one movie at a time.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 4235,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar2.jpg',
			import.meta.url
		).href,
		user_name: 'James Hall',
		user_films_quantity: 87,
		user_lists_quantity: 9,
		user_following_quantity: 32,
		user_followers_quantity: 124,
		user_reviews_quantity: 30,
		user_bio: 'Film fan, writer, and aspiring director.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar1.jpg',
			import.meta.url
		).href,
		user_name: 'Sophia Clark',
		user_films_quantity: 85,
		user_lists_quantity: 7,
		user_following_quantity: 13,
		user_followers_quantity: 82,
		user_reviews_quantity: 35,
		user_bio: "If you want movie recommendations, I'm your person!",
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 12345,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar11.jpg',
			import.meta.url
		).href,
		user_name: 'Bob Brown',
		user_films_quantity: 96,
		user_lists_quantity: 2,
		user_following_quantity: 24,
		user_followers_quantity: 187,
		user_reviews_quantity: 31,
		user_bio: "If you want movie recommendations, I'm your person!",
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 3125,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar2.jpg',
			import.meta.url
		).href,
		user_name: 'Jane Smith',
		user_films_quantity: 53,
		user_lists_quantity: 5,
		user_following_quantity: 50,
		user_followers_quantity: 179,
		user_reviews_quantity: 5,
		user_bio: 'Fan of both classic films and modern blockbusters.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 35,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar12.jpg',
			import.meta.url
		).href,
		user_name: 'Emily Taylor',
		user_films_quantity: 31,
		user_lists_quantity: 1,
		user_following_quantity: 86,
		user_followers_quantity: 4,
		user_reviews_quantity: 37,
		user_bio: 'Exploring new movies every day, sharing reviews.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 3555,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar11.jpg',
			import.meta.url
		).href,
		user_name: 'Lily Walker',
		user_films_quantity: 92,
		user_lists_quantity: 7,
		user_following_quantity: 78,
		user_followers_quantity: 10,
		user_reviews_quantity: 0,
		user_bio: 'A passionate movie lover and a film critic.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 52355,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar10.jpg',
			import.meta.url
		).href,
		user_name: 'Jane Smith',
		user_films_quantity: 72,
		user_lists_quantity: 8,
		user_following_quantity: 5,
		user_followers_quantity: 152,
		user_reviews_quantity: 0,
		user_bio: "If you want movie recommendations, I'm your person!",
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 7895,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar4.jpg',
			import.meta.url
		).href,
		user_name: 'Lily Walker',
		user_films_quantity: 15,
		user_lists_quantity: 10,
		user_following_quantity: 92,
		user_followers_quantity: 177,
		user_reviews_quantity: 47,
		user_bio: "If you want movie recommendations, I'm your person!",
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 6795,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar5.jpg',
			import.meta.url
		).href,
		user_name: 'Madison Lee',
		user_films_quantity: 47,
		user_lists_quantity: 3,
		user_following_quantity: 63,
		user_followers_quantity: 175,
		user_reviews_quantity: 17,
		user_bio: "If you want movie recommendations, I'm your person!",
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 10105,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar13.jpg',
			import.meta.url
		).href,
		user_name: 'David Wilson',
		user_films_quantity: 83,
		user_lists_quantity: 2,
		user_following_quantity: 98,
		user_followers_quantity: 156,
		user_reviews_quantity: 37,
		user_bio: 'A passionate movie lover and a film critic.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar15.jpg',
			import.meta.url
		).href,
		user_name: 'John Doe',
		user_films_quantity: 45,
		user_lists_quantity: 6,
		user_following_quantity: 76,
		user_followers_quantity: 146,
		user_reviews_quantity: 32,
		user_bio: 'Exploring new movies every day, sharing reviews.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar5.jpg',
			import.meta.url
		).href,
		user_name: 'David Wilson',
		user_films_quantity: 70,
		user_lists_quantity: 2,
		user_following_quantity: 95,
		user_followers_quantity: 115,
		user_reviews_quantity: 17,
		user_bio: 'Lover of everything cinematic.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar8.jpg',
			import.meta.url
		).href,
		user_name: 'Lucas Adams',
		user_films_quantity: 3,
		user_lists_quantity: 2,
		user_following_quantity: 73,
		user_followers_quantity: 142,
		user_reviews_quantity: 38,
		user_bio: 'Film enthusiast with a special interest in sci-fi.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar2.jpg',
			import.meta.url
		).href,
		user_name: 'Daniel Young',
		user_films_quantity: 82,
		user_lists_quantity: 5,
		user_following_quantity: 56,
		user_followers_quantity: 49,
		user_reviews_quantity: 21,
		user_bio: 'Exploring new movies every day, sharing reviews.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar3.jpg',
			import.meta.url
		).href,
		user_name: 'Emily Taylor',
		user_films_quantity: 11,
		user_lists_quantity: 2,
		user_following_quantity: 17,
		user_followers_quantity: 83,
		user_reviews_quantity: 3,
		user_bio: 'Movie lover with an ever-growing watchlist.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar7.jpg',
			import.meta.url
		).href,
		user_name: 'Jane Smith',
		user_films_quantity: 79,
		user_lists_quantity: 4,
		user_following_quantity: 98,
		user_followers_quantity: 31,
		user_reviews_quantity: 22,
		user_bio: 'Movie lover with an ever-growing watchlist.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar4.jpg',
			import.meta.url
		).href,
		user_name: 'Charlie Davis',
		user_films_quantity: 18,
		user_lists_quantity: 5,
		user_following_quantity: 46,
		user_followers_quantity: 91,
		user_reviews_quantity: 19,
		user_bio: 'Fan of both classic films and modern blockbusters.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar3.jpg',
			import.meta.url
		).href,
		user_name: 'John Doe',
		user_films_quantity: 31,
		user_lists_quantity: 7,
		user_following_quantity: 10,
		user_followers_quantity: 157,
		user_reviews_quantity: 44,
		user_bio: 'Film critic with an eye for detail.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar4.jpg',
			import.meta.url
		).href,
		user_name: 'Bob Brown',
		user_films_quantity: 25,
		user_lists_quantity: 3,
		user_following_quantity: 14,
		user_followers_quantity: 101,
		user_reviews_quantity: 0,
		user_bio: 'Just another movie buff trying to find the best films.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar6.jpg',
			import.meta.url
		).href,
		user_name: 'David Wilson',
		user_films_quantity: 8,
		user_lists_quantity: 2,
		user_following_quantity: 17,
		user_followers_quantity: 153,
		user_reviews_quantity: 5,
		user_bio: 'Discovering the hidden gems of cinema.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar7.jpg',
			import.meta.url
		).href,
		user_name: 'Sophia Clark',
		user_films_quantity: 93,
		user_lists_quantity: 2,
		user_following_quantity: 73,
		user_followers_quantity: 30,
		user_reviews_quantity: 22,
		user_bio: 'Living life one movie at a time.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar5.jpg',
			import.meta.url
		).href,
		user_name: 'Jane Smith',
		user_films_quantity: 50,
		user_lists_quantity: 5,
		user_following_quantity: 47,
		user_followers_quantity: 9,
		user_reviews_quantity: 43,
		user_bio: 'Discovering the hidden gems of cinema.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar12.jpg',
			import.meta.url
		).href,
		user_name: 'Emily Taylor',
		user_films_quantity: 99,
		user_lists_quantity: 5,
		user_following_quantity: 32,
		user_followers_quantity: 97,
		user_reviews_quantity: 15,
		user_bio: 'Film enthusiast with a special interest in sci-fi.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar11.jpg',
			import.meta.url
		).href,
		user_name: 'Madison Lee',
		user_films_quantity: 30,
		user_lists_quantity: 6,
		user_following_quantity: 0,
		user_followers_quantity: 58,
		user_reviews_quantity: 18,
		user_bio: 'Just another movie buff trying to find the best films.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar7.jpg',
			import.meta.url
		).href,
		user_name: 'Ethan Martin',
		user_films_quantity: 30,
		user_lists_quantity: 9,
		user_following_quantity: 63,
		user_followers_quantity: 21,
		user_reviews_quantity: 25,
		user_bio: 'A movie a day keeps the boredom away.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar8.jpg',
			import.meta.url
		).href,
		user_name: 'Alice Johnson',
		user_films_quantity: 24,
		user_lists_quantity: 3,
		user_following_quantity: 26,
		user_followers_quantity: 85,
		user_reviews_quantity: 43,
		user_bio: "Movies are more than just entertainment, they're art.",
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar6.jpg',
			import.meta.url
		).href,
		user_name: 'David Wilson',
		user_films_quantity: 98,
		user_lists_quantity: 2,
		user_following_quantity: 74,
		user_followers_quantity: 87,
		user_reviews_quantity: 2,
		user_bio: 'Discovering the hidden gems of cinema.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar8.jpg',
			import.meta.url
		).href,
		user_name: 'Daniel Young',
		user_films_quantity: 14,
		user_lists_quantity: 1,
		user_following_quantity: 48,
		user_followers_quantity: 31,
		user_reviews_quantity: 14,
		user_bio: 'Film critic with an eye for detail.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar12.jpg',
			import.meta.url
		).href,
		user_name: 'Lily Walker',
		user_films_quantity: 39,
		user_lists_quantity: 5,
		user_following_quantity: 33,
		user_followers_quantity: 197,
		user_reviews_quantity: 14,
		user_bio: 'Movie lover with an ever-growing watchlist.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar11.jpg',
			import.meta.url
		).href,
		user_name: 'Jane Smith',
		user_films_quantity: 35,
		user_lists_quantity: 2,
		user_following_quantity: 32,
		user_followers_quantity: 188,
		user_reviews_quantity: 24,
		user_bio: 'Living life one movie at a time.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar2.jpg',
			import.meta.url
		).href,
		user_name: 'John Doe',
		user_films_quantity: 23,
		user_lists_quantity: 3,
		user_following_quantity: 75,
		user_followers_quantity: 131,
		user_reviews_quantity: 49,
		user_bio: 'A passionate movie lover and a film critic.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar5.jpg',
			import.meta.url
		).href,
		user_name: 'Grace Harris',
		user_films_quantity: 66,
		user_lists_quantity: 1,
		user_following_quantity: 33,
		user_followers_quantity: 93,
		user_reviews_quantity: 37,
		user_bio: 'Movie lover with an ever-growing watchlist.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar9.jpg',
			import.meta.url
		).href,
		user_name: 'Grace Harris',
		user_films_quantity: 70,
		user_lists_quantity: 9,
		user_following_quantity: 24,
		user_followers_quantity: 37,
		user_reviews_quantity: 1,
		user_bio: 'Lover of everything cinematic.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar14.jpg',
			import.meta.url
		).href,
		user_name: 'David Wilson',
		user_films_quantity: 84,
		user_lists_quantity: 3,
		user_following_quantity: 67,
		user_followers_quantity: 41,
		user_reviews_quantity: 0,
		user_bio: "Movies are more than just entertainment, they're art.",
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar1.jpg',
			import.meta.url
		).href,
		user_name: 'Daniel Young',
		user_films_quantity: 50,
		user_lists_quantity: 1,
		user_following_quantity: 13,
		user_followers_quantity: 165,
		user_reviews_quantity: 35,
		user_bio: 'Movie lover with an ever-growing watchlist.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
	{
		user_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar1.jpg',
			import.meta.url
		).href,
		user_name: 'Lily Walker',
		user_films_quantity: 2,
		user_lists_quantity: 5,
		user_following_quantity: 75,
		user_followers_quantity: 188,
		user_reviews_quantity: 44,
		user_bio: 'Film enthusiast with a special interest in sci-fi.',
		user_lists: filmsListsData,
		user_favorite_films: filmsList,
		user_favorite_films_quantity: 5,
	},
])
