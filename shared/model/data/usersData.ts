import type { IUser } from '../interfaces/userInterface'
import type { IFilmItem } from '../interfaces/filmInterface'

import { filmsListsData } from './filmsListsData'
import { filmsList } from './filmsData'

export const usersList: Array<IUser> = [
	{
		id: 1,
		user_avatar: '/avatars/avatar1.jpg',
		user_name: 'AlexTheExplorer',
		user_following_quantity: 5,
		user_followers_quantity: 8,
		user_reviews_quantity: 6,
		user_reviews: [2, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 26, 30, 55],
		user_films_quantity: 19,
		user_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
			40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 1, 2, 3,
			4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
			24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
			42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 1, 2, 3, 4, 5, 6,
			7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
			26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
			44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
		],
		user_lists_quantity: 2,
		user_lists: [1, 5, 7],
		user_favorite_films_quantity: 5,
		user_favorite_films: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 30, 55,
		],
		user_favorite_lists_quantity: 3,
		user_favorite_lists: [12, 20, 25],
		user_bio:
			'Adventure seeker and movie enthusiast. Love exploring new genres and hidden cinematic gems.',
		user_tags: ['adventure', 'mystery', 'drama'],
		user_following: [
			2, 3, 5, 7, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
			26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
		],
		user_followers: [2, 4, 6, 8, 10, 12, 15, 20],
		user_pinned_lists: [1],
	},
	{
		id: 2,
		user_avatar: '/avatars/avatar2.jpg',
		user_name: 'SciFiFanatic',
		user_following_quantity: 6,
		user_followers_quantity: 7,
		user_reviews_quantity: 5,
		user_reviews: [1, 11, 20, 27, 50],
		user_films_quantity: 15,
		user_films: [2, 9, 11, 15, 20, 23, 25, 27, 29, 32, 40, 48, 50, 52, 54],
		user_lists_quantity: 3,
		user_lists: [2, 8, 15],
		user_favorite_films_quantity: 5,
		user_favorite_films: [2, 11, 20, 27, 50],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [5, 10],
		user_bio:
			'Obsessed with sci-fi and futuristic worlds. Always chasing the next big space adventure.',
		user_tags: ['sci-fi', 'action', 'tech'],
		user_following: [1, 4, 6, 10, 13, 15],
		user_followers: [1, 3, 5, 7, 9, 11, 14],
		user_pinned_lists: [2],
	},
	{
		id: 3,
		user_avatar: '/avatars/avatar3.jpg',
		user_name: 'MysteryLover',
		user_following_quantity: 4,
		user_followers_quantity: 6,
		user_reviews_quantity: 5,
		user_reviews: [3, 12, 16, 25, 33],
		user_films_quantity: 12,
		user_films: [2, 1, 3, 12, 16, 18, 25, 28, 30, 33, 42, 45, 52],
		user_lists_quantity: 2,
		user_lists: [3, 10],
		user_favorite_films_quantity: 4,
		user_favorite_films: [3, 12, 16, 25],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [15],
		user_bio:
			'Drawn to puzzles and suspense. Nothing beats a good twist in a dark tale.',
		user_tags: ['mystery', 'horror', 'thriller'],
		user_following: [1, 5, 8, 11],
		user_followers: [2, 4, 6, 9, 12, 15],
		user_pinned_lists: [3],
	},
	{
		id: 4,
		user_avatar: '/avatars/avatar4.jpg',
		user_name: 'DramaQueen',
		user_following_quantity: 7,
		user_followers_quantity: 5,
		user_reviews_quantity: 5,
		user_reviews: [1, 4, 7, 14, 19],
		user_films_quantity: 17,
		user_films: [2, 1, 4, 7, 9, 12, 14, 18, 19, 24, 26, 30, 31, 35, 41, 47, 49],
		user_lists_quantity: 2,
		user_lists: [4, 9],
		user_favorite_films_quantity: 4,
		user_favorite_films: [1, 4, 7, 14],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [12, 18],
		user_bio:
			'Live for emotional stories that tug at the heartstrings. Tears are my fuel.',
		user_tags: ['drama', 'romance'],
		user_following: [2, 3, 6, 8, 10, 12, 15],
		user_followers: [1, 5, 7, 9, 11],
		user_pinned_lists: [4],
	},
	{
		id: 5,
		user_avatar: '/avatars/avatar5.jpg',
		user_name: 'ActionJunkie',
		user_following_quantity: 5,
		user_followers_quantity: 6,
		user_reviews_quantity: 5,
		user_reviews: [2, 5, 13, 21, 48],
		user_films_quantity: 16,
		user_films: [2, 1, 5, 7, 13, 15, 17, 21, 24, 27, 32, 36, 38, 44, 48, 54],
		user_lists_quantity: 3,
		user_lists: [5, 14, 23],
		user_favorite_films_quantity: 4,
		user_favorite_films: [2, 5, 13, 21],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [10],
		user_bio:
			'Explosions, chases, and epic fights — that’s my kind of movie night.',
		user_tags: ['action', 'adventure'],
		user_following: [1, 3, 7, 9, 13],
		user_followers: [2, 4, 6, 8, 10, 12],
		user_pinned_lists: [5],
	},
	{
		id: 6,
		user_avatar: '/avatars/avatar6.jpg',
		user_name: 'HorrorBuff',
		user_following_quantity: 4,
		user_followers_quantity: 5,
		user_reviews_quantity: 5,
		user_reviews: [6, 8, 16, 23, 45],
		user_films_quantity: 11,
		user_films: [2, 3, 6, 8, 11, 16, 23, 28, 33, 45, 49],
		user_lists_quantity: 2,
		user_lists: [6, 15],
		user_favorite_films_quantity: 3,
		user_favorite_films: [6, 8, 16, 2],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [12, 20],
		user_bio: 'Thrills and chills are my game. The darker, the better.',
		user_tags: ['horror', 'mystery'],
		user_following: [2, 4, 8, 10],
		user_followers: [1, 3, 5, 7, 9],
		user_pinned_lists: [6],
	},
	{
		id: 7,
		user_avatar: '/avatars/avatar7.jpg',
		user_name: 'HistoryNerd',
		user_following_quantity: 6,
		user_followers_quantity: 4,
		user_reviews_quantity: 5,
		user_reviews: [7, 13, 19, 30, 47],
		user_films_quantity: 11,
		user_films: [2, 4, 7, 13, 17, 19, 21, 30, 34, 36, 38, 47],
		user_lists_quantity: 2,
		user_lists: [7, 16],
		user_favorite_films_quantity: 3,
		user_favorite_films: [7, 13, 19, 2],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [25],
		user_bio: 'Love diving into the past through epic historical films.',
		user_tags: ['history', 'drama'],
		user_following: [1, 5, 9, 11, 13, 15],
		user_followers: [2, 4, 6, 8],
		user_pinned_lists: [7],
	},
	{
		id: 8,
		user_avatar: '/avatars/avatar8.jpg',
		user_name: 'RomanticSoul',
		user_following_quantity: 5,
		user_followers_quantity: 6,
		user_reviews_quantity: 5,
		user_reviews: [8, 12, 14, 22, 41],
		user_films_quantity: 11,
		user_films: [2, 4, 8, 9, 12, 14, 18, 22, 24, 35, 41, 49],
		user_lists_quantity: 2,
		user_lists: [8, 17],
		user_favorite_films_quantity: 3,
		user_favorite_films: [8, 12, 22, 2],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [10, 18],
		user_bio:
			'Hopeless romantic at heart, always chasing love stories on screen.',
		user_tags: ['romance', 'drama'],
		user_following: [4, 6, 10, 12, 14],
		user_followers: [1, 3, 5, 7, 9, 11],
		user_pinned_lists: [8],
	},
	{
		id: 9,
		user_avatar: '/avatars/avatar9.jpg',
		user_name: 'ThrillerSeeker',
		user_following_quantity: 4,
		user_followers_quantity: 5,
		user_reviews_quantity: 5,
		user_reviews: [9, 15, 23, 25, 40],
		user_films_quantity: 12,
		user_films: [2, 1, 6, 9, 13, 15, 23, 25, 27, 32, 40, 44, 50],
		user_lists_quantity: 3,
		user_lists: [9, 18, 27],
		user_favorite_films_quantity: 3,
		user_favorite_films: [9, 15, 23, 2],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [12],
		user_bio: 'Edge-of-the-seat suspense is my addiction. Keep me guessing!',
		user_tags: ['thriller', 'action'],
		user_following: [1, 5, 7, 11],
		user_followers: [2, 3, 6, 8, 10],
		user_pinned_lists: [9],
	},
	{
		id: 10,
		user_avatar: '/avatars/avatar10.jpg',
		user_name: 'FantasyDreamer',
		user_following_quantity: 6,
		user_followers_quantity: 4,
		user_reviews_quantity: 5,
		user_reviews: [10, 19, 26, 36, 43],
		user_films_quantity: 9,
		user_films: [2, 5, 10, 19, 20, 26, 29, 36, 43, 53],
		user_lists_quantity: 2,
		user_lists: [10, 19],
		user_favorite_films_quantity: 3,
		user_favorite_films: [10, 19, 26, 2],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [5, 15],
		user_bio:
			'Living for magical worlds and epic quests. Reality is overrated.',
		user_tags: ['fantasy', 'adventure'],
		user_following: [2, 4, 6, 8, 12, 14],
		user_followers: [1, 3, 5, 7],
		user_pinned_lists: [10],
	},
	{
		id: 11,
		user_avatar: '/avatars/avatar11.jpg',
		user_name: 'CyberPunk',
		user_following_quantity: 5,
		user_followers_quantity: 6,
		user_reviews_quantity: 5,
		user_reviews: [11, 23, 32, 40, 50],
		user_films_quantity: 12,
		user_films: [2, 3, 11, 13, 19, 23, 27, 32, 38, 40, 44, 50],
		user_lists_quantity: 2,
		user_lists: [11, 20],
		user_favorite_films_quantity: 3,
		user_favorite_films: [11, 23, 38, 2],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [25],
		user_bio: 'Neon lights and tech dystopias are my vibe.',
		user_tags: ['sci-fi', 'cyberpunk'],
		user_following: [3, 5, 9, 13, 15],
		user_followers: [2, 4, 6, 8, 10, 12],
		user_pinned_lists: [11],
	},
	{
		id: 12,
		user_avatar: '/avatars/avatar12.jpg',
		user_name: 'NoirWatcher',
		user_following_quantity: 4,
		user_followers_quantity: 5,
		user_reviews_quantity: 5,
		user_reviews: [12, 16, 25, 33, 42],
		user_films_quantity: 8,
		user_films: [2, 1, 4, 6, 12, 16, 25, 33, 42],
		user_lists_quantity: 2,
		user_lists: [12, 21],
		user_favorite_films_quantity: 3,
		user_favorite_films: [12, 16, 33],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [15],
		user_bio: 'Shadows, smoke, and mysteries — my kind of cinema.',
		user_tags: ['noir', 'mystery'],
		user_following: [4, 6, 8, 10],
		user_followers: [1, 3, 5, 7, 9],
		user_pinned_lists: [12],
	},
	{
		id: 13,
		user_avatar: '/avatars/avatar13.jpg',
		user_name: 'EpicVoyager',
		user_following_quantity: 6,
		user_followers_quantity: 4,
		user_reviews_quantity: 5,
		user_reviews: [13, 21, 27, 32, 38],
		user_films_quantity: 14,
		user_films: [2, 5, 9, 11, 13, 15, 19, 21, 27, 32, 36, 38, 40, 44],
		user_lists_quantity: 2,
		user_lists: [13, 22],
		user_favorite_films_quantity: 3,
		user_favorite_films: [13, 21, 36],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [10, 20],
		user_bio: 'Big stories, big battles, big emotions — that’s me.',
		user_tags: ['action', 'epic'],
		user_following: [5, 7, 9, 11, 15, 17],
		user_followers: [2, 4, 6, 8],
		user_pinned_lists: [13],
	},
	{
		id: 14,
		user_avatar: '/avatars/avatar14.jpg',
		user_name: 'ArtFilmFan',
		user_following_quantity: 5,
		user_followers_quantity: 5,
		user_reviews_quantity: 5,
		user_reviews: [14, 22, 31, 39, 49],
		user_films_quantity: 9,
		user_films: [2, 1, 7, 14, 18, 22, 31, 39, 41, 49],
		user_lists_quantity: 2,
		user_lists: [14, 23],
		user_favorite_films_quantity: 3,
		user_favorite_films: [14, 22, 31],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [25],
		user_bio: 'Cinema is art, and I’m here for the beauty of it.',
		user_tags: ['art', 'drama'],
		user_following: [8, 10, 12, 16, 18],
		user_followers: [2, 4, 6, 8, 10],
		user_pinned_lists: [14],
	},
	{
		id: 15,
		user_avatar: '/avatars/avatar15.jpg',
		user_name: 'SpaceTraveler',
		user_following_quantity: 6,
		user_followers_quantity: 5,
		user_reviews_quantity: 5,
		user_reviews: [15, 23, 27, 32, 40],
		user_films_quantity: 12,
		user_films: [2, 3, 5, 9, 15, 23, 27, 32, 40, 42, 44, 50],
		user_lists_quantity: 3,
		user_lists: [15, 24, 33],
		user_favorite_films_quantity: 3,
		user_favorite_films: [15, 23, 32],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [10, 20],
		user_bio: 'Exploring the cosmos one film at a time.',
		user_tags: ['sci-fi', 'adventure'],
		user_following: [11, 13, 17, 19, 21, 23],
		user_followers: [1, 3, 5, 7, 9],
		user_pinned_lists: [15],
	},
	{
		id: 16,
		user_avatar: '/avatars/avatar1.jpg',
		user_name: 'DarkTales',
		user_following_quantity: 4,
		user_followers_quantity: 6,
		user_reviews_quantity: 5,
		user_reviews: [16, 25, 33, 42, 45],
		user_films_quantity: 10,
		user_films: [2, 3, 4, 6, 8, 16, 25, 28, 33, 42, 45],
		user_lists_quantity: 2,
		user_lists: [16, 25],
		user_favorite_films_quantity: 3,
		user_favorite_films: [16, 25, 33],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [12],
		user_bio: 'Lover of the eerie and the unknown.',
		user_tags: ['horror', 'mystery'],
		user_following: [12, 14, 18, 20],
		user_followers: [2, 4, 6, 8, 10, 12],
		user_pinned_lists: [16],
	},
	{
		id: 17,
		user_avatar: '/avatars/avatar2.jpg',
		user_name: 'QuestMaster',
		user_following_quantity: 5,
		user_followers_quantity: 4,
		user_reviews_quantity: 5,
		user_reviews: [17, 26, 34, 36, 43],
		user_films_quantity: 12,
		user_films: [2, 4, 10, 13, 17, 19, 21, 26, 34, 36, 38, 43, 44],
		user_lists_quantity: 2,
		user_lists: [17, 26],
		user_favorite_films_quantity: 3,
		user_favorite_films: [17, 26, 34],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [5, 15],
		user_bio: 'Always on a cinematic adventure.',
		user_tags: ['adventure', 'action'],
		user_following: [13, 15, 19, 21, 23],
		user_followers: [1, 3, 5, 7],
		user_pinned_lists: [17],
	},
	{
		id: 18,
		user_avatar: '/avatars/avatar3.jpg',
		user_name: 'SilentViewer',
		user_following_quantity: 4,
		user_followers_quantity: 5,
		user_reviews_quantity: 5,
		user_reviews: [18, 25, 28, 35, 45],
		user_films_quantity: 10,
		user_films: [2, 3, 6, 9, 14, 18, 25, 28, 35, 42, 45],
		user_lists_quantity: 2,
		user_lists: [18, 27],
		user_favorite_films_quantity: 3,
		user_favorite_films: [18, 25, 35],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [12],
		user_bio: 'Watching quietly, feeling deeply.',
		user_tags: ['drama', 'horror'],
		user_following: [14, 16, 20, 22],
		user_followers: [2, 4, 6, 8, 10],
		user_pinned_lists: [18],
	},
	{
		id: 19,
		user_avatar: '/avatars/avatar4.jpg',
		user_name: 'LegendSeeker',
		user_following_quantity: 6,
		user_followers_quantity: 4,
		user_reviews_quantity: 5,
		user_reviews: [19, 26, 38, 43, 47],
		user_films_quantity: 14,
		user_films: [2, 1, 3, 8, 10, 13, 19, 21, 26, 28, 30, 36, 38, 43, 47],
		user_lists_quantity: 2,
		user_lists: [19, 28],
		user_favorite_films_quantity: 3,
		user_favorite_films: [19, 26, 38],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [10, 20],
		user_bio: 'Chasing epic tales and heroic deeds.',
		user_tags: ['fantasy', 'history'],
		user_following: [15, 17, 21, 23, 25, 27],
		user_followers: [1, 3, 5, 7],
		user_pinned_lists: [19],
	},
	{
		id: 20,
		user_avatar: '/avatars/avatar5.jpg',
		user_name: 'TimeWanderer',
		user_following_quantity: 5,
		user_followers_quantity: 6,
		user_reviews_quantity: 5,
		user_reviews: [20, 29, 32, 40, 47],
		user_films_quantity: 12,
		user_films: [2, 5, 9, 10, 15, 20, 23, 29, 32, 34, 40, 47],
		user_lists_quantity: 2,
		user_lists: [20, 29],
		user_favorite_films_quantity: 3,
		user_favorite_films: [20, 29, 32],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [15],
		user_bio: 'Traveling through history and fantasy on screen.',
		user_tags: ['sci-fi', 'fantasy'],
		user_following: [16, 18, 22, 24, 26],
		user_followers: [2, 4, 6, 8, 10, 12],
		user_pinned_lists: [20],
	},
	{
		id: 21,
		user_avatar: '/avatars/avatar6.jpg',
		user_name: 'PirateHeart',
		user_following_quantity: 4,
		user_followers_quantity: 5,
		user_reviews_quantity: 5,
		user_reviews: [21, 38, 48, 13, 26],
		user_films_quantity: 11,
		user_films: [2, 7, 10, 13, 15, 21, 26, 30, 32, 38, 40, 48],
		user_lists_quantity: 2,
		user_lists: [21, 30],
		user_favorite_films_quantity: 3,
		user_favorite_films: [21, 38, 48],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [5, 10],
		user_bio: 'Sailing the seas of adventure films.',
		user_tags: ['adventure', 'action'],
		user_following: [17, 19, 23, 25],
		user_followers: [1, 3, 5, 7, 9],
		user_pinned_lists: [21],
	},
	{
		id: 22,
		user_avatar: '/avatars/avatar7.jpg',
		user_name: 'LoveChaser',
		user_following_quantity: 6,
		user_followers_quantity: 4,
		user_reviews_quantity: 5,
		user_reviews: [22, 31, 39, 41, 49],
		user_films_quantity: 9,
		user_films: [2, 11, 12, 14, 18, 22, 31, 39, 41, 49],
		user_lists_quantity: 2,
		user_lists: [22, 31],
		user_favorite_films_quantity: 3,
		user_favorite_films: [22, 31, 41],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [15],
		user_bio: 'Romantic films are my escape.',
		user_tags: ['romance', 'drama'],
		user_following: [18, 20, 24, 26, 28, 30],
		user_followers: [2, 4, 6, 8],
		user_pinned_lists: [22],
	},
	{
		id: 23,
		user_avatar: '/avatars/avatar8.jpg',
		user_name: 'TechWizard',
		user_following_quantity: 5,
		user_followers_quantity: 5,
		user_reviews_quantity: 5,
		user_reviews: [23, 32, 40, 44, 50],
		user_films_quantity: 9,
		user_films: [2, 11, 15, 23, 27, 32, 40, 44, 50],
		user_lists_quantity: 2,
		user_lists: [23, 32],
		user_favorite_films_quantity: 3,
		user_favorite_films: [23, 32, 40],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [10, 20],
		user_bio: 'Fascinated by cyber worlds and futuristic tech.',
		user_tags: ['sci-fi', 'tech'],
		user_following: [19, 21, 25, 27, 29],
		user_followers: [1, 3, 5, 7, 9],
		user_pinned_lists: [23],
	},
	{
		id: 24,
		user_avatar: '/avatars/avatar9.jpg',
		user_name: 'NatureLover',
		user_following_quantity: 4,
		user_followers_quantity: 6,
		user_reviews_quantity: 5,
		user_reviews: [24, 26, 29, 34, 46],
		user_films_quantity: 11,
		user_films: [2, 4, 8, 12, 16, 24, 26, 29, 34, 41, 43, 46],
		user_lists_quantity: 2,
		user_lists: [24, 33],
		user_favorite_films_quantity: 3,
		user_favorite_films: [24, 26, 34],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [15],
		user_bio: 'Films with stunning landscapes are my passion.',
		user_tags: ['nature', 'adventure'],
		user_following: [20, 22, 26, 28],
		user_followers: [2, 4, 6, 8, 10, 12],
		user_pinned_lists: [24],
	},
	{
		id: 25,
		user_avatar: '/avatars/avatar10.jpg',
		user_name: 'SuspenseFan',
		user_following_quantity: 6,
		user_followers_quantity: 5,
		user_reviews_quantity: 5,
		user_reviews: [25, 32, 40, 42, 52],
		user_films_quantity: 12,
		user_films: [2, 1, 5, 9, 15, 17, 25, 27, 32, 35, 40, 42, 52],
		user_lists_quantity: 2,
		user_lists: [25, 34],
		user_favorite_films_quantity: 3,
		user_favorite_films: [25, 32, 40],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [10, 20],
		user_bio: 'Can’t get enough of twists and turns.',
		user_tags: ['suspense', 'thriller'],
		user_following: [21, 23, 27, 29, 31, 33],
		user_followers: [1, 3, 5, 7, 9],
		user_pinned_lists: [25],
	},
	{
		id: 26,
		user_avatar: '/avatars/avatar11.jpg',
		user_name: 'MythicMind',
		user_following_quantity: 5,
		user_followers_quantity: 4,
		user_reviews_quantity: 5,
		user_reviews: [26, 38, 43, 48, 53],
		user_films_quantity: 10,
		user_films: [2, 10, 13, 19, 21, 26, 29, 36, 38, 43, 53],
		user_lists_quantity: 2,
		user_lists: [26, 35],
		user_favorite_films_quantity: 3,
		user_favorite_films: [26, 38, 43],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [15],
		user_bio: 'Drawn to legends and magical tales.',
		user_tags: ['fantasy', 'myth'],
		user_following: [22, 24, 28, 30, 32],
		user_followers: [2, 4, 6, 8],
		user_pinned_lists: [26],
	},
	{
		id: 27,
		user_avatar: '/avatars/avatar12.jpg',
		user_name: 'RebelSpirit',
		user_following_quantity: 4,
		user_followers_quantity: 6,
		user_reviews_quantity: 5,
		user_reviews: [27, 34, 40, 44, 54],
		user_films_quantity: 11,
		user_films: [2, 9, 13, 15, 17, 23, 27, 32, 34, 40, 44, 54],
		user_lists_quantity: 2,
		user_lists: [27, 36],
		user_favorite_films_quantity: 3,
		user_favorite_films: [27, 34, 44],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [10, 20],
		user_bio: 'Fighting the good fight, on screen and off.',
		user_tags: ['action', 'dystopia'],
		user_following: [23, 25, 29, 31],
		user_followers: [1, 3, 5, 7, 9, 11],
		user_pinned_lists: [27],
	},
	{
		id: 28,
		user_avatar: '/avatars/avatar13.jpg',
		user_name: 'ShadowWalker',
		user_following_quantity: 6,
		user_followers_quantity: 5,
		user_reviews_quantity: 5,
		user_reviews: [28, 33, 42, 45, 47],
		user_films_quantity: 14,
		user_films: [2, 1, 4, 6, 14, 16, 18, 24, 28, 30, 33, 35, 42, 45, 47],
		user_lists_quantity: 2,
		user_lists: [28, 37],
		user_favorite_films_quantity: 3,
		user_favorite_films: [28, 33, 42],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [15],
		user_bio: 'Lurking in the dark corners of cinema.',
		user_tags: ['mystery', 'horror'],
		user_following: [24, 26, 30, 32, 34, 36],
		user_followers: [2, 4, 6, 8, 10],
		user_pinned_lists: [28],
	},
	{
		id: 29,
		user_avatar: '/avatars/avatar14.jpg',
		user_name: 'SeaDreamer',
		user_following_quantity: 5,
		user_followers_quantity: 4,
		user_reviews_quantity: 5,
		user_reviews: [29, 34, 38, 43, 46],
		user_films_quantity: 13,
		user_films: [2, 9, 12, 13, 19, 21, 24, 26, 29, 34, 38, 43, 46, 48],
		user_lists_quantity: 2,
		user_lists: [29, 38],
		user_favorite_films_quantity: 3,
		user_favorite_films: [29, 34, 48],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [10, 20],
		user_bio: 'Ocean adventures are my escape.',
		user_tags: ['adventure', 'nature'],
		user_following: [25, 27, 31, 33, 35],
		user_followers: [1, 3, 5, 7],
		user_pinned_lists: [29],
	},
	{
		id: 30,
		user_avatar: '/avatars/avatar15.jpg',
		user_name: 'EpicSage',
		user_following_quantity: 4,
		user_followers_quantity: 6,
		user_reviews_quantity: 5,
		user_reviews: [30, 36, 47, 13, 21],
		user_films_quantity: 14,
		user_films: [2, 5, 6, 10, 13, 15, 20, 21, 26, 29, 30, 32, 36, 47],
		user_lists_quantity: 2,
		user_lists: [30, 39],
		user_favorite_films_quantity: 3,
		user_favorite_films: [30, 36, 47],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [15],
		user_bio: 'Wisdom through epic tales.',
		user_tags: ['epic', 'history'],
		user_following: [26, 28, 32, 34],
		user_followers: [2, 4, 6, 8, 10, 12],
		user_pinned_lists: [30],
	},
	{
		id: 31,
		user_avatar: '/avatars/avatar1.jpg',
		user_name: 'EchoFinder',
		user_following_quantity: 6,
		user_followers_quantity: 5,
		user_reviews_quantity: 5,
		user_reviews: [31, 37, 41, 47, 51],
		user_films_quantity: 13,
		user_films: [2, 7, 11, 15, 20, 22, 25, 31, 37, 39, 42, 47, 51, 55],
		user_lists_quantity: 2,
		user_lists: [31, 40],
		user_favorite_films_quantity: 3,
		user_favorite_films: [31, 37, 47],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [5, 10],
		user_bio: 'Searching for echoes in every story.',
		user_tags: ['drama', 'mystery'],
		user_following: [27, 29, 33, 35, 37, 39],
		user_followers: [1, 3, 5, 7, 9],
		user_pinned_lists: [31],
	},
	{
		id: 32,
		user_avatar: '/avatars/avatar2.jpg',
		user_name: 'InfiniteViewer',
		user_following_quantity: 5,
		user_followers_quantity: 4,
		user_reviews_quantity: 5,
		user_reviews: [32, 40, 44, 47, 50],
		user_films_quantity: 14,
		user_films: [2, 6, 8, 9, 12, 16, 18, 23, 27, 30, 32, 40, 44, 47, 50],
		user_lists_quantity: 2,
		user_lists: [32, 41],
		user_favorite_films_quantity: 3,
		user_favorite_films: [32, 40, 50],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [15],
		user_bio: 'Endless stories, endless possibilities.',
		user_tags: ['sci-fi', 'thriller'],
		user_following: [28, 30, 34, 36, 38],
		user_followers: [2, 4, 6, 8],
		user_pinned_lists: [32],
	},
	{
		id: 33,
		user_avatar: '/avatars/avatar3.jpg',
		user_name: 'VelvetEye',
		user_following_quantity: 4,
		user_followers_quantity: 6,
		user_reviews_quantity: 5,
		user_reviews: [33, 42, 52, 16, 25],
		user_films_quantity: 11,
		user_films: [2, 11, 12, 14, 16, 22, 25, 28, 33, 39, 42, 52],
		user_lists_quantity: 2,
		user_lists: [33, 42],
		user_favorite_films_quantity: 3,
		user_favorite_films: [33, 42, 52],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [10, 20],
		user_bio: 'Seeing the world through a noir lens.',
		user_tags: ['noir', 'mystery'],
		user_following: [29, 31, 35, 37],
		user_followers: [1, 3, 5, 7, 9, 11],
		user_pinned_lists: [33],
	},
	{
		id: 34,
		user_avatar: '/avatars/avatar4.jpg',
		user_name: 'JungleRover',
		user_following_quantity: 6,
		user_followers_quantity: 5,
		user_reviews_quantity: 5,
		user_reviews: [34, 43, 46, 17, 29],
		user_films_quantity: 12,
		user_films: [2, 4, 7, 10, 17, 20, 24, 26, 29, 34, 37, 43, 46],
		user_lists_quantity: 2,
		user_lists: [34, 43],
		user_favorite_films_quantity: 3,
		user_favorite_films: [34, 43, 46],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [15],
		user_bio: 'Exploring the wild side of cinema.',
		user_tags: ['adventure', 'nature'],
		user_following: [30, 32, 36, 38, 40, 42],
		user_followers: [2, 4, 6, 8, 10],
		user_pinned_lists: [34],
	},
	{
		id: 35,
		user_avatar: '/avatars/avatar5.jpg',
		user_name: 'StarGazer',
		user_following_quantity: 5,
		user_followers_quantity: 4,
		user_reviews_quantity: 5,
		user_reviews: [35, 40, 50, 15, 23],
		user_films_quantity: 11,
		user_films: [2, 5, 9, 15, 18, 23, 27, 32, 35, 40, 50],
		user_lists_quantity: 2,
		user_lists: [35, 44],
		user_favorite_films_quantity: 3,
		user_favorite_films: [35, 40, 50],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [10, 20],
		user_bio: 'Lost in the stars and stories.',
		user_tags: ['sci-fi', 'drama'],
		user_following: [31, 33, 37, 39, 41],
		user_followers: [1, 3, 5, 7],
		user_pinned_lists: [35],
	},
	{
		id: 36,
		user_avatar: '/avatars/avatar6.jpg',
		user_name: 'IronWill',
		user_following_quantity: 4,
		user_followers_quantity: 6,
		user_reviews_quantity: 5,
		user_reviews: [36, 43, 47, 48, 53],
		user_films_quantity: 14,
		user_films: [2, 1, 6, 8, 12, 15, 18, 24, 27, 30, 35, 36, 43, 47, 48],
		user_lists_quantity: 2,
		user_lists: [36, 45],
		user_favorite_films_quantity: 3,
		user_favorite_films: [36, 43, 48],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [15],
		user_bio: 'Strength and stories define me.',
		user_tags: ['action', 'history'],
		user_following: [32, 34, 38, 40],
		user_followers: [2, 4, 6, 8, 10, 12],
		user_pinned_lists: [36],
	},
	{
		id: 37,
		user_avatar: '/avatars/avatar7.jpg',
		user_name: 'DawnChaser',
		user_following_quantity: 6,
		user_followers_quantity: 5,
		user_reviews_quantity: 5,
		user_reviews: [37, 41, 47, 51, 52],
		user_films_quantity: 12,
		user_films: [2, 7, 11, 14, 20, 23, 25, 31, 34, 37, 41, 43, 52],
		user_lists_quantity: 2,
		user_lists: [37, 1],
		user_favorite_films_quantity: 3,
		user_favorite_films: [37, 41, 52],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [5, 10],
		user_bio: 'Finding light in every film.',
		user_tags: ['drama', 'fantasy'],
		user_following: [33, 35, 39, 41, 43, 45],
		user_followers: [1, 3, 5, 7, 9],
		user_pinned_lists: [37],
	},
	{
		id: 38,
		user_avatar: '/avatars/avatar8.jpg',
		user_name: 'BladeRunner',
		user_following_quantity: 5,
		user_followers_quantity: 4,
		user_reviews_quantity: 5,
		user_reviews: [38, 44, 48, 53, 54],
		user_films_quantity: 13,
		user_films: [2, 9, 10, 13, 19, 21, 26, 27, 29, 36, 38, 44, 48, 53],
		user_lists_quantity: 2,
		user_lists: [38, 2],
		user_favorite_films_quantity: 3,
		user_favorite_films: [38, 44, 53],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [15],
		user_bio: 'Cutting through action and adventure.',
		user_tags: ['action', 'adventure'],
		user_following: [34, 36, 40, 42, 44],
		user_followers: [2, 4, 6, 8],
		user_pinned_lists: [38],
	},
	{
		id: 39,
		user_avatar: '/avatars/avatar9.jpg',
		user_name: 'MirrorWatcher',
		user_following_quantity: 4,
		user_followers_quantity: 6,
		user_reviews_quantity: 5,
		user_reviews: [39, 49, 22, 31, 41],
		user_films_quantity: 10,
		user_films: [2, 8, 12, 14, 18, 22, 25, 31, 33, 39, 49],
		user_lists_quantity: 2,
		user_lists: [39, 3],
		user_favorite_films_quantity: 2,
		user_favorite_films: [39, 49],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [10, 20],
		user_bio: 'Reflections in film are my muse.',
		user_tags: ['drama', 'fantasy'],
		user_following: [35, 37, 41, 43],
		user_followers: [1, 3, 5, 7, 9, 11],
		user_pinned_lists: [39],
	},
	{
		id: 40,
		user_avatar: '/avatars/avatar10.jpg',
		user_name: 'CodeMaster',
		user_following_quantity: 6,
		user_followers_quantity: 5,
		user_reviews_quantity: 5,
		user_reviews: [40, 44, 50, 23, 32],
		user_films_quantity: 13,
		user_films: [2, 6, 11, 15, 17, 23, 27, 29, 32, 34, 40, 44, 46, 50],
		user_lists_quantity: 2,
		user_lists: [40, 4],
		user_favorite_films_quantity: 3,
		user_favorite_films: [40, 44, 50],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [15],
		user_bio: 'Decoding stories one film at a time.',
		user_tags: ['sci-fi', 'tech'],
		user_following: [36, 38, 42, 44, 46, 48],
		user_followers: [2, 4, 6, 8, 10],
		user_pinned_lists: [40],
	},
	{
		id: 41,
		user_avatar: '/avatars/avatar11.jpg',
		user_name: 'GoldenHealer',
		user_following_quantity: 5,
		user_followers_quantity: 4,
		user_reviews_quantity: 5,
		user_reviews: [41, 47, 51, 31, 37],
		user_films_quantity: 11,
		user_films: [2, 7, 14, 15, 18, 22, 25, 31, 35, 41, 47, 51],
		user_lists_quantity: 2,
		user_lists: [41, 5],
		user_favorite_films_quantity: 3,
		user_favorite_films: [41, 47, 51],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [10, 20],
		user_bio: 'Healing through cinematic magic.',
		user_tags: ['drama', 'fantasy'],
		user_following: [37, 39, 43, 45, 47],
		user_followers: [1, 3, 5, 7],
		user_pinned_lists: [41],
	},
	{
		id: 42,
		user_avatar: '/avatars/avatar12.jpg',
		user_name: 'NightRider',
		user_following_quantity: 4,
		user_followers_quantity: 6,
		user_reviews_quantity: 5,
		user_reviews: [42, 48, 52, 28, 33],
		user_films_quantity: 14,
		user_films: [2, 1, 4, 6, 7, 13, 16, 21, 25, 28, 33, 36, 42, 48, 52],
		user_lists_quantity: 2,
		user_lists: [42, 6],
		user_favorite_films_quantity: 3,
		user_favorite_films: [42, 48, 52],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [15],
		user_bio: 'Riding through the dark with every film.',
		user_tags: ['mystery', 'action'],
		user_following: [38, 40, 44, 46],
		user_followers: [2, 4, 6, 8, 10, 12],
		user_pinned_lists: [42],
	},
	{
		id: 43,
		user_avatar: '/avatars/avatar13.jpg',
		user_name: 'EmeraldGuardian',
		user_following_quantity: 6,
		user_followers_quantity: 5,
		user_reviews_quantity: 5,
		user_reviews: [43, 46, 53, 36, 47],
		user_films_quantity: 11,
		user_films: [2, 10, 17, 19, 24, 26, 31, 34, 36, 43, 46, 53],
		user_lists_quantity: 2,
		user_lists: [43, 7],
		user_favorite_films_quantity: 3,
		user_favorite_films: [43, 46, 53],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [5, 10],
		user_bio: 'Protecting the magic of stories.',
		user_tags: ['fantasy', 'adventure'],
		user_following: [39, 41, 45, 47, 49, 51],
		user_followers: [1, 3, 5, 7, 9],
		user_pinned_lists: [43],
	},
	{
		id: 44,
		user_avatar: '/avatars/avatar14.jpg',
		user_name: 'SteelFighter',
		user_following_quantity: 5,
		user_followers_quantity: 4,
		user_reviews_quantity: 5,
		user_reviews: [44, 48, 50, 54, 38],
		user_films_quantity: 14,
		user_films: [2, 11, 13, 15, 21, 23, 27, 32, 38, 40, 44, 48, 50, 54],
		user_lists_quantity: 2,
		user_lists: [44, 8],
		user_favorite_films_quantity: 3,
		user_favorite_films: [44, 48, 54],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [15],
		user_bio: 'Battling through every action flick.',
		user_tags: ['action', 'dystopia'],
		user_following: [40, 42, 46, 48, 50],
		user_followers: [2, 4, 6, 8],
		user_pinned_lists: [44],
	},
	{
		id: 45,
		user_avatar: '/avatars/avatar15.jpg',
		user_name: 'ShadowHunter',
		user_following_quantity: 4,
		user_followers_quantity: 6,
		user_reviews_quantity: 5,
		user_reviews: [45, 47, 52, 25, 33],
		user_films_quantity: 12,
		user_films: [2, 3, 6, 9, 15, 18, 25, 28, 33, 35, 42, 45, 47],
		user_lists_quantity: 2,
		user_lists: [45, 9],
		user_favorite_films_quantity: 2,
		user_favorite_films: [45, 47],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [10, 20],
		user_bio: 'Hunting shadows in every frame.',
		user_tags: ['horror', 'mystery'],
		user_following: [41, 43, 47, 49],
		user_followers: [1, 3, 5, 7, 9, 11],
		user_pinned_lists: [45],
	},
	{
		id: 46,
		user_avatar: '/avatars/avatar1.jpg',
		user_name: 'SeaExplorer',
		user_following_quantity: 6,
		user_followers_quantity: 5,
		user_reviews_quantity: 5,
		user_reviews: [46, 50, 23, 34, 40],
		user_films_quantity: 12,
		user_films: [2, 6, 12, 15, 23, 24, 27, 29, 34, 40, 42, 46, 50],
		user_lists_quantity: 2,
		user_lists: [46, 10],
		user_favorite_films_quantity: 2,
		user_favorite_films: [46, 50],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [15],
		user_bio: 'Diving into oceanic tales.',
		user_tags: ['adventure', 'nature'],
		user_following: [42, 44, 48, 50, 52, 54],
		user_followers: [2, 4, 6, 8, 10],
		user_pinned_lists: [46],
	},
	{
		id: 47,
		user_avatar: '/avatars/avatar2.jpg',
		user_name: 'CrownBearer',
		user_following_quantity: 5,
		user_followers_quantity: 4,
		user_reviews_quantity: 5,
		user_reviews: [47, 51, 31, 37, 43],
		user_films_quantity: 11,
		user_films: [2, 7, 14, 19, 20, 25, 30, 35, 41, 47, 53, 55],
		user_lists_quantity: 2,
		user_lists: [47, 11],
		user_favorite_films_quantity: 3,
		user_favorite_films: [47, 51, 53],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [5, 10],
		user_bio: 'Wearing the crown of epic tales.',
		user_tags: ['history', 'drama'],
		user_following: [43, 45, 49, 51, 53],
		user_followers: [1, 3, 5, 7],
		user_pinned_lists: [47],
	},
	{
		id: 48,
		user_avatar: '/avatars/avatar3.jpg',
		user_name: 'CrimsonSailor',
		user_following_quantity: 4,
		user_followers_quantity: 6,
		user_reviews_quantity: 5,
		user_reviews: [48, 54, 21, 38, 44],
		user_films_quantity: 13,
		user_films: [2, 8, 12, 16, 21, 24, 28, 33, 36, 42, 48, 50, 54],
		user_lists_quantity: 2,
		user_lists: [48, 12],
		user_favorite_films_quantity: 3,
		user_favorite_films: [48, 54, 38],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [15],
		user_bio: 'Sailing through crimson adventures.',
		user_tags: ['adventure', 'action'],
		user_following: [44, 46, 50, 52],
		user_followers: [2, 4, 6, 8, 10, 12],
		user_pinned_lists: [48],
	},
	{
		id: 49,
		user_avatar: '/avatars/avatar4.jpg',
		user_name: 'GlassDreamer',
		user_following_quantity: 6,
		user_followers_quantity: 5,
		user_reviews_quantity: 5,
		user_reviews: [49, 22, 31, 39, 41],
		user_films_quantity: 10,
		user_films: [2, 8, 12, 14, 18, 22, 25, 31, 33, 39, 49],
		user_lists_quantity: 2,
		user_lists: [49, 13],
		user_favorite_films_quantity: 2,
		user_favorite_films: [49, 39],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [10, 20],
		user_bio: 'Dreaming through glass-like stories.',
		user_tags: ['romance', 'fantasy'],
		user_following: [45, 47, 51, 53, 55, 1],
		user_followers: [3, 5, 7, 9, 11],
		user_pinned_lists: [49],
	},
	{
		id: 50,
		user_avatar: '/avatars/avatar5.jpg',
		user_name: 'DigitalNomad',
		user_following_quantity: 5,
		user_followers_quantity: 4,
		user_reviews_quantity: 5,
		user_reviews: [50, 23, 32, 40, 44],
		user_films_quantity: 13,
		user_films: [2, 6, 11, 15, 17, 23, 25, 27, 29, 32, 40, 44, 46, 50],
		user_lists_quantity: 2,
		user_lists: [50, 14],
		user_favorite_films_quantity: 3,
		user_favorite_films: [50, 44, 40],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [15],
		user_bio: 'Wandering the digital frontier of films.',
		user_tags: ['sci-fi', 'tech'],
		user_following: [46, 48, 52, 54, 2],
		user_followers: [4, 6, 8, 10],
		user_pinned_lists: [50],
	},
	{
		id: 51,
		user_avatar: '/avatars/avatar6.jpg',
		user_name: 'GoldenPath',
		user_following_quantity: 4,
		user_followers_quantity: 6,
		user_reviews_quantity: 5,
		user_reviews: [51, 31, 37, 41, 47],
		user_films_quantity: 12,
		user_films: [2, 7, 10, 15, 20, 24, 26, 31, 34, 37, 43, 47, 51],
		user_lists_quantity: 2,
		user_lists: [51, 15],
		user_favorite_films_quantity: 3,
		user_favorite_films: [51, 47, 43],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [5, 10],
		user_bio: 'Walking the golden path of cinema.',
		user_tags: ['drama', 'fantasy'],
		user_following: [47, 49, 53, 55],
		user_followers: [1, 3, 5, 7, 9, 11],
		user_pinned_lists: [51],
	},
	{
		id: 52,
		user_avatar: '/avatars/avatar7.jpg',
		user_name: 'NightChronicler',
		user_following_quantity: 6,
		user_followers_quantity: 5,
		user_reviews_quantity: 5,
		user_reviews: [52, 25, 33, 42, 48],
		user_films_quantity: 13,
		user_films: [2, 9, 13, 15, 17, 23, 26, 27, 29, 32, 40, 44, 46, 52],
		user_lists_quantity: 2,
		user_lists: [52, 16],
		user_favorite_films_quantity: 3,
		user_favorite_films: [52, 48, 44],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [15],
		user_bio: 'Chronicling tales of the night.',
		user_tags: ['mystery', 'action'],
		user_following: [48, 50, 54, 1, 3, 5],
		user_followers: [2, 4, 6, 8, 10],
		user_pinned_lists: [52],
	},
	{
		id: 53,
		user_avatar: '/avatars/avatar8.jpg',
		user_name: 'EmeraldSage',
		user_following_quantity: 5,
		user_followers_quantity: 4,
		user_reviews_quantity: 5,
		user_reviews: [53, 26, 36, 43, 47],
		user_films_quantity: 11,
		user_films: [2, 10, 19, 21, 24, 26, 29, 34, 38, 43, 47, 53],
		user_lists_quantity: 2,
		user_lists: [53, 17],
		user_favorite_films_quantity: 3,
		user_favorite_films: [53, 43, 47],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [5, 10],
		user_bio: 'Wise in the ways of emerald tales.',
		user_tags: ['fantasy', 'history'],
		user_following: [49, 51, 55, 2, 4],
		user_followers: [3, 5, 7, 9],
		user_pinned_lists: [53],
	},
	{
		id: 54,
		user_avatar: '/avatars/avatar9.jpg',
		user_name: 'SteelDawn',
		user_following_quantity: 4,
		user_followers_quantity: 6,
		user_reviews_quantity: 5,
		user_reviews: [54, 27, 38, 44, 48],
		user_films_quantity: 13,
		user_films: [2, 8, 12, 16, 21, 24, 27, 33, 36, 42, 48, 50, 54],
		user_lists_quantity: 2,
		user_lists: [54, 18],
		user_favorite_films_quantity: 3,
		user_favorite_films: [54, 48, 44],
		user_favorite_lists_quantity: 1,
		user_favorite_lists: [15],
		user_bio: 'Rising with the steel dawn of cinema.',
		user_tags: ['action', 'dystopia'],
		user_following: [50, 52, 1, 3],
		user_followers: [4, 6, 8, 10, 12, 14],
		user_pinned_lists: [54],
	},
	{
		id: 55,
		user_avatar: '/avatars/avatar10.jpg',
		user_name: 'FinalSurvivor',
		user_following_quantity: 6,
		user_followers_quantity: 5,
		user_reviews_quantity: 5,
		user_reviews: [55, 1, 11, 21, 31],
		user_films_quantity: 7,
		user_films: [2, 1, 11, 21, 31, 41, 51, 55],
		user_lists_quantity: 2,
		user_lists: [15, 45],
		user_favorite_films_quantity: 1,
		user_favorite_films: [55],
		user_favorite_lists_quantity: 2,
		user_favorite_lists: [5, 10],
		user_bio: 'Surviving the final dawn of stories.',
		user_tags: ['sci-fi', 'survival'],
		user_following: [51, 53, 2, 4, 6, 8],
		user_followers: [1, 3, 5, 7, 9],
		user_pinned_lists: [15],
	},
]
