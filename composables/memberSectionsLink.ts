import { useMemberStore } from '~/features/Member/memberStore'

const memberStore = useMemberStore()

export const memberSectionsLink = (u_name: string, to_section: string) => {
	const currentPage = memberStore.currentPage

	return `/members/${generateSlug(u_name)}/${to_section}/page/${currentPage}`
}
