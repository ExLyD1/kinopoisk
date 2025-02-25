import type { IReview } from './reviewInterface'

export interface IFilmItem {
	id: number
	film_name: string
	realise_year: number
	film_image: string
	author_name: string
	describtion: string
	duration: number
	views: number

	list_contains: number
	lists: number[] | []

	reviews_quontity: number
	reviews?: Array<number>

	likes: number
	liked_by_users: number[]

	rating1: number[] | []
	rating2: number[] | []
	rating3: number[] | []
	rating4: number[] | []
	rating5: number[] | []

	cast: Array<string>

	crew: {
		director: Array<string>
		producers: Array<string>
		writer: Array<string>
		original_writers: Array<string>
		casting: Array<string>
		editor: Array<string>
		cinematography: Array<string>
		asst_directors: Array<string>
		exec_producer: Array<string>
		camera_operator: Array<string>
		production_design: Array<string>
		art_direction: Array<string>
		set_decoration: Array<string>
		special_effects: Array<string>
		visual_effects: Array<string>
		title_design: Array<string>
		stunts: Array<string>
		composer: Array<string>
		sound: Array<string>
		costume_design: Array<string>
		makeup: Array<string>
		hairstyling: Array<string>
	}

	details?: {
		studios: Array<string>
		country: Array<string>
		primary_language: string[]
		spoken_languages: Array<string>
		alternative_titles: Array<string>
	}

	genres?: Array<string>
	themes?: Array<string>
}
