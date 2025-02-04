import type { IFilmItem } from './filmInterface'

export interface IStory {
	story_name: string
	story_image: string
	published_date: number
	story_text: string
	story_films?: Array<IFilmItem>
}
