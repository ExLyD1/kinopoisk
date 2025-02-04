import { ref } from 'vue'
import type { Ref } from 'vue'

export interface IRecentlyLikedListsItem {
	images: [
		image1: string,
		image2: string,

		image3: string,
		image4: string,
		image5: string
	]
	list_name: string
	author_name: string
	avatar: string
	films: number
	likes: number
	comments: number
	description: string
}

// Импорт картинок фильмов (20 штук)
import filmCover1 from '~/shared/ui/icons/filmCovers/filmCover1.jpg'
import filmCover2 from '~/shared/ui/icons/filmCovers/filmCover2.jpg'
import filmCover3 from '~/shared/ui/icons/filmCovers/filmCover3.jpg'
import filmCover4 from '~/shared/ui/icons/filmCovers/filmCover4.jpg'
import filmCover5 from '~/shared/ui/icons/filmCovers/filmCover5.jpg'
import filmCover6 from '~/shared/ui/icons/filmCovers/filmCover6.jpg'
import filmCover7 from '~/shared/ui/icons/filmCovers/filmCover7.jpg'
import filmCover8 from '~/shared/ui/icons/filmCovers/filmCover8.jpg'
import filmCover9 from '~/shared/ui/icons/filmCovers/filmCover9.jpg'
import filmCover10 from '~/shared/ui/icons/filmCovers/filmCover10.jpg'
import filmCover11 from '~/shared/ui/icons/filmCovers/filmCover11.jpg'
import filmCover12 from '~/shared/ui/icons/filmCovers/filmCover12.jpg'
import filmCover13 from '~/shared/ui/icons/filmCovers/filmCover13.jpg'
import filmCover14 from '~/shared/ui/icons/filmCovers/filmCover14.jpg'
import filmCover15 from '~/shared/ui/icons/filmCovers/filmCover15.jpg'
import filmCover16 from '~/shared/ui/icons/filmCovers/filmCover16.jpg'
import filmCover17 from '~/shared/ui/icons/filmCovers/filmCover17.jpg'
import filmCover18 from '~/shared/ui/icons/filmCovers/filmCover18.jpg'
import filmCover19 from '~/shared/ui/icons/filmCovers/filmCover19.jpg'
import filmCover20 from '~/shared/ui/icons/filmCovers/filmCover20.jpg'

// Импорт аватаров (15 штук)
import avatar1 from '~/shared/ui/icons/avatars/avatar1.jpg'
import avatar2 from '~/shared/ui/icons/avatars/avatar2.jpg'
import avatar3 from '~/shared/ui/icons/avatars/avatar3.jpg'
import avatar4 from '~/shared/ui/icons/avatars/avatar4.jpg'
import avatar5 from '~/shared/ui/icons/avatars/avatar5.jpg'
import avatar6 from '~/shared/ui/icons/avatars/avatar6.jpg'
import avatar7 from '~/shared/ui/icons/avatars/avatar7.jpg'
import avatar8 from '~/shared/ui/icons/avatars/avatar8.jpg'
import avatar9 from '~/shared/ui/icons/avatars/avatar9.jpg'
import avatar10 from '~/shared/ui/icons/avatars/avatar10.jpg'
import avatar11 from '~/shared/ui/icons/avatars/avatar11.jpg'
import avatar12 from '~/shared/ui/icons/avatars/avatar12.jpg'
import avatar13 from '~/shared/ui/icons/avatars/avatar13.jpg'
import avatar14 from '~/shared/ui/icons/avatars/avatar14.jpg'
import avatar15 from '~/shared/ui/icons/avatars/avatar15.jpg'

// Массив статических данных
export const recentlyLikedListsItemsList: Ref<Array<IRecentlyLikedListsItem>> =
	ref([
		{
			images: [filmCover1, filmCover5, filmCover10, filmCover15, filmCover20],
			list_name: 'Best Sci-Fi Collection',
			author_name: 'Alice Brown',
			avatar: avatar3,
			films: 150,
			likes: 3450,
			comments: 78,
			description:
				'96th academy awards (10/03/2024) oppenheimer - 13 nominations  poor things - 11 nominations  killers of the flower moon - 10 nominations',
		},
		{
			images: [filmCover2, filmCover6, filmCover9, filmCover14, filmCover19],
			list_name: 'Action Movie Madness',
			author_name: 'Michael Johnson',
			avatar: avatar8,
			films: 200,
			likes: 5120,
			comments: 92,
			description: 'Explosive action and high-speed chases.',
		},
		{
			images: [filmCover3, filmCover7, filmCover12, filmCover17, filmCover4],
			list_name: 'Indie Film Gems',
			author_name: 'Samantha Green',
			avatar: avatar5,
			films: 180,
			likes: 4320,
			comments: 105,
			description: 'A collection of underrated indie masterpieces.',
		},
		{
			images: [filmCover8, filmCover13, filmCover18, filmCover2, filmCover7],
			list_name: 'Crime & Mystery Classics',
			author_name: 'Daniel White',
			avatar: avatar10,
			films: 220,
			likes: 6780,
			comments: 140,
			description: 'Mysterious plots and thrilling crime stories.',
		},
		{
			images: [filmCover11, filmCover16, filmCover1, filmCover6, filmCover10],
			list_name: 'Fantasy Adventures',
			author_name: 'Sophia Martinez',
			avatar: avatar12,
			films: 130,
			likes: 3200,
			comments: 68,
			description: 'Magical worlds and epic quests.',
		},
		{
			images: [filmCover4, filmCover9, filmCover14, filmCover19, filmCover3],
			list_name: 'Historical Dramas',
			author_name: 'William Carter',
			avatar: avatar7,
			films: 190,
			likes: 5450,
			comments: 88,
			description: 'True stories and period dramas.',
		},
		{
			images: [filmCover5, filmCover10, filmCover15, filmCover20, filmCover8],
			list_name: 'Romance & Musicals',
			author_name: 'Emily Clark',
			avatar: avatar2,
			films: 175,
			likes: 4900,
			comments: 72,
			description: 'Heartwarming love stories and great soundtracks.',
		},
		{
			images: [filmCover6, filmCover11, filmCover16, filmCover1, filmCover12],
			list_name: 'Cyberpunk & Dystopia',
			author_name: 'Christopher Adams',
			avatar: avatar14,
			films: 210,
			likes: 6100,
			comments: 94,
			description: 'Dark futures and neon-lit cityscapes.',
		},
		{
			images: [filmCover7, filmCover12, filmCover17, filmCover2, filmCover13],
			list_name: 'Horror Night',
			author_name: 'Jessica Lopez',
			avatar: avatar6,
			films: 165,
			likes: 4600,
			comments: 81,
			description: 'Scariest horror films of all time.',
		},
		{
			images: [filmCover9, filmCover14, filmCover19, filmCover4, filmCover15],
			list_name: 'Western Classics',
			author_name: 'David Roberts',
			avatar: avatar11,
			films: 250,
			likes: 7500,
			comments: 110,
			description: 'Iconic westerns and cowboy adventures.',
		},
	])
