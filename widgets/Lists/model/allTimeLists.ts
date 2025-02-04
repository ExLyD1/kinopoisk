export interface IAllTimeItem {
	images: Array<string>
	list_name: string
	avatar: string
	author_name: string
	timeAgoFromPublished: number
}

import img1 from '~/shared/ui/icons/filmCovers/filmCover46.jpg'
import img2 from '~/shared/ui/icons/filmCovers/filmCover47.jpg'
import img3 from '~/shared/ui/icons/filmCovers/filmCover48.jpg'
import img4 from '~/shared/ui/icons/filmCovers/filmCover49.jpg'
import img5 from '~/shared/ui/icons/filmCovers/filmCover50.jpg'
import img6 from '~/shared/ui/icons/filmCovers/filmCover51.jpg'
import img7 from '~/shared/ui/icons/filmCovers/filmCover52.jpg'
import img8 from '~/shared/ui/icons/filmCovers/filmCover53.jpg'
import img9 from '~/shared/ui/icons/filmCovers/filmCover54.jpg'
import img10 from '~/shared/ui/icons/filmCovers/filmCover55.jpg'

import img11 from '~/shared/ui/icons/filmCovers/filmCover2.jpg'
import img12 from '~/shared/ui/icons/filmCovers/filmCover7.jpg'
import img13 from '~/shared/ui/icons/filmCovers/filmCover14.jpg'
import img14 from '~/shared/ui/icons/filmCovers/filmCover28.jpg'
import img15 from '~/shared/ui/icons/filmCovers/filmCover35.jpg'
import img16 from '~/shared/ui/icons/filmCovers/filmCover42.jpg'
import img17 from '~/shared/ui/icons/filmCovers/filmCover5.jpg'
import img18 from '~/shared/ui/icons/filmCovers/filmCover10.jpg'
import img19 from '~/shared/ui/icons/filmCovers/filmCover15.jpg'
import img20 from '~/shared/ui/icons/filmCovers/filmCover20.jpg'

import avatar1 from '~/shared/ui/icons/avatars/avatar1.jpg'
import avatar2 from '~/shared/ui/icons/avatars/avatar2.jpg'

export const allTimeItemsList: Ref<Array<IAllTimeItem>> = ref([
	{
		images: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10],
		list_name: 'Official Top 250 Narrative Feature Films',
		avatar: avatar1,
		author_name: 'Dave Vis',
		timeAgoFromPublished: Date.now() - 1000 * 60 * 60 * 24 * 90, // 3 месяца назад
	},
	{
		images: [
			img11,
			img12,
			img13,
			img14,
			img15,
			img16,
			img17,
			img18,
			img19,
			img20,
		],
		list_name: 'Official Top 250 Documentary Films',
		avatar: avatar2,
		author_name: 'Jack Moulton🗽',
		timeAgoFromPublished: Date.now() - 1000 * 60 * 60 * 24 * 365 * 8, // 8 лет назад
	},
])
