import type { IFilmItem } from './filmInterface'
import type { IComment } from './commentInterface'
export interface IFilmsList {
	author_name: string
	author_avatar: string
	publishedDate: number
	list_name: string
	list_description: string
	likes: number
	comments_quantity: number
	// tags?: Array<string>
	films: Array<IFilmItem>
	films_quantity: number
	// comments?: Array<IComment>
}
