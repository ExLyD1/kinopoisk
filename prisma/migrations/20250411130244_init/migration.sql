-- CreateTable
CREATE TABLE "User" (
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

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Film" (
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

    CONSTRAINT "Film_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
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

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "author_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "comment_text" TEXT NOT NULL DEFAULT '',
    "published_time" BIGINT NOT NULL,
    "liked_by_users" INTEGER[] DEFAULT ARRAY[]::INTEGER[],

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "List" (
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

    CONSTRAINT "List_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserLikedFilms" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_UserLikedFilms_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_FilmReviews" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_FilmReviews_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "Review_user_id_idx" ON "Review"("user_id");

-- CreateIndex
CREATE INDEX "Review_item_id_idx" ON "Review"("item_id");

-- CreateIndex
CREATE INDEX "Comment_author_id_idx" ON "Comment"("author_id");

-- CreateIndex
CREATE INDEX "Comment_item_id_idx" ON "Comment"("item_id");

-- CreateIndex
CREATE INDEX "List_author_id_idx" ON "List"("author_id");

-- CreateIndex
CREATE INDEX "_UserLikedFilms_B_index" ON "_UserLikedFilms"("B");

-- CreateIndex
CREATE INDEX "_FilmReviews_B_index" ON "_FilmReviews"("B");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Review"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "List" ADD CONSTRAINT "List_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserLikedFilms" ADD CONSTRAINT "_UserLikedFilms_A_fkey" FOREIGN KEY ("A") REFERENCES "Film"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserLikedFilms" ADD CONSTRAINT "_UserLikedFilms_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmReviews" ADD CONSTRAINT "_FilmReviews_A_fkey" FOREIGN KEY ("A") REFERENCES "Film"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmReviews" ADD CONSTRAINT "_FilmReviews_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
