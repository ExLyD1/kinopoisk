import type { IStory } from './storyInterface'
export interface IHqUser {
	id: number
	user_avatar: string
	user_name: string
	user_followers: number
	user_likes: number
	user_lists: number
	user_films?: number[]
	user_reviews?: number[]
	// user_posts: IPost[]
	user_stories?: IStory[]
	// user_comments: IComment[]
}
