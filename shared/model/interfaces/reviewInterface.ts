export interface IReview {
	id: number
	type: 'list' | 'film'
	item_id: number // ^ айди фильми или списка к которому был оставлен отзыв
	user_id: number
	author_avatar: string
	author_name: string
	review_comments: number
	review_likes: number
	review_text: string
	review_rate?: number
	isEdited: boolean
	published_date: number
}
