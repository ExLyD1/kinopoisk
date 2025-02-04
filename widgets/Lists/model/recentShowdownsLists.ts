export interface IRecentShowDownsItem {
	image: string
	list_name: string
	description: string
}

import img1 from '~/shared/ui/icons/filmCovers/filmCover31.jpg'
import img2 from '~/shared/ui/icons/filmCovers/filmCover32.jpg'
import img3 from '~/shared/ui/icons/filmCovers/filmCover33.jpg'

export const recentShowdownsItemsList: Ref<Array<IRecentShowDownsItem>> = ref([
	{
		image: img1,
		list_name: 'The Favourite',
		description: 'Best Nominees for the Outstanding British Film BAFTA',
	},
	{
		image: img2,
		list_name: 'The NeverEnding Story',
		description: 'Best long films',
	},
	{
		image: img3,
		list_name: 'Call Me by Your Name',
		description: 'Best films with first-name titles',
	},
])
