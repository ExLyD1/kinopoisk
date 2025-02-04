import { ref } from 'vue'
import type { Ref } from 'vue'

export interface ICrewPickListsItem {
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
}

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
import filmCover21 from '~/shared/ui/icons/filmCovers/filmCover21.jpg'
import filmCover22 from '~/shared/ui/icons/filmCovers/filmCover22.jpg'
import filmCover23 from '~/shared/ui/icons/filmCovers/filmCover23.jpg'
import filmCover24 from '~/shared/ui/icons/filmCovers/filmCover24.jpg'
import filmCover25 from '~/shared/ui/icons/filmCovers/filmCover25.jpg'
import filmCover26 from '~/shared/ui/icons/filmCovers/filmCover26.jpg'
import filmCover27 from '~/shared/ui/icons/filmCovers/filmCover27.jpg'
import filmCover28 from '~/shared/ui/icons/filmCovers/filmCover28.jpg'
import filmCover29 from '~/shared/ui/icons/filmCovers/filmCover29.jpg'
import filmCover30 from '~/shared/ui/icons/filmCovers/filmCover30.jpg'
import filmCover31 from '~/shared/ui/icons/filmCovers/filmCover31.jpg'
import filmCover32 from '~/shared/ui/icons/filmCovers/filmCover32.jpg'
import filmCover33 from '~/shared/ui/icons/filmCovers/filmCover33.jpg'
import filmCover34 from '~/shared/ui/icons/filmCovers/filmCover34.jpg'
import filmCover35 from '~/shared/ui/icons/filmCovers/filmCover35.jpg'

import avatar1 from '~/shared/ui/icons/avatars/avatar1.jpg'
import avatar2 from '~/shared/ui/icons/avatars/avatar2.jpg'
import avatar3 from '~/shared/ui/icons/avatars/avatar3.jpg'
import avatar4 from '~/shared/ui/icons/avatars/avatar4.jpg'
import avatar5 from '~/shared/ui/icons/avatars/avatar5.jpg'

export const crewPickListsItemsList: Ref<Array<ICrewPickListsItem>> = ref([
	{
		images: [filmCover21, filmCover22, filmCover23, filmCover24, filmCover25],
		list_name: 'David Cronenberg’s list of 37 films',
		author_name: 'Dave Vis',
		avatar: avatar1,
		films: 155,
	},
	{
		images: [filmCover26, filmCover27, filmCover28, filmCover29, filmCover30],
		list_name: 'The 97th Academy Award feature film nominees',
		author_name: 'liza 𓊆ྀི❤︎𓊇ྀི',
		avatar: avatar2,
		films: 19,
	},
	{
		images: [filmCover31, filmCover32, filmCover33, filmCover34, filmCover35],
		list_name:
			'The 97th Academy Award nominees for Best International Feature Film',
		author_name: 'LaCinetek',
		avatar: avatar3,
		films: 27,
	},
	{
		images: [filmCover14, filmCover5, filmCover21, filmCover24, filmCover19],
		list_name: 'for when you want to feel something',
		author_name: 'Samantha Green',
		avatar: avatar4,
		films: 985,
	},
	{
		images: [filmCover3, filmCover16, filmCover13, filmCover31, filmCover18],
		list_name: 'Official Top 250 Narrative Feature Films',
		author_name: 'Léo Barbosa',
		avatar: avatar5,
		films: 73,
	},
])
