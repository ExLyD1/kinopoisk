// Описание типа для пункта меню
export interface NavItem {
	label: string
	path?: string
	type: string
	image: string
}
import { useHeaderStore } from '~/features/Header/headerStore'

// Объявление массива с явным типом
export const navUnauthItems: Array<NavItem> = [
	{
		label: 'Sign in',
		image: new URL('~/features/Header/icons/signIn.png', import.meta.url).href,
		type: 'signIn',
	},
	{
		label: 'Create Account',
		image: new URL('~/features/Header/icons/signUp.png', import.meta.url).href,
		type: 'signUp',
	},
	{
		label: 'Films',
		path: '/Films',
		image: new URL('~/features/Header/icons/films.png', import.meta.url).href,
		type: 'dropDownFalse',
	},
	{
		label: 'Lists',
		path: '/Lists',
		image: new URL('~/features/Header/icons/lists.png', import.meta.url).href,
		type: 'dropDownFalse',
	},
	{
		label: 'Members',
		path: '/Members',
		image: new URL('~/features/Header/icons/members.png', import.meta.url).href,
		type: 'dropDownFalse',
	},
]
