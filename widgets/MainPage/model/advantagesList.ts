export interface IAdvantageCard {
	link: string
	text: string
}

import diary from '~/widgets/MainPage/icons/AdvantageCard/diary.png'
import eye from '~/widgets/MainPage/icons/AdvantageCard/eye.png'
import favorite from '~/widgets/MainPage/icons/AdvantageCard/favorite.png'
import menu_lines from '~/widgets/MainPage/icons/AdvantageCard/menu_lines.png'
import menu_squares from '~/widgets/MainPage/icons/AdvantageCard/menu_squares.png'
import star from '~/widgets/MainPage/icons/AdvantageCard/star.png'

export const advantageCardsList: Ref<Array<IAdvantageCard>> = ref([
	{
		link: eye,
		text: 'Keep track of every film you’ve ever watched (or just start from the day you join)',
	},
	{
		link: favorite,
		text: 'Show some love for your favorite films, lists and reviews with a “like”',
	},
	{
		link: menu_lines,
		text: 'Write and share reviews, and follow friends and other members to read theirs',
	},
	{
		link: star,
		text: 'Rate each film on a five-star scale (with halves) to record and share your reaction',
	},
	{
		link: diary,
		text: 'Keep track of every film you’ve ever watched (or just start from the day you join)',
	},
	{
		link: menu_squares,
		text: 'Compile and share lists of films on any topic and keep a watchlist of films to see',
	},
])
