export interface IUser {
	id: number
	user_avatar: string
	user_name: string

	// people quantity
	user_following_quantity: number
	user_followers_quantity: number

	// user created reviews
	user_reviews_quantity: number
	user_reviews: number[] // array of reviews Id

	// watched films
	user_films_quantity: number
	user_films: number[] | []

	// user created lists
	user_lists_quantity: number
	user_lists: number[] | []

	// liked films
	user_favorite_films_quantity: number
	user_favorite_films: number[] | []

	// liked lists
	user_favorite_lists_quantity: number
	user_favorite_lists: number[] | []

	// liked reviews
	user_favorite_reviews_quantity: number
	user_favorite_reviews: number[] | []

	// bio
	user_bio: string
	user_tags?: string[] | []

	// people ids
	user_following: number[] // id
	user_followers: number[] // id
	user_pinned_lists: number[] // id
}
