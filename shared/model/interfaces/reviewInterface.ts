export interface IReview {
	id: number
	type: 'list' | 'film'
	item_id: number // ^ айди фильми или списка к которому был оставлен отзыв
	user_id: number

	review_comments: number
	review_comments_users: number[]

	review_likes: number
	review_likes_users: number[]

	review_text: string
	review_rate?: number
	isEdited: boolean
	published_date: number
}
