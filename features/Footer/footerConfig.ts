interface IFooterItem {
	label: string
	pageLink: string
}
export const footerItemsList: Ref<Array<IFooterItem>> = ref([
	{
		label: 'About',
		pageLink: '/soon',
	},
	{
		label: 'Pro',
		pageLink: '/soon',
	},
	{
		label: 'News',
		pageLink: '/soon',
	},
	{
		label: 'Apps',
		pageLink: '/soon',
	},
	{
		label: 'Podcast',
		pageLink: '/soon',
	},
	{
		label: 'Year in Review',
		pageLink: '/soon',
	},
	{
		label: 'Gifts',
		pageLink: '/soon',
	},
	{
		label: 'Help',
		pageLink: '/soon',
	},
	{
		label: 'Terms',
		pageLink: '/soon',
	},
	{
		label: 'API',
		pageLink: '/soon',
	},
	{
		label: 'Contact',
		pageLink: '/soon',
	},
])

import facebook from '~/widgets/icons/facebook.png'
import instagram from '~/widgets/icons/instagram.png'
import telegram from '~/widgets/icons/telegram.png'
import tiktok from '~/widgets/icons/tiktok.png'
import twitter from '~/widgets/icons/twitter.png'

interface ISocialListItem {
	imageLink: string
	pageLink: string
}

export const footerSocialItemsList: Ref<Array<ISocialListItem>> = ref([
	{
		imageLink: facebook,
		pageLink: '/soon',
	},
	{
		imageLink: instagram,
		pageLink: '/soon',
	},
	{
		imageLink: telegram,
		pageLink: '/soon',
	},
	{
		imageLink: tiktok,
		pageLink: '/soon',
	},
	{
		imageLink: twitter,
		pageLink: '/soon',
	},
])
