import * as fs from 'fs'
import { Pool } from 'pg'

import type { IUser } from '../interfaces/userInterface'
import type { IComment } from '../interfaces/commentInterface'

// Функция для импорта пользователей из JSON в PostgreSQL
async function importUsersFromJson(jsonFilePath: string): Promise<void> {
	// Читаем JSON-файл
	const jsonData = fs.readFileSync(jsonFilePath, 'utf8')
	const users: IUser[] = JSON.parse(jsonData)

	// Подключаемся к PostgreSQL
	const pool = new Pool({
		user: 'postgres', // Замените на ваше имя пользователя
		host: 'localhost', // Хост базы данных
		database: 'filmoteca', // Название вашей базы данных
		password: 'Sasha0953582895', // Пароль
		port: 5432, // Порт (по умолчанию для PostgreSQL)
	})

	try {
		// Импортируем каждого пользователя в существующую таблицу
		for (const user of users) {
			const query = `
        INSERT INTO users (
          id, user_avatar, user_name, user_following_quantity, user_followers_quantity,
          user_reviews_quantity, user_reviews, user_films_quantity, user_films,
          user_lists_quantity, user_lists, user_favorite_films_quantity, user_favorite_films,
          user_favorite_lists_quantity, user_favorite_lists, user_favorite_reviews_quantity,
          user_favorite_reviews, user_bio, user_tags, user_following, user_followers,
          user_pinned_lists
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22
        )
        ON CONFLICT (id) DO UPDATE SET
          user_avatar = EXCLUDED.user_avatar,
          user_name = EXCLUDED.user_name,
          user_following_quantity = EXCLUDED.user_following_quantity,
          user_followers_quantity = EXCLUDED.user_followers_quantity,
          user_reviews_quantity = EXCLUDED.user_reviews_quantity,
          user_reviews = EXCLUDED.user_reviews,
          user_films_quantity = EXCLUDED.user_films_quantity,
          user_films = EXCLUDED.user_films,
          user_lists_quantity = EXCLUDED.user_lists_quantity,
          user_lists = EXCLUDED.user_lists,
          user_favorite_films_quantity = EXCLUDED.user_favorite_films_quantity,
          user_favorite_films = EXCLUDED.user_favorite_films,
          user_favorite_lists_quantity = EXCLUDED.user_favorite_lists_quantity,
          user_favorite_lists = EXCLUDED.user_favorite_lists,
          user_favorite_reviews_quantity = EXCLUDED.user_favorite_reviews_quantity,
          user_favorite_reviews = EXCLUDED.user_favorite_reviews,
          user_bio = EXCLUDED.user_bio,
          user_tags = EXCLUDED.user_tags,
          user_following = EXCLUDED.user_following,
          user_followers = EXCLUDED.user_followers,
          user_pinned_lists = EXCLUDED.user_pinned_lists
        RETURNING id;
      `
			const values = [
				user.id,
				user.user_avatar,
				user.user_name,
				user.user_following_quantity,
				user.user_followers_quantity,
				user.user_reviews_quantity,
				user.user_reviews,
				user.user_films_quantity,
				user.user_films,
				user.user_lists_quantity,
				user.user_lists,
				user.user_favorite_films_quantity,
				user.user_favorite_films,
				user.user_favorite_lists_quantity,
				user.user_favorite_lists,
				user.user_favorite_reviews_quantity,
				user.user_favorite_reviews,
				user.user_bio,
				user.user_tags || null, // Если undefined, записываем NULL
				user.user_following,
				user.user_followers,
				user.user_pinned_lists,
			]

			const result = await pool.query(query, values)
			console.log(
				result.rows.length > 0
					? `Пользователь ${user.user_name} (ID: ${user.id}) добавлен`
					: `Пользователь ${user.user_name} (ID: ${user.id}) обновлен`
			)
		}
	} catch (error) {
		console.error('Ошибка при импорте пользователей:', error)
	} finally {
		// Закрываем соединение
		await pool.end()
		console.log('Соединение с базой данных закрыто')
	}
}

async function importCommentsFromJson(jsonFilePath: string): Promise<void> {
	const jsonData = fs.readFileSync(jsonFilePath, 'utf8')
	const comments: IComment[] = JSON.parse(jsonData)

	const pool = new Pool({
		user: 'postgres',
		host: 'localhost',
		password: 'Sasha0953582895',
		database: 'filmoteca',
		port: 5432,
	})

	try {
		for (const comment of comments) {
			const query = `
				INSERT INTO comments (
					id,author_id,item_id,comment_text,published_time,liked_by_users
				) VALUES (
					$1, $2, $3, $4, $5, $6
				)
				ON CONFLICT (id) DO UPDATE SET 
					author_id = EXCLUDED.author_id,
					item_id = EXCLUDED.item_id,
					comment_text = EXCLUDED.comment_text,
					published_time = EXCLUDED.published_time,
					liked_by_users = EXCLUDED.liked_by_users
				RETURNING id;
			`

			const values = [
				comment.id,
				comment.author_id,
				comment.item_id,
				comment.comment_text,
				comment.published_time,
				comment.liked_by_users,
			]

			const result = await pool.query(query, values)
			console.log(
				result.rows.length > 0
					? `Комментарий  (ID: ${comment.id}) добавлен`
					: `Комментарий  (ID: ${comment.id}) обновлен`
			)
		}
	} catch (error) {
		console.error('Ошибка при импорте Комментария:', error)
	} finally {
		// Закрываем соединение
		await pool.end()
		console.log('Соединение с базой данных закрыто')
	}
}

async function importReviewFromJson(jsonFilePath: string): Promise<void> {
	const jsonData = fs.readFileSync(jsonFilePath, 'utf-8')
	const reviews = JSON.parse(jsonData)

	const pool = new Pool({
		user: 'postgres',
		host: 'localhost',
		database: 'filmoteca',
		password: 'Sasha0953582895',
		port: 5432,
	})

	try {
		for (const review of reviews) {
			const query = `
				INSERT INTO reviews (
					id,type,item_id,review_comments,review_comments_users,review_likes,review_likes_users,review_text,review_rate,isedited,published_date,user_id
				) VALUES (
					$1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12
				)
				ON CONFLICT (id) DO UPDATE SET
					type = EXCLUDED.type,
					item_id = EXCLUDED.item_id,
					review_comments = EXCLUDED.review_comments,
					review_comments_users = EXCLUDED.review_comments_users,
					review_likes = EXCLUDED.review_likes,
					review_likes_users = EXCLUDED.review_likes_users,
					review_text = EXCLUDED.review_text,
					review_rate = EXCLUDED.review_rate,
					isedited = EXCLUDED.isedited,
					published_date = EXCLUDED.published_date,
					user_id = EXCLUDED.user_id
				RETURNING id;
			`

			const review_rate = Math.floor(review.review_rate)

			const values = [
				review.id,
				review.type,
				review.item_id,
				review.review_comments,
				review.review_comments_users,
				review.review_likes,
				review.review_likes_users,
				review.review_text,
				review_rate ? review_rate : null,
				review.isEdited,
				review.published_date,
				review.user_id,
			]

			const result = await pool.query(query, values)

			console.log(
				result.rows.length > 0
					? `Отзыв  (ID: ${review.id}) добавлен`
					: `Отзыв  (ID: ${review.id}) обновлен`
			)
		}
	} catch (error) {
		console.error('Ошибка при импорте Отзыва:', error)
	} finally {
		// Закрываем соединение
		await pool.end()
		console.log('Соединение с базой данных закрыто')
	}
}

async function importFilmsFromJson(jsonFilePath: string): Promise<void> {
	const jsonData = fs.readFileSync(jsonFilePath, 'utf-8')
	const films = JSON.parse(jsonData)

	const pool = new Pool({
		user: 'postgres',
		host: 'localhost',
		database: 'filmoteca',
		password: 'Sasha0953582895',
		port: 5432,
	})

	try {
		for (const film of films) {
			const query = `
				INSERT INTO films (
					id,film_name,realise_year,film_image,author_name,description,duration,views,users_viewed,reviews_quantity,reviews,likes,liked_by_users,rating1,rating2,rating3,rating4,rating5,"cast",crew,details,genres,themes
				) VALUES (
					$1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23
				)
				ON CONFLICT (id) DO UPDATE SET
					film_name = EXCLUDED.film_name,
					realise_year = EXCLUDED.realise_year,
					film_image = EXCLUDED.film_image,
					author_name = EXCLUDED.author_name,
					description = EXCLUDED.description,
					duration = EXCLUDED.duration,
					views = EXCLUDED.views,
					users_viewed = EXCLUDED.users_viewed,
					reviews_quantity = EXCLUDED.reviews_quantity,
					reviews = EXCLUDED.reviews,
					likes = EXCLUDED.likes,
					liked_by_users = EXCLUDED.liked_by_users,
					rating1 = EXCLUDED.rating1,
					rating2 = EXCLUDED.rating2,
					rating3 = EXCLUDED.rating3,
					rating4 = EXCLUDED.rating4,
					rating5 = EXCLUDED.rating5,
					"cast" = EXCLUDED."cast",
					crew = EXCLUDED.crew,
					details = EXCLUDED.details,
					genres = EXCLUDED.genres,
					themes = EXCLUDED.themes
				RETURNING id;
			`

			const values = [
				film.id,
				film.film_name,
				film.realise_year,
				film.film_image,
				film.author_name,
				film.description,
				film.duration,
				film.views,
				film.users_viewed,
				film.reviews_quantity,
				film.reviews,
				film.likes,
				film.liked_by_users,
				film.rating1,
				film.rating2,
				film.rating3,
				film.rating4,
				film.rating5,
				film.cast,
				film.crew,
				film.details,
				film.genres,
				film.themes,
			]

			const result = await pool.query(query, values)

			console.log(
				result.rows.length > 0
					? `Фильм  (ID: ${film.id}) добавлен`
					: `Фильм  (ID: ${film.id}) обновлен`
			)
		}
	} catch (error) {
		console.error('Ошибка при импорте Фильма:', error)
	} finally {
		// Закрываем соединение
		await pool.end()
		console.log('Соединение с базой данных закрыто')
	}
}

async function importListsFromJson(jsonFilePath: string): Promise<void> {
	const jsonFile = fs.readFileSync(jsonFilePath, 'utf-8')
	const lists = JSON.parse(jsonFile)

	const pool = new Pool({
		user: 'postgres',
		host: 'localhost',
		database: 'filmoteca',
		password: 'Sasha0953582895',
		port: 5432,
	})

	try {
		for (const list of lists) {
			const query = `
				INSERT INTO films_lists (
					id, publishedDate, list_name, list_description, comments_quantity, likes, liked_by_users, films, films_quantity, tags, author_id
				) VALUES (
					$1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11
				)
				ON CONFLICT (id) DO UPDATE SET
					publishedDate = EXCLUDED.publishedDate,
					list_name = EXCLUDED.list_name,
					list_description = EXCLUDED.list_description,
					comments_quantity = EXCLUDED.comments_quantity,
					likes = EXCLUDED.likes,
					liked_by_users = EXCLUDED.liked_by_users,
					films = EXCLUDED.films,
					films_quantity = EXCLUDED.films_quantity,
					tags = EXCLUDED.tags,
					author_id = EXCLUDED.author_id
				RETURNING id;
			`

			const values = [
				list.id,
				list.publishedDate, // Передаем publishedDate
				list.list_name,
				list.list_description,
				list.comments_quantity,
				list.likes,
				list.liked_by_users,
				list.films,
				list.films_quantity,
				list.tags,
				list.user_id, // Передаем user_id
			]

			const result = await pool.query(query, values)

			console.log(
				result.rows.length > 0
					? `Список (ID: ${list.id}) добавлен`
					: `Список (ID: ${list.id}) обновлен`
			)
		}
	} catch (error) {
		console.error('Ошибка при импорте Списка:', error)
	} finally {
		// Закрываем соединение
		await pool.end()
		console.log('Соединение с базой данных закрыто')
	}
}

const jsonFilePathUsers = './json/users.json'
// importUsersFromJson(jsonFilePathUsers).catch(console.error) // * уже выполено

const jsonFilePathComments = './json/comments.json'
// importCommentsFromJson(jsonFilePathComments).catch(console.error) // * уже выполнено

const jsonFilePathReviews = './json/reviews.json'
// importReviewFromJson(jsonFilePathReviews).catch(console.error) // * уже выполено

const jsonFilePathFilms = './json/films.json'
// importFilmsFromJson(jsonFilePathFilms).catch(console.error) // * уже выполено

const jsonFilePathLists = './json/lists.json'
// importListsFromJson(jsonFilePathLists).catch(console.error) // * уже выполено
