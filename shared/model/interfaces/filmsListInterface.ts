export interface IFilmsList {
	id: number
	user_id: number
	publishedDate: number
	list_name: string
	list_description: string
	comments_quantity: number

	likes: number
	liked_by_users: number[] | []

	films: number[]
	films_quantity: number

	tags: Array<string>
}
