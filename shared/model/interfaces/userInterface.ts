import type { IFilmsList } from './filmsListInterface'
import type { IFilmItem } from './filmInterface'

export interface IUser {
	user_avatar: string
	user_name: string
	user_films_quantity: number
	user_lists_quantity: number
	user_following_quantity: number
	user_followers_quantity: number
	user_reviews_quantity: number
	// user_films ?: Array<>
	user_lists?: Array<IFilmsList>
	user_favorite_films?: Array<IFilmItem>
	user_favorite_films_quantity: number
	// user_following?: Array<>
	// user_followers?: Array<>
	// user_reviews?: Array<>
	user_bio: string
	user_tags?: Array<string>
	// user_pinned_lists: Array<>
}
