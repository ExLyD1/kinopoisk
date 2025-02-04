import { ref } from 'vue'
import type { IListMember } from '~/entities/Members/model/memberListInterface'

import avatar1 from '~/widgets/Members/icons/popularWeekMembers/avatar1.jpg'
import avatar2 from '~/widgets/Members/icons/popularWeekMembers/avatar2.jpg'
import avatar3 from '~/widgets/Members/icons/popularWeekMembers/avatar3.jpg'
import avatar4 from '~/widgets/Members/icons/popularWeekMembers/avatar4.jpg'
import avatar5 from '~/widgets/Members/icons/popularWeekMembers/avatar5.jpg'
import avatar6 from '~/widgets/Members/icons/popularWeekMembers/avatar6.jpg'
import avatar7 from '~/widgets/Members/icons/popularWeekMembers/avatar7.jpg'
import avatar8 from '~/widgets/Members/icons/popularWeekMembers/avatar8.jpg'
import avatar9 from '~/widgets/Members/icons/popularWeekMembers/avatar9.jpg'
import avatar10 from '~/widgets/Members/icons/popularWeekMembers/avatar10.jpg'
import avatar11 from '~/widgets/Members/icons/popularWeekMembers/avatar11.jpg'
import avatar12 from '~/widgets/Members/icons/popularWeekMembers/avatar12.jpg'
import avatar13 from '~/widgets/Members/icons/popularWeekMembers/avatar13.jpg'
import avatar14 from '~/widgets/Members/icons/popularWeekMembers/avatar14.jpg'
import avatar15 from '~/widgets/Members/icons/popularWeekMembers/avatar15.jpg'
import avatar16 from '~/widgets/Members/icons/popularWeekMembers/avatar16.jpg'
import avatar17 from '~/widgets/Members/icons/popularWeekMembers/avatar17.jpg'

export const membersList: Ref<Array<IListMember>> = ref([
	{
		avatar: avatar1,
		name: 'James (Schaffrillas)',
		films: 1200,
		reviews: 1005,
		likes: 7804,
		films_viewed: 11005,
		films_list: 13,
	},
	{
		avatar: avatar2,
		name: 'John Doe',
		films: 980,
		reviews: 800,
		likes: 6720,
		films_viewed: 9200,
		films_list: 11,
	},
	{
		avatar: avatar3,
		name: 'Sarah Lee',
		films: 1500,
		reviews: 1300,
		likes: 9000,
		films_viewed: 14500,
		films_list: 15,
	},
	{
		avatar: avatar4,
		name: 'Mike Johnson',
		films: 900,
		reviews: 760,
		likes: 5300,
		films_viewed: 7500,
		films_list: 10,
	},
	{
		avatar: avatar5,
		name: 'Emily Clark',
		films: 1100,
		reviews: 950,
		likes: 7800,
		films_viewed: 11800,
		films_list: 12,
	},
	{
		avatar: avatar6,
		name: 'Jake Peralta',
		films: 1150,
		reviews: 1020,
		likes: 8050,
		films_viewed: 12000,
		films_list: 14,
	},
	{
		avatar: avatar7,
		name: 'Rosa Diaz',
		films: 1050,
		reviews: 900,
		likes: 7300,
		films_viewed: 10500,
		films_list: 12,
	},
	{
		avatar: avatar8,
		name: 'Terry Jeffords',
		films: 1300,
		reviews: 1150,
		likes: 8600,
		films_viewed: 14000,
		films_list: 16,
	},
	{
		avatar: avatar9,
		name: 'Captain Holt',
		films: 850,
		reviews: 720,
		likes: 5000,
		films_viewed: 6800,
		films_list: 9,
	},
	{
		avatar: avatar10,
		name: 'Amy Santiago',
		films: 1200,
		reviews: 1050,
		likes: 8000,
		films_viewed: 12000,
		films_list: 13,
	},
	{
		avatar: avatar11,
		name: 'Charles Boyle',
		films: 950,
		reviews: 810,
		likes: 6200,
		films_viewed: 9500,
		films_list: 11,
	},
	{
		avatar: avatar12,
		name: 'Adrian Pimento',
		films: 1000,
		reviews: 870,
		likes: 7100,
		films_viewed: 10200,
		films_list: 12,
	},
	{
		avatar: avatar13,
		name: 'Gina Linetti',
		films: 1100,
		reviews: 980,
		likes: 7500,
		films_viewed: 11200,
		films_list: 13,
	},
	{
		avatar: avatar14,
		name: 'Ray Holt',
		films: 980,
		reviews: 870,
		likes: 6600,
		films_viewed: 9500,
		films_list: 11,
	},
	{
		avatar: avatar15,
		name: 'Lana Kane',
		films: 1250,
		reviews: 1050,
		likes: 7800,
		films_viewed: 12800,
		films_list: 14,
	},
	{
		avatar: avatar16,
		name: 'Sterling Archer',
		films: 1400,
		reviews: 1250,
		likes: 8800,
		films_viewed: 15000,
		films_list: 17,
	},
	{
		avatar: avatar17,
		name: 'Malory Archer',
		films: 980,
		reviews: 850,
		likes: 6500,
		films_viewed: 10000,
		films_list: 11,
	},
])
