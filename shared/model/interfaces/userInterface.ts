import type { IFilmsList } from './filmsListInterface'
import type { IFilmItem } from './filmInterface'

export interface IUser {
	id: number
	user_avatar: string
	user_name: string

	user_following_quantity: number
	user_followers_quantity: number

	user_reviews_quantity: number
	user_reviews: number[] // array of reviews Id

	user_films_quantity: number
	user_films: number[] | []

	user_lists_quantity: number
	user_lists: number[] | []

	user_favorite_films_quantity: number
	user_favorite_films: number[] | []

	user_favorite_lists_quantity: number
	user_favorite_lists: number[] | []

	user_bio: string
	user_tags?: string[] | []
	// user_following?: Array<>
	// user_followers?: Array<>
	// user_reviews?: Array<>
	// user_pinned_lists: Array<>
}
