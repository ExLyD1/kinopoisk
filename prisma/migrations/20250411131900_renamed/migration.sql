/*
  Warnings:

  - You are about to drop the `Comments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Films` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lists` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reviews` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_author_id_fkey";

-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_item_id_fkey";

-- DropForeignKey
ALTER TABLE "Lists" DROP CONSTRAINT "Lists_author_id_fkey";

-- DropForeignKey
ALTER TABLE "Reviews" DROP CONSTRAINT "Reviews_user_id_fkey";

-- DropForeignKey
ALTER TABLE "_FilmReviews" DROP CONSTRAINT "_FilmReviews_A_fkey";

-- DropForeignKey
ALTER TABLE "_FilmReviews" DROP CONSTRAINT "_FilmReviews_B_fkey";

-- DropForeignKey
ALTER TABLE "_UserLikedFilms" DROP CONSTRAINT "_UserLikedFilms_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserLikedFilms" DROP CONSTRAINT "_UserLikedFilms_B_fkey";

-- DropTable
DROP TABLE "Comments";

-- DropTable
DROP TABLE "Films";

-- DropTable
DROP TABLE "Lists";

-- DropTable
DROP TABLE "Reviews";

-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "user_avatar" TEXT NOT NULL DEFAULT '',
    "user_name" TEXT NOT NULL,
    "user_following_quantity" INTEGER DEFAULT 0,
    "user_followers_quantity" INTEGER DEFAULT 0,
    "user_reviews_quantity" INTEGER DEFAULT 0,
    "user_reviews" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "user_films_quantity" INTEGER DEFAULT 0,
    "user_films" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "user_lists_quantity" INTEGER DEFAULT 0,
    "user_lists" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "user_favorite_films_quantity" INTEGER DEFAULT 0,
    "user_favorite_films" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "user_favorite_lists_quantity" INTEGER DEFAULT 0,
    "user_favorite_lists" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "user_favorite_reviews_quantity" INTEGER DEFAULT 0,
    "user_favorite_reviews" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "user_bio" TEXT NOT NULL DEFAULT '',
    "user_tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "user_following" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "user_followers" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "user_pinned_lists" INTEGER[] DEFAULT ARRAY[]::INTEGER[],

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "films" (
    "id" SERIAL NOT NULL,
    "film_name" TEXT NOT NULL,
    "realise_year" INTEGER NOT NULL,
    "film_image" TEXT NOT NULL,
    "author_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "users_viewed" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "reviews_quantity" INTEGER NOT NULL DEFAULT 0,
    "reviews" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "likes" INTEGER NOT NULL DEFAULT 0,
    "liked_by_users" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "rating1" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "rating2" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "rating3" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "rating4" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "rating5" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "cast" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "crew" JSONB NOT NULL,
    "details" JSONB NOT NULL,
    "genres" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "themes" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "films_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "item_id" INTEGER NOT NULL,
    "review_comments" INTEGER NOT NULL DEFAULT 0,
    "review_comments_users" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "review_likes" INTEGER NOT NULL DEFAULT 0,
    "review_likes_users" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "review_text" TEXT NOT NULL,
    "review_rate" INTEGER,
    "isedited" BOOLEAN NOT NULL DEFAULT false,
    "published_date" BIGINT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "author_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "comment_text" TEXT NOT NULL DEFAULT '',
    "published_time" BIGINT NOT NULL,
    "liked_by_users" INTEGER[] DEFAULT ARRAY[]::INTEGER[],

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lists" (
    "id" SERIAL NOT NULL,
    "publisheddate" BIGINT NOT NULL,
    "list_name" TEXT NOT NULL,
    "list_description" TEXT NOT NULL,
    "comments_quantity" INTEGER NOT NULL DEFAULT 0,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "liked_by_users" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "films" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "films_quantity" INTEGER NOT NULL DEFAULT 0,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "author_id" INTEGER NOT NULL,

    CONSTRAINT "lists_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "reviews_user_id_idx" ON "reviews"("user_id");

-- CreateIndex
CREATE INDEX "reviews_item_id_idx" ON "reviews"("item_id");

-- CreateIndex
CREATE INDEX "comments_author_id_idx" ON "comments"("author_id");

-- CreateIndex
CREATE INDEX "comments_item_id_idx" ON "comments"("item_id");

-- CreateIndex
CREATE INDEX "lists_author_id_idx" ON "lists"("author_id");

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "reviews"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lists" ADD CONSTRAINT "lists_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserLikedFilms" ADD CONSTRAINT "_UserLikedFilms_A_fkey" FOREIGN KEY ("A") REFERENCES "films"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserLikedFilms" ADD CONSTRAINT "_UserLikedFilms_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmReviews" ADD CONSTRAINT "_FilmReviews_A_fkey" FOREIGN KEY ("A") REFERENCES "films"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmReviews" ADD CONSTRAINT "_FilmReviews_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
