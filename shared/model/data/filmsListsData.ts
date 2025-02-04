import type { IFilmsList } from '../interfaces/filmsListInterface'
import { filmsList } from './filmsData'

export const filmsListsData: Ref<Array<IFilmsList>> = ref([
	{
		author_name: 'James Cameron',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar2.jpg',
			import.meta.url
		).href,
		publishedDate: 1667517635,
		list_name: 'Top Dramas',
		list_description: 'Drama films that will stir your emotions.',
		likes: 7838,
		comments_quontity: 796,
		films: filmsList,
	},
	{
		author_name: 'Emma Stone',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar10.jpg',
			import.meta.url
		).href,
		publishedDate: 1636696990,
		list_name: 'Feel-Good Movies',
		list_description: 'Feel-good movies to brighten your day.',
		likes: 5559,
		comments_quontity: 235,
		films: filmsList,
	},
	{
		author_name: 'Sophia Loren',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar2.jpg',
			import.meta.url
		).href,
		publishedDate: 1730949919,
		list_name: 'Best Animation Movies',
		list_description: 'Mind-bending science fiction films you can’t miss.',
		likes: 2704,
		comments_quontity: 612,
		films: filmsList,
	},
	{
		author_name: 'Olivia Wilde',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar12.jpg',
			import.meta.url
		).href,
		publishedDate: 1687285453,
		list_name: 'Must-See Classics',
		list_description: 'Timeless classics that everyone should watch.',
		likes: 4601,
		comments_quontity: 644,
		films: filmsList,
	},
	{
		author_name: 'Emma Stone',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar3.jpg',
			import.meta.url
		).href,
		publishedDate: 1625623363,
		list_name: 'Best Sci-Fi Films',
		list_description: 'Thrillers that will keep you at the edge of your seat.',
		likes: 2592,
		comments_quontity: 520,
		films: filmsList,
	},
	{
		author_name: 'James Cameron',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar5.jpg',
			import.meta.url
		).href,
		publishedDate: 1665990198,
		list_name: 'Top Dramas',
		list_description: 'Drama films that will stir your emotions.',
		likes: 5746,
		comments_quontity: 521,
		films: filmsList,
	},
	{
		author_name: 'Michael Bay',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar7.jpg',
			import.meta.url
		).href,
		publishedDate: 1603842593,
		list_name: 'Best Romantic Comedies',
		list_description: 'Thrillers that will keep you at the edge of your seat.',
		likes: 8566,
		comments_quontity: 344,
		films: filmsList,
	},
	{
		author_name: 'Christopher Nolan',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar9.jpg',
			import.meta.url
		).href,
		publishedDate: 1617802291,
		list_name: 'Best Romantic Comedies',
		list_description: 'Mind-bending science fiction films you can’t miss.',
		likes: 3550,
		comments_quontity: 215,
		films: filmsList,
	},
	{
		author_name: 'James Cameron',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar2.jpg',
			import.meta.url
		).href,
		publishedDate: 1625634912,
		list_name: 'Feel-Good Movies',
		list_description: 'Timeless classics that everyone should watch.',
		likes: 6436,
		comments_quontity: 184,
		films: filmsList,
	},
	{
		author_name: 'Chloe Grace Moretz',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar1.jpg',
			import.meta.url
		).href,
		publishedDate: 1677948568,
		list_name: 'Best Romantic Comedies',
		list_description: 'Thrillers that will keep you at the edge of your seat.',
		likes: 1627,
		comments_quontity: 543,
		films: filmsList,
	},
	{
		author_name: 'Isabella Thomas',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar15.jpg',
			import.meta.url
		).href,
		publishedDate: 1654958477,
		list_name: 'Underrated Gems',
		list_description: 'Feel-good movies to brighten your day.',
		likes: 2925,
		comments_quontity: 737,
		films: filmsList,
	},
	{
		author_name: 'Olivia Wilde',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar3.jpg',
			import.meta.url
		).href,
		publishedDate: 1610108316,
		list_name: 'Underrated Gems',
		list_description: 'Movies from the 90s that still resonate.',
		likes: 3555,
		comments_quontity: 437,
		films: filmsList,
	},
	{
		author_name: 'Daniel Craig',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar1.jpg',
			import.meta.url
		).href,
		publishedDate: 1608628839,
		list_name: 'Best Romantic Comedies',
		list_description: 'Feel-good movies to brighten your day.',
		likes: 6786,
		comments_quontity: 573,
		films: filmsList,
	},
	{
		author_name: 'John Doe',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar13.jpg',
			import.meta.url
		).href,
		publishedDate: 1628842796,
		list_name: 'Top Dramas',
		list_description: 'Drama films that will stir your emotions.',
		likes: 4787,
		comments_quontity: 442,
		films: filmsList,
	},
	{
		author_name: 'James Cameron',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar15.jpg',
			import.meta.url
		).href,
		publishedDate: 1720073336,
		list_name: 'Top Thrillers',
		list_description: 'Mind-bending science fiction films you can’t miss.',
		likes: 2392,
		comments_quontity: 691,
		films: filmsList,
	},
	{
		author_name: 'James Cameron',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar14.jpg',
			import.meta.url
		).href,
		publishedDate: 1695629576,
		list_name: 'Must-See Classics',
		list_description: 'Best animated films to watch at any age.',
		likes: 3714,
		comments_quontity: 320,
		films: filmsList,
	},
	{
		author_name: 'Isabella Thomas',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar1.jpg',
			import.meta.url
		).href,
		publishedDate: 1622800380,
		list_name: 'Best Animation Movies',
		list_description: 'Thrillers that will keep you at the edge of your seat.',
		likes: 8837,
		comments_quontity: 805,
		films: filmsList,
	},
	{
		author_name: 'John Doe',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar7.jpg',
			import.meta.url
		).href,
		publishedDate: 1612470394,
		list_name: 'Best Animation Movies',
		list_description: 'Movies from the 90s that still resonate.',
		likes: 8787,
		comments_quontity: 941,
		films: filmsList,
	},
	{
		author_name: 'John Doe',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar9.jpg',
			import.meta.url
		).href,
		publishedDate: 1641981524,
		list_name: 'Best of the 90s',
		list_description: 'Thrillers that will keep you at the edge of your seat.',
		likes: 5839,
		comments_quontity: 880,
		films: filmsList,
	},
	{
		author_name: 'Chloe Grace Moretz',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar10.jpg',
			import.meta.url
		).href,
		publishedDate: 1666436325,
		list_name: 'Best Sci-Fi Films',
		list_description: 'Timeless classics that everyone should watch.',
		likes: 2787,
		comments_quontity: 994,
		films: filmsList,
	},
	{
		author_name: 'Emma Stone',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar8.jpg',
			import.meta.url
		).href,
		publishedDate: 1646251720,
		list_name: 'Must-See Classics',
		list_description: 'Timeless classics that everyone should watch.',
		likes: 9973,
		comments_quontity: 362,
		films: filmsList,
	},
	{
		author_name: 'John Doe',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar14.jpg',
			import.meta.url
		).href,
		publishedDate: 1736429915,
		list_name: 'Best of the 90s',
		list_description: 'Movies from the 90s that still resonate.',
		likes: 1812,
		comments_quontity: 782,
		films: filmsList,
	},
	{
		author_name: 'Christopher Nolan',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar2.jpg',
			import.meta.url
		).href,
		publishedDate: 1682960348,
		list_name: 'Best Sci-Fi Films',
		list_description: 'Drama films that will stir your emotions.',
		likes: 5643,
		comments_quontity: 410,
		films: filmsList,
	},
	{
		author_name: 'Michael Bay',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar4.jpg',
			import.meta.url
		).href,
		publishedDate: 1636706191,
		list_name: 'Top Dramas',
		list_description: 'Timeless classics that everyone should watch.',
		likes: 6543,
		comments_quontity: 625,
		films: filmsList,
	},
	{
		author_name: 'Christopher Nolan',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar10.jpg',
			import.meta.url
		).href,
		publishedDate: 1649821900,
		list_name: 'Top Dramas',
		list_description: 'Timeless classics that everyone should watch.',
		likes: 2761,
		comments_quontity: 154,
		films: filmsList,
	},
	{
		author_name: 'Michael Bay',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar11.jpg',
			import.meta.url
		).href,
		publishedDate: 1648313996,
		list_name: 'Top Dramas',
		list_description: 'Thrillers that will keep you at the edge of your seat.',
		likes: 9034,
		comments_quontity: 618,
		films: filmsList,
	},
	{
		author_name: 'Chloe Grace Moretz',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar1.jpg',
			import.meta.url
		).href,
		publishedDate: 1711339055,
		list_name: 'Top Thrillers',
		list_description: 'Romantic comedies to lift your mood.',
		likes: 9795,
		comments_quontity: 738,
		films: filmsList,
	},
	{
		author_name: 'Chloe Grace Moretz',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar6.jpg',
			import.meta.url
		).href,
		publishedDate: 1694086321,
		list_name: 'Best of the 90s',
		list_description:
			'Action-packed films that will get your adrenaline going.',
		likes: 2666,
		comments_quontity: 613,
		films: filmsList,
	},
	{
		author_name: 'Chloe Grace Moretz',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar1.jpg',
			import.meta.url
		).href,
		publishedDate: 1726561907,
		list_name: 'Best Romantic Comedies',
		list_description: 'Thrillers that will keep you at the edge of your seat.',
		likes: 3490,
		comments_quontity: 656,
		films: filmsList,
	},
	{
		author_name: 'Michael Bay',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar12.jpg',
			import.meta.url
		).href,
		publishedDate: 1672687307,
		list_name: 'Best Animation Movies',
		list_description: 'Romantic comedies to lift your mood.',
		likes: 5742,
		comments_quontity: 299,
		films: filmsList,
	},
	{
		author_name: 'Chloe Grace Moretz',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar8.jpg',
			import.meta.url
		).href,
		publishedDate: 1735056986,
		list_name: 'Best of the 90s',
		list_description: 'Drama films that will stir your emotions.',
		likes: 6543,
		comments_quontity: 685,
		films: filmsList,
	},
	{
		author_name: 'Chloe Grace Moretz',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar14.jpg',
			import.meta.url
		).href,
		publishedDate: 1618877528,
		list_name: 'Best Animation Movies',
		list_description: 'Mind-bending science fiction films you can’t miss.',
		likes: 6801,
		comments_quontity: 608,
		films: filmsList,
	},
	{
		author_name: 'Olivia Wilde',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar14.jpg',
			import.meta.url
		).href,
		publishedDate: 1667913619,
		list_name: 'Action Hits',
		list_description: 'Thrillers that will keep you at the edge of your seat.',
		likes: 5542,
		comments_quontity: 590,
		films: filmsList,
	},
	{
		author_name: 'Sophia Loren',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar12.jpg',
			import.meta.url
		).href,
		publishedDate: 1641968961,
		list_name: 'Must-See Classics',
		list_description: 'Movies from the 90s that still resonate.',
		likes: 6557,
		comments_quontity: 425,
		films: filmsList,
	},
	{
		author_name: 'Emma Stone',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar6.jpg',
			import.meta.url
		).href,
		publishedDate: 1729346560,
		list_name: 'Top Thrillers',
		list_description: 'Best animated films to watch at any age.',
		likes: 9191,
		comments_quontity: 411,
		films: filmsList,
	},
	{
		author_name: 'Olivia Wilde',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar11.jpg',
			import.meta.url
		).href,
		publishedDate: 1646668648,
		list_name: 'Top Thrillers',
		list_description: 'Hidden gems that deserve more attention.',
		likes: 6352,
		comments_quontity: 112,
		films: filmsList,
	},
	{
		author_name: 'Isabella Thomas',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar15.jpg',
			import.meta.url
		).href,
		publishedDate: 1684744027,
		list_name: 'Underrated Gems',
		list_description: 'Drama films that will stir your emotions.',
		likes: 7337,
		comments_quontity: 523,
		films: filmsList,
	},
	{
		author_name: 'Daniel Craig',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar15.jpg',
			import.meta.url
		).href,
		publishedDate: 1607598700,
		list_name: 'Top Thrillers',
		list_description: 'Timeless classics that everyone should watch.',
		likes: 4545,
		comments_quontity: 371,
		films: filmsList,
	},
	{
		author_name: 'John Doe',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar13.jpg',
			import.meta.url
		).href,
		publishedDate: 1640895273,
		list_name: 'Feel-Good Movies',
		list_description: 'Thrillers that will keep you at the edge of your seat.',
		likes: 5759,
		comments_quontity: 117,
		films: filmsList,
	},
	{
		author_name: 'James Cameron',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar2.jpg',
			import.meta.url
		).href,
		publishedDate: 1717449305,
		list_name: 'Best Sci-Fi Films',
		list_description: 'Feel-good movies to brighten your day.',
		likes: 8121,
		comments_quontity: 397,
		films: filmsList,
	},
	{
		author_name: 'Christopher Nolan',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar12.jpg',
			import.meta.url
		).href,
		publishedDate: 1648792297,
		list_name: 'Best of the 90s',
		list_description: 'Drama films that will stir your emotions.',
		likes: 6313,
		comments_quontity: 318,
		films: filmsList,
	},
	{
		author_name: 'James Cameron',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar7.jpg',
			import.meta.url
		).href,
		publishedDate: 1727301517,
		list_name: 'Best of the 90s',
		list_description:
			'Action-packed films that will get your adrenaline going.',
		likes: 8325,
		comments_quontity: 788,
		films: filmsList,
	},
	{
		author_name: 'Daniel Craig',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar5.jpg',
			import.meta.url
		).href,
		publishedDate: 1662837893,
		list_name: 'Top Thrillers',
		list_description: 'Best animated films to watch at any age.',
		likes: 9696,
		comments_quontity: 108,
		films: filmsList,
	},
	{
		author_name: 'Michael Bay',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar15.jpg',
			import.meta.url
		).href,
		publishedDate: 1670359178,
		list_name: 'Underrated Gems',
		list_description: 'Hidden gems that deserve more attention.',
		likes: 8442,
		comments_quontity: 459,
		films: filmsList,
	},
	{
		author_name: 'Chloe Grace Moretz',
		author_avatar: new URL(
			'~/shared/ui/icons/avatars/avatar14.jpg',
			import.meta.url
		).href,
		publishedDate: 1715333451,
		list_name: 'Best of the 90s',
		list_description: 'Feel-good movies to brighten your day.',
		likes: 3204,
		comments_quontity: 737,
		films: filmsList,
	},
])
