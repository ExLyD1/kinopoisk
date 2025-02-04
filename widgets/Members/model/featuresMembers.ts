import { ref, reactive } from 'vue'
import type { IMember } from '~/entities/Members/model/memberInterface'

import avatar1 from '~/widgets/Members/icons/featuredMembers/avatar1.jpg'
import avatar2 from '~/widgets/Members/icons/featuredMembers/avatar2.jpg'
import avatar3 from '~/widgets/Members/icons/featuredMembers/avatar3.jpg'
import avatar4 from '~/widgets/Members/icons/featuredMembers/avatar4.jpg'
import avatar5 from '~/widgets/Members/icons/featuredMembers/avatar5.jpg'

import img1 from '~/widgets/Members/icons/featuredMembers/cover_image1.jpg'
import img2 from '~/widgets/Members/icons/featuredMembers/cover_image2.jpg'
import img3 from '~/widgets/Members/icons/featuredMembers/cover_image3.jpg'
import img4 from '~/widgets/Members/icons/featuredMembers/cover_image4.jpg'
import img5 from '~/widgets/Members/icons/featuredMembers/cover_image5.jpg'
import img6 from '~/widgets/Members/icons/featuredMembers/cover_image6.jpg'
import img7 from '~/widgets/Members/icons/featuredMembers/cover_image7.jpg'
import img8 from '~/widgets/Members/icons/featuredMembers/cover_image8.jpg'
import img9 from '~/widgets/Members/icons/featuredMembers/cover_image9.jpg'
import img10 from '~/widgets/Members/icons/featuredMembers/cover_image10.jpg'
import img11 from '~/widgets/Members/icons/featuredMembers/cover_image11.jpg'
import img12 from '~/widgets/Members/icons/featuredMembers/cover_image12.jpg'

export const featuredMembersList: Ref<Array<IMember>> = ref([
	{
		avatar: avatar1,
		name: 'xuanlin',
		films: 763,
		reviews: 641,
		favorite_films: [img1, img2, img3, img4],
	},

	{
		avatar: avatar2,
		name: 'yuki',
		films: 528,
		reviews: 493,
		favorite_films: [img5, img6, img7, img8],
	},

	{
		avatar: avatar3,
		name: 'akira',
		films: 320,
		reviews: 212,
		favorite_films: [img9, img10, img11, img12],
	},

	{
		avatar: avatar4,
		name: 'emiko',
		films: 410,
		reviews: 302,
		favorite_films: [img1, img5, img6, img8],
	},

	{
		avatar: avatar5,
		name: 'keiko',
		films: 540,
		reviews: 453,
		favorite_films: [img3, img4, img9, img11],
	},
])
