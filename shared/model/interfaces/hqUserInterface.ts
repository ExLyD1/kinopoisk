import type { IReview } from './reviewInterface'
import type { IFilmItem } from './filmInterface'
import type { IStory } from './storyInterface'
export interface IHqUser {
	user_avatar: string
	user_name: string
	user_followers: number
	user_likes: number
	user_lists: number
	user_films?: IFilmItem[]
	user_reviews?: IReview[]
	// user_posts: IPost[]
	user_stories?: IStory[]
	// user_comments: IComment[]
}
