export interface ICrewItem {
	images: Array<string>
	list_name: string
}

import img1 from '~/shared/ui/icons/filmCovers/filmCover36.jpg'
import img2 from '~/shared/ui/icons/filmCovers/filmCover37.jpg'
import img3 from '~/shared/ui/icons/filmCovers/filmCover38.jpg'
import img4 from '~/shared/ui/icons/filmCovers/filmCover39.jpg'
import img5 from '~/shared/ui/icons/filmCovers/filmCover40.jpg'
import img6 from '~/shared/ui/icons/filmCovers/filmCover41.jpg'
import img7 from '~/shared/ui/icons/filmCovers/filmCover42.jpg'
import img8 from '~/shared/ui/icons/filmCovers/filmCover43.jpg'
import img9 from '~/shared/ui/icons/filmCovers/filmCover44.jpg'
import img10 from '~/shared/ui/icons/filmCovers/filmCover12.jpg'
import img11 from '~/shared/ui/icons/filmCovers/filmCover1.jpg'
import img12 from '~/shared/ui/icons/filmCovers/filmCover18.jpg'
import img13 from '~/shared/ui/icons/filmCovers/filmCover28.jpg'
import img14 from '~/shared/ui/icons/filmCovers/filmCover33.jpg'
import img15 from '~/shared/ui/icons/filmCovers/filmCover9.jpg'

export const crewItemsList: Ref<Array<ICrewItem>> = ref([
	{
		images: [img1, img2, img3, img4, img5],
		list_name: 'Top 100 Best Picture Nominees with the Most Fans',
	},
	{
		images: [img6, img7, img8, img9, img10],
		list_name: 'Films that influenced ‘Presence’ writer David Koepp',
	},
	{
		images: [img11, img12, img13, img14, img15],
		list_name: 'Sundance 2025: Letterboxd Crew Picks',
	},
])
