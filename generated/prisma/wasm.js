
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  user_avatar: 'user_avatar',
  user_name: 'user_name',
  user_following_quantity: 'user_following_quantity',
  user_followers_quantity: 'user_followers_quantity',
  user_reviews_quantity: 'user_reviews_quantity',
  user_reviews: 'user_reviews',
  user_films_quantity: 'user_films_quantity',
  user_films: 'user_films',
  user_lists_quantity: 'user_lists_quantity',
  user_lists: 'user_lists',
  user_favorite_films_quantity: 'user_favorite_films_quantity',
  user_favorite_films: 'user_favorite_films',
  user_favorite_lists_quantity: 'user_favorite_lists_quantity',
  user_favorite_lists: 'user_favorite_lists',
  user_favorite_reviews_quantity: 'user_favorite_reviews_quantity',
  user_favorite_reviews: 'user_favorite_reviews',
  user_bio: 'user_bio',
  user_tags: 'user_tags',
  user_following: 'user_following',
  user_followers: 'user_followers',
  user_pinned_lists: 'user_pinned_lists'
};

exports.Prisma.FilmsScalarFieldEnum = {
  id: 'id',
  film_name: 'film_name',
  realise_year: 'realise_year',
  film_image: 'film_image',
  author_name: 'author_name',
  description: 'description',
  duration: 'duration',
  views: 'views',
  users_viewed: 'users_viewed',
  reviews_quantity: 'reviews_quantity',
  reviews: 'reviews',
  likes: 'likes',
  liked_by_users: 'liked_by_users',
  rating1: 'rating1',
  rating2: 'rating2',
  rating3: 'rating3',
  rating4: 'rating4',
  rating5: 'rating5',
  cast: 'cast',
  crew: 'crew',
  details: 'details',
  genres: 'genres',
  themes: 'themes'
};

exports.Prisma.ReviewsScalarFieldEnum = {
  id: 'id',
  type: 'type',
  item_id: 'item_id',
  review_comments: 'review_comments',
  review_comments_users: 'review_comments_users',
  review_likes: 'review_likes',
  review_likes_users: 'review_likes_users',
  review_text: 'review_text',
  review_rate: 'review_rate',
  isedited: 'isedited',
  published_date: 'published_date',
  user_id: 'user_id'
};

exports.Prisma.CommentsScalarFieldEnum = {
  id: 'id',
  author_id: 'author_id',
  item_id: 'item_id',
  comment_text: 'comment_text',
  published_time: 'published_time',
  liked_by_users: 'liked_by_users'
};

exports.Prisma.ListsScalarFieldEnum = {
  id: 'id',
  publisheddate: 'publisheddate',
  list_name: 'list_name',
  list_description: 'list_description',
  comments_quantity: 'comments_quantity',
  likes: 'likes',
  liked_by_users: 'liked_by_users',
  films: 'films',
  films_quantity: 'films_quantity',
  tags: 'tags',
  author_id: 'author_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  users: 'users',
  films: 'films',
  reviews: 'reviews',
  comments: 'comments',
  lists: 'lists'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
