import { ref } from 'vue'
import type { Ref } from 'vue'

export interface IPopularWeekListsItem {
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
	likes: number
	comments: number
}

import img1 from '~/widgets/MainPage/icons/CoverCard/cover_image1.jpg'
import img2 from '~/widgets/MainPage/icons/CoverCard/cover_image2.jpg'
import img3 from '~/widgets/MainPage/icons/CoverCard/cover_image3.jpg'
import img4 from '~/widgets/MainPage/icons/CoverCard/cover_image4.jpg'
import img5 from '~/widgets/MainPage/icons/CoverCard/cover_image5.jpg'
import img6 from '~/widgets/MainPage/icons/CoverCard/cover_image6.jpg'
import img7 from '~/widgets/MainPage/icons/CoverCard/cover_image7.jpg'
import img8 from '~/widgets/MainPage/icons/CoverCard/cover_image8.jpg'
import img9 from '~/widgets/MainPage/icons/CoverCard/cover_image9.jpg'
import img10 from '~/widgets/MainPage/icons/CoverCard/cover_image10.jpg'
import img11 from '~/widgets/MainPage/icons/CoverCard/cover_image11.jpg'

import avatar1 from '~/widgets/Members/icons/featuredMembers/avatar1.jpg'
import avatar2 from '~/widgets/Members/icons/featuredMembers/avatar2.jpg'
import avatar3 from '~/widgets/Members/icons/featuredMembers/avatar3.jpg'

export const popularWeekListsItemsList: Ref<Array<IPopularWeekListsItem>> = ref(
	[
		{
			images: [img1, img2, img3, img4, img5],
			list_name: 'Top Movies of the Week',
			author_name: 'Alex Johnson',
			avatar: avatar1,
			likes: 345,
			comments: 10,
		},
		{
			images: [img7, img8, img9, img10, img11],
			list_name: 'Samantha’s Favorites',
			author_name: 'Samantha Green',
			avatar: avatar2,
			likes: 6892,
			comments: 1823,
		},
		{
			images: [img2, img4, img6, img8, img10],
			list_name: 'Michael’s Watchlist',
			author_name: 'Michael Brown',
			avatar: avatar3,
			likes: 11111,
			comments: 2589,
		},
	]
)
