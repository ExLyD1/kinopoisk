export interface IComment {
	id: number
	author_id: number
	item_id: number
	comment_text: string
	published_time: number
	liked_by_users: number[]
}
