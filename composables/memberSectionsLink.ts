import { useMemberStore } from '~/features/Member/memberStore'

export const memberSectionsLink = (
	u_name: string,
	to_section: string,
	currentPage: number
) => {
	return `/members/${generateSlug(u_name)}/${to_section}/page/${currentPage}`
}
