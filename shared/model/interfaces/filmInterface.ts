import type { IReview } from './reviewInterface'

export type IFilmGenres =
	| 'Any'
	| 'Action'
	| 'Adventure'
	| 'Animation'
	| 'Comedy'
	| 'Crime'
	| 'Documentary'
	| 'Drama'
	| 'Family'
	| 'Fantasy'
	| 'History'
	| 'Horror'
	| 'Music'
	| 'Mystery'
	| 'Romance'
	| 'Science'
	| 'Fiction'
	| 'Thriller'
	| 'Tv'
	| 'Movie'
	| 'War'
	| 'Western'

export interface IFilmItem {
	id: number
	film_name: string
	realise_year: number
	film_image: string
	author_name: string
	describtion: string
	duration: number

	views: number
	users_viewed: number[]

	list_contains: number
	lists: number[] | []

	reviews_quontity: number
	reviews: number[] | []

	likes: number
	liked_by_users: number[] | []

	rating1: number[] | []
	rating2: number[] | []
	rating3: number[] | []
	rating4: number[] | []
	rating5: number[] | []

	cast: string[]

	crew: {
		director: string[]
		producers: string[]
		writer: string[]
		original_writers: string[]
		casting: string[]
		editor: string[]
		cinematography: string[]
		asst_directors: string[]
		exec_producer: string[]
		camera_operator: string[]
		production_design: string[]
		art_direction: string[]
		set_decoration: string[]
		special_effects: string[]
		visual_effects: string[]
		title_design: string[]
		stunts: string[]
		composer: string[]
		sound: string[]
		costume_design: string[]
		makeup: string[]
		hairstyling: string[]
	}

	details: {
		studios: string[]
		country: string[]
		primary_language: string[]
		spoken_languages: string[]
		alternative_titles: string[]
	}

	genres: IFilmGenres[]
	themes: string[]
}
