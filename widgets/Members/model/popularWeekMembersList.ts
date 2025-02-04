import { ref, reactive } from 'vue'
import type { IMember } from '~/entities/Members/model/memberInterface'

import avatar1 from '~/widgets/Members/icons/popularWeekMembers/avatar1.jpg'
import avatar2 from '~/widgets/Members/icons/popularWeekMembers/avatar2.jpg'
import avatar3 from '~/widgets/Members/icons/popularWeekMembers/avatar3.jpg'
import avatar4 from '~/widgets/Members/icons/popularWeekMembers/avatar4.jpg'
import avatar5 from '~/widgets/Members/icons/popularWeekMembers/avatar5.jpg'

import img1 from '~/widgets/Members/icons/popularWeekMembers/cover_image1.jpg'
import img2 from '~/widgets/Members/icons/popularWeekMembers/cover_image2.jpg'
import img3 from '~/widgets/Members/icons/popularWeekMembers/cover_image3.jpg'
import img4 from '~/widgets/Members/icons/popularWeekMembers/cover_image4.jpg'
import img5 from '~/widgets/Members/icons/popularWeekMembers/cover_image5.jpg'
import img6 from '~/widgets/Members/icons/popularWeekMembers/cover_image6.jpg'
import img7 from '~/widgets/Members/icons/popularWeekMembers/cover_image7.jpg'
import img8 from '~/widgets/Members/icons/popularWeekMembers/cover_image8.jpg'
import img9 from '~/widgets/Members/icons/popularWeekMembers/cover_image9.jpg'
import img10 from '~/widgets/Members/icons/popularWeekMembers/cover_image10.jpg'
import img11 from '~/widgets/Members/icons/popularWeekMembers/cover_image11.jpg'
import img12 from '~/widgets/Members/icons/popularWeekMembers/cover_image12.jpg'

export const popularWeekMembersList: Ref<Array<IMember>> = ref([
	{
		avatar: avatar1,
		name: 'James (Schaffrillas)',
		films: 1200,
		reviews: 1005,
		favorite_films: [img1, img2, img3, img4],
	},

	{
		avatar: avatar2,
		name: 'zoë rose bryant',
		films: 4907,
		reviews: 2309,
		favorite_films: [img5, img6, img7, img8],
	},

	{
		avatar: avatar3,
		name: 'Jay',
		films: 12500,
		reviews: 700,
		favorite_films: [img9, img10, img11, img12],
	},

	{
		avatar: avatar4,
		name: 'Karsten',
		films: 7534,
		reviews: 98,
		favorite_films: [img1, img5, img6, img8],
	},

	{
		avatar: avatar5,
		name: 'aaron',
		films: 1233,
		reviews: 992,
		favorite_films: [img3, img4, img9, img11],
	},
])
