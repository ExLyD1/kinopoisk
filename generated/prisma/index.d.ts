
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model films
 * 
 */
export type films = $Result.DefaultSelection<Prisma.$filmsPayload>
/**
 * Model reviews
 * 
 */
export type reviews = $Result.DefaultSelection<Prisma.$reviewsPayload>
/**
 * Model comments
 * 
 */
export type comments = $Result.DefaultSelection<Prisma.$commentsPayload>
/**
 * Model lists
 * 
 */
export type lists = $Result.DefaultSelection<Prisma.$listsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.films`: Exposes CRUD operations for the **films** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Films
    * const films = await prisma.films.findMany()
    * ```
    */
  get films(): Prisma.filmsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.reviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.commentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lists`: Exposes CRUD operations for the **lists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lists
    * const lists = await prisma.lists.findMany()
    * ```
    */
  get lists(): Prisma.listsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    films: 'films',
    reviews: 'reviews',
    comments: 'comments',
    lists: 'lists'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "films" | "reviews" | "comments" | "lists"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      films: {
        payload: Prisma.$filmsPayload<ExtArgs>
        fields: Prisma.filmsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.filmsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.filmsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>
          }
          findFirst: {
            args: Prisma.filmsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.filmsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>
          }
          findMany: {
            args: Prisma.filmsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>[]
          }
          create: {
            args: Prisma.filmsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>
          }
          createMany: {
            args: Prisma.filmsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.filmsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>[]
          }
          delete: {
            args: Prisma.filmsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>
          }
          update: {
            args: Prisma.filmsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>
          }
          deleteMany: {
            args: Prisma.filmsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.filmsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.filmsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>[]
          }
          upsert: {
            args: Prisma.filmsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>
          }
          aggregate: {
            args: Prisma.FilmsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilms>
          }
          groupBy: {
            args: Prisma.filmsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilmsGroupByOutputType>[]
          }
          count: {
            args: Prisma.filmsCountArgs<ExtArgs>
            result: $Utils.Optional<FilmsCountAggregateOutputType> | number
          }
        }
      }
      reviews: {
        payload: Prisma.$reviewsPayload<ExtArgs>
        fields: Prisma.reviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          findFirst: {
            args: Prisma.reviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          findMany: {
            args: Prisma.reviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          create: {
            args: Prisma.reviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          createMany: {
            args: Prisma.reviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          delete: {
            args: Prisma.reviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          update: {
            args: Prisma.reviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          deleteMany: {
            args: Prisma.reviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          upsert: {
            args: Prisma.reviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.reviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      comments: {
        payload: Prisma.$commentsPayload<ExtArgs>
        fields: Prisma.commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findFirst: {
            args: Prisma.commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findMany: {
            args: Prisma.commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          create: {
            args: Prisma.commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          createMany: {
            args: Prisma.commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.commentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          delete: {
            args: Prisma.commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          update: {
            args: Prisma.commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          deleteMany: {
            args: Prisma.commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.commentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          upsert: {
            args: Prisma.commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      lists: {
        payload: Prisma.$listsPayload<ExtArgs>
        fields: Prisma.listsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.listsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.listsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listsPayload>
          }
          findFirst: {
            args: Prisma.listsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.listsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listsPayload>
          }
          findMany: {
            args: Prisma.listsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listsPayload>[]
          }
          create: {
            args: Prisma.listsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listsPayload>
          }
          createMany: {
            args: Prisma.listsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.listsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listsPayload>[]
          }
          delete: {
            args: Prisma.listsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listsPayload>
          }
          update: {
            args: Prisma.listsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listsPayload>
          }
          deleteMany: {
            args: Prisma.listsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.listsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.listsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listsPayload>[]
          }
          upsert: {
            args: Prisma.listsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listsPayload>
          }
          aggregate: {
            args: Prisma.ListsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLists>
          }
          groupBy: {
            args: Prisma.listsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListsGroupByOutputType>[]
          }
          count: {
            args: Prisma.listsCountArgs<ExtArgs>
            result: $Utils.Optional<ListsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    films?: filmsOmit
    reviews?: reviewsOmit
    comments?: commentsOmit
    lists?: listsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    comments: number
    lists: number
    reviews: number
    users_reviewed_film: number
    users_liked_film: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    lists?: boolean | UsersCountOutputTypeCountListsArgs
    reviews?: boolean | UsersCountOutputTypeCountReviewsArgs
    users_reviewed_film?: boolean | UsersCountOutputTypeCountUsers_reviewed_filmArgs
    users_liked_film?: boolean | UsersCountOutputTypeCountUsers_liked_filmArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: listsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUsers_reviewed_filmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: filmsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUsers_liked_filmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: filmsWhereInput
  }


  /**
   * Count Type FilmsCountOutputType
   */

  export type FilmsCountOutputType = {
    reviewsByUser: number
    likedByUsers: number
  }

  export type FilmsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewsByUser?: boolean | FilmsCountOutputTypeCountReviewsByUserArgs
    likedByUsers?: boolean | FilmsCountOutputTypeCountLikedByUsersArgs
  }

  // Custom InputTypes
  /**
   * FilmsCountOutputType without action
   */
  export type FilmsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilmsCountOutputType
     */
    select?: FilmsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FilmsCountOutputType without action
   */
  export type FilmsCountOutputTypeCountReviewsByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }

  /**
   * FilmsCountOutputType without action
   */
  export type FilmsCountOutputTypeCountLikedByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type ReviewsCountOutputType
   */

  export type ReviewsCountOutputType = {
    comments: number
  }

  export type ReviewsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | ReviewsCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * ReviewsCountOutputType without action
   */
  export type ReviewsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewsCountOutputType
     */
    select?: ReviewsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewsCountOutputType without action
   */
  export type ReviewsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    user_following_quantity: number | null
    user_followers_quantity: number | null
    user_reviews_quantity: number | null
    user_reviews: number | null
    user_films_quantity: number | null
    user_films: number | null
    user_lists_quantity: number | null
    user_lists: number | null
    user_favorite_films_quantity: number | null
    user_favorite_films: number | null
    user_favorite_lists_quantity: number | null
    user_favorite_lists: number | null
    user_favorite_reviews_quantity: number | null
    user_favorite_reviews: number | null
    user_following: number | null
    user_followers: number | null
    user_pinned_lists: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    user_following_quantity: number | null
    user_followers_quantity: number | null
    user_reviews_quantity: number | null
    user_reviews: number[]
    user_films_quantity: number | null
    user_films: number[]
    user_lists_quantity: number | null
    user_lists: number[]
    user_favorite_films_quantity: number | null
    user_favorite_films: number[]
    user_favorite_lists_quantity: number | null
    user_favorite_lists: number[]
    user_favorite_reviews_quantity: number | null
    user_favorite_reviews: number[]
    user_following: number[]
    user_followers: number[]
    user_pinned_lists: number[]
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    user_avatar: string | null
    user_name: string | null
    user_following_quantity: number | null
    user_followers_quantity: number | null
    user_reviews_quantity: number | null
    user_films_quantity: number | null
    user_lists_quantity: number | null
    user_favorite_films_quantity: number | null
    user_favorite_lists_quantity: number | null
    user_favorite_reviews_quantity: number | null
    user_bio: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    user_avatar: string | null
    user_name: string | null
    user_following_quantity: number | null
    user_followers_quantity: number | null
    user_reviews_quantity: number | null
    user_films_quantity: number | null
    user_lists_quantity: number | null
    user_favorite_films_quantity: number | null
    user_favorite_lists_quantity: number | null
    user_favorite_reviews_quantity: number | null
    user_bio: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    user_avatar: number
    user_name: number
    user_following_quantity: number
    user_followers_quantity: number
    user_reviews_quantity: number
    user_reviews: number
    user_films_quantity: number
    user_films: number
    user_lists_quantity: number
    user_lists: number
    user_favorite_films_quantity: number
    user_favorite_films: number
    user_favorite_lists_quantity: number
    user_favorite_lists: number
    user_favorite_reviews_quantity: number
    user_favorite_reviews: number
    user_bio: number
    user_tags: number
    user_following: number
    user_followers: number
    user_pinned_lists: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    user_following_quantity?: true
    user_followers_quantity?: true
    user_reviews_quantity?: true
    user_reviews?: true
    user_films_quantity?: true
    user_films?: true
    user_lists_quantity?: true
    user_lists?: true
    user_favorite_films_quantity?: true
    user_favorite_films?: true
    user_favorite_lists_quantity?: true
    user_favorite_lists?: true
    user_favorite_reviews_quantity?: true
    user_favorite_reviews?: true
    user_following?: true
    user_followers?: true
    user_pinned_lists?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    user_following_quantity?: true
    user_followers_quantity?: true
    user_reviews_quantity?: true
    user_reviews?: true
    user_films_quantity?: true
    user_films?: true
    user_lists_quantity?: true
    user_lists?: true
    user_favorite_films_quantity?: true
    user_favorite_films?: true
    user_favorite_lists_quantity?: true
    user_favorite_lists?: true
    user_favorite_reviews_quantity?: true
    user_favorite_reviews?: true
    user_following?: true
    user_followers?: true
    user_pinned_lists?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    user_avatar?: true
    user_name?: true
    user_following_quantity?: true
    user_followers_quantity?: true
    user_reviews_quantity?: true
    user_films_quantity?: true
    user_lists_quantity?: true
    user_favorite_films_quantity?: true
    user_favorite_lists_quantity?: true
    user_favorite_reviews_quantity?: true
    user_bio?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    user_avatar?: true
    user_name?: true
    user_following_quantity?: true
    user_followers_quantity?: true
    user_reviews_quantity?: true
    user_films_quantity?: true
    user_lists_quantity?: true
    user_favorite_films_quantity?: true
    user_favorite_lists_quantity?: true
    user_favorite_reviews_quantity?: true
    user_bio?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    user_avatar?: true
    user_name?: true
    user_following_quantity?: true
    user_followers_quantity?: true
    user_reviews_quantity?: true
    user_reviews?: true
    user_films_quantity?: true
    user_films?: true
    user_lists_quantity?: true
    user_lists?: true
    user_favorite_films_quantity?: true
    user_favorite_films?: true
    user_favorite_lists_quantity?: true
    user_favorite_lists?: true
    user_favorite_reviews_quantity?: true
    user_favorite_reviews?: true
    user_bio?: true
    user_tags?: true
    user_following?: true
    user_followers?: true
    user_pinned_lists?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    user_avatar: string
    user_name: string
    user_following_quantity: number | null
    user_followers_quantity: number | null
    user_reviews_quantity: number | null
    user_reviews: number[]
    user_films_quantity: number | null
    user_films: number[]
    user_lists_quantity: number | null
    user_lists: number[]
    user_favorite_films_quantity: number | null
    user_favorite_films: number[]
    user_favorite_lists_quantity: number | null
    user_favorite_lists: number[]
    user_favorite_reviews_quantity: number | null
    user_favorite_reviews: number[]
    user_bio: string
    user_tags: string[]
    user_following: number[]
    user_followers: number[]
    user_pinned_lists: number[]
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_avatar?: boolean
    user_name?: boolean
    user_following_quantity?: boolean
    user_followers_quantity?: boolean
    user_reviews_quantity?: boolean
    user_reviews?: boolean
    user_films_quantity?: boolean
    user_films?: boolean
    user_lists_quantity?: boolean
    user_lists?: boolean
    user_favorite_films_quantity?: boolean
    user_favorite_films?: boolean
    user_favorite_lists_quantity?: boolean
    user_favorite_lists?: boolean
    user_favorite_reviews_quantity?: boolean
    user_favorite_reviews?: boolean
    user_bio?: boolean
    user_tags?: boolean
    user_following?: boolean
    user_followers?: boolean
    user_pinned_lists?: boolean
    comments?: boolean | users$commentsArgs<ExtArgs>
    lists?: boolean | users$listsArgs<ExtArgs>
    reviews?: boolean | users$reviewsArgs<ExtArgs>
    users_reviewed_film?: boolean | users$users_reviewed_filmArgs<ExtArgs>
    users_liked_film?: boolean | users$users_liked_filmArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_avatar?: boolean
    user_name?: boolean
    user_following_quantity?: boolean
    user_followers_quantity?: boolean
    user_reviews_quantity?: boolean
    user_reviews?: boolean
    user_films_quantity?: boolean
    user_films?: boolean
    user_lists_quantity?: boolean
    user_lists?: boolean
    user_favorite_films_quantity?: boolean
    user_favorite_films?: boolean
    user_favorite_lists_quantity?: boolean
    user_favorite_lists?: boolean
    user_favorite_reviews_quantity?: boolean
    user_favorite_reviews?: boolean
    user_bio?: boolean
    user_tags?: boolean
    user_following?: boolean
    user_followers?: boolean
    user_pinned_lists?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_avatar?: boolean
    user_name?: boolean
    user_following_quantity?: boolean
    user_followers_quantity?: boolean
    user_reviews_quantity?: boolean
    user_reviews?: boolean
    user_films_quantity?: boolean
    user_films?: boolean
    user_lists_quantity?: boolean
    user_lists?: boolean
    user_favorite_films_quantity?: boolean
    user_favorite_films?: boolean
    user_favorite_lists_quantity?: boolean
    user_favorite_lists?: boolean
    user_favorite_reviews_quantity?: boolean
    user_favorite_reviews?: boolean
    user_bio?: boolean
    user_tags?: boolean
    user_following?: boolean
    user_followers?: boolean
    user_pinned_lists?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    user_avatar?: boolean
    user_name?: boolean
    user_following_quantity?: boolean
    user_followers_quantity?: boolean
    user_reviews_quantity?: boolean
    user_reviews?: boolean
    user_films_quantity?: boolean
    user_films?: boolean
    user_lists_quantity?: boolean
    user_lists?: boolean
    user_favorite_films_quantity?: boolean
    user_favorite_films?: boolean
    user_favorite_lists_quantity?: boolean
    user_favorite_lists?: boolean
    user_favorite_reviews_quantity?: boolean
    user_favorite_reviews?: boolean
    user_bio?: boolean
    user_tags?: boolean
    user_following?: boolean
    user_followers?: boolean
    user_pinned_lists?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_avatar" | "user_name" | "user_following_quantity" | "user_followers_quantity" | "user_reviews_quantity" | "user_reviews" | "user_films_quantity" | "user_films" | "user_lists_quantity" | "user_lists" | "user_favorite_films_quantity" | "user_favorite_films" | "user_favorite_lists_quantity" | "user_favorite_lists" | "user_favorite_reviews_quantity" | "user_favorite_reviews" | "user_bio" | "user_tags" | "user_following" | "user_followers" | "user_pinned_lists", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | users$commentsArgs<ExtArgs>
    lists?: boolean | users$listsArgs<ExtArgs>
    reviews?: boolean | users$reviewsArgs<ExtArgs>
    users_reviewed_film?: boolean | users$users_reviewed_filmArgs<ExtArgs>
    users_liked_film?: boolean | users$users_liked_filmArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs>[]
      lists: Prisma.$listsPayload<ExtArgs>[]
      reviews: Prisma.$reviewsPayload<ExtArgs>[]
      users_reviewed_film: Prisma.$filmsPayload<ExtArgs>[]
      users_liked_film: Prisma.$filmsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_avatar: string
      user_name: string
      user_following_quantity: number | null
      user_followers_quantity: number | null
      user_reviews_quantity: number | null
      user_reviews: number[]
      user_films_quantity: number | null
      user_films: number[]
      user_lists_quantity: number | null
      user_lists: number[]
      user_favorite_films_quantity: number | null
      user_favorite_films: number[]
      user_favorite_lists_quantity: number | null
      user_favorite_lists: number[]
      user_favorite_reviews_quantity: number | null
      user_favorite_reviews: number[]
      user_bio: string
      user_tags: string[]
      user_following: number[]
      user_followers: number[]
      user_pinned_lists: number[]
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends users$commentsArgs<ExtArgs> = {}>(args?: Subset<T, users$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lists<T extends users$listsArgs<ExtArgs> = {}>(args?: Subset<T, users$listsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends users$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, users$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users_reviewed_film<T extends users$users_reviewed_filmArgs<ExtArgs> = {}>(args?: Subset<T, users$users_reviewed_filmArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users_liked_film<T extends users$users_liked_filmArgs<ExtArgs> = {}>(args?: Subset<T, users$users_liked_filmArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly user_avatar: FieldRef<"users", 'String'>
    readonly user_name: FieldRef<"users", 'String'>
    readonly user_following_quantity: FieldRef<"users", 'Int'>
    readonly user_followers_quantity: FieldRef<"users", 'Int'>
    readonly user_reviews_quantity: FieldRef<"users", 'Int'>
    readonly user_reviews: FieldRef<"users", 'Int[]'>
    readonly user_films_quantity: FieldRef<"users", 'Int'>
    readonly user_films: FieldRef<"users", 'Int[]'>
    readonly user_lists_quantity: FieldRef<"users", 'Int'>
    readonly user_lists: FieldRef<"users", 'Int[]'>
    readonly user_favorite_films_quantity: FieldRef<"users", 'Int'>
    readonly user_favorite_films: FieldRef<"users", 'Int[]'>
    readonly user_favorite_lists_quantity: FieldRef<"users", 'Int'>
    readonly user_favorite_lists: FieldRef<"users", 'Int[]'>
    readonly user_favorite_reviews_quantity: FieldRef<"users", 'Int'>
    readonly user_favorite_reviews: FieldRef<"users", 'Int[]'>
    readonly user_bio: FieldRef<"users", 'String'>
    readonly user_tags: FieldRef<"users", 'String[]'>
    readonly user_following: FieldRef<"users", 'Int[]'>
    readonly user_followers: FieldRef<"users", 'Int[]'>
    readonly user_pinned_lists: FieldRef<"users", 'Int[]'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.comments
   */
  export type users$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * users.lists
   */
  export type users$listsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lists
     */
    select?: listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lists
     */
    omit?: listsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listsInclude<ExtArgs> | null
    where?: listsWhereInput
    orderBy?: listsOrderByWithRelationInput | listsOrderByWithRelationInput[]
    cursor?: listsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListsScalarFieldEnum | ListsScalarFieldEnum[]
  }

  /**
   * users.reviews
   */
  export type users$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    cursor?: reviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * users.users_reviewed_film
   */
  export type users$users_reviewed_filmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    where?: filmsWhereInput
    orderBy?: filmsOrderByWithRelationInput | filmsOrderByWithRelationInput[]
    cursor?: filmsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilmsScalarFieldEnum | FilmsScalarFieldEnum[]
  }

  /**
   * users.users_liked_film
   */
  export type users$users_liked_filmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    where?: filmsWhereInput
    orderBy?: filmsOrderByWithRelationInput | filmsOrderByWithRelationInput[]
    cursor?: filmsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilmsScalarFieldEnum | FilmsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model films
   */

  export type AggregateFilms = {
    _count: FilmsCountAggregateOutputType | null
    _avg: FilmsAvgAggregateOutputType | null
    _sum: FilmsSumAggregateOutputType | null
    _min: FilmsMinAggregateOutputType | null
    _max: FilmsMaxAggregateOutputType | null
  }

  export type FilmsAvgAggregateOutputType = {
    id: number | null
    realise_year: number | null
    duration: number | null
    views: number | null
    users_viewed: number | null
    reviews_quantity: number | null
    reviews: number | null
    likes: number | null
    liked_by_users: number | null
    rating1: number | null
    rating2: number | null
    rating3: number | null
    rating4: number | null
    rating5: number | null
  }

  export type FilmsSumAggregateOutputType = {
    id: number | null
    realise_year: number | null
    duration: number | null
    views: number | null
    users_viewed: number[]
    reviews_quantity: number | null
    reviews: number[]
    likes: number | null
    liked_by_users: number[]
    rating1: number[]
    rating2: number[]
    rating3: number[]
    rating4: number[]
    rating5: number[]
  }

  export type FilmsMinAggregateOutputType = {
    id: number | null
    film_name: string | null
    realise_year: number | null
    film_image: string | null
    author_name: string | null
    description: string | null
    duration: number | null
    views: number | null
    reviews_quantity: number | null
    likes: number | null
  }

  export type FilmsMaxAggregateOutputType = {
    id: number | null
    film_name: string | null
    realise_year: number | null
    film_image: string | null
    author_name: string | null
    description: string | null
    duration: number | null
    views: number | null
    reviews_quantity: number | null
    likes: number | null
  }

  export type FilmsCountAggregateOutputType = {
    id: number
    film_name: number
    realise_year: number
    film_image: number
    author_name: number
    description: number
    duration: number
    views: number
    users_viewed: number
    reviews_quantity: number
    reviews: number
    likes: number
    liked_by_users: number
    rating1: number
    rating2: number
    rating3: number
    rating4: number
    rating5: number
    cast: number
    crew: number
    details: number
    genres: number
    themes: number
    _all: number
  }


  export type FilmsAvgAggregateInputType = {
    id?: true
    realise_year?: true
    duration?: true
    views?: true
    users_viewed?: true
    reviews_quantity?: true
    reviews?: true
    likes?: true
    liked_by_users?: true
    rating1?: true
    rating2?: true
    rating3?: true
    rating4?: true
    rating5?: true
  }

  export type FilmsSumAggregateInputType = {
    id?: true
    realise_year?: true
    duration?: true
    views?: true
    users_viewed?: true
    reviews_quantity?: true
    reviews?: true
    likes?: true
    liked_by_users?: true
    rating1?: true
    rating2?: true
    rating3?: true
    rating4?: true
    rating5?: true
  }

  export type FilmsMinAggregateInputType = {
    id?: true
    film_name?: true
    realise_year?: true
    film_image?: true
    author_name?: true
    description?: true
    duration?: true
    views?: true
    reviews_quantity?: true
    likes?: true
  }

  export type FilmsMaxAggregateInputType = {
    id?: true
    film_name?: true
    realise_year?: true
    film_image?: true
    author_name?: true
    description?: true
    duration?: true
    views?: true
    reviews_quantity?: true
    likes?: true
  }

  export type FilmsCountAggregateInputType = {
    id?: true
    film_name?: true
    realise_year?: true
    film_image?: true
    author_name?: true
    description?: true
    duration?: true
    views?: true
    users_viewed?: true
    reviews_quantity?: true
    reviews?: true
    likes?: true
    liked_by_users?: true
    rating1?: true
    rating2?: true
    rating3?: true
    rating4?: true
    rating5?: true
    cast?: true
    crew?: true
    details?: true
    genres?: true
    themes?: true
    _all?: true
  }

  export type FilmsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which films to aggregate.
     */
    where?: filmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of films to fetch.
     */
    orderBy?: filmsOrderByWithRelationInput | filmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: filmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` films.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned films
    **/
    _count?: true | FilmsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilmsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilmsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilmsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilmsMaxAggregateInputType
  }

  export type GetFilmsAggregateType<T extends FilmsAggregateArgs> = {
        [P in keyof T & keyof AggregateFilms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilms[P]>
      : GetScalarType<T[P], AggregateFilms[P]>
  }




  export type filmsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: filmsWhereInput
    orderBy?: filmsOrderByWithAggregationInput | filmsOrderByWithAggregationInput[]
    by: FilmsScalarFieldEnum[] | FilmsScalarFieldEnum
    having?: filmsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilmsCountAggregateInputType | true
    _avg?: FilmsAvgAggregateInputType
    _sum?: FilmsSumAggregateInputType
    _min?: FilmsMinAggregateInputType
    _max?: FilmsMaxAggregateInputType
  }

  export type FilmsGroupByOutputType = {
    id: number
    film_name: string
    realise_year: number
    film_image: string
    author_name: string
    description: string
    duration: number
    views: number
    users_viewed: number[]
    reviews_quantity: number
    reviews: number[]
    likes: number
    liked_by_users: number[]
    rating1: number[]
    rating2: number[]
    rating3: number[]
    rating4: number[]
    rating5: number[]
    cast: string[]
    crew: JsonValue
    details: JsonValue
    genres: string[]
    themes: string[]
    _count: FilmsCountAggregateOutputType | null
    _avg: FilmsAvgAggregateOutputType | null
    _sum: FilmsSumAggregateOutputType | null
    _min: FilmsMinAggregateOutputType | null
    _max: FilmsMaxAggregateOutputType | null
  }

  type GetFilmsGroupByPayload<T extends filmsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilmsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilmsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilmsGroupByOutputType[P]>
            : GetScalarType<T[P], FilmsGroupByOutputType[P]>
        }
      >
    >


  export type filmsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    film_name?: boolean
    realise_year?: boolean
    film_image?: boolean
    author_name?: boolean
    description?: boolean
    duration?: boolean
    views?: boolean
    users_viewed?: boolean
    reviews_quantity?: boolean
    reviews?: boolean
    likes?: boolean
    liked_by_users?: boolean
    rating1?: boolean
    rating2?: boolean
    rating3?: boolean
    rating4?: boolean
    rating5?: boolean
    cast?: boolean
    crew?: boolean
    details?: boolean
    genres?: boolean
    themes?: boolean
    reviewsByUser?: boolean | films$reviewsByUserArgs<ExtArgs>
    likedByUsers?: boolean | films$likedByUsersArgs<ExtArgs>
    _count?: boolean | FilmsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["films"]>

  export type filmsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    film_name?: boolean
    realise_year?: boolean
    film_image?: boolean
    author_name?: boolean
    description?: boolean
    duration?: boolean
    views?: boolean
    users_viewed?: boolean
    reviews_quantity?: boolean
    reviews?: boolean
    likes?: boolean
    liked_by_users?: boolean
    rating1?: boolean
    rating2?: boolean
    rating3?: boolean
    rating4?: boolean
    rating5?: boolean
    cast?: boolean
    crew?: boolean
    details?: boolean
    genres?: boolean
    themes?: boolean
  }, ExtArgs["result"]["films"]>

  export type filmsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    film_name?: boolean
    realise_year?: boolean
    film_image?: boolean
    author_name?: boolean
    description?: boolean
    duration?: boolean
    views?: boolean
    users_viewed?: boolean
    reviews_quantity?: boolean
    reviews?: boolean
    likes?: boolean
    liked_by_users?: boolean
    rating1?: boolean
    rating2?: boolean
    rating3?: boolean
    rating4?: boolean
    rating5?: boolean
    cast?: boolean
    crew?: boolean
    details?: boolean
    genres?: boolean
    themes?: boolean
  }, ExtArgs["result"]["films"]>

  export type filmsSelectScalar = {
    id?: boolean
    film_name?: boolean
    realise_year?: boolean
    film_image?: boolean
    author_name?: boolean
    description?: boolean
    duration?: boolean
    views?: boolean
    users_viewed?: boolean
    reviews_quantity?: boolean
    reviews?: boolean
    likes?: boolean
    liked_by_users?: boolean
    rating1?: boolean
    rating2?: boolean
    rating3?: boolean
    rating4?: boolean
    rating5?: boolean
    cast?: boolean
    crew?: boolean
    details?: boolean
    genres?: boolean
    themes?: boolean
  }

  export type filmsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "film_name" | "realise_year" | "film_image" | "author_name" | "description" | "duration" | "views" | "users_viewed" | "reviews_quantity" | "reviews" | "likes" | "liked_by_users" | "rating1" | "rating2" | "rating3" | "rating4" | "rating5" | "cast" | "crew" | "details" | "genres" | "themes", ExtArgs["result"]["films"]>
  export type filmsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewsByUser?: boolean | films$reviewsByUserArgs<ExtArgs>
    likedByUsers?: boolean | films$likedByUsersArgs<ExtArgs>
    _count?: boolean | FilmsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type filmsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type filmsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $filmsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "films"
    objects: {
      reviewsByUser: Prisma.$usersPayload<ExtArgs>[]
      likedByUsers: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      film_name: string
      realise_year: number
      film_image: string
      author_name: string
      description: string
      duration: number
      views: number
      users_viewed: number[]
      reviews_quantity: number
      reviews: number[]
      likes: number
      liked_by_users: number[]
      rating1: number[]
      rating2: number[]
      rating3: number[]
      rating4: number[]
      rating5: number[]
      cast: string[]
      crew: Prisma.JsonValue
      details: Prisma.JsonValue
      genres: string[]
      themes: string[]
    }, ExtArgs["result"]["films"]>
    composites: {}
  }

  type filmsGetPayload<S extends boolean | null | undefined | filmsDefaultArgs> = $Result.GetResult<Prisma.$filmsPayload, S>

  type filmsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<filmsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilmsCountAggregateInputType | true
    }

  export interface filmsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['films'], meta: { name: 'films' } }
    /**
     * Find zero or one Films that matches the filter.
     * @param {filmsFindUniqueArgs} args - Arguments to find a Films
     * @example
     * // Get one Films
     * const films = await prisma.films.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends filmsFindUniqueArgs>(args: SelectSubset<T, filmsFindUniqueArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Films that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {filmsFindUniqueOrThrowArgs} args - Arguments to find a Films
     * @example
     * // Get one Films
     * const films = await prisma.films.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends filmsFindUniqueOrThrowArgs>(args: SelectSubset<T, filmsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Films that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmsFindFirstArgs} args - Arguments to find a Films
     * @example
     * // Get one Films
     * const films = await prisma.films.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends filmsFindFirstArgs>(args?: SelectSubset<T, filmsFindFirstArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Films that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmsFindFirstOrThrowArgs} args - Arguments to find a Films
     * @example
     * // Get one Films
     * const films = await prisma.films.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends filmsFindFirstOrThrowArgs>(args?: SelectSubset<T, filmsFindFirstOrThrowArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Films that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Films
     * const films = await prisma.films.findMany()
     * 
     * // Get first 10 Films
     * const films = await prisma.films.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filmsWithIdOnly = await prisma.films.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends filmsFindManyArgs>(args?: SelectSubset<T, filmsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Films.
     * @param {filmsCreateArgs} args - Arguments to create a Films.
     * @example
     * // Create one Films
     * const Films = await prisma.films.create({
     *   data: {
     *     // ... data to create a Films
     *   }
     * })
     * 
     */
    create<T extends filmsCreateArgs>(args: SelectSubset<T, filmsCreateArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Films.
     * @param {filmsCreateManyArgs} args - Arguments to create many Films.
     * @example
     * // Create many Films
     * const films = await prisma.films.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends filmsCreateManyArgs>(args?: SelectSubset<T, filmsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Films and returns the data saved in the database.
     * @param {filmsCreateManyAndReturnArgs} args - Arguments to create many Films.
     * @example
     * // Create many Films
     * const films = await prisma.films.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Films and only return the `id`
     * const filmsWithIdOnly = await prisma.films.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends filmsCreateManyAndReturnArgs>(args?: SelectSubset<T, filmsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Films.
     * @param {filmsDeleteArgs} args - Arguments to delete one Films.
     * @example
     * // Delete one Films
     * const Films = await prisma.films.delete({
     *   where: {
     *     // ... filter to delete one Films
     *   }
     * })
     * 
     */
    delete<T extends filmsDeleteArgs>(args: SelectSubset<T, filmsDeleteArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Films.
     * @param {filmsUpdateArgs} args - Arguments to update one Films.
     * @example
     * // Update one Films
     * const films = await prisma.films.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends filmsUpdateArgs>(args: SelectSubset<T, filmsUpdateArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Films.
     * @param {filmsDeleteManyArgs} args - Arguments to filter Films to delete.
     * @example
     * // Delete a few Films
     * const { count } = await prisma.films.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends filmsDeleteManyArgs>(args?: SelectSubset<T, filmsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Films.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Films
     * const films = await prisma.films.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends filmsUpdateManyArgs>(args: SelectSubset<T, filmsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Films and returns the data updated in the database.
     * @param {filmsUpdateManyAndReturnArgs} args - Arguments to update many Films.
     * @example
     * // Update many Films
     * const films = await prisma.films.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Films and only return the `id`
     * const filmsWithIdOnly = await prisma.films.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends filmsUpdateManyAndReturnArgs>(args: SelectSubset<T, filmsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Films.
     * @param {filmsUpsertArgs} args - Arguments to update or create a Films.
     * @example
     * // Update or create a Films
     * const films = await prisma.films.upsert({
     *   create: {
     *     // ... data to create a Films
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Films we want to update
     *   }
     * })
     */
    upsert<T extends filmsUpsertArgs>(args: SelectSubset<T, filmsUpsertArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Films.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmsCountArgs} args - Arguments to filter Films to count.
     * @example
     * // Count the number of Films
     * const count = await prisma.films.count({
     *   where: {
     *     // ... the filter for the Films we want to count
     *   }
     * })
    **/
    count<T extends filmsCountArgs>(
      args?: Subset<T, filmsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilmsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Films.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FilmsAggregateArgs>(args: Subset<T, FilmsAggregateArgs>): Prisma.PrismaPromise<GetFilmsAggregateType<T>>

    /**
     * Group by Films.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends filmsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: filmsGroupByArgs['orderBy'] }
        : { orderBy?: filmsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, filmsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilmsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the films model
   */
  readonly fields: filmsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for films.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__filmsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviewsByUser<T extends films$reviewsByUserArgs<ExtArgs> = {}>(args?: Subset<T, films$reviewsByUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedByUsers<T extends films$likedByUsersArgs<ExtArgs> = {}>(args?: Subset<T, films$likedByUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the films model
   */
  interface filmsFieldRefs {
    readonly id: FieldRef<"films", 'Int'>
    readonly film_name: FieldRef<"films", 'String'>
    readonly realise_year: FieldRef<"films", 'Int'>
    readonly film_image: FieldRef<"films", 'String'>
    readonly author_name: FieldRef<"films", 'String'>
    readonly description: FieldRef<"films", 'String'>
    readonly duration: FieldRef<"films", 'Int'>
    readonly views: FieldRef<"films", 'Int'>
    readonly users_viewed: FieldRef<"films", 'Int[]'>
    readonly reviews_quantity: FieldRef<"films", 'Int'>
    readonly reviews: FieldRef<"films", 'Int[]'>
    readonly likes: FieldRef<"films", 'Int'>
    readonly liked_by_users: FieldRef<"films", 'Int[]'>
    readonly rating1: FieldRef<"films", 'Int[]'>
    readonly rating2: FieldRef<"films", 'Int[]'>
    readonly rating3: FieldRef<"films", 'Int[]'>
    readonly rating4: FieldRef<"films", 'Int[]'>
    readonly rating5: FieldRef<"films", 'Int[]'>
    readonly cast: FieldRef<"films", 'String[]'>
    readonly crew: FieldRef<"films", 'Json'>
    readonly details: FieldRef<"films", 'Json'>
    readonly genres: FieldRef<"films", 'String[]'>
    readonly themes: FieldRef<"films", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * films findUnique
   */
  export type filmsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * Filter, which films to fetch.
     */
    where: filmsWhereUniqueInput
  }

  /**
   * films findUniqueOrThrow
   */
  export type filmsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * Filter, which films to fetch.
     */
    where: filmsWhereUniqueInput
  }

  /**
   * films findFirst
   */
  export type filmsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * Filter, which films to fetch.
     */
    where?: filmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of films to fetch.
     */
    orderBy?: filmsOrderByWithRelationInput | filmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for films.
     */
    cursor?: filmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` films.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of films.
     */
    distinct?: FilmsScalarFieldEnum | FilmsScalarFieldEnum[]
  }

  /**
   * films findFirstOrThrow
   */
  export type filmsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * Filter, which films to fetch.
     */
    where?: filmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of films to fetch.
     */
    orderBy?: filmsOrderByWithRelationInput | filmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for films.
     */
    cursor?: filmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` films.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of films.
     */
    distinct?: FilmsScalarFieldEnum | FilmsScalarFieldEnum[]
  }

  /**
   * films findMany
   */
  export type filmsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * Filter, which films to fetch.
     */
    where?: filmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of films to fetch.
     */
    orderBy?: filmsOrderByWithRelationInput | filmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing films.
     */
    cursor?: filmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` films.
     */
    skip?: number
    distinct?: FilmsScalarFieldEnum | FilmsScalarFieldEnum[]
  }

  /**
   * films create
   */
  export type filmsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * The data needed to create a films.
     */
    data: XOR<filmsCreateInput, filmsUncheckedCreateInput>
  }

  /**
   * films createMany
   */
  export type filmsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many films.
     */
    data: filmsCreateManyInput | filmsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * films createManyAndReturn
   */
  export type filmsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * The data used to create many films.
     */
    data: filmsCreateManyInput | filmsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * films update
   */
  export type filmsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * The data needed to update a films.
     */
    data: XOR<filmsUpdateInput, filmsUncheckedUpdateInput>
    /**
     * Choose, which films to update.
     */
    where: filmsWhereUniqueInput
  }

  /**
   * films updateMany
   */
  export type filmsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update films.
     */
    data: XOR<filmsUpdateManyMutationInput, filmsUncheckedUpdateManyInput>
    /**
     * Filter which films to update
     */
    where?: filmsWhereInput
    /**
     * Limit how many films to update.
     */
    limit?: number
  }

  /**
   * films updateManyAndReturn
   */
  export type filmsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * The data used to update films.
     */
    data: XOR<filmsUpdateManyMutationInput, filmsUncheckedUpdateManyInput>
    /**
     * Filter which films to update
     */
    where?: filmsWhereInput
    /**
     * Limit how many films to update.
     */
    limit?: number
  }

  /**
   * films upsert
   */
  export type filmsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * The filter to search for the films to update in case it exists.
     */
    where: filmsWhereUniqueInput
    /**
     * In case the films found by the `where` argument doesn't exist, create a new films with this data.
     */
    create: XOR<filmsCreateInput, filmsUncheckedCreateInput>
    /**
     * In case the films was found with the provided `where` argument, update it with this data.
     */
    update: XOR<filmsUpdateInput, filmsUncheckedUpdateInput>
  }

  /**
   * films delete
   */
  export type filmsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * Filter which films to delete.
     */
    where: filmsWhereUniqueInput
  }

  /**
   * films deleteMany
   */
  export type filmsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which films to delete
     */
    where?: filmsWhereInput
    /**
     * Limit how many films to delete.
     */
    limit?: number
  }

  /**
   * films.reviewsByUser
   */
  export type films$reviewsByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * films.likedByUsers
   */
  export type films$likedByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * films without action
   */
  export type filmsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
  }


  /**
   * Model reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    id: number | null
    item_id: number | null
    review_comments: number | null
    review_comments_users: number | null
    review_likes: number | null
    review_likes_users: number | null
    review_rate: number | null
    published_date: number | null
    user_id: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    id: number | null
    item_id: number | null
    review_comments: number | null
    review_comments_users: number[]
    review_likes: number | null
    review_likes_users: number[]
    review_rate: number | null
    published_date: bigint | null
    user_id: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: number | null
    type: string | null
    item_id: number | null
    review_comments: number | null
    review_likes: number | null
    review_text: string | null
    review_rate: number | null
    isedited: boolean | null
    published_date: bigint | null
    user_id: number | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: number | null
    type: string | null
    item_id: number | null
    review_comments: number | null
    review_likes: number | null
    review_text: string | null
    review_rate: number | null
    isedited: boolean | null
    published_date: bigint | null
    user_id: number | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    type: number
    item_id: number
    review_comments: number
    review_comments_users: number
    review_likes: number
    review_likes_users: number
    review_text: number
    review_rate: number
    isedited: number
    published_date: number
    user_id: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    id?: true
    item_id?: true
    review_comments?: true
    review_comments_users?: true
    review_likes?: true
    review_likes_users?: true
    review_rate?: true
    published_date?: true
    user_id?: true
  }

  export type ReviewsSumAggregateInputType = {
    id?: true
    item_id?: true
    review_comments?: true
    review_comments_users?: true
    review_likes?: true
    review_likes_users?: true
    review_rate?: true
    published_date?: true
    user_id?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    type?: true
    item_id?: true
    review_comments?: true
    review_likes?: true
    review_text?: true
    review_rate?: true
    isedited?: true
    published_date?: true
    user_id?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    type?: true
    item_id?: true
    review_comments?: true
    review_likes?: true
    review_text?: true
    review_rate?: true
    isedited?: true
    published_date?: true
    user_id?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    type?: true
    item_id?: true
    review_comments?: true
    review_comments_users?: true
    review_likes?: true
    review_likes_users?: true
    review_text?: true
    review_rate?: true
    isedited?: true
    published_date?: true
    user_id?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to aggregate.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type reviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithAggregationInput | reviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: reviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: number
    type: string
    item_id: number
    review_comments: number
    review_comments_users: number[]
    review_likes: number
    review_likes_users: number[]
    review_text: string
    review_rate: number | null
    isedited: boolean
    published_date: bigint
    user_id: number
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends reviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type reviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    item_id?: boolean
    review_comments?: boolean
    review_comments_users?: boolean
    review_likes?: boolean
    review_likes_users?: boolean
    review_text?: boolean
    review_rate?: boolean
    isedited?: boolean
    published_date?: boolean
    user_id?: boolean
    comments?: boolean | reviews$commentsArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | ReviewsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    item_id?: boolean
    review_comments?: boolean
    review_comments_users?: boolean
    review_likes?: boolean
    review_likes_users?: boolean
    review_text?: boolean
    review_rate?: boolean
    isedited?: boolean
    published_date?: boolean
    user_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    item_id?: boolean
    review_comments?: boolean
    review_comments_users?: boolean
    review_likes?: boolean
    review_likes_users?: boolean
    review_text?: boolean
    review_rate?: boolean
    isedited?: boolean
    published_date?: boolean
    user_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectScalar = {
    id?: boolean
    type?: boolean
    item_id?: boolean
    review_comments?: boolean
    review_comments_users?: boolean
    review_likes?: boolean
    review_likes_users?: boolean
    review_text?: boolean
    review_rate?: boolean
    isedited?: boolean
    published_date?: boolean
    user_id?: boolean
  }

  export type reviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "item_id" | "review_comments" | "review_comments_users" | "review_likes" | "review_likes_users" | "review_text" | "review_rate" | "isedited" | "published_date" | "user_id", ExtArgs["result"]["reviews"]>
  export type reviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | reviews$commentsArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | ReviewsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type reviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type reviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $reviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reviews"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs>[]
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      item_id: number
      review_comments: number
      review_comments_users: number[]
      review_likes: number
      review_likes_users: number[]
      review_text: string
      review_rate: number | null
      isedited: boolean
      published_date: bigint
      user_id: number
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type reviewsGetPayload<S extends boolean | null | undefined | reviewsDefaultArgs> = $Result.GetResult<Prisma.$reviewsPayload, S>

  type reviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface reviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reviews'], meta: { name: 'reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {reviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewsFindUniqueArgs>(args: SelectSubset<T, reviewsFindUniqueArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewsFindFirstArgs>(args?: SelectSubset<T, reviewsFindFirstArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reviewsFindManyArgs>(args?: SelectSubset<T, reviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {reviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends reviewsCreateArgs>(args: SelectSubset<T, reviewsCreateArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewsCreateManyArgs>(args?: SelectSubset<T, reviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {reviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, reviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reviews.
     * @param {reviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends reviewsDeleteArgs>(args: SelectSubset<T, reviewsDeleteArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {reviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewsUpdateArgs>(args: SelectSubset<T, reviewsUpdateArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewsDeleteManyArgs>(args?: SelectSubset<T, reviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewsUpdateManyArgs>(args: SelectSubset<T, reviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {reviewsUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, reviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reviews.
     * @param {reviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends reviewsUpsertArgs>(args: SelectSubset<T, reviewsUpsertArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewsCountArgs>(
      args?: Subset<T, reviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewsGroupByArgs['orderBy'] }
        : { orderBy?: reviewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reviews model
   */
  readonly fields: reviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends reviews$commentsArgs<ExtArgs> = {}>(args?: Subset<T, reviews$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reviews model
   */
  interface reviewsFieldRefs {
    readonly id: FieldRef<"reviews", 'Int'>
    readonly type: FieldRef<"reviews", 'String'>
    readonly item_id: FieldRef<"reviews", 'Int'>
    readonly review_comments: FieldRef<"reviews", 'Int'>
    readonly review_comments_users: FieldRef<"reviews", 'Int[]'>
    readonly review_likes: FieldRef<"reviews", 'Int'>
    readonly review_likes_users: FieldRef<"reviews", 'Int[]'>
    readonly review_text: FieldRef<"reviews", 'String'>
    readonly review_rate: FieldRef<"reviews", 'Int'>
    readonly isedited: FieldRef<"reviews", 'Boolean'>
    readonly published_date: FieldRef<"reviews", 'BigInt'>
    readonly user_id: FieldRef<"reviews", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * reviews findUnique
   */
  export type reviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews findUniqueOrThrow
   */
  export type reviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews findFirst
   */
  export type reviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews findFirstOrThrow
   */
  export type reviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews findMany
   */
  export type reviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews create
   */
  export type reviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a reviews.
     */
    data: XOR<reviewsCreateInput, reviewsUncheckedCreateInput>
  }

  /**
   * reviews createMany
   */
  export type reviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewsCreateManyInput | reviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reviews createManyAndReturn
   */
  export type reviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * The data used to create many reviews.
     */
    data: reviewsCreateManyInput | reviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reviews update
   */
  export type reviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a reviews.
     */
    data: XOR<reviewsUpdateInput, reviewsUncheckedUpdateInput>
    /**
     * Choose, which reviews to update.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews updateMany
   */
  export type reviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * reviews updateManyAndReturn
   */
  export type reviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reviews upsert
   */
  export type reviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the reviews to update in case it exists.
     */
    where: reviewsWhereUniqueInput
    /**
     * In case the reviews found by the `where` argument doesn't exist, create a new reviews with this data.
     */
    create: XOR<reviewsCreateInput, reviewsUncheckedCreateInput>
    /**
     * In case the reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewsUpdateInput, reviewsUncheckedUpdateInput>
  }

  /**
   * reviews delete
   */
  export type reviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter which reviews to delete.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews deleteMany
   */
  export type reviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * reviews.comments
   */
  export type reviews$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * reviews without action
   */
  export type reviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
  }


  /**
   * Model comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    author_id: number | null
    item_id: number | null
    published_time: number | null
    liked_by_users: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: number | null
    author_id: number | null
    item_id: number | null
    published_time: bigint | null
    liked_by_users: number[]
  }

  export type CommentsMinAggregateOutputType = {
    id: number | null
    author_id: number | null
    item_id: number | null
    comment_text: string | null
    published_time: bigint | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: number | null
    author_id: number | null
    item_id: number | null
    comment_text: string | null
    published_time: bigint | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    author_id: number
    item_id: number
    comment_text: number
    published_time: number
    liked_by_users: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    author_id?: true
    item_id?: true
    published_time?: true
    liked_by_users?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    author_id?: true
    item_id?: true
    published_time?: true
    liked_by_users?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    author_id?: true
    item_id?: true
    comment_text?: true
    published_time?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    author_id?: true
    item_id?: true
    comment_text?: true
    published_time?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    author_id?: true
    item_id?: true
    comment_text?: true
    published_time?: true
    liked_by_users?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to aggregate.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithAggregationInput | commentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: number
    author_id: number
    item_id: number
    comment_text: string
    published_time: bigint
    liked_by_users: number[]
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author_id?: boolean
    item_id?: boolean
    comment_text?: boolean
    published_time?: boolean
    liked_by_users?: boolean
    author?: boolean | usersDefaultArgs<ExtArgs>
    review?: boolean | reviewsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author_id?: boolean
    item_id?: boolean
    comment_text?: boolean
    published_time?: boolean
    liked_by_users?: boolean
    author?: boolean | usersDefaultArgs<ExtArgs>
    review?: boolean | reviewsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author_id?: boolean
    item_id?: boolean
    comment_text?: boolean
    published_time?: boolean
    liked_by_users?: boolean
    author?: boolean | usersDefaultArgs<ExtArgs>
    review?: boolean | reviewsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectScalar = {
    id?: boolean
    author_id?: boolean
    item_id?: boolean
    comment_text?: boolean
    published_time?: boolean
    liked_by_users?: boolean
  }

  export type commentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "author_id" | "item_id" | "comment_text" | "published_time" | "liked_by_users", ExtArgs["result"]["comments"]>
  export type commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | usersDefaultArgs<ExtArgs>
    review?: boolean | reviewsDefaultArgs<ExtArgs>
  }
  export type commentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | usersDefaultArgs<ExtArgs>
    review?: boolean | reviewsDefaultArgs<ExtArgs>
  }
  export type commentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | usersDefaultArgs<ExtArgs>
    review?: boolean | reviewsDefaultArgs<ExtArgs>
  }

  export type $commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comments"
    objects: {
      author: Prisma.$usersPayload<ExtArgs>
      review: Prisma.$reviewsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      author_id: number
      item_id: number
      comment_text: string
      published_time: bigint
      liked_by_users: number[]
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = $Result.GetResult<Prisma.$commentsPayload, S>

  type commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comments'], meta: { name: 'comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {commentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentsFindUniqueArgs>(args: SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentsFindFirstArgs>(args?: SelectSubset<T, commentsFindFirstArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends commentsFindManyArgs>(args?: SelectSubset<T, commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {commentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends commentsCreateArgs>(args: SelectSubset<T, commentsCreateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {commentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentsCreateManyArgs>(args?: SelectSubset<T, commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {commentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends commentsCreateManyAndReturnArgs>(args?: SelectSubset<T, commentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {commentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends commentsDeleteArgs>(args: SelectSubset<T, commentsDeleteArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {commentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentsUpdateArgs>(args: SelectSubset<T, commentsUpdateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {commentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentsDeleteManyArgs>(args?: SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentsUpdateManyArgs>(args: SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {commentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends commentsUpdateManyAndReturnArgs>(args: SelectSubset<T, commentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {commentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends commentsUpsertArgs>(args: SelectSubset<T, commentsUpsertArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentsCountArgs>(
      args?: Subset<T, commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentsGroupByArgs['orderBy'] }
        : { orderBy?: commentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comments model
   */
  readonly fields: commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    review<T extends reviewsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, reviewsDefaultArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the comments model
   */
  interface commentsFieldRefs {
    readonly id: FieldRef<"comments", 'Int'>
    readonly author_id: FieldRef<"comments", 'Int'>
    readonly item_id: FieldRef<"comments", 'Int'>
    readonly comment_text: FieldRef<"comments", 'String'>
    readonly published_time: FieldRef<"comments", 'BigInt'>
    readonly liked_by_users: FieldRef<"comments", 'Int[]'>
  }
    

  // Custom InputTypes
  /**
   * comments findUnique
   */
  export type commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findUniqueOrThrow
   */
  export type commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findFirst
   */
  export type commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findFirstOrThrow
   */
  export type commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findMany
   */
  export type commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments create
   */
  export type commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a comments.
     */
    data: XOR<commentsCreateInput, commentsUncheckedCreateInput>
  }

  /**
   * comments createMany
   */
  export type commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comments createManyAndReturn
   */
  export type commentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments update
   */
  export type commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a comments.
     */
    data: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
    /**
     * Choose, which comments to update.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments updateMany
   */
  export type commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
  }

  /**
   * comments updateManyAndReturn
   */
  export type commentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments upsert
   */
  export type commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the comments to update in case it exists.
     */
    where: commentsWhereUniqueInput
    /**
     * In case the comments found by the `where` argument doesn't exist, create a new comments with this data.
     */
    create: XOR<commentsCreateInput, commentsUncheckedCreateInput>
    /**
     * In case the comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
  }

  /**
   * comments delete
   */
  export type commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter which comments to delete.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments deleteMany
   */
  export type commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to delete.
     */
    limit?: number
  }

  /**
   * comments without action
   */
  export type commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
  }


  /**
   * Model lists
   */

  export type AggregateLists = {
    _count: ListsCountAggregateOutputType | null
    _avg: ListsAvgAggregateOutputType | null
    _sum: ListsSumAggregateOutputType | null
    _min: ListsMinAggregateOutputType | null
    _max: ListsMaxAggregateOutputType | null
  }

  export type ListsAvgAggregateOutputType = {
    id: number | null
    publisheddate: number | null
    comments_quantity: number | null
    likes: number | null
    liked_by_users: number | null
    films: number | null
    films_quantity: number | null
    author_id: number | null
  }

  export type ListsSumAggregateOutputType = {
    id: number | null
    publisheddate: bigint | null
    comments_quantity: number | null
    likes: number | null
    liked_by_users: number[]
    films: number[]
    films_quantity: number | null
    author_id: number | null
  }

  export type ListsMinAggregateOutputType = {
    id: number | null
    publisheddate: bigint | null
    list_name: string | null
    list_description: string | null
    comments_quantity: number | null
    likes: number | null
    films_quantity: number | null
    author_id: number | null
  }

  export type ListsMaxAggregateOutputType = {
    id: number | null
    publisheddate: bigint | null
    list_name: string | null
    list_description: string | null
    comments_quantity: number | null
    likes: number | null
    films_quantity: number | null
    author_id: number | null
  }

  export type ListsCountAggregateOutputType = {
    id: number
    publisheddate: number
    list_name: number
    list_description: number
    comments_quantity: number
    likes: number
    liked_by_users: number
    films: number
    films_quantity: number
    tags: number
    author_id: number
    _all: number
  }


  export type ListsAvgAggregateInputType = {
    id?: true
    publisheddate?: true
    comments_quantity?: true
    likes?: true
    liked_by_users?: true
    films?: true
    films_quantity?: true
    author_id?: true
  }

  export type ListsSumAggregateInputType = {
    id?: true
    publisheddate?: true
    comments_quantity?: true
    likes?: true
    liked_by_users?: true
    films?: true
    films_quantity?: true
    author_id?: true
  }

  export type ListsMinAggregateInputType = {
    id?: true
    publisheddate?: true
    list_name?: true
    list_description?: true
    comments_quantity?: true
    likes?: true
    films_quantity?: true
    author_id?: true
  }

  export type ListsMaxAggregateInputType = {
    id?: true
    publisheddate?: true
    list_name?: true
    list_description?: true
    comments_quantity?: true
    likes?: true
    films_quantity?: true
    author_id?: true
  }

  export type ListsCountAggregateInputType = {
    id?: true
    publisheddate?: true
    list_name?: true
    list_description?: true
    comments_quantity?: true
    likes?: true
    liked_by_users?: true
    films?: true
    films_quantity?: true
    tags?: true
    author_id?: true
    _all?: true
  }

  export type ListsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lists to aggregate.
     */
    where?: listsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lists to fetch.
     */
    orderBy?: listsOrderByWithRelationInput | listsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: listsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lists
    **/
    _count?: true | ListsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListsMaxAggregateInputType
  }

  export type GetListsAggregateType<T extends ListsAggregateArgs> = {
        [P in keyof T & keyof AggregateLists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLists[P]>
      : GetScalarType<T[P], AggregateLists[P]>
  }




  export type listsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: listsWhereInput
    orderBy?: listsOrderByWithAggregationInput | listsOrderByWithAggregationInput[]
    by: ListsScalarFieldEnum[] | ListsScalarFieldEnum
    having?: listsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListsCountAggregateInputType | true
    _avg?: ListsAvgAggregateInputType
    _sum?: ListsSumAggregateInputType
    _min?: ListsMinAggregateInputType
    _max?: ListsMaxAggregateInputType
  }

  export type ListsGroupByOutputType = {
    id: number
    publisheddate: bigint
    list_name: string
    list_description: string
    comments_quantity: number
    likes: number
    liked_by_users: number[]
    films: number[]
    films_quantity: number
    tags: string[]
    author_id: number
    _count: ListsCountAggregateOutputType | null
    _avg: ListsAvgAggregateOutputType | null
    _sum: ListsSumAggregateOutputType | null
    _min: ListsMinAggregateOutputType | null
    _max: ListsMaxAggregateOutputType | null
  }

  type GetListsGroupByPayload<T extends listsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListsGroupByOutputType[P]>
            : GetScalarType<T[P], ListsGroupByOutputType[P]>
        }
      >
    >


  export type listsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publisheddate?: boolean
    list_name?: boolean
    list_description?: boolean
    comments_quantity?: boolean
    likes?: boolean
    liked_by_users?: boolean
    films?: boolean
    films_quantity?: boolean
    tags?: boolean
    author_id?: boolean
    author?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lists"]>

  export type listsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publisheddate?: boolean
    list_name?: boolean
    list_description?: boolean
    comments_quantity?: boolean
    likes?: boolean
    liked_by_users?: boolean
    films?: boolean
    films_quantity?: boolean
    tags?: boolean
    author_id?: boolean
    author?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lists"]>

  export type listsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publisheddate?: boolean
    list_name?: boolean
    list_description?: boolean
    comments_quantity?: boolean
    likes?: boolean
    liked_by_users?: boolean
    films?: boolean
    films_quantity?: boolean
    tags?: boolean
    author_id?: boolean
    author?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lists"]>

  export type listsSelectScalar = {
    id?: boolean
    publisheddate?: boolean
    list_name?: boolean
    list_description?: boolean
    comments_quantity?: boolean
    likes?: boolean
    liked_by_users?: boolean
    films?: boolean
    films_quantity?: boolean
    tags?: boolean
    author_id?: boolean
  }

  export type listsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publisheddate" | "list_name" | "list_description" | "comments_quantity" | "likes" | "liked_by_users" | "films" | "films_quantity" | "tags" | "author_id", ExtArgs["result"]["lists"]>
  export type listsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type listsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type listsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $listsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lists"
    objects: {
      author: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      publisheddate: bigint
      list_name: string
      list_description: string
      comments_quantity: number
      likes: number
      liked_by_users: number[]
      films: number[]
      films_quantity: number
      tags: string[]
      author_id: number
    }, ExtArgs["result"]["lists"]>
    composites: {}
  }

  type listsGetPayload<S extends boolean | null | undefined | listsDefaultArgs> = $Result.GetResult<Prisma.$listsPayload, S>

  type listsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<listsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListsCountAggregateInputType | true
    }

  export interface listsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lists'], meta: { name: 'lists' } }
    /**
     * Find zero or one Lists that matches the filter.
     * @param {listsFindUniqueArgs} args - Arguments to find a Lists
     * @example
     * // Get one Lists
     * const lists = await prisma.lists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends listsFindUniqueArgs>(args: SelectSubset<T, listsFindUniqueArgs<ExtArgs>>): Prisma__listsClient<$Result.GetResult<Prisma.$listsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lists that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {listsFindUniqueOrThrowArgs} args - Arguments to find a Lists
     * @example
     * // Get one Lists
     * const lists = await prisma.lists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends listsFindUniqueOrThrowArgs>(args: SelectSubset<T, listsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__listsClient<$Result.GetResult<Prisma.$listsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listsFindFirstArgs} args - Arguments to find a Lists
     * @example
     * // Get one Lists
     * const lists = await prisma.lists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends listsFindFirstArgs>(args?: SelectSubset<T, listsFindFirstArgs<ExtArgs>>): Prisma__listsClient<$Result.GetResult<Prisma.$listsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listsFindFirstOrThrowArgs} args - Arguments to find a Lists
     * @example
     * // Get one Lists
     * const lists = await prisma.lists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends listsFindFirstOrThrowArgs>(args?: SelectSubset<T, listsFindFirstOrThrowArgs<ExtArgs>>): Prisma__listsClient<$Result.GetResult<Prisma.$listsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lists
     * const lists = await prisma.lists.findMany()
     * 
     * // Get first 10 Lists
     * const lists = await prisma.lists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listsWithIdOnly = await prisma.lists.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends listsFindManyArgs>(args?: SelectSubset<T, listsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lists.
     * @param {listsCreateArgs} args - Arguments to create a Lists.
     * @example
     * // Create one Lists
     * const Lists = await prisma.lists.create({
     *   data: {
     *     // ... data to create a Lists
     *   }
     * })
     * 
     */
    create<T extends listsCreateArgs>(args: SelectSubset<T, listsCreateArgs<ExtArgs>>): Prisma__listsClient<$Result.GetResult<Prisma.$listsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lists.
     * @param {listsCreateManyArgs} args - Arguments to create many Lists.
     * @example
     * // Create many Lists
     * const lists = await prisma.lists.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends listsCreateManyArgs>(args?: SelectSubset<T, listsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lists and returns the data saved in the database.
     * @param {listsCreateManyAndReturnArgs} args - Arguments to create many Lists.
     * @example
     * // Create many Lists
     * const lists = await prisma.lists.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lists and only return the `id`
     * const listsWithIdOnly = await prisma.lists.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends listsCreateManyAndReturnArgs>(args?: SelectSubset<T, listsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lists.
     * @param {listsDeleteArgs} args - Arguments to delete one Lists.
     * @example
     * // Delete one Lists
     * const Lists = await prisma.lists.delete({
     *   where: {
     *     // ... filter to delete one Lists
     *   }
     * })
     * 
     */
    delete<T extends listsDeleteArgs>(args: SelectSubset<T, listsDeleteArgs<ExtArgs>>): Prisma__listsClient<$Result.GetResult<Prisma.$listsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lists.
     * @param {listsUpdateArgs} args - Arguments to update one Lists.
     * @example
     * // Update one Lists
     * const lists = await prisma.lists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends listsUpdateArgs>(args: SelectSubset<T, listsUpdateArgs<ExtArgs>>): Prisma__listsClient<$Result.GetResult<Prisma.$listsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lists.
     * @param {listsDeleteManyArgs} args - Arguments to filter Lists to delete.
     * @example
     * // Delete a few Lists
     * const { count } = await prisma.lists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends listsDeleteManyArgs>(args?: SelectSubset<T, listsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lists
     * const lists = await prisma.lists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends listsUpdateManyArgs>(args: SelectSubset<T, listsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lists and returns the data updated in the database.
     * @param {listsUpdateManyAndReturnArgs} args - Arguments to update many Lists.
     * @example
     * // Update many Lists
     * const lists = await prisma.lists.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lists and only return the `id`
     * const listsWithIdOnly = await prisma.lists.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends listsUpdateManyAndReturnArgs>(args: SelectSubset<T, listsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lists.
     * @param {listsUpsertArgs} args - Arguments to update or create a Lists.
     * @example
     * // Update or create a Lists
     * const lists = await prisma.lists.upsert({
     *   create: {
     *     // ... data to create a Lists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lists we want to update
     *   }
     * })
     */
    upsert<T extends listsUpsertArgs>(args: SelectSubset<T, listsUpsertArgs<ExtArgs>>): Prisma__listsClient<$Result.GetResult<Prisma.$listsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listsCountArgs} args - Arguments to filter Lists to count.
     * @example
     * // Count the number of Lists
     * const count = await prisma.lists.count({
     *   where: {
     *     // ... the filter for the Lists we want to count
     *   }
     * })
    **/
    count<T extends listsCountArgs>(
      args?: Subset<T, listsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListsAggregateArgs>(args: Subset<T, ListsAggregateArgs>): Prisma.PrismaPromise<GetListsAggregateType<T>>

    /**
     * Group by Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends listsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: listsGroupByArgs['orderBy'] }
        : { orderBy?: listsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, listsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lists model
   */
  readonly fields: listsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__listsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the lists model
   */
  interface listsFieldRefs {
    readonly id: FieldRef<"lists", 'Int'>
    readonly publisheddate: FieldRef<"lists", 'BigInt'>
    readonly list_name: FieldRef<"lists", 'String'>
    readonly list_description: FieldRef<"lists", 'String'>
    readonly comments_quantity: FieldRef<"lists", 'Int'>
    readonly likes: FieldRef<"lists", 'Int'>
    readonly liked_by_users: FieldRef<"lists", 'Int[]'>
    readonly films: FieldRef<"lists", 'Int[]'>
    readonly films_quantity: FieldRef<"lists", 'Int'>
    readonly tags: FieldRef<"lists", 'String[]'>
    readonly author_id: FieldRef<"lists", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * lists findUnique
   */
  export type listsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lists
     */
    select?: listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lists
     */
    omit?: listsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listsInclude<ExtArgs> | null
    /**
     * Filter, which lists to fetch.
     */
    where: listsWhereUniqueInput
  }

  /**
   * lists findUniqueOrThrow
   */
  export type listsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lists
     */
    select?: listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lists
     */
    omit?: listsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listsInclude<ExtArgs> | null
    /**
     * Filter, which lists to fetch.
     */
    where: listsWhereUniqueInput
  }

  /**
   * lists findFirst
   */
  export type listsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lists
     */
    select?: listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lists
     */
    omit?: listsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listsInclude<ExtArgs> | null
    /**
     * Filter, which lists to fetch.
     */
    where?: listsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lists to fetch.
     */
    orderBy?: listsOrderByWithRelationInput | listsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lists.
     */
    cursor?: listsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lists.
     */
    distinct?: ListsScalarFieldEnum | ListsScalarFieldEnum[]
  }

  /**
   * lists findFirstOrThrow
   */
  export type listsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lists
     */
    select?: listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lists
     */
    omit?: listsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listsInclude<ExtArgs> | null
    /**
     * Filter, which lists to fetch.
     */
    where?: listsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lists to fetch.
     */
    orderBy?: listsOrderByWithRelationInput | listsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lists.
     */
    cursor?: listsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lists.
     */
    distinct?: ListsScalarFieldEnum | ListsScalarFieldEnum[]
  }

  /**
   * lists findMany
   */
  export type listsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lists
     */
    select?: listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lists
     */
    omit?: listsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listsInclude<ExtArgs> | null
    /**
     * Filter, which lists to fetch.
     */
    where?: listsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lists to fetch.
     */
    orderBy?: listsOrderByWithRelationInput | listsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lists.
     */
    cursor?: listsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lists.
     */
    skip?: number
    distinct?: ListsScalarFieldEnum | ListsScalarFieldEnum[]
  }

  /**
   * lists create
   */
  export type listsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lists
     */
    select?: listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lists
     */
    omit?: listsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listsInclude<ExtArgs> | null
    /**
     * The data needed to create a lists.
     */
    data: XOR<listsCreateInput, listsUncheckedCreateInput>
  }

  /**
   * lists createMany
   */
  export type listsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lists.
     */
    data: listsCreateManyInput | listsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lists createManyAndReturn
   */
  export type listsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lists
     */
    select?: listsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lists
     */
    omit?: listsOmit<ExtArgs> | null
    /**
     * The data used to create many lists.
     */
    data: listsCreateManyInput | listsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * lists update
   */
  export type listsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lists
     */
    select?: listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lists
     */
    omit?: listsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listsInclude<ExtArgs> | null
    /**
     * The data needed to update a lists.
     */
    data: XOR<listsUpdateInput, listsUncheckedUpdateInput>
    /**
     * Choose, which lists to update.
     */
    where: listsWhereUniqueInput
  }

  /**
   * lists updateMany
   */
  export type listsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lists.
     */
    data: XOR<listsUpdateManyMutationInput, listsUncheckedUpdateManyInput>
    /**
     * Filter which lists to update
     */
    where?: listsWhereInput
    /**
     * Limit how many lists to update.
     */
    limit?: number
  }

  /**
   * lists updateManyAndReturn
   */
  export type listsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lists
     */
    select?: listsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lists
     */
    omit?: listsOmit<ExtArgs> | null
    /**
     * The data used to update lists.
     */
    data: XOR<listsUpdateManyMutationInput, listsUncheckedUpdateManyInput>
    /**
     * Filter which lists to update
     */
    where?: listsWhereInput
    /**
     * Limit how many lists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * lists upsert
   */
  export type listsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lists
     */
    select?: listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lists
     */
    omit?: listsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listsInclude<ExtArgs> | null
    /**
     * The filter to search for the lists to update in case it exists.
     */
    where: listsWhereUniqueInput
    /**
     * In case the lists found by the `where` argument doesn't exist, create a new lists with this data.
     */
    create: XOR<listsCreateInput, listsUncheckedCreateInput>
    /**
     * In case the lists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<listsUpdateInput, listsUncheckedUpdateInput>
  }

  /**
   * lists delete
   */
  export type listsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lists
     */
    select?: listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lists
     */
    omit?: listsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listsInclude<ExtArgs> | null
    /**
     * Filter which lists to delete.
     */
    where: listsWhereUniqueInput
  }

  /**
   * lists deleteMany
   */
  export type listsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lists to delete
     */
    where?: listsWhereInput
    /**
     * Limit how many lists to delete.
     */
    limit?: number
  }

  /**
   * lists without action
   */
  export type listsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lists
     */
    select?: listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lists
     */
    omit?: listsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
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

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const FilmsScalarFieldEnum: {
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

  export type FilmsScalarFieldEnum = (typeof FilmsScalarFieldEnum)[keyof typeof FilmsScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
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

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    author_id: 'author_id',
    item_id: 'item_id',
    comment_text: 'comment_text',
    published_time: 'published_time',
    liked_by_users: 'liked_by_users'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const ListsScalarFieldEnum: {
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

  export type ListsScalarFieldEnum = (typeof ListsScalarFieldEnum)[keyof typeof ListsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    user_avatar?: StringFilter<"users"> | string
    user_name?: StringFilter<"users"> | string
    user_following_quantity?: IntNullableFilter<"users"> | number | null
    user_followers_quantity?: IntNullableFilter<"users"> | number | null
    user_reviews_quantity?: IntNullableFilter<"users"> | number | null
    user_reviews?: IntNullableListFilter<"users">
    user_films_quantity?: IntNullableFilter<"users"> | number | null
    user_films?: IntNullableListFilter<"users">
    user_lists_quantity?: IntNullableFilter<"users"> | number | null
    user_lists?: IntNullableListFilter<"users">
    user_favorite_films_quantity?: IntNullableFilter<"users"> | number | null
    user_favorite_films?: IntNullableListFilter<"users">
    user_favorite_lists_quantity?: IntNullableFilter<"users"> | number | null
    user_favorite_lists?: IntNullableListFilter<"users">
    user_favorite_reviews_quantity?: IntNullableFilter<"users"> | number | null
    user_favorite_reviews?: IntNullableListFilter<"users">
    user_bio?: StringFilter<"users"> | string
    user_tags?: StringNullableListFilter<"users">
    user_following?: IntNullableListFilter<"users">
    user_followers?: IntNullableListFilter<"users">
    user_pinned_lists?: IntNullableListFilter<"users">
    comments?: CommentsListRelationFilter
    lists?: ListsListRelationFilter
    reviews?: ReviewsListRelationFilter
    users_reviewed_film?: FilmsListRelationFilter
    users_liked_film?: FilmsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    user_avatar?: SortOrder
    user_name?: SortOrder
    user_following_quantity?: SortOrderInput | SortOrder
    user_followers_quantity?: SortOrderInput | SortOrder
    user_reviews_quantity?: SortOrderInput | SortOrder
    user_reviews?: SortOrder
    user_films_quantity?: SortOrderInput | SortOrder
    user_films?: SortOrder
    user_lists_quantity?: SortOrderInput | SortOrder
    user_lists?: SortOrder
    user_favorite_films_quantity?: SortOrderInput | SortOrder
    user_favorite_films?: SortOrder
    user_favorite_lists_quantity?: SortOrderInput | SortOrder
    user_favorite_lists?: SortOrder
    user_favorite_reviews_quantity?: SortOrderInput | SortOrder
    user_favorite_reviews?: SortOrder
    user_bio?: SortOrder
    user_tags?: SortOrder
    user_following?: SortOrder
    user_followers?: SortOrder
    user_pinned_lists?: SortOrder
    comments?: commentsOrderByRelationAggregateInput
    lists?: listsOrderByRelationAggregateInput
    reviews?: reviewsOrderByRelationAggregateInput
    users_reviewed_film?: filmsOrderByRelationAggregateInput
    users_liked_film?: filmsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_avatar?: StringFilter<"users"> | string
    user_name?: StringFilter<"users"> | string
    user_following_quantity?: IntNullableFilter<"users"> | number | null
    user_followers_quantity?: IntNullableFilter<"users"> | number | null
    user_reviews_quantity?: IntNullableFilter<"users"> | number | null
    user_reviews?: IntNullableListFilter<"users">
    user_films_quantity?: IntNullableFilter<"users"> | number | null
    user_films?: IntNullableListFilter<"users">
    user_lists_quantity?: IntNullableFilter<"users"> | number | null
    user_lists?: IntNullableListFilter<"users">
    user_favorite_films_quantity?: IntNullableFilter<"users"> | number | null
    user_favorite_films?: IntNullableListFilter<"users">
    user_favorite_lists_quantity?: IntNullableFilter<"users"> | number | null
    user_favorite_lists?: IntNullableListFilter<"users">
    user_favorite_reviews_quantity?: IntNullableFilter<"users"> | number | null
    user_favorite_reviews?: IntNullableListFilter<"users">
    user_bio?: StringFilter<"users"> | string
    user_tags?: StringNullableListFilter<"users">
    user_following?: IntNullableListFilter<"users">
    user_followers?: IntNullableListFilter<"users">
    user_pinned_lists?: IntNullableListFilter<"users">
    comments?: CommentsListRelationFilter
    lists?: ListsListRelationFilter
    reviews?: ReviewsListRelationFilter
    users_reviewed_film?: FilmsListRelationFilter
    users_liked_film?: FilmsListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    user_avatar?: SortOrder
    user_name?: SortOrder
    user_following_quantity?: SortOrderInput | SortOrder
    user_followers_quantity?: SortOrderInput | SortOrder
    user_reviews_quantity?: SortOrderInput | SortOrder
    user_reviews?: SortOrder
    user_films_quantity?: SortOrderInput | SortOrder
    user_films?: SortOrder
    user_lists_quantity?: SortOrderInput | SortOrder
    user_lists?: SortOrder
    user_favorite_films_quantity?: SortOrderInput | SortOrder
    user_favorite_films?: SortOrder
    user_favorite_lists_quantity?: SortOrderInput | SortOrder
    user_favorite_lists?: SortOrder
    user_favorite_reviews_quantity?: SortOrderInput | SortOrder
    user_favorite_reviews?: SortOrder
    user_bio?: SortOrder
    user_tags?: SortOrder
    user_following?: SortOrder
    user_followers?: SortOrder
    user_pinned_lists?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    user_avatar?: StringWithAggregatesFilter<"users"> | string
    user_name?: StringWithAggregatesFilter<"users"> | string
    user_following_quantity?: IntNullableWithAggregatesFilter<"users"> | number | null
    user_followers_quantity?: IntNullableWithAggregatesFilter<"users"> | number | null
    user_reviews_quantity?: IntNullableWithAggregatesFilter<"users"> | number | null
    user_reviews?: IntNullableListFilter<"users">
    user_films_quantity?: IntNullableWithAggregatesFilter<"users"> | number | null
    user_films?: IntNullableListFilter<"users">
    user_lists_quantity?: IntNullableWithAggregatesFilter<"users"> | number | null
    user_lists?: IntNullableListFilter<"users">
    user_favorite_films_quantity?: IntNullableWithAggregatesFilter<"users"> | number | null
    user_favorite_films?: IntNullableListFilter<"users">
    user_favorite_lists_quantity?: IntNullableWithAggregatesFilter<"users"> | number | null
    user_favorite_lists?: IntNullableListFilter<"users">
    user_favorite_reviews_quantity?: IntNullableWithAggregatesFilter<"users"> | number | null
    user_favorite_reviews?: IntNullableListFilter<"users">
    user_bio?: StringWithAggregatesFilter<"users"> | string
    user_tags?: StringNullableListFilter<"users">
    user_following?: IntNullableListFilter<"users">
    user_followers?: IntNullableListFilter<"users">
    user_pinned_lists?: IntNullableListFilter<"users">
  }

  export type filmsWhereInput = {
    AND?: filmsWhereInput | filmsWhereInput[]
    OR?: filmsWhereInput[]
    NOT?: filmsWhereInput | filmsWhereInput[]
    id?: IntFilter<"films"> | number
    film_name?: StringFilter<"films"> | string
    realise_year?: IntFilter<"films"> | number
    film_image?: StringFilter<"films"> | string
    author_name?: StringFilter<"films"> | string
    description?: StringFilter<"films"> | string
    duration?: IntFilter<"films"> | number
    views?: IntFilter<"films"> | number
    users_viewed?: IntNullableListFilter<"films">
    reviews_quantity?: IntFilter<"films"> | number
    reviews?: IntNullableListFilter<"films">
    likes?: IntFilter<"films"> | number
    liked_by_users?: IntNullableListFilter<"films">
    rating1?: IntNullableListFilter<"films">
    rating2?: IntNullableListFilter<"films">
    rating3?: IntNullableListFilter<"films">
    rating4?: IntNullableListFilter<"films">
    rating5?: IntNullableListFilter<"films">
    cast?: StringNullableListFilter<"films">
    crew?: JsonFilter<"films">
    details?: JsonFilter<"films">
    genres?: StringNullableListFilter<"films">
    themes?: StringNullableListFilter<"films">
    reviewsByUser?: UsersListRelationFilter
    likedByUsers?: UsersListRelationFilter
  }

  export type filmsOrderByWithRelationInput = {
    id?: SortOrder
    film_name?: SortOrder
    realise_year?: SortOrder
    film_image?: SortOrder
    author_name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    views?: SortOrder
    users_viewed?: SortOrder
    reviews_quantity?: SortOrder
    reviews?: SortOrder
    likes?: SortOrder
    liked_by_users?: SortOrder
    rating1?: SortOrder
    rating2?: SortOrder
    rating3?: SortOrder
    rating4?: SortOrder
    rating5?: SortOrder
    cast?: SortOrder
    crew?: SortOrder
    details?: SortOrder
    genres?: SortOrder
    themes?: SortOrder
    reviewsByUser?: usersOrderByRelationAggregateInput
    likedByUsers?: usersOrderByRelationAggregateInput
  }

  export type filmsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: filmsWhereInput | filmsWhereInput[]
    OR?: filmsWhereInput[]
    NOT?: filmsWhereInput | filmsWhereInput[]
    film_name?: StringFilter<"films"> | string
    realise_year?: IntFilter<"films"> | number
    film_image?: StringFilter<"films"> | string
    author_name?: StringFilter<"films"> | string
    description?: StringFilter<"films"> | string
    duration?: IntFilter<"films"> | number
    views?: IntFilter<"films"> | number
    users_viewed?: IntNullableListFilter<"films">
    reviews_quantity?: IntFilter<"films"> | number
    reviews?: IntNullableListFilter<"films">
    likes?: IntFilter<"films"> | number
    liked_by_users?: IntNullableListFilter<"films">
    rating1?: IntNullableListFilter<"films">
    rating2?: IntNullableListFilter<"films">
    rating3?: IntNullableListFilter<"films">
    rating4?: IntNullableListFilter<"films">
    rating5?: IntNullableListFilter<"films">
    cast?: StringNullableListFilter<"films">
    crew?: JsonFilter<"films">
    details?: JsonFilter<"films">
    genres?: StringNullableListFilter<"films">
    themes?: StringNullableListFilter<"films">
    reviewsByUser?: UsersListRelationFilter
    likedByUsers?: UsersListRelationFilter
  }, "id">

  export type filmsOrderByWithAggregationInput = {
    id?: SortOrder
    film_name?: SortOrder
    realise_year?: SortOrder
    film_image?: SortOrder
    author_name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    views?: SortOrder
    users_viewed?: SortOrder
    reviews_quantity?: SortOrder
    reviews?: SortOrder
    likes?: SortOrder
    liked_by_users?: SortOrder
    rating1?: SortOrder
    rating2?: SortOrder
    rating3?: SortOrder
    rating4?: SortOrder
    rating5?: SortOrder
    cast?: SortOrder
    crew?: SortOrder
    details?: SortOrder
    genres?: SortOrder
    themes?: SortOrder
    _count?: filmsCountOrderByAggregateInput
    _avg?: filmsAvgOrderByAggregateInput
    _max?: filmsMaxOrderByAggregateInput
    _min?: filmsMinOrderByAggregateInput
    _sum?: filmsSumOrderByAggregateInput
  }

  export type filmsScalarWhereWithAggregatesInput = {
    AND?: filmsScalarWhereWithAggregatesInput | filmsScalarWhereWithAggregatesInput[]
    OR?: filmsScalarWhereWithAggregatesInput[]
    NOT?: filmsScalarWhereWithAggregatesInput | filmsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"films"> | number
    film_name?: StringWithAggregatesFilter<"films"> | string
    realise_year?: IntWithAggregatesFilter<"films"> | number
    film_image?: StringWithAggregatesFilter<"films"> | string
    author_name?: StringWithAggregatesFilter<"films"> | string
    description?: StringWithAggregatesFilter<"films"> | string
    duration?: IntWithAggregatesFilter<"films"> | number
    views?: IntWithAggregatesFilter<"films"> | number
    users_viewed?: IntNullableListFilter<"films">
    reviews_quantity?: IntWithAggregatesFilter<"films"> | number
    reviews?: IntNullableListFilter<"films">
    likes?: IntWithAggregatesFilter<"films"> | number
    liked_by_users?: IntNullableListFilter<"films">
    rating1?: IntNullableListFilter<"films">
    rating2?: IntNullableListFilter<"films">
    rating3?: IntNullableListFilter<"films">
    rating4?: IntNullableListFilter<"films">
    rating5?: IntNullableListFilter<"films">
    cast?: StringNullableListFilter<"films">
    crew?: JsonWithAggregatesFilter<"films">
    details?: JsonWithAggregatesFilter<"films">
    genres?: StringNullableListFilter<"films">
    themes?: StringNullableListFilter<"films">
  }

  export type reviewsWhereInput = {
    AND?: reviewsWhereInput | reviewsWhereInput[]
    OR?: reviewsWhereInput[]
    NOT?: reviewsWhereInput | reviewsWhereInput[]
    id?: IntFilter<"reviews"> | number
    type?: StringFilter<"reviews"> | string
    item_id?: IntFilter<"reviews"> | number
    review_comments?: IntFilter<"reviews"> | number
    review_comments_users?: IntNullableListFilter<"reviews">
    review_likes?: IntFilter<"reviews"> | number
    review_likes_users?: IntNullableListFilter<"reviews">
    review_text?: StringFilter<"reviews"> | string
    review_rate?: IntNullableFilter<"reviews"> | number | null
    isedited?: BoolFilter<"reviews"> | boolean
    published_date?: BigIntFilter<"reviews"> | bigint | number
    user_id?: IntFilter<"reviews"> | number
    comments?: CommentsListRelationFilter
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type reviewsOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    item_id?: SortOrder
    review_comments?: SortOrder
    review_comments_users?: SortOrder
    review_likes?: SortOrder
    review_likes_users?: SortOrder
    review_text?: SortOrder
    review_rate?: SortOrderInput | SortOrder
    isedited?: SortOrder
    published_date?: SortOrder
    user_id?: SortOrder
    comments?: commentsOrderByRelationAggregateInput
    user?: usersOrderByWithRelationInput
  }

  export type reviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: reviewsWhereInput | reviewsWhereInput[]
    OR?: reviewsWhereInput[]
    NOT?: reviewsWhereInput | reviewsWhereInput[]
    type?: StringFilter<"reviews"> | string
    item_id?: IntFilter<"reviews"> | number
    review_comments?: IntFilter<"reviews"> | number
    review_comments_users?: IntNullableListFilter<"reviews">
    review_likes?: IntFilter<"reviews"> | number
    review_likes_users?: IntNullableListFilter<"reviews">
    review_text?: StringFilter<"reviews"> | string
    review_rate?: IntNullableFilter<"reviews"> | number | null
    isedited?: BoolFilter<"reviews"> | boolean
    published_date?: BigIntFilter<"reviews"> | bigint | number
    user_id?: IntFilter<"reviews"> | number
    comments?: CommentsListRelationFilter
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type reviewsOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    item_id?: SortOrder
    review_comments?: SortOrder
    review_comments_users?: SortOrder
    review_likes?: SortOrder
    review_likes_users?: SortOrder
    review_text?: SortOrder
    review_rate?: SortOrderInput | SortOrder
    isedited?: SortOrder
    published_date?: SortOrder
    user_id?: SortOrder
    _count?: reviewsCountOrderByAggregateInput
    _avg?: reviewsAvgOrderByAggregateInput
    _max?: reviewsMaxOrderByAggregateInput
    _min?: reviewsMinOrderByAggregateInput
    _sum?: reviewsSumOrderByAggregateInput
  }

  export type reviewsScalarWhereWithAggregatesInput = {
    AND?: reviewsScalarWhereWithAggregatesInput | reviewsScalarWhereWithAggregatesInput[]
    OR?: reviewsScalarWhereWithAggregatesInput[]
    NOT?: reviewsScalarWhereWithAggregatesInput | reviewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"reviews"> | number
    type?: StringWithAggregatesFilter<"reviews"> | string
    item_id?: IntWithAggregatesFilter<"reviews"> | number
    review_comments?: IntWithAggregatesFilter<"reviews"> | number
    review_comments_users?: IntNullableListFilter<"reviews">
    review_likes?: IntWithAggregatesFilter<"reviews"> | number
    review_likes_users?: IntNullableListFilter<"reviews">
    review_text?: StringWithAggregatesFilter<"reviews"> | string
    review_rate?: IntNullableWithAggregatesFilter<"reviews"> | number | null
    isedited?: BoolWithAggregatesFilter<"reviews"> | boolean
    published_date?: BigIntWithAggregatesFilter<"reviews"> | bigint | number
    user_id?: IntWithAggregatesFilter<"reviews"> | number
  }

  export type commentsWhereInput = {
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    id?: IntFilter<"comments"> | number
    author_id?: IntFilter<"comments"> | number
    item_id?: IntFilter<"comments"> | number
    comment_text?: StringFilter<"comments"> | string
    published_time?: BigIntFilter<"comments"> | bigint | number
    liked_by_users?: IntNullableListFilter<"comments">
    author?: XOR<UsersScalarRelationFilter, usersWhereInput>
    review?: XOR<ReviewsScalarRelationFilter, reviewsWhereInput>
  }

  export type commentsOrderByWithRelationInput = {
    id?: SortOrder
    author_id?: SortOrder
    item_id?: SortOrder
    comment_text?: SortOrder
    published_time?: SortOrder
    liked_by_users?: SortOrder
    author?: usersOrderByWithRelationInput
    review?: reviewsOrderByWithRelationInput
  }

  export type commentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    author_id?: IntFilter<"comments"> | number
    item_id?: IntFilter<"comments"> | number
    comment_text?: StringFilter<"comments"> | string
    published_time?: BigIntFilter<"comments"> | bigint | number
    liked_by_users?: IntNullableListFilter<"comments">
    author?: XOR<UsersScalarRelationFilter, usersWhereInput>
    review?: XOR<ReviewsScalarRelationFilter, reviewsWhereInput>
  }, "id">

  export type commentsOrderByWithAggregationInput = {
    id?: SortOrder
    author_id?: SortOrder
    item_id?: SortOrder
    comment_text?: SortOrder
    published_time?: SortOrder
    liked_by_users?: SortOrder
    _count?: commentsCountOrderByAggregateInput
    _avg?: commentsAvgOrderByAggregateInput
    _max?: commentsMaxOrderByAggregateInput
    _min?: commentsMinOrderByAggregateInput
    _sum?: commentsSumOrderByAggregateInput
  }

  export type commentsScalarWhereWithAggregatesInput = {
    AND?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    OR?: commentsScalarWhereWithAggregatesInput[]
    NOT?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comments"> | number
    author_id?: IntWithAggregatesFilter<"comments"> | number
    item_id?: IntWithAggregatesFilter<"comments"> | number
    comment_text?: StringWithAggregatesFilter<"comments"> | string
    published_time?: BigIntWithAggregatesFilter<"comments"> | bigint | number
    liked_by_users?: IntNullableListFilter<"comments">
  }

  export type listsWhereInput = {
    AND?: listsWhereInput | listsWhereInput[]
    OR?: listsWhereInput[]
    NOT?: listsWhereInput | listsWhereInput[]
    id?: IntFilter<"lists"> | number
    publisheddate?: BigIntFilter<"lists"> | bigint | number
    list_name?: StringFilter<"lists"> | string
    list_description?: StringFilter<"lists"> | string
    comments_quantity?: IntFilter<"lists"> | number
    likes?: IntFilter<"lists"> | number
    liked_by_users?: IntNullableListFilter<"lists">
    films?: IntNullableListFilter<"lists">
    films_quantity?: IntFilter<"lists"> | number
    tags?: StringNullableListFilter<"lists">
    author_id?: IntFilter<"lists"> | number
    author?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type listsOrderByWithRelationInput = {
    id?: SortOrder
    publisheddate?: SortOrder
    list_name?: SortOrder
    list_description?: SortOrder
    comments_quantity?: SortOrder
    likes?: SortOrder
    liked_by_users?: SortOrder
    films?: SortOrder
    films_quantity?: SortOrder
    tags?: SortOrder
    author_id?: SortOrder
    author?: usersOrderByWithRelationInput
  }

  export type listsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: listsWhereInput | listsWhereInput[]
    OR?: listsWhereInput[]
    NOT?: listsWhereInput | listsWhereInput[]
    publisheddate?: BigIntFilter<"lists"> | bigint | number
    list_name?: StringFilter<"lists"> | string
    list_description?: StringFilter<"lists"> | string
    comments_quantity?: IntFilter<"lists"> | number
    likes?: IntFilter<"lists"> | number
    liked_by_users?: IntNullableListFilter<"lists">
    films?: IntNullableListFilter<"lists">
    films_quantity?: IntFilter<"lists"> | number
    tags?: StringNullableListFilter<"lists">
    author_id?: IntFilter<"lists"> | number
    author?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type listsOrderByWithAggregationInput = {
    id?: SortOrder
    publisheddate?: SortOrder
    list_name?: SortOrder
    list_description?: SortOrder
    comments_quantity?: SortOrder
    likes?: SortOrder
    liked_by_users?: SortOrder
    films?: SortOrder
    films_quantity?: SortOrder
    tags?: SortOrder
    author_id?: SortOrder
    _count?: listsCountOrderByAggregateInput
    _avg?: listsAvgOrderByAggregateInput
    _max?: listsMaxOrderByAggregateInput
    _min?: listsMinOrderByAggregateInput
    _sum?: listsSumOrderByAggregateInput
  }

  export type listsScalarWhereWithAggregatesInput = {
    AND?: listsScalarWhereWithAggregatesInput | listsScalarWhereWithAggregatesInput[]
    OR?: listsScalarWhereWithAggregatesInput[]
    NOT?: listsScalarWhereWithAggregatesInput | listsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"lists"> | number
    publisheddate?: BigIntWithAggregatesFilter<"lists"> | bigint | number
    list_name?: StringWithAggregatesFilter<"lists"> | string
    list_description?: StringWithAggregatesFilter<"lists"> | string
    comments_quantity?: IntWithAggregatesFilter<"lists"> | number
    likes?: IntWithAggregatesFilter<"lists"> | number
    liked_by_users?: IntNullableListFilter<"lists">
    films?: IntNullableListFilter<"lists">
    films_quantity?: IntWithAggregatesFilter<"lists"> | number
    tags?: StringNullableListFilter<"lists">
    author_id?: IntWithAggregatesFilter<"lists"> | number
  }

  export type usersCreateInput = {
    user_avatar?: string
    user_name: string
    user_following_quantity?: number | null
    user_followers_quantity?: number | null
    user_reviews_quantity?: number | null
    user_reviews?: usersCreateuser_reviewsInput | number[]
    user_films_quantity?: number | null
    user_films?: usersCreateuser_filmsInput | number[]
    user_lists_quantity?: number | null
    user_lists?: usersCreateuser_listsInput | number[]
    user_favorite_films_quantity?: number | null
    user_favorite_films?: usersCreateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: number | null
    user_favorite_lists?: usersCreateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: number | null
    user_favorite_reviews?: usersCreateuser_favorite_reviewsInput | number[]
    user_bio?: string
    user_tags?: usersCreateuser_tagsInput | string[]
    user_following?: usersCreateuser_followingInput | number[]
    user_followers?: usersCreateuser_followersInput | number[]
    user_pinned_lists?: usersCreateuser_pinned_listsInput | number[]
    comments?: commentsCreateNestedManyWithoutAuthorInput
    lists?: listsCreateNestedManyWithoutAuthorInput
    reviews?: reviewsCreateNestedManyWithoutUserInput
    users_reviewed_film?: filmsCreateNestedManyWithoutReviewsByUserInput
    users_liked_film?: filmsCreateNestedManyWithoutLikedByUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    user_avatar?: string
    user_name: string
    user_following_quantity?: number | null
    user_followers_quantity?: number | null
    user_reviews_quantity?: number | null
    user_reviews?: usersCreateuser_reviewsInput | number[]
    user_films_quantity?: number | null
    user_films?: usersCreateuser_filmsInput | number[]
    user_lists_quantity?: number | null
    user_lists?: usersCreateuser_listsInput | number[]
    user_favorite_films_quantity?: number | null
    user_favorite_films?: usersCreateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: number | null
    user_favorite_lists?: usersCreateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: number | null
    user_favorite_reviews?: usersCreateuser_favorite_reviewsInput | number[]
    user_bio?: string
    user_tags?: usersCreateuser_tagsInput | string[]
    user_following?: usersCreateuser_followingInput | number[]
    user_followers?: usersCreateuser_followersInput | number[]
    user_pinned_lists?: usersCreateuser_pinned_listsInput | number[]
    comments?: commentsUncheckedCreateNestedManyWithoutAuthorInput
    lists?: listsUncheckedCreateNestedManyWithoutAuthorInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUserInput
    users_reviewed_film?: filmsUncheckedCreateNestedManyWithoutReviewsByUserInput
    users_liked_film?: filmsUncheckedCreateNestedManyWithoutLikedByUsersInput
  }

  export type usersUpdateInput = {
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_following_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_followers_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews?: usersUpdateuser_reviewsInput | number[]
    user_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_films?: usersUpdateuser_filmsInput | number[]
    user_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_lists?: usersUpdateuser_listsInput | number[]
    user_favorite_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_films?: usersUpdateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_lists?: usersUpdateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_reviews?: usersUpdateuser_favorite_reviewsInput | number[]
    user_bio?: StringFieldUpdateOperationsInput | string
    user_tags?: usersUpdateuser_tagsInput | string[]
    user_following?: usersUpdateuser_followingInput | number[]
    user_followers?: usersUpdateuser_followersInput | number[]
    user_pinned_lists?: usersUpdateuser_pinned_listsInput | number[]
    comments?: commentsUpdateManyWithoutAuthorNestedInput
    lists?: listsUpdateManyWithoutAuthorNestedInput
    reviews?: reviewsUpdateManyWithoutUserNestedInput
    users_reviewed_film?: filmsUpdateManyWithoutReviewsByUserNestedInput
    users_liked_film?: filmsUpdateManyWithoutLikedByUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_following_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_followers_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews?: usersUpdateuser_reviewsInput | number[]
    user_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_films?: usersUpdateuser_filmsInput | number[]
    user_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_lists?: usersUpdateuser_listsInput | number[]
    user_favorite_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_films?: usersUpdateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_lists?: usersUpdateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_reviews?: usersUpdateuser_favorite_reviewsInput | number[]
    user_bio?: StringFieldUpdateOperationsInput | string
    user_tags?: usersUpdateuser_tagsInput | string[]
    user_following?: usersUpdateuser_followingInput | number[]
    user_followers?: usersUpdateuser_followersInput | number[]
    user_pinned_lists?: usersUpdateuser_pinned_listsInput | number[]
    comments?: commentsUncheckedUpdateManyWithoutAuthorNestedInput
    lists?: listsUncheckedUpdateManyWithoutAuthorNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUserNestedInput
    users_reviewed_film?: filmsUncheckedUpdateManyWithoutReviewsByUserNestedInput
    users_liked_film?: filmsUncheckedUpdateManyWithoutLikedByUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    user_avatar?: string
    user_name: string
    user_following_quantity?: number | null
    user_followers_quantity?: number | null
    user_reviews_quantity?: number | null
    user_reviews?: usersCreateuser_reviewsInput | number[]
    user_films_quantity?: number | null
    user_films?: usersCreateuser_filmsInput | number[]
    user_lists_quantity?: number | null
    user_lists?: usersCreateuser_listsInput | number[]
    user_favorite_films_quantity?: number | null
    user_favorite_films?: usersCreateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: number | null
    user_favorite_lists?: usersCreateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: number | null
    user_favorite_reviews?: usersCreateuser_favorite_reviewsInput | number[]
    user_bio?: string
    user_tags?: usersCreateuser_tagsInput | string[]
    user_following?: usersCreateuser_followingInput | number[]
    user_followers?: usersCreateuser_followersInput | number[]
    user_pinned_lists?: usersCreateuser_pinned_listsInput | number[]
  }

  export type usersUpdateManyMutationInput = {
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_following_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_followers_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews?: usersUpdateuser_reviewsInput | number[]
    user_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_films?: usersUpdateuser_filmsInput | number[]
    user_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_lists?: usersUpdateuser_listsInput | number[]
    user_favorite_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_films?: usersUpdateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_lists?: usersUpdateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_reviews?: usersUpdateuser_favorite_reviewsInput | number[]
    user_bio?: StringFieldUpdateOperationsInput | string
    user_tags?: usersUpdateuser_tagsInput | string[]
    user_following?: usersUpdateuser_followingInput | number[]
    user_followers?: usersUpdateuser_followersInput | number[]
    user_pinned_lists?: usersUpdateuser_pinned_listsInput | number[]
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_following_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_followers_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews?: usersUpdateuser_reviewsInput | number[]
    user_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_films?: usersUpdateuser_filmsInput | number[]
    user_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_lists?: usersUpdateuser_listsInput | number[]
    user_favorite_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_films?: usersUpdateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_lists?: usersUpdateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_reviews?: usersUpdateuser_favorite_reviewsInput | number[]
    user_bio?: StringFieldUpdateOperationsInput | string
    user_tags?: usersUpdateuser_tagsInput | string[]
    user_following?: usersUpdateuser_followingInput | number[]
    user_followers?: usersUpdateuser_followersInput | number[]
    user_pinned_lists?: usersUpdateuser_pinned_listsInput | number[]
  }

  export type filmsCreateInput = {
    film_name: string
    realise_year: number
    film_image: string
    author_name: string
    description: string
    duration: number
    views?: number
    users_viewed?: filmsCreateusers_viewedInput | number[]
    reviews_quantity?: number
    reviews?: filmsCreatereviewsInput | number[]
    likes?: number
    liked_by_users?: filmsCreateliked_by_usersInput | number[]
    rating1?: filmsCreaterating1Input | number[]
    rating2?: filmsCreaterating2Input | number[]
    rating3?: filmsCreaterating3Input | number[]
    rating4?: filmsCreaterating4Input | number[]
    rating5?: filmsCreaterating5Input | number[]
    cast?: filmsCreatecastInput | string[]
    crew: JsonNullValueInput | InputJsonValue
    details: JsonNullValueInput | InputJsonValue
    genres?: filmsCreategenresInput | string[]
    themes?: filmsCreatethemesInput | string[]
    reviewsByUser?: usersCreateNestedManyWithoutUsers_reviewed_filmInput
    likedByUsers?: usersCreateNestedManyWithoutUsers_liked_filmInput
  }

  export type filmsUncheckedCreateInput = {
    id?: number
    film_name: string
    realise_year: number
    film_image: string
    author_name: string
    description: string
    duration: number
    views?: number
    users_viewed?: filmsCreateusers_viewedInput | number[]
    reviews_quantity?: number
    reviews?: filmsCreatereviewsInput | number[]
    likes?: number
    liked_by_users?: filmsCreateliked_by_usersInput | number[]
    rating1?: filmsCreaterating1Input | number[]
    rating2?: filmsCreaterating2Input | number[]
    rating3?: filmsCreaterating3Input | number[]
    rating4?: filmsCreaterating4Input | number[]
    rating5?: filmsCreaterating5Input | number[]
    cast?: filmsCreatecastInput | string[]
    crew: JsonNullValueInput | InputJsonValue
    details: JsonNullValueInput | InputJsonValue
    genres?: filmsCreategenresInput | string[]
    themes?: filmsCreatethemesInput | string[]
    reviewsByUser?: usersUncheckedCreateNestedManyWithoutUsers_reviewed_filmInput
    likedByUsers?: usersUncheckedCreateNestedManyWithoutUsers_liked_filmInput
  }

  export type filmsUpdateInput = {
    film_name?: StringFieldUpdateOperationsInput | string
    realise_year?: IntFieldUpdateOperationsInput | number
    film_image?: StringFieldUpdateOperationsInput | string
    author_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    users_viewed?: filmsUpdateusers_viewedInput | number[]
    reviews_quantity?: IntFieldUpdateOperationsInput | number
    reviews?: filmsUpdatereviewsInput | number[]
    likes?: IntFieldUpdateOperationsInput | number
    liked_by_users?: filmsUpdateliked_by_usersInput | number[]
    rating1?: filmsUpdaterating1Input | number[]
    rating2?: filmsUpdaterating2Input | number[]
    rating3?: filmsUpdaterating3Input | number[]
    rating4?: filmsUpdaterating4Input | number[]
    rating5?: filmsUpdaterating5Input | number[]
    cast?: filmsUpdatecastInput | string[]
    crew?: JsonNullValueInput | InputJsonValue
    details?: JsonNullValueInput | InputJsonValue
    genres?: filmsUpdategenresInput | string[]
    themes?: filmsUpdatethemesInput | string[]
    reviewsByUser?: usersUpdateManyWithoutUsers_reviewed_filmNestedInput
    likedByUsers?: usersUpdateManyWithoutUsers_liked_filmNestedInput
  }

  export type filmsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_name?: StringFieldUpdateOperationsInput | string
    realise_year?: IntFieldUpdateOperationsInput | number
    film_image?: StringFieldUpdateOperationsInput | string
    author_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    users_viewed?: filmsUpdateusers_viewedInput | number[]
    reviews_quantity?: IntFieldUpdateOperationsInput | number
    reviews?: filmsUpdatereviewsInput | number[]
    likes?: IntFieldUpdateOperationsInput | number
    liked_by_users?: filmsUpdateliked_by_usersInput | number[]
    rating1?: filmsUpdaterating1Input | number[]
    rating2?: filmsUpdaterating2Input | number[]
    rating3?: filmsUpdaterating3Input | number[]
    rating4?: filmsUpdaterating4Input | number[]
    rating5?: filmsUpdaterating5Input | number[]
    cast?: filmsUpdatecastInput | string[]
    crew?: JsonNullValueInput | InputJsonValue
    details?: JsonNullValueInput | InputJsonValue
    genres?: filmsUpdategenresInput | string[]
    themes?: filmsUpdatethemesInput | string[]
    reviewsByUser?: usersUncheckedUpdateManyWithoutUsers_reviewed_filmNestedInput
    likedByUsers?: usersUncheckedUpdateManyWithoutUsers_liked_filmNestedInput
  }

  export type filmsCreateManyInput = {
    id?: number
    film_name: string
    realise_year: number
    film_image: string
    author_name: string
    description: string
    duration: number
    views?: number
    users_viewed?: filmsCreateusers_viewedInput | number[]
    reviews_quantity?: number
    reviews?: filmsCreatereviewsInput | number[]
    likes?: number
    liked_by_users?: filmsCreateliked_by_usersInput | number[]
    rating1?: filmsCreaterating1Input | number[]
    rating2?: filmsCreaterating2Input | number[]
    rating3?: filmsCreaterating3Input | number[]
    rating4?: filmsCreaterating4Input | number[]
    rating5?: filmsCreaterating5Input | number[]
    cast?: filmsCreatecastInput | string[]
    crew: JsonNullValueInput | InputJsonValue
    details: JsonNullValueInput | InputJsonValue
    genres?: filmsCreategenresInput | string[]
    themes?: filmsCreatethemesInput | string[]
  }

  export type filmsUpdateManyMutationInput = {
    film_name?: StringFieldUpdateOperationsInput | string
    realise_year?: IntFieldUpdateOperationsInput | number
    film_image?: StringFieldUpdateOperationsInput | string
    author_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    users_viewed?: filmsUpdateusers_viewedInput | number[]
    reviews_quantity?: IntFieldUpdateOperationsInput | number
    reviews?: filmsUpdatereviewsInput | number[]
    likes?: IntFieldUpdateOperationsInput | number
    liked_by_users?: filmsUpdateliked_by_usersInput | number[]
    rating1?: filmsUpdaterating1Input | number[]
    rating2?: filmsUpdaterating2Input | number[]
    rating3?: filmsUpdaterating3Input | number[]
    rating4?: filmsUpdaterating4Input | number[]
    rating5?: filmsUpdaterating5Input | number[]
    cast?: filmsUpdatecastInput | string[]
    crew?: JsonNullValueInput | InputJsonValue
    details?: JsonNullValueInput | InputJsonValue
    genres?: filmsUpdategenresInput | string[]
    themes?: filmsUpdatethemesInput | string[]
  }

  export type filmsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_name?: StringFieldUpdateOperationsInput | string
    realise_year?: IntFieldUpdateOperationsInput | number
    film_image?: StringFieldUpdateOperationsInput | string
    author_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    users_viewed?: filmsUpdateusers_viewedInput | number[]
    reviews_quantity?: IntFieldUpdateOperationsInput | number
    reviews?: filmsUpdatereviewsInput | number[]
    likes?: IntFieldUpdateOperationsInput | number
    liked_by_users?: filmsUpdateliked_by_usersInput | number[]
    rating1?: filmsUpdaterating1Input | number[]
    rating2?: filmsUpdaterating2Input | number[]
    rating3?: filmsUpdaterating3Input | number[]
    rating4?: filmsUpdaterating4Input | number[]
    rating5?: filmsUpdaterating5Input | number[]
    cast?: filmsUpdatecastInput | string[]
    crew?: JsonNullValueInput | InputJsonValue
    details?: JsonNullValueInput | InputJsonValue
    genres?: filmsUpdategenresInput | string[]
    themes?: filmsUpdatethemesInput | string[]
  }

  export type reviewsCreateInput = {
    type: string
    item_id: number
    review_comments?: number
    review_comments_users?: reviewsCreatereview_comments_usersInput | number[]
    review_likes?: number
    review_likes_users?: reviewsCreatereview_likes_usersInput | number[]
    review_text: string
    review_rate?: number | null
    isedited?: boolean
    published_date: bigint | number
    comments?: commentsCreateNestedManyWithoutReviewInput
    user: usersCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateInput = {
    id?: number
    type: string
    item_id: number
    review_comments?: number
    review_comments_users?: reviewsCreatereview_comments_usersInput | number[]
    review_likes?: number
    review_likes_users?: reviewsCreatereview_likes_usersInput | number[]
    review_text: string
    review_rate?: number | null
    isedited?: boolean
    published_date: bigint | number
    user_id: number
    comments?: commentsUncheckedCreateNestedManyWithoutReviewInput
  }

  export type reviewsUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    item_id?: IntFieldUpdateOperationsInput | number
    review_comments?: IntFieldUpdateOperationsInput | number
    review_comments_users?: reviewsUpdatereview_comments_usersInput | number[]
    review_likes?: IntFieldUpdateOperationsInput | number
    review_likes_users?: reviewsUpdatereview_likes_usersInput | number[]
    review_text?: StringFieldUpdateOperationsInput | string
    review_rate?: NullableIntFieldUpdateOperationsInput | number | null
    isedited?: BoolFieldUpdateOperationsInput | boolean
    published_date?: BigIntFieldUpdateOperationsInput | bigint | number
    comments?: commentsUpdateManyWithoutReviewNestedInput
    user?: usersUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    item_id?: IntFieldUpdateOperationsInput | number
    review_comments?: IntFieldUpdateOperationsInput | number
    review_comments_users?: reviewsUpdatereview_comments_usersInput | number[]
    review_likes?: IntFieldUpdateOperationsInput | number
    review_likes_users?: reviewsUpdatereview_likes_usersInput | number[]
    review_text?: StringFieldUpdateOperationsInput | string
    review_rate?: NullableIntFieldUpdateOperationsInput | number | null
    isedited?: BoolFieldUpdateOperationsInput | boolean
    published_date?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: IntFieldUpdateOperationsInput | number
    comments?: commentsUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type reviewsCreateManyInput = {
    id?: number
    type: string
    item_id: number
    review_comments?: number
    review_comments_users?: reviewsCreatereview_comments_usersInput | number[]
    review_likes?: number
    review_likes_users?: reviewsCreatereview_likes_usersInput | number[]
    review_text: string
    review_rate?: number | null
    isedited?: boolean
    published_date: bigint | number
    user_id: number
  }

  export type reviewsUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    item_id?: IntFieldUpdateOperationsInput | number
    review_comments?: IntFieldUpdateOperationsInput | number
    review_comments_users?: reviewsUpdatereview_comments_usersInput | number[]
    review_likes?: IntFieldUpdateOperationsInput | number
    review_likes_users?: reviewsUpdatereview_likes_usersInput | number[]
    review_text?: StringFieldUpdateOperationsInput | string
    review_rate?: NullableIntFieldUpdateOperationsInput | number | null
    isedited?: BoolFieldUpdateOperationsInput | boolean
    published_date?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type reviewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    item_id?: IntFieldUpdateOperationsInput | number
    review_comments?: IntFieldUpdateOperationsInput | number
    review_comments_users?: reviewsUpdatereview_comments_usersInput | number[]
    review_likes?: IntFieldUpdateOperationsInput | number
    review_likes_users?: reviewsUpdatereview_likes_usersInput | number[]
    review_text?: StringFieldUpdateOperationsInput | string
    review_rate?: NullableIntFieldUpdateOperationsInput | number | null
    isedited?: BoolFieldUpdateOperationsInput | boolean
    published_date?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type commentsCreateInput = {
    comment_text?: string
    published_time: bigint | number
    liked_by_users?: commentsCreateliked_by_usersInput | number[]
    author: usersCreateNestedOneWithoutCommentsInput
    review: reviewsCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateInput = {
    id?: number
    author_id: number
    item_id: number
    comment_text?: string
    published_time: bigint | number
    liked_by_users?: commentsCreateliked_by_usersInput | number[]
  }

  export type commentsUpdateInput = {
    comment_text?: StringFieldUpdateOperationsInput | string
    published_time?: BigIntFieldUpdateOperationsInput | bigint | number
    liked_by_users?: commentsUpdateliked_by_usersInput | number[]
    author?: usersUpdateOneRequiredWithoutCommentsNestedInput
    review?: reviewsUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    published_time?: BigIntFieldUpdateOperationsInput | bigint | number
    liked_by_users?: commentsUpdateliked_by_usersInput | number[]
  }

  export type commentsCreateManyInput = {
    id?: number
    author_id: number
    item_id: number
    comment_text?: string
    published_time: bigint | number
    liked_by_users?: commentsCreateliked_by_usersInput | number[]
  }

  export type commentsUpdateManyMutationInput = {
    comment_text?: StringFieldUpdateOperationsInput | string
    published_time?: BigIntFieldUpdateOperationsInput | bigint | number
    liked_by_users?: commentsUpdateliked_by_usersInput | number[]
  }

  export type commentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    published_time?: BigIntFieldUpdateOperationsInput | bigint | number
    liked_by_users?: commentsUpdateliked_by_usersInput | number[]
  }

  export type listsCreateInput = {
    publisheddate: bigint | number
    list_name: string
    list_description: string
    comments_quantity?: number
    likes?: number
    liked_by_users?: listsCreateliked_by_usersInput | number[]
    films?: listsCreatefilmsInput | number[]
    films_quantity?: number
    tags?: listsCreatetagsInput | string[]
    author: usersCreateNestedOneWithoutListsInput
  }

  export type listsUncheckedCreateInput = {
    id?: number
    publisheddate: bigint | number
    list_name: string
    list_description: string
    comments_quantity?: number
    likes?: number
    liked_by_users?: listsCreateliked_by_usersInput | number[]
    films?: listsCreatefilmsInput | number[]
    films_quantity?: number
    tags?: listsCreatetagsInput | string[]
    author_id: number
  }

  export type listsUpdateInput = {
    publisheddate?: BigIntFieldUpdateOperationsInput | bigint | number
    list_name?: StringFieldUpdateOperationsInput | string
    list_description?: StringFieldUpdateOperationsInput | string
    comments_quantity?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    liked_by_users?: listsUpdateliked_by_usersInput | number[]
    films?: listsUpdatefilmsInput | number[]
    films_quantity?: IntFieldUpdateOperationsInput | number
    tags?: listsUpdatetagsInput | string[]
    author?: usersUpdateOneRequiredWithoutListsNestedInput
  }

  export type listsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    publisheddate?: BigIntFieldUpdateOperationsInput | bigint | number
    list_name?: StringFieldUpdateOperationsInput | string
    list_description?: StringFieldUpdateOperationsInput | string
    comments_quantity?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    liked_by_users?: listsUpdateliked_by_usersInput | number[]
    films?: listsUpdatefilmsInput | number[]
    films_quantity?: IntFieldUpdateOperationsInput | number
    tags?: listsUpdatetagsInput | string[]
    author_id?: IntFieldUpdateOperationsInput | number
  }

  export type listsCreateManyInput = {
    id?: number
    publisheddate: bigint | number
    list_name: string
    list_description: string
    comments_quantity?: number
    likes?: number
    liked_by_users?: listsCreateliked_by_usersInput | number[]
    films?: listsCreatefilmsInput | number[]
    films_quantity?: number
    tags?: listsCreatetagsInput | string[]
    author_id: number
  }

  export type listsUpdateManyMutationInput = {
    publisheddate?: BigIntFieldUpdateOperationsInput | bigint | number
    list_name?: StringFieldUpdateOperationsInput | string
    list_description?: StringFieldUpdateOperationsInput | string
    comments_quantity?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    liked_by_users?: listsUpdateliked_by_usersInput | number[]
    films?: listsUpdatefilmsInput | number[]
    films_quantity?: IntFieldUpdateOperationsInput | number
    tags?: listsUpdatetagsInput | string[]
  }

  export type listsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    publisheddate?: BigIntFieldUpdateOperationsInput | bigint | number
    list_name?: StringFieldUpdateOperationsInput | string
    list_description?: StringFieldUpdateOperationsInput | string
    comments_quantity?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    liked_by_users?: listsUpdateliked_by_usersInput | number[]
    films?: listsUpdatefilmsInput | number[]
    films_quantity?: IntFieldUpdateOperationsInput | number
    tags?: listsUpdatetagsInput | string[]
    author_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CommentsListRelationFilter = {
    every?: commentsWhereInput
    some?: commentsWhereInput
    none?: commentsWhereInput
  }

  export type ListsListRelationFilter = {
    every?: listsWhereInput
    some?: listsWhereInput
    none?: listsWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: reviewsWhereInput
    some?: reviewsWhereInput
    none?: reviewsWhereInput
  }

  export type FilmsListRelationFilter = {
    every?: filmsWhereInput
    some?: filmsWhereInput
    none?: filmsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type listsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type filmsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    user_avatar?: SortOrder
    user_name?: SortOrder
    user_following_quantity?: SortOrder
    user_followers_quantity?: SortOrder
    user_reviews_quantity?: SortOrder
    user_reviews?: SortOrder
    user_films_quantity?: SortOrder
    user_films?: SortOrder
    user_lists_quantity?: SortOrder
    user_lists?: SortOrder
    user_favorite_films_quantity?: SortOrder
    user_favorite_films?: SortOrder
    user_favorite_lists_quantity?: SortOrder
    user_favorite_lists?: SortOrder
    user_favorite_reviews_quantity?: SortOrder
    user_favorite_reviews?: SortOrder
    user_bio?: SortOrder
    user_tags?: SortOrder
    user_following?: SortOrder
    user_followers?: SortOrder
    user_pinned_lists?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    user_following_quantity?: SortOrder
    user_followers_quantity?: SortOrder
    user_reviews_quantity?: SortOrder
    user_reviews?: SortOrder
    user_films_quantity?: SortOrder
    user_films?: SortOrder
    user_lists_quantity?: SortOrder
    user_lists?: SortOrder
    user_favorite_films_quantity?: SortOrder
    user_favorite_films?: SortOrder
    user_favorite_lists_quantity?: SortOrder
    user_favorite_lists?: SortOrder
    user_favorite_reviews_quantity?: SortOrder
    user_favorite_reviews?: SortOrder
    user_following?: SortOrder
    user_followers?: SortOrder
    user_pinned_lists?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_avatar?: SortOrder
    user_name?: SortOrder
    user_following_quantity?: SortOrder
    user_followers_quantity?: SortOrder
    user_reviews_quantity?: SortOrder
    user_films_quantity?: SortOrder
    user_lists_quantity?: SortOrder
    user_favorite_films_quantity?: SortOrder
    user_favorite_lists_quantity?: SortOrder
    user_favorite_reviews_quantity?: SortOrder
    user_bio?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    user_avatar?: SortOrder
    user_name?: SortOrder
    user_following_quantity?: SortOrder
    user_followers_quantity?: SortOrder
    user_reviews_quantity?: SortOrder
    user_films_quantity?: SortOrder
    user_lists_quantity?: SortOrder
    user_favorite_films_quantity?: SortOrder
    user_favorite_lists_quantity?: SortOrder
    user_favorite_reviews_quantity?: SortOrder
    user_bio?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    user_following_quantity?: SortOrder
    user_followers_quantity?: SortOrder
    user_reviews_quantity?: SortOrder
    user_reviews?: SortOrder
    user_films_quantity?: SortOrder
    user_films?: SortOrder
    user_lists_quantity?: SortOrder
    user_lists?: SortOrder
    user_favorite_films_quantity?: SortOrder
    user_favorite_films?: SortOrder
    user_favorite_lists_quantity?: SortOrder
    user_favorite_lists?: SortOrder
    user_favorite_reviews_quantity?: SortOrder
    user_favorite_reviews?: SortOrder
    user_following?: SortOrder
    user_followers?: SortOrder
    user_pinned_lists?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type filmsCountOrderByAggregateInput = {
    id?: SortOrder
    film_name?: SortOrder
    realise_year?: SortOrder
    film_image?: SortOrder
    author_name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    views?: SortOrder
    users_viewed?: SortOrder
    reviews_quantity?: SortOrder
    reviews?: SortOrder
    likes?: SortOrder
    liked_by_users?: SortOrder
    rating1?: SortOrder
    rating2?: SortOrder
    rating3?: SortOrder
    rating4?: SortOrder
    rating5?: SortOrder
    cast?: SortOrder
    crew?: SortOrder
    details?: SortOrder
    genres?: SortOrder
    themes?: SortOrder
  }

  export type filmsAvgOrderByAggregateInput = {
    id?: SortOrder
    realise_year?: SortOrder
    duration?: SortOrder
    views?: SortOrder
    users_viewed?: SortOrder
    reviews_quantity?: SortOrder
    reviews?: SortOrder
    likes?: SortOrder
    liked_by_users?: SortOrder
    rating1?: SortOrder
    rating2?: SortOrder
    rating3?: SortOrder
    rating4?: SortOrder
    rating5?: SortOrder
  }

  export type filmsMaxOrderByAggregateInput = {
    id?: SortOrder
    film_name?: SortOrder
    realise_year?: SortOrder
    film_image?: SortOrder
    author_name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    views?: SortOrder
    reviews_quantity?: SortOrder
    likes?: SortOrder
  }

  export type filmsMinOrderByAggregateInput = {
    id?: SortOrder
    film_name?: SortOrder
    realise_year?: SortOrder
    film_image?: SortOrder
    author_name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    views?: SortOrder
    reviews_quantity?: SortOrder
    likes?: SortOrder
  }

  export type filmsSumOrderByAggregateInput = {
    id?: SortOrder
    realise_year?: SortOrder
    duration?: SortOrder
    views?: SortOrder
    users_viewed?: SortOrder
    reviews_quantity?: SortOrder
    reviews?: SortOrder
    likes?: SortOrder
    liked_by_users?: SortOrder
    rating1?: SortOrder
    rating2?: SortOrder
    rating3?: SortOrder
    rating4?: SortOrder
    rating5?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type reviewsCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    item_id?: SortOrder
    review_comments?: SortOrder
    review_comments_users?: SortOrder
    review_likes?: SortOrder
    review_likes_users?: SortOrder
    review_text?: SortOrder
    review_rate?: SortOrder
    isedited?: SortOrder
    published_date?: SortOrder
    user_id?: SortOrder
  }

  export type reviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    item_id?: SortOrder
    review_comments?: SortOrder
    review_comments_users?: SortOrder
    review_likes?: SortOrder
    review_likes_users?: SortOrder
    review_rate?: SortOrder
    published_date?: SortOrder
    user_id?: SortOrder
  }

  export type reviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    item_id?: SortOrder
    review_comments?: SortOrder
    review_likes?: SortOrder
    review_text?: SortOrder
    review_rate?: SortOrder
    isedited?: SortOrder
    published_date?: SortOrder
    user_id?: SortOrder
  }

  export type reviewsMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    item_id?: SortOrder
    review_comments?: SortOrder
    review_likes?: SortOrder
    review_text?: SortOrder
    review_rate?: SortOrder
    isedited?: SortOrder
    published_date?: SortOrder
    user_id?: SortOrder
  }

  export type reviewsSumOrderByAggregateInput = {
    id?: SortOrder
    item_id?: SortOrder
    review_comments?: SortOrder
    review_comments_users?: SortOrder
    review_likes?: SortOrder
    review_likes_users?: SortOrder
    review_rate?: SortOrder
    published_date?: SortOrder
    user_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type ReviewsScalarRelationFilter = {
    is?: reviewsWhereInput
    isNot?: reviewsWhereInput
  }

  export type commentsCountOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    item_id?: SortOrder
    comment_text?: SortOrder
    published_time?: SortOrder
    liked_by_users?: SortOrder
  }

  export type commentsAvgOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    item_id?: SortOrder
    published_time?: SortOrder
    liked_by_users?: SortOrder
  }

  export type commentsMaxOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    item_id?: SortOrder
    comment_text?: SortOrder
    published_time?: SortOrder
  }

  export type commentsMinOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    item_id?: SortOrder
    comment_text?: SortOrder
    published_time?: SortOrder
  }

  export type commentsSumOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    item_id?: SortOrder
    published_time?: SortOrder
    liked_by_users?: SortOrder
  }

  export type listsCountOrderByAggregateInput = {
    id?: SortOrder
    publisheddate?: SortOrder
    list_name?: SortOrder
    list_description?: SortOrder
    comments_quantity?: SortOrder
    likes?: SortOrder
    liked_by_users?: SortOrder
    films?: SortOrder
    films_quantity?: SortOrder
    tags?: SortOrder
    author_id?: SortOrder
  }

  export type listsAvgOrderByAggregateInput = {
    id?: SortOrder
    publisheddate?: SortOrder
    comments_quantity?: SortOrder
    likes?: SortOrder
    liked_by_users?: SortOrder
    films?: SortOrder
    films_quantity?: SortOrder
    author_id?: SortOrder
  }

  export type listsMaxOrderByAggregateInput = {
    id?: SortOrder
    publisheddate?: SortOrder
    list_name?: SortOrder
    list_description?: SortOrder
    comments_quantity?: SortOrder
    likes?: SortOrder
    films_quantity?: SortOrder
    author_id?: SortOrder
  }

  export type listsMinOrderByAggregateInput = {
    id?: SortOrder
    publisheddate?: SortOrder
    list_name?: SortOrder
    list_description?: SortOrder
    comments_quantity?: SortOrder
    likes?: SortOrder
    films_quantity?: SortOrder
    author_id?: SortOrder
  }

  export type listsSumOrderByAggregateInput = {
    id?: SortOrder
    publisheddate?: SortOrder
    comments_quantity?: SortOrder
    likes?: SortOrder
    liked_by_users?: SortOrder
    films?: SortOrder
    films_quantity?: SortOrder
    author_id?: SortOrder
  }

  export type usersCreateuser_reviewsInput = {
    set: number[]
  }

  export type usersCreateuser_filmsInput = {
    set: number[]
  }

  export type usersCreateuser_listsInput = {
    set: number[]
  }

  export type usersCreateuser_favorite_filmsInput = {
    set: number[]
  }

  export type usersCreateuser_favorite_listsInput = {
    set: number[]
  }

  export type usersCreateuser_favorite_reviewsInput = {
    set: number[]
  }

  export type usersCreateuser_tagsInput = {
    set: string[]
  }

  export type usersCreateuser_followingInput = {
    set: number[]
  }

  export type usersCreateuser_followersInput = {
    set: number[]
  }

  export type usersCreateuser_pinned_listsInput = {
    set: number[]
  }

  export type commentsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<commentsCreateWithoutAuthorInput, commentsUncheckedCreateWithoutAuthorInput> | commentsCreateWithoutAuthorInput[] | commentsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutAuthorInput | commentsCreateOrConnectWithoutAuthorInput[]
    createMany?: commentsCreateManyAuthorInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type listsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<listsCreateWithoutAuthorInput, listsUncheckedCreateWithoutAuthorInput> | listsCreateWithoutAuthorInput[] | listsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: listsCreateOrConnectWithoutAuthorInput | listsCreateOrConnectWithoutAuthorInput[]
    createMany?: listsCreateManyAuthorInputEnvelope
    connect?: listsWhereUniqueInput | listsWhereUniqueInput[]
  }

  export type reviewsCreateNestedManyWithoutUserInput = {
    create?: XOR<reviewsCreateWithoutUserInput, reviewsUncheckedCreateWithoutUserInput> | reviewsCreateWithoutUserInput[] | reviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUserInput | reviewsCreateOrConnectWithoutUserInput[]
    createMany?: reviewsCreateManyUserInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type filmsCreateNestedManyWithoutReviewsByUserInput = {
    create?: XOR<filmsCreateWithoutReviewsByUserInput, filmsUncheckedCreateWithoutReviewsByUserInput> | filmsCreateWithoutReviewsByUserInput[] | filmsUncheckedCreateWithoutReviewsByUserInput[]
    connectOrCreate?: filmsCreateOrConnectWithoutReviewsByUserInput | filmsCreateOrConnectWithoutReviewsByUserInput[]
    connect?: filmsWhereUniqueInput | filmsWhereUniqueInput[]
  }

  export type filmsCreateNestedManyWithoutLikedByUsersInput = {
    create?: XOR<filmsCreateWithoutLikedByUsersInput, filmsUncheckedCreateWithoutLikedByUsersInput> | filmsCreateWithoutLikedByUsersInput[] | filmsUncheckedCreateWithoutLikedByUsersInput[]
    connectOrCreate?: filmsCreateOrConnectWithoutLikedByUsersInput | filmsCreateOrConnectWithoutLikedByUsersInput[]
    connect?: filmsWhereUniqueInput | filmsWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<commentsCreateWithoutAuthorInput, commentsUncheckedCreateWithoutAuthorInput> | commentsCreateWithoutAuthorInput[] | commentsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutAuthorInput | commentsCreateOrConnectWithoutAuthorInput[]
    createMany?: commentsCreateManyAuthorInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type listsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<listsCreateWithoutAuthorInput, listsUncheckedCreateWithoutAuthorInput> | listsCreateWithoutAuthorInput[] | listsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: listsCreateOrConnectWithoutAuthorInput | listsCreateOrConnectWithoutAuthorInput[]
    createMany?: listsCreateManyAuthorInputEnvelope
    connect?: listsWhereUniqueInput | listsWhereUniqueInput[]
  }

  export type reviewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<reviewsCreateWithoutUserInput, reviewsUncheckedCreateWithoutUserInput> | reviewsCreateWithoutUserInput[] | reviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUserInput | reviewsCreateOrConnectWithoutUserInput[]
    createMany?: reviewsCreateManyUserInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type filmsUncheckedCreateNestedManyWithoutReviewsByUserInput = {
    create?: XOR<filmsCreateWithoutReviewsByUserInput, filmsUncheckedCreateWithoutReviewsByUserInput> | filmsCreateWithoutReviewsByUserInput[] | filmsUncheckedCreateWithoutReviewsByUserInput[]
    connectOrCreate?: filmsCreateOrConnectWithoutReviewsByUserInput | filmsCreateOrConnectWithoutReviewsByUserInput[]
    connect?: filmsWhereUniqueInput | filmsWhereUniqueInput[]
  }

  export type filmsUncheckedCreateNestedManyWithoutLikedByUsersInput = {
    create?: XOR<filmsCreateWithoutLikedByUsersInput, filmsUncheckedCreateWithoutLikedByUsersInput> | filmsCreateWithoutLikedByUsersInput[] | filmsUncheckedCreateWithoutLikedByUsersInput[]
    connectOrCreate?: filmsCreateOrConnectWithoutLikedByUsersInput | filmsCreateOrConnectWithoutLikedByUsersInput[]
    connect?: filmsWhereUniqueInput | filmsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateuser_reviewsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type usersUpdateuser_filmsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type usersUpdateuser_listsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type usersUpdateuser_favorite_filmsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type usersUpdateuser_favorite_listsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type usersUpdateuser_favorite_reviewsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type usersUpdateuser_tagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type usersUpdateuser_followingInput = {
    set?: number[]
    push?: number | number[]
  }

  export type usersUpdateuser_followersInput = {
    set?: number[]
    push?: number | number[]
  }

  export type usersUpdateuser_pinned_listsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type commentsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<commentsCreateWithoutAuthorInput, commentsUncheckedCreateWithoutAuthorInput> | commentsCreateWithoutAuthorInput[] | commentsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutAuthorInput | commentsCreateOrConnectWithoutAuthorInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutAuthorInput | commentsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: commentsCreateManyAuthorInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutAuthorInput | commentsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutAuthorInput | commentsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type listsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<listsCreateWithoutAuthorInput, listsUncheckedCreateWithoutAuthorInput> | listsCreateWithoutAuthorInput[] | listsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: listsCreateOrConnectWithoutAuthorInput | listsCreateOrConnectWithoutAuthorInput[]
    upsert?: listsUpsertWithWhereUniqueWithoutAuthorInput | listsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: listsCreateManyAuthorInputEnvelope
    set?: listsWhereUniqueInput | listsWhereUniqueInput[]
    disconnect?: listsWhereUniqueInput | listsWhereUniqueInput[]
    delete?: listsWhereUniqueInput | listsWhereUniqueInput[]
    connect?: listsWhereUniqueInput | listsWhereUniqueInput[]
    update?: listsUpdateWithWhereUniqueWithoutAuthorInput | listsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: listsUpdateManyWithWhereWithoutAuthorInput | listsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: listsScalarWhereInput | listsScalarWhereInput[]
  }

  export type reviewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<reviewsCreateWithoutUserInput, reviewsUncheckedCreateWithoutUserInput> | reviewsCreateWithoutUserInput[] | reviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUserInput | reviewsCreateOrConnectWithoutUserInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutUserInput | reviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reviewsCreateManyUserInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutUserInput | reviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutUserInput | reviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type filmsUpdateManyWithoutReviewsByUserNestedInput = {
    create?: XOR<filmsCreateWithoutReviewsByUserInput, filmsUncheckedCreateWithoutReviewsByUserInput> | filmsCreateWithoutReviewsByUserInput[] | filmsUncheckedCreateWithoutReviewsByUserInput[]
    connectOrCreate?: filmsCreateOrConnectWithoutReviewsByUserInput | filmsCreateOrConnectWithoutReviewsByUserInput[]
    upsert?: filmsUpsertWithWhereUniqueWithoutReviewsByUserInput | filmsUpsertWithWhereUniqueWithoutReviewsByUserInput[]
    set?: filmsWhereUniqueInput | filmsWhereUniqueInput[]
    disconnect?: filmsWhereUniqueInput | filmsWhereUniqueInput[]
    delete?: filmsWhereUniqueInput | filmsWhereUniqueInput[]
    connect?: filmsWhereUniqueInput | filmsWhereUniqueInput[]
    update?: filmsUpdateWithWhereUniqueWithoutReviewsByUserInput | filmsUpdateWithWhereUniqueWithoutReviewsByUserInput[]
    updateMany?: filmsUpdateManyWithWhereWithoutReviewsByUserInput | filmsUpdateManyWithWhereWithoutReviewsByUserInput[]
    deleteMany?: filmsScalarWhereInput | filmsScalarWhereInput[]
  }

  export type filmsUpdateManyWithoutLikedByUsersNestedInput = {
    create?: XOR<filmsCreateWithoutLikedByUsersInput, filmsUncheckedCreateWithoutLikedByUsersInput> | filmsCreateWithoutLikedByUsersInput[] | filmsUncheckedCreateWithoutLikedByUsersInput[]
    connectOrCreate?: filmsCreateOrConnectWithoutLikedByUsersInput | filmsCreateOrConnectWithoutLikedByUsersInput[]
    upsert?: filmsUpsertWithWhereUniqueWithoutLikedByUsersInput | filmsUpsertWithWhereUniqueWithoutLikedByUsersInput[]
    set?: filmsWhereUniqueInput | filmsWhereUniqueInput[]
    disconnect?: filmsWhereUniqueInput | filmsWhereUniqueInput[]
    delete?: filmsWhereUniqueInput | filmsWhereUniqueInput[]
    connect?: filmsWhereUniqueInput | filmsWhereUniqueInput[]
    update?: filmsUpdateWithWhereUniqueWithoutLikedByUsersInput | filmsUpdateWithWhereUniqueWithoutLikedByUsersInput[]
    updateMany?: filmsUpdateManyWithWhereWithoutLikedByUsersInput | filmsUpdateManyWithWhereWithoutLikedByUsersInput[]
    deleteMany?: filmsScalarWhereInput | filmsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type commentsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<commentsCreateWithoutAuthorInput, commentsUncheckedCreateWithoutAuthorInput> | commentsCreateWithoutAuthorInput[] | commentsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutAuthorInput | commentsCreateOrConnectWithoutAuthorInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutAuthorInput | commentsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: commentsCreateManyAuthorInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutAuthorInput | commentsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutAuthorInput | commentsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type listsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<listsCreateWithoutAuthorInput, listsUncheckedCreateWithoutAuthorInput> | listsCreateWithoutAuthorInput[] | listsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: listsCreateOrConnectWithoutAuthorInput | listsCreateOrConnectWithoutAuthorInput[]
    upsert?: listsUpsertWithWhereUniqueWithoutAuthorInput | listsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: listsCreateManyAuthorInputEnvelope
    set?: listsWhereUniqueInput | listsWhereUniqueInput[]
    disconnect?: listsWhereUniqueInput | listsWhereUniqueInput[]
    delete?: listsWhereUniqueInput | listsWhereUniqueInput[]
    connect?: listsWhereUniqueInput | listsWhereUniqueInput[]
    update?: listsUpdateWithWhereUniqueWithoutAuthorInput | listsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: listsUpdateManyWithWhereWithoutAuthorInput | listsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: listsScalarWhereInput | listsScalarWhereInput[]
  }

  export type reviewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<reviewsCreateWithoutUserInput, reviewsUncheckedCreateWithoutUserInput> | reviewsCreateWithoutUserInput[] | reviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUserInput | reviewsCreateOrConnectWithoutUserInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutUserInput | reviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reviewsCreateManyUserInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutUserInput | reviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutUserInput | reviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type filmsUncheckedUpdateManyWithoutReviewsByUserNestedInput = {
    create?: XOR<filmsCreateWithoutReviewsByUserInput, filmsUncheckedCreateWithoutReviewsByUserInput> | filmsCreateWithoutReviewsByUserInput[] | filmsUncheckedCreateWithoutReviewsByUserInput[]
    connectOrCreate?: filmsCreateOrConnectWithoutReviewsByUserInput | filmsCreateOrConnectWithoutReviewsByUserInput[]
    upsert?: filmsUpsertWithWhereUniqueWithoutReviewsByUserInput | filmsUpsertWithWhereUniqueWithoutReviewsByUserInput[]
    set?: filmsWhereUniqueInput | filmsWhereUniqueInput[]
    disconnect?: filmsWhereUniqueInput | filmsWhereUniqueInput[]
    delete?: filmsWhereUniqueInput | filmsWhereUniqueInput[]
    connect?: filmsWhereUniqueInput | filmsWhereUniqueInput[]
    update?: filmsUpdateWithWhereUniqueWithoutReviewsByUserInput | filmsUpdateWithWhereUniqueWithoutReviewsByUserInput[]
    updateMany?: filmsUpdateManyWithWhereWithoutReviewsByUserInput | filmsUpdateManyWithWhereWithoutReviewsByUserInput[]
    deleteMany?: filmsScalarWhereInput | filmsScalarWhereInput[]
  }

  export type filmsUncheckedUpdateManyWithoutLikedByUsersNestedInput = {
    create?: XOR<filmsCreateWithoutLikedByUsersInput, filmsUncheckedCreateWithoutLikedByUsersInput> | filmsCreateWithoutLikedByUsersInput[] | filmsUncheckedCreateWithoutLikedByUsersInput[]
    connectOrCreate?: filmsCreateOrConnectWithoutLikedByUsersInput | filmsCreateOrConnectWithoutLikedByUsersInput[]
    upsert?: filmsUpsertWithWhereUniqueWithoutLikedByUsersInput | filmsUpsertWithWhereUniqueWithoutLikedByUsersInput[]
    set?: filmsWhereUniqueInput | filmsWhereUniqueInput[]
    disconnect?: filmsWhereUniqueInput | filmsWhereUniqueInput[]
    delete?: filmsWhereUniqueInput | filmsWhereUniqueInput[]
    connect?: filmsWhereUniqueInput | filmsWhereUniqueInput[]
    update?: filmsUpdateWithWhereUniqueWithoutLikedByUsersInput | filmsUpdateWithWhereUniqueWithoutLikedByUsersInput[]
    updateMany?: filmsUpdateManyWithWhereWithoutLikedByUsersInput | filmsUpdateManyWithWhereWithoutLikedByUsersInput[]
    deleteMany?: filmsScalarWhereInput | filmsScalarWhereInput[]
  }

  export type filmsCreateusers_viewedInput = {
    set: number[]
  }

  export type filmsCreatereviewsInput = {
    set: number[]
  }

  export type filmsCreateliked_by_usersInput = {
    set: number[]
  }

  export type filmsCreaterating1Input = {
    set: number[]
  }

  export type filmsCreaterating2Input = {
    set: number[]
  }

  export type filmsCreaterating3Input = {
    set: number[]
  }

  export type filmsCreaterating4Input = {
    set: number[]
  }

  export type filmsCreaterating5Input = {
    set: number[]
  }

  export type filmsCreatecastInput = {
    set: string[]
  }

  export type filmsCreategenresInput = {
    set: string[]
  }

  export type filmsCreatethemesInput = {
    set: string[]
  }

  export type usersCreateNestedManyWithoutUsers_reviewed_filmInput = {
    create?: XOR<usersCreateWithoutUsers_reviewed_filmInput, usersUncheckedCreateWithoutUsers_reviewed_filmInput> | usersCreateWithoutUsers_reviewed_filmInput[] | usersUncheckedCreateWithoutUsers_reviewed_filmInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUsers_reviewed_filmInput | usersCreateOrConnectWithoutUsers_reviewed_filmInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersCreateNestedManyWithoutUsers_liked_filmInput = {
    create?: XOR<usersCreateWithoutUsers_liked_filmInput, usersUncheckedCreateWithoutUsers_liked_filmInput> | usersCreateWithoutUsers_liked_filmInput[] | usersUncheckedCreateWithoutUsers_liked_filmInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUsers_liked_filmInput | usersCreateOrConnectWithoutUsers_liked_filmInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutUsers_reviewed_filmInput = {
    create?: XOR<usersCreateWithoutUsers_reviewed_filmInput, usersUncheckedCreateWithoutUsers_reviewed_filmInput> | usersCreateWithoutUsers_reviewed_filmInput[] | usersUncheckedCreateWithoutUsers_reviewed_filmInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUsers_reviewed_filmInput | usersCreateOrConnectWithoutUsers_reviewed_filmInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutUsers_liked_filmInput = {
    create?: XOR<usersCreateWithoutUsers_liked_filmInput, usersUncheckedCreateWithoutUsers_liked_filmInput> | usersCreateWithoutUsers_liked_filmInput[] | usersUncheckedCreateWithoutUsers_liked_filmInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUsers_liked_filmInput | usersCreateOrConnectWithoutUsers_liked_filmInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type filmsUpdateusers_viewedInput = {
    set?: number[]
    push?: number | number[]
  }

  export type filmsUpdatereviewsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type filmsUpdateliked_by_usersInput = {
    set?: number[]
    push?: number | number[]
  }

  export type filmsUpdaterating1Input = {
    set?: number[]
    push?: number | number[]
  }

  export type filmsUpdaterating2Input = {
    set?: number[]
    push?: number | number[]
  }

  export type filmsUpdaterating3Input = {
    set?: number[]
    push?: number | number[]
  }

  export type filmsUpdaterating4Input = {
    set?: number[]
    push?: number | number[]
  }

  export type filmsUpdaterating5Input = {
    set?: number[]
    push?: number | number[]
  }

  export type filmsUpdatecastInput = {
    set?: string[]
    push?: string | string[]
  }

  export type filmsUpdategenresInput = {
    set?: string[]
    push?: string | string[]
  }

  export type filmsUpdatethemesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type usersUpdateManyWithoutUsers_reviewed_filmNestedInput = {
    create?: XOR<usersCreateWithoutUsers_reviewed_filmInput, usersUncheckedCreateWithoutUsers_reviewed_filmInput> | usersCreateWithoutUsers_reviewed_filmInput[] | usersUncheckedCreateWithoutUsers_reviewed_filmInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUsers_reviewed_filmInput | usersCreateOrConnectWithoutUsers_reviewed_filmInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutUsers_reviewed_filmInput | usersUpsertWithWhereUniqueWithoutUsers_reviewed_filmInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutUsers_reviewed_filmInput | usersUpdateWithWhereUniqueWithoutUsers_reviewed_filmInput[]
    updateMany?: usersUpdateManyWithWhereWithoutUsers_reviewed_filmInput | usersUpdateManyWithWhereWithoutUsers_reviewed_filmInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUpdateManyWithoutUsers_liked_filmNestedInput = {
    create?: XOR<usersCreateWithoutUsers_liked_filmInput, usersUncheckedCreateWithoutUsers_liked_filmInput> | usersCreateWithoutUsers_liked_filmInput[] | usersUncheckedCreateWithoutUsers_liked_filmInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUsers_liked_filmInput | usersCreateOrConnectWithoutUsers_liked_filmInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutUsers_liked_filmInput | usersUpsertWithWhereUniqueWithoutUsers_liked_filmInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutUsers_liked_filmInput | usersUpdateWithWhereUniqueWithoutUsers_liked_filmInput[]
    updateMany?: usersUpdateManyWithWhereWithoutUsers_liked_filmInput | usersUpdateManyWithWhereWithoutUsers_liked_filmInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutUsers_reviewed_filmNestedInput = {
    create?: XOR<usersCreateWithoutUsers_reviewed_filmInput, usersUncheckedCreateWithoutUsers_reviewed_filmInput> | usersCreateWithoutUsers_reviewed_filmInput[] | usersUncheckedCreateWithoutUsers_reviewed_filmInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUsers_reviewed_filmInput | usersCreateOrConnectWithoutUsers_reviewed_filmInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutUsers_reviewed_filmInput | usersUpsertWithWhereUniqueWithoutUsers_reviewed_filmInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutUsers_reviewed_filmInput | usersUpdateWithWhereUniqueWithoutUsers_reviewed_filmInput[]
    updateMany?: usersUpdateManyWithWhereWithoutUsers_reviewed_filmInput | usersUpdateManyWithWhereWithoutUsers_reviewed_filmInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutUsers_liked_filmNestedInput = {
    create?: XOR<usersCreateWithoutUsers_liked_filmInput, usersUncheckedCreateWithoutUsers_liked_filmInput> | usersCreateWithoutUsers_liked_filmInput[] | usersUncheckedCreateWithoutUsers_liked_filmInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUsers_liked_filmInput | usersCreateOrConnectWithoutUsers_liked_filmInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutUsers_liked_filmInput | usersUpsertWithWhereUniqueWithoutUsers_liked_filmInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutUsers_liked_filmInput | usersUpdateWithWhereUniqueWithoutUsers_liked_filmInput[]
    updateMany?: usersUpdateManyWithWhereWithoutUsers_liked_filmInput | usersUpdateManyWithWhereWithoutUsers_liked_filmInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type reviewsCreatereview_comments_usersInput = {
    set: number[]
  }

  export type reviewsCreatereview_likes_usersInput = {
    set: number[]
  }

  export type commentsCreateNestedManyWithoutReviewInput = {
    create?: XOR<commentsCreateWithoutReviewInput, commentsUncheckedCreateWithoutReviewInput> | commentsCreateWithoutReviewInput[] | commentsUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutReviewInput | commentsCreateOrConnectWithoutReviewInput[]
    createMany?: commentsCreateManyReviewInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutReviewsInput = {
    create?: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReviewsInput
    connect?: usersWhereUniqueInput
  }

  export type commentsUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<commentsCreateWithoutReviewInput, commentsUncheckedCreateWithoutReviewInput> | commentsCreateWithoutReviewInput[] | commentsUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutReviewInput | commentsCreateOrConnectWithoutReviewInput[]
    createMany?: commentsCreateManyReviewInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type reviewsUpdatereview_comments_usersInput = {
    set?: number[]
    push?: number | number[]
  }

  export type reviewsUpdatereview_likes_usersInput = {
    set?: number[]
    push?: number | number[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type commentsUpdateManyWithoutReviewNestedInput = {
    create?: XOR<commentsCreateWithoutReviewInput, commentsUncheckedCreateWithoutReviewInput> | commentsCreateWithoutReviewInput[] | commentsUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutReviewInput | commentsCreateOrConnectWithoutReviewInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutReviewInput | commentsUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: commentsCreateManyReviewInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutReviewInput | commentsUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutReviewInput | commentsUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReviewsInput
    upsert?: usersUpsertWithoutReviewsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReviewsInput, usersUpdateWithoutReviewsInput>, usersUncheckedUpdateWithoutReviewsInput>
  }

  export type commentsUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<commentsCreateWithoutReviewInput, commentsUncheckedCreateWithoutReviewInput> | commentsCreateWithoutReviewInput[] | commentsUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutReviewInput | commentsCreateOrConnectWithoutReviewInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutReviewInput | commentsUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: commentsCreateManyReviewInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutReviewInput | commentsUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutReviewInput | commentsUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type commentsCreateliked_by_usersInput = {
    set: number[]
  }

  export type usersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    connect?: usersWhereUniqueInput
  }

  export type reviewsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<reviewsCreateWithoutCommentsInput, reviewsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: reviewsCreateOrConnectWithoutCommentsInput
    connect?: reviewsWhereUniqueInput
  }

  export type commentsUpdateliked_by_usersInput = {
    set?: number[]
    push?: number | number[]
  }

  export type usersUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    upsert?: usersUpsertWithoutCommentsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCommentsInput, usersUpdateWithoutCommentsInput>, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type reviewsUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<reviewsCreateWithoutCommentsInput, reviewsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: reviewsCreateOrConnectWithoutCommentsInput
    upsert?: reviewsUpsertWithoutCommentsInput
    connect?: reviewsWhereUniqueInput
    update?: XOR<XOR<reviewsUpdateToOneWithWhereWithoutCommentsInput, reviewsUpdateWithoutCommentsInput>, reviewsUncheckedUpdateWithoutCommentsInput>
  }

  export type listsCreateliked_by_usersInput = {
    set: number[]
  }

  export type listsCreatefilmsInput = {
    set: number[]
  }

  export type listsCreatetagsInput = {
    set: string[]
  }

  export type usersCreateNestedOneWithoutListsInput = {
    create?: XOR<usersCreateWithoutListsInput, usersUncheckedCreateWithoutListsInput>
    connectOrCreate?: usersCreateOrConnectWithoutListsInput
    connect?: usersWhereUniqueInput
  }

  export type listsUpdateliked_by_usersInput = {
    set?: number[]
    push?: number | number[]
  }

  export type listsUpdatefilmsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type listsUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type usersUpdateOneRequiredWithoutListsNestedInput = {
    create?: XOR<usersCreateWithoutListsInput, usersUncheckedCreateWithoutListsInput>
    connectOrCreate?: usersCreateOrConnectWithoutListsInput
    upsert?: usersUpsertWithoutListsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutListsInput, usersUpdateWithoutListsInput>, usersUncheckedUpdateWithoutListsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type commentsCreateWithoutAuthorInput = {
    comment_text?: string
    published_time: bigint | number
    liked_by_users?: commentsCreateliked_by_usersInput | number[]
    review: reviewsCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutAuthorInput = {
    id?: number
    item_id: number
    comment_text?: string
    published_time: bigint | number
    liked_by_users?: commentsCreateliked_by_usersInput | number[]
  }

  export type commentsCreateOrConnectWithoutAuthorInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutAuthorInput, commentsUncheckedCreateWithoutAuthorInput>
  }

  export type commentsCreateManyAuthorInputEnvelope = {
    data: commentsCreateManyAuthorInput | commentsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type listsCreateWithoutAuthorInput = {
    publisheddate: bigint | number
    list_name: string
    list_description: string
    comments_quantity?: number
    likes?: number
    liked_by_users?: listsCreateliked_by_usersInput | number[]
    films?: listsCreatefilmsInput | number[]
    films_quantity?: number
    tags?: listsCreatetagsInput | string[]
  }

  export type listsUncheckedCreateWithoutAuthorInput = {
    id?: number
    publisheddate: bigint | number
    list_name: string
    list_description: string
    comments_quantity?: number
    likes?: number
    liked_by_users?: listsCreateliked_by_usersInput | number[]
    films?: listsCreatefilmsInput | number[]
    films_quantity?: number
    tags?: listsCreatetagsInput | string[]
  }

  export type listsCreateOrConnectWithoutAuthorInput = {
    where: listsWhereUniqueInput
    create: XOR<listsCreateWithoutAuthorInput, listsUncheckedCreateWithoutAuthorInput>
  }

  export type listsCreateManyAuthorInputEnvelope = {
    data: listsCreateManyAuthorInput | listsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type reviewsCreateWithoutUserInput = {
    type: string
    item_id: number
    review_comments?: number
    review_comments_users?: reviewsCreatereview_comments_usersInput | number[]
    review_likes?: number
    review_likes_users?: reviewsCreatereview_likes_usersInput | number[]
    review_text: string
    review_rate?: number | null
    isedited?: boolean
    published_date: bigint | number
    comments?: commentsCreateNestedManyWithoutReviewInput
  }

  export type reviewsUncheckedCreateWithoutUserInput = {
    id?: number
    type: string
    item_id: number
    review_comments?: number
    review_comments_users?: reviewsCreatereview_comments_usersInput | number[]
    review_likes?: number
    review_likes_users?: reviewsCreatereview_likes_usersInput | number[]
    review_text: string
    review_rate?: number | null
    isedited?: boolean
    published_date: bigint | number
    comments?: commentsUncheckedCreateNestedManyWithoutReviewInput
  }

  export type reviewsCreateOrConnectWithoutUserInput = {
    where: reviewsWhereUniqueInput
    create: XOR<reviewsCreateWithoutUserInput, reviewsUncheckedCreateWithoutUserInput>
  }

  export type reviewsCreateManyUserInputEnvelope = {
    data: reviewsCreateManyUserInput | reviewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type filmsCreateWithoutReviewsByUserInput = {
    film_name: string
    realise_year: number
    film_image: string
    author_name: string
    description: string
    duration: number
    views?: number
    users_viewed?: filmsCreateusers_viewedInput | number[]
    reviews_quantity?: number
    reviews?: filmsCreatereviewsInput | number[]
    likes?: number
    liked_by_users?: filmsCreateliked_by_usersInput | number[]
    rating1?: filmsCreaterating1Input | number[]
    rating2?: filmsCreaterating2Input | number[]
    rating3?: filmsCreaterating3Input | number[]
    rating4?: filmsCreaterating4Input | number[]
    rating5?: filmsCreaterating5Input | number[]
    cast?: filmsCreatecastInput | string[]
    crew: JsonNullValueInput | InputJsonValue
    details: JsonNullValueInput | InputJsonValue
    genres?: filmsCreategenresInput | string[]
    themes?: filmsCreatethemesInput | string[]
    likedByUsers?: usersCreateNestedManyWithoutUsers_liked_filmInput
  }

  export type filmsUncheckedCreateWithoutReviewsByUserInput = {
    id?: number
    film_name: string
    realise_year: number
    film_image: string
    author_name: string
    description: string
    duration: number
    views?: number
    users_viewed?: filmsCreateusers_viewedInput | number[]
    reviews_quantity?: number
    reviews?: filmsCreatereviewsInput | number[]
    likes?: number
    liked_by_users?: filmsCreateliked_by_usersInput | number[]
    rating1?: filmsCreaterating1Input | number[]
    rating2?: filmsCreaterating2Input | number[]
    rating3?: filmsCreaterating3Input | number[]
    rating4?: filmsCreaterating4Input | number[]
    rating5?: filmsCreaterating5Input | number[]
    cast?: filmsCreatecastInput | string[]
    crew: JsonNullValueInput | InputJsonValue
    details: JsonNullValueInput | InputJsonValue
    genres?: filmsCreategenresInput | string[]
    themes?: filmsCreatethemesInput | string[]
    likedByUsers?: usersUncheckedCreateNestedManyWithoutUsers_liked_filmInput
  }

  export type filmsCreateOrConnectWithoutReviewsByUserInput = {
    where: filmsWhereUniqueInput
    create: XOR<filmsCreateWithoutReviewsByUserInput, filmsUncheckedCreateWithoutReviewsByUserInput>
  }

  export type filmsCreateWithoutLikedByUsersInput = {
    film_name: string
    realise_year: number
    film_image: string
    author_name: string
    description: string
    duration: number
    views?: number
    users_viewed?: filmsCreateusers_viewedInput | number[]
    reviews_quantity?: number
    reviews?: filmsCreatereviewsInput | number[]
    likes?: number
    liked_by_users?: filmsCreateliked_by_usersInput | number[]
    rating1?: filmsCreaterating1Input | number[]
    rating2?: filmsCreaterating2Input | number[]
    rating3?: filmsCreaterating3Input | number[]
    rating4?: filmsCreaterating4Input | number[]
    rating5?: filmsCreaterating5Input | number[]
    cast?: filmsCreatecastInput | string[]
    crew: JsonNullValueInput | InputJsonValue
    details: JsonNullValueInput | InputJsonValue
    genres?: filmsCreategenresInput | string[]
    themes?: filmsCreatethemesInput | string[]
    reviewsByUser?: usersCreateNestedManyWithoutUsers_reviewed_filmInput
  }

  export type filmsUncheckedCreateWithoutLikedByUsersInput = {
    id?: number
    film_name: string
    realise_year: number
    film_image: string
    author_name: string
    description: string
    duration: number
    views?: number
    users_viewed?: filmsCreateusers_viewedInput | number[]
    reviews_quantity?: number
    reviews?: filmsCreatereviewsInput | number[]
    likes?: number
    liked_by_users?: filmsCreateliked_by_usersInput | number[]
    rating1?: filmsCreaterating1Input | number[]
    rating2?: filmsCreaterating2Input | number[]
    rating3?: filmsCreaterating3Input | number[]
    rating4?: filmsCreaterating4Input | number[]
    rating5?: filmsCreaterating5Input | number[]
    cast?: filmsCreatecastInput | string[]
    crew: JsonNullValueInput | InputJsonValue
    details: JsonNullValueInput | InputJsonValue
    genres?: filmsCreategenresInput | string[]
    themes?: filmsCreatethemesInput | string[]
    reviewsByUser?: usersUncheckedCreateNestedManyWithoutUsers_reviewed_filmInput
  }

  export type filmsCreateOrConnectWithoutLikedByUsersInput = {
    where: filmsWhereUniqueInput
    create: XOR<filmsCreateWithoutLikedByUsersInput, filmsUncheckedCreateWithoutLikedByUsersInput>
  }

  export type commentsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutAuthorInput, commentsUncheckedUpdateWithoutAuthorInput>
    create: XOR<commentsCreateWithoutAuthorInput, commentsUncheckedCreateWithoutAuthorInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutAuthorInput, commentsUncheckedUpdateWithoutAuthorInput>
  }

  export type commentsUpdateManyWithWhereWithoutAuthorInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type commentsScalarWhereInput = {
    AND?: commentsScalarWhereInput | commentsScalarWhereInput[]
    OR?: commentsScalarWhereInput[]
    NOT?: commentsScalarWhereInput | commentsScalarWhereInput[]
    id?: IntFilter<"comments"> | number
    author_id?: IntFilter<"comments"> | number
    item_id?: IntFilter<"comments"> | number
    comment_text?: StringFilter<"comments"> | string
    published_time?: BigIntFilter<"comments"> | bigint | number
    liked_by_users?: IntNullableListFilter<"comments">
  }

  export type listsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: listsWhereUniqueInput
    update: XOR<listsUpdateWithoutAuthorInput, listsUncheckedUpdateWithoutAuthorInput>
    create: XOR<listsCreateWithoutAuthorInput, listsUncheckedCreateWithoutAuthorInput>
  }

  export type listsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: listsWhereUniqueInput
    data: XOR<listsUpdateWithoutAuthorInput, listsUncheckedUpdateWithoutAuthorInput>
  }

  export type listsUpdateManyWithWhereWithoutAuthorInput = {
    where: listsScalarWhereInput
    data: XOR<listsUpdateManyMutationInput, listsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type listsScalarWhereInput = {
    AND?: listsScalarWhereInput | listsScalarWhereInput[]
    OR?: listsScalarWhereInput[]
    NOT?: listsScalarWhereInput | listsScalarWhereInput[]
    id?: IntFilter<"lists"> | number
    publisheddate?: BigIntFilter<"lists"> | bigint | number
    list_name?: StringFilter<"lists"> | string
    list_description?: StringFilter<"lists"> | string
    comments_quantity?: IntFilter<"lists"> | number
    likes?: IntFilter<"lists"> | number
    liked_by_users?: IntNullableListFilter<"lists">
    films?: IntNullableListFilter<"lists">
    films_quantity?: IntFilter<"lists"> | number
    tags?: StringNullableListFilter<"lists">
    author_id?: IntFilter<"lists"> | number
  }

  export type reviewsUpsertWithWhereUniqueWithoutUserInput = {
    where: reviewsWhereUniqueInput
    update: XOR<reviewsUpdateWithoutUserInput, reviewsUncheckedUpdateWithoutUserInput>
    create: XOR<reviewsCreateWithoutUserInput, reviewsUncheckedCreateWithoutUserInput>
  }

  export type reviewsUpdateWithWhereUniqueWithoutUserInput = {
    where: reviewsWhereUniqueInput
    data: XOR<reviewsUpdateWithoutUserInput, reviewsUncheckedUpdateWithoutUserInput>
  }

  export type reviewsUpdateManyWithWhereWithoutUserInput = {
    where: reviewsScalarWhereInput
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyWithoutUserInput>
  }

  export type reviewsScalarWhereInput = {
    AND?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
    OR?: reviewsScalarWhereInput[]
    NOT?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
    id?: IntFilter<"reviews"> | number
    type?: StringFilter<"reviews"> | string
    item_id?: IntFilter<"reviews"> | number
    review_comments?: IntFilter<"reviews"> | number
    review_comments_users?: IntNullableListFilter<"reviews">
    review_likes?: IntFilter<"reviews"> | number
    review_likes_users?: IntNullableListFilter<"reviews">
    review_text?: StringFilter<"reviews"> | string
    review_rate?: IntNullableFilter<"reviews"> | number | null
    isedited?: BoolFilter<"reviews"> | boolean
    published_date?: BigIntFilter<"reviews"> | bigint | number
    user_id?: IntFilter<"reviews"> | number
  }

  export type filmsUpsertWithWhereUniqueWithoutReviewsByUserInput = {
    where: filmsWhereUniqueInput
    update: XOR<filmsUpdateWithoutReviewsByUserInput, filmsUncheckedUpdateWithoutReviewsByUserInput>
    create: XOR<filmsCreateWithoutReviewsByUserInput, filmsUncheckedCreateWithoutReviewsByUserInput>
  }

  export type filmsUpdateWithWhereUniqueWithoutReviewsByUserInput = {
    where: filmsWhereUniqueInput
    data: XOR<filmsUpdateWithoutReviewsByUserInput, filmsUncheckedUpdateWithoutReviewsByUserInput>
  }

  export type filmsUpdateManyWithWhereWithoutReviewsByUserInput = {
    where: filmsScalarWhereInput
    data: XOR<filmsUpdateManyMutationInput, filmsUncheckedUpdateManyWithoutReviewsByUserInput>
  }

  export type filmsScalarWhereInput = {
    AND?: filmsScalarWhereInput | filmsScalarWhereInput[]
    OR?: filmsScalarWhereInput[]
    NOT?: filmsScalarWhereInput | filmsScalarWhereInput[]
    id?: IntFilter<"films"> | number
    film_name?: StringFilter<"films"> | string
    realise_year?: IntFilter<"films"> | number
    film_image?: StringFilter<"films"> | string
    author_name?: StringFilter<"films"> | string
    description?: StringFilter<"films"> | string
    duration?: IntFilter<"films"> | number
    views?: IntFilter<"films"> | number
    users_viewed?: IntNullableListFilter<"films">
    reviews_quantity?: IntFilter<"films"> | number
    reviews?: IntNullableListFilter<"films">
    likes?: IntFilter<"films"> | number
    liked_by_users?: IntNullableListFilter<"films">
    rating1?: IntNullableListFilter<"films">
    rating2?: IntNullableListFilter<"films">
    rating3?: IntNullableListFilter<"films">
    rating4?: IntNullableListFilter<"films">
    rating5?: IntNullableListFilter<"films">
    cast?: StringNullableListFilter<"films">
    crew?: JsonFilter<"films">
    details?: JsonFilter<"films">
    genres?: StringNullableListFilter<"films">
    themes?: StringNullableListFilter<"films">
  }

  export type filmsUpsertWithWhereUniqueWithoutLikedByUsersInput = {
    where: filmsWhereUniqueInput
    update: XOR<filmsUpdateWithoutLikedByUsersInput, filmsUncheckedUpdateWithoutLikedByUsersInput>
    create: XOR<filmsCreateWithoutLikedByUsersInput, filmsUncheckedCreateWithoutLikedByUsersInput>
  }

  export type filmsUpdateWithWhereUniqueWithoutLikedByUsersInput = {
    where: filmsWhereUniqueInput
    data: XOR<filmsUpdateWithoutLikedByUsersInput, filmsUncheckedUpdateWithoutLikedByUsersInput>
  }

  export type filmsUpdateManyWithWhereWithoutLikedByUsersInput = {
    where: filmsScalarWhereInput
    data: XOR<filmsUpdateManyMutationInput, filmsUncheckedUpdateManyWithoutLikedByUsersInput>
  }

  export type usersCreateWithoutUsers_reviewed_filmInput = {
    user_avatar?: string
    user_name: string
    user_following_quantity?: number | null
    user_followers_quantity?: number | null
    user_reviews_quantity?: number | null
    user_reviews?: usersCreateuser_reviewsInput | number[]
    user_films_quantity?: number | null
    user_films?: usersCreateuser_filmsInput | number[]
    user_lists_quantity?: number | null
    user_lists?: usersCreateuser_listsInput | number[]
    user_favorite_films_quantity?: number | null
    user_favorite_films?: usersCreateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: number | null
    user_favorite_lists?: usersCreateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: number | null
    user_favorite_reviews?: usersCreateuser_favorite_reviewsInput | number[]
    user_bio?: string
    user_tags?: usersCreateuser_tagsInput | string[]
    user_following?: usersCreateuser_followingInput | number[]
    user_followers?: usersCreateuser_followersInput | number[]
    user_pinned_lists?: usersCreateuser_pinned_listsInput | number[]
    comments?: commentsCreateNestedManyWithoutAuthorInput
    lists?: listsCreateNestedManyWithoutAuthorInput
    reviews?: reviewsCreateNestedManyWithoutUserInput
    users_liked_film?: filmsCreateNestedManyWithoutLikedByUsersInput
  }

  export type usersUncheckedCreateWithoutUsers_reviewed_filmInput = {
    id?: number
    user_avatar?: string
    user_name: string
    user_following_quantity?: number | null
    user_followers_quantity?: number | null
    user_reviews_quantity?: number | null
    user_reviews?: usersCreateuser_reviewsInput | number[]
    user_films_quantity?: number | null
    user_films?: usersCreateuser_filmsInput | number[]
    user_lists_quantity?: number | null
    user_lists?: usersCreateuser_listsInput | number[]
    user_favorite_films_quantity?: number | null
    user_favorite_films?: usersCreateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: number | null
    user_favorite_lists?: usersCreateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: number | null
    user_favorite_reviews?: usersCreateuser_favorite_reviewsInput | number[]
    user_bio?: string
    user_tags?: usersCreateuser_tagsInput | string[]
    user_following?: usersCreateuser_followingInput | number[]
    user_followers?: usersCreateuser_followersInput | number[]
    user_pinned_lists?: usersCreateuser_pinned_listsInput | number[]
    comments?: commentsUncheckedCreateNestedManyWithoutAuthorInput
    lists?: listsUncheckedCreateNestedManyWithoutAuthorInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUserInput
    users_liked_film?: filmsUncheckedCreateNestedManyWithoutLikedByUsersInput
  }

  export type usersCreateOrConnectWithoutUsers_reviewed_filmInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUsers_reviewed_filmInput, usersUncheckedCreateWithoutUsers_reviewed_filmInput>
  }

  export type usersCreateWithoutUsers_liked_filmInput = {
    user_avatar?: string
    user_name: string
    user_following_quantity?: number | null
    user_followers_quantity?: number | null
    user_reviews_quantity?: number | null
    user_reviews?: usersCreateuser_reviewsInput | number[]
    user_films_quantity?: number | null
    user_films?: usersCreateuser_filmsInput | number[]
    user_lists_quantity?: number | null
    user_lists?: usersCreateuser_listsInput | number[]
    user_favorite_films_quantity?: number | null
    user_favorite_films?: usersCreateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: number | null
    user_favorite_lists?: usersCreateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: number | null
    user_favorite_reviews?: usersCreateuser_favorite_reviewsInput | number[]
    user_bio?: string
    user_tags?: usersCreateuser_tagsInput | string[]
    user_following?: usersCreateuser_followingInput | number[]
    user_followers?: usersCreateuser_followersInput | number[]
    user_pinned_lists?: usersCreateuser_pinned_listsInput | number[]
    comments?: commentsCreateNestedManyWithoutAuthorInput
    lists?: listsCreateNestedManyWithoutAuthorInput
    reviews?: reviewsCreateNestedManyWithoutUserInput
    users_reviewed_film?: filmsCreateNestedManyWithoutReviewsByUserInput
  }

  export type usersUncheckedCreateWithoutUsers_liked_filmInput = {
    id?: number
    user_avatar?: string
    user_name: string
    user_following_quantity?: number | null
    user_followers_quantity?: number | null
    user_reviews_quantity?: number | null
    user_reviews?: usersCreateuser_reviewsInput | number[]
    user_films_quantity?: number | null
    user_films?: usersCreateuser_filmsInput | number[]
    user_lists_quantity?: number | null
    user_lists?: usersCreateuser_listsInput | number[]
    user_favorite_films_quantity?: number | null
    user_favorite_films?: usersCreateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: number | null
    user_favorite_lists?: usersCreateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: number | null
    user_favorite_reviews?: usersCreateuser_favorite_reviewsInput | number[]
    user_bio?: string
    user_tags?: usersCreateuser_tagsInput | string[]
    user_following?: usersCreateuser_followingInput | number[]
    user_followers?: usersCreateuser_followersInput | number[]
    user_pinned_lists?: usersCreateuser_pinned_listsInput | number[]
    comments?: commentsUncheckedCreateNestedManyWithoutAuthorInput
    lists?: listsUncheckedCreateNestedManyWithoutAuthorInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUserInput
    users_reviewed_film?: filmsUncheckedCreateNestedManyWithoutReviewsByUserInput
  }

  export type usersCreateOrConnectWithoutUsers_liked_filmInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUsers_liked_filmInput, usersUncheckedCreateWithoutUsers_liked_filmInput>
  }

  export type usersUpsertWithWhereUniqueWithoutUsers_reviewed_filmInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutUsers_reviewed_filmInput, usersUncheckedUpdateWithoutUsers_reviewed_filmInput>
    create: XOR<usersCreateWithoutUsers_reviewed_filmInput, usersUncheckedCreateWithoutUsers_reviewed_filmInput>
  }

  export type usersUpdateWithWhereUniqueWithoutUsers_reviewed_filmInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutUsers_reviewed_filmInput, usersUncheckedUpdateWithoutUsers_reviewed_filmInput>
  }

  export type usersUpdateManyWithWhereWithoutUsers_reviewed_filmInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutUsers_reviewed_filmInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: IntFilter<"users"> | number
    user_avatar?: StringFilter<"users"> | string
    user_name?: StringFilter<"users"> | string
    user_following_quantity?: IntNullableFilter<"users"> | number | null
    user_followers_quantity?: IntNullableFilter<"users"> | number | null
    user_reviews_quantity?: IntNullableFilter<"users"> | number | null
    user_reviews?: IntNullableListFilter<"users">
    user_films_quantity?: IntNullableFilter<"users"> | number | null
    user_films?: IntNullableListFilter<"users">
    user_lists_quantity?: IntNullableFilter<"users"> | number | null
    user_lists?: IntNullableListFilter<"users">
    user_favorite_films_quantity?: IntNullableFilter<"users"> | number | null
    user_favorite_films?: IntNullableListFilter<"users">
    user_favorite_lists_quantity?: IntNullableFilter<"users"> | number | null
    user_favorite_lists?: IntNullableListFilter<"users">
    user_favorite_reviews_quantity?: IntNullableFilter<"users"> | number | null
    user_favorite_reviews?: IntNullableListFilter<"users">
    user_bio?: StringFilter<"users"> | string
    user_tags?: StringNullableListFilter<"users">
    user_following?: IntNullableListFilter<"users">
    user_followers?: IntNullableListFilter<"users">
    user_pinned_lists?: IntNullableListFilter<"users">
  }

  export type usersUpsertWithWhereUniqueWithoutUsers_liked_filmInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutUsers_liked_filmInput, usersUncheckedUpdateWithoutUsers_liked_filmInput>
    create: XOR<usersCreateWithoutUsers_liked_filmInput, usersUncheckedCreateWithoutUsers_liked_filmInput>
  }

  export type usersUpdateWithWhereUniqueWithoutUsers_liked_filmInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutUsers_liked_filmInput, usersUncheckedUpdateWithoutUsers_liked_filmInput>
  }

  export type usersUpdateManyWithWhereWithoutUsers_liked_filmInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutUsers_liked_filmInput>
  }

  export type commentsCreateWithoutReviewInput = {
    comment_text?: string
    published_time: bigint | number
    liked_by_users?: commentsCreateliked_by_usersInput | number[]
    author: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutReviewInput = {
    id?: number
    author_id: number
    comment_text?: string
    published_time: bigint | number
    liked_by_users?: commentsCreateliked_by_usersInput | number[]
  }

  export type commentsCreateOrConnectWithoutReviewInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutReviewInput, commentsUncheckedCreateWithoutReviewInput>
  }

  export type commentsCreateManyReviewInputEnvelope = {
    data: commentsCreateManyReviewInput | commentsCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutReviewsInput = {
    user_avatar?: string
    user_name: string
    user_following_quantity?: number | null
    user_followers_quantity?: number | null
    user_reviews_quantity?: number | null
    user_reviews?: usersCreateuser_reviewsInput | number[]
    user_films_quantity?: number | null
    user_films?: usersCreateuser_filmsInput | number[]
    user_lists_quantity?: number | null
    user_lists?: usersCreateuser_listsInput | number[]
    user_favorite_films_quantity?: number | null
    user_favorite_films?: usersCreateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: number | null
    user_favorite_lists?: usersCreateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: number | null
    user_favorite_reviews?: usersCreateuser_favorite_reviewsInput | number[]
    user_bio?: string
    user_tags?: usersCreateuser_tagsInput | string[]
    user_following?: usersCreateuser_followingInput | number[]
    user_followers?: usersCreateuser_followersInput | number[]
    user_pinned_lists?: usersCreateuser_pinned_listsInput | number[]
    comments?: commentsCreateNestedManyWithoutAuthorInput
    lists?: listsCreateNestedManyWithoutAuthorInput
    users_reviewed_film?: filmsCreateNestedManyWithoutReviewsByUserInput
    users_liked_film?: filmsCreateNestedManyWithoutLikedByUsersInput
  }

  export type usersUncheckedCreateWithoutReviewsInput = {
    id?: number
    user_avatar?: string
    user_name: string
    user_following_quantity?: number | null
    user_followers_quantity?: number | null
    user_reviews_quantity?: number | null
    user_reviews?: usersCreateuser_reviewsInput | number[]
    user_films_quantity?: number | null
    user_films?: usersCreateuser_filmsInput | number[]
    user_lists_quantity?: number | null
    user_lists?: usersCreateuser_listsInput | number[]
    user_favorite_films_quantity?: number | null
    user_favorite_films?: usersCreateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: number | null
    user_favorite_lists?: usersCreateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: number | null
    user_favorite_reviews?: usersCreateuser_favorite_reviewsInput | number[]
    user_bio?: string
    user_tags?: usersCreateuser_tagsInput | string[]
    user_following?: usersCreateuser_followingInput | number[]
    user_followers?: usersCreateuser_followersInput | number[]
    user_pinned_lists?: usersCreateuser_pinned_listsInput | number[]
    comments?: commentsUncheckedCreateNestedManyWithoutAuthorInput
    lists?: listsUncheckedCreateNestedManyWithoutAuthorInput
    users_reviewed_film?: filmsUncheckedCreateNestedManyWithoutReviewsByUserInput
    users_liked_film?: filmsUncheckedCreateNestedManyWithoutLikedByUsersInput
  }

  export type usersCreateOrConnectWithoutReviewsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
  }

  export type commentsUpsertWithWhereUniqueWithoutReviewInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutReviewInput, commentsUncheckedUpdateWithoutReviewInput>
    create: XOR<commentsCreateWithoutReviewInput, commentsUncheckedCreateWithoutReviewInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutReviewInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutReviewInput, commentsUncheckedUpdateWithoutReviewInput>
  }

  export type commentsUpdateManyWithWhereWithoutReviewInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutReviewInput>
  }

  export type usersUpsertWithoutReviewsInput = {
    update: XOR<usersUpdateWithoutReviewsInput, usersUncheckedUpdateWithoutReviewsInput>
    create: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReviewsInput, usersUncheckedUpdateWithoutReviewsInput>
  }

  export type usersUpdateWithoutReviewsInput = {
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_following_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_followers_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews?: usersUpdateuser_reviewsInput | number[]
    user_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_films?: usersUpdateuser_filmsInput | number[]
    user_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_lists?: usersUpdateuser_listsInput | number[]
    user_favorite_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_films?: usersUpdateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_lists?: usersUpdateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_reviews?: usersUpdateuser_favorite_reviewsInput | number[]
    user_bio?: StringFieldUpdateOperationsInput | string
    user_tags?: usersUpdateuser_tagsInput | string[]
    user_following?: usersUpdateuser_followingInput | number[]
    user_followers?: usersUpdateuser_followersInput | number[]
    user_pinned_lists?: usersUpdateuser_pinned_listsInput | number[]
    comments?: commentsUpdateManyWithoutAuthorNestedInput
    lists?: listsUpdateManyWithoutAuthorNestedInput
    users_reviewed_film?: filmsUpdateManyWithoutReviewsByUserNestedInput
    users_liked_film?: filmsUpdateManyWithoutLikedByUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_following_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_followers_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews?: usersUpdateuser_reviewsInput | number[]
    user_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_films?: usersUpdateuser_filmsInput | number[]
    user_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_lists?: usersUpdateuser_listsInput | number[]
    user_favorite_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_films?: usersUpdateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_lists?: usersUpdateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_reviews?: usersUpdateuser_favorite_reviewsInput | number[]
    user_bio?: StringFieldUpdateOperationsInput | string
    user_tags?: usersUpdateuser_tagsInput | string[]
    user_following?: usersUpdateuser_followingInput | number[]
    user_followers?: usersUpdateuser_followersInput | number[]
    user_pinned_lists?: usersUpdateuser_pinned_listsInput | number[]
    comments?: commentsUncheckedUpdateManyWithoutAuthorNestedInput
    lists?: listsUncheckedUpdateManyWithoutAuthorNestedInput
    users_reviewed_film?: filmsUncheckedUpdateManyWithoutReviewsByUserNestedInput
    users_liked_film?: filmsUncheckedUpdateManyWithoutLikedByUsersNestedInput
  }

  export type usersCreateWithoutCommentsInput = {
    user_avatar?: string
    user_name: string
    user_following_quantity?: number | null
    user_followers_quantity?: number | null
    user_reviews_quantity?: number | null
    user_reviews?: usersCreateuser_reviewsInput | number[]
    user_films_quantity?: number | null
    user_films?: usersCreateuser_filmsInput | number[]
    user_lists_quantity?: number | null
    user_lists?: usersCreateuser_listsInput | number[]
    user_favorite_films_quantity?: number | null
    user_favorite_films?: usersCreateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: number | null
    user_favorite_lists?: usersCreateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: number | null
    user_favorite_reviews?: usersCreateuser_favorite_reviewsInput | number[]
    user_bio?: string
    user_tags?: usersCreateuser_tagsInput | string[]
    user_following?: usersCreateuser_followingInput | number[]
    user_followers?: usersCreateuser_followersInput | number[]
    user_pinned_lists?: usersCreateuser_pinned_listsInput | number[]
    lists?: listsCreateNestedManyWithoutAuthorInput
    reviews?: reviewsCreateNestedManyWithoutUserInput
    users_reviewed_film?: filmsCreateNestedManyWithoutReviewsByUserInput
    users_liked_film?: filmsCreateNestedManyWithoutLikedByUsersInput
  }

  export type usersUncheckedCreateWithoutCommentsInput = {
    id?: number
    user_avatar?: string
    user_name: string
    user_following_quantity?: number | null
    user_followers_quantity?: number | null
    user_reviews_quantity?: number | null
    user_reviews?: usersCreateuser_reviewsInput | number[]
    user_films_quantity?: number | null
    user_films?: usersCreateuser_filmsInput | number[]
    user_lists_quantity?: number | null
    user_lists?: usersCreateuser_listsInput | number[]
    user_favorite_films_quantity?: number | null
    user_favorite_films?: usersCreateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: number | null
    user_favorite_lists?: usersCreateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: number | null
    user_favorite_reviews?: usersCreateuser_favorite_reviewsInput | number[]
    user_bio?: string
    user_tags?: usersCreateuser_tagsInput | string[]
    user_following?: usersCreateuser_followingInput | number[]
    user_followers?: usersCreateuser_followersInput | number[]
    user_pinned_lists?: usersCreateuser_pinned_listsInput | number[]
    lists?: listsUncheckedCreateNestedManyWithoutAuthorInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUserInput
    users_reviewed_film?: filmsUncheckedCreateNestedManyWithoutReviewsByUserInput
    users_liked_film?: filmsUncheckedCreateNestedManyWithoutLikedByUsersInput
  }

  export type usersCreateOrConnectWithoutCommentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
  }

  export type reviewsCreateWithoutCommentsInput = {
    type: string
    item_id: number
    review_comments?: number
    review_comments_users?: reviewsCreatereview_comments_usersInput | number[]
    review_likes?: number
    review_likes_users?: reviewsCreatereview_likes_usersInput | number[]
    review_text: string
    review_rate?: number | null
    isedited?: boolean
    published_date: bigint | number
    user: usersCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateWithoutCommentsInput = {
    id?: number
    type: string
    item_id: number
    review_comments?: number
    review_comments_users?: reviewsCreatereview_comments_usersInput | number[]
    review_likes?: number
    review_likes_users?: reviewsCreatereview_likes_usersInput | number[]
    review_text: string
    review_rate?: number | null
    isedited?: boolean
    published_date: bigint | number
    user_id: number
  }

  export type reviewsCreateOrConnectWithoutCommentsInput = {
    where: reviewsWhereUniqueInput
    create: XOR<reviewsCreateWithoutCommentsInput, reviewsUncheckedCreateWithoutCommentsInput>
  }

  export type usersUpsertWithoutCommentsInput = {
    update: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateWithoutCommentsInput = {
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_following_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_followers_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews?: usersUpdateuser_reviewsInput | number[]
    user_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_films?: usersUpdateuser_filmsInput | number[]
    user_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_lists?: usersUpdateuser_listsInput | number[]
    user_favorite_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_films?: usersUpdateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_lists?: usersUpdateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_reviews?: usersUpdateuser_favorite_reviewsInput | number[]
    user_bio?: StringFieldUpdateOperationsInput | string
    user_tags?: usersUpdateuser_tagsInput | string[]
    user_following?: usersUpdateuser_followingInput | number[]
    user_followers?: usersUpdateuser_followersInput | number[]
    user_pinned_lists?: usersUpdateuser_pinned_listsInput | number[]
    lists?: listsUpdateManyWithoutAuthorNestedInput
    reviews?: reviewsUpdateManyWithoutUserNestedInput
    users_reviewed_film?: filmsUpdateManyWithoutReviewsByUserNestedInput
    users_liked_film?: filmsUpdateManyWithoutLikedByUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_following_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_followers_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews?: usersUpdateuser_reviewsInput | number[]
    user_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_films?: usersUpdateuser_filmsInput | number[]
    user_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_lists?: usersUpdateuser_listsInput | number[]
    user_favorite_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_films?: usersUpdateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_lists?: usersUpdateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_reviews?: usersUpdateuser_favorite_reviewsInput | number[]
    user_bio?: StringFieldUpdateOperationsInput | string
    user_tags?: usersUpdateuser_tagsInput | string[]
    user_following?: usersUpdateuser_followingInput | number[]
    user_followers?: usersUpdateuser_followersInput | number[]
    user_pinned_lists?: usersUpdateuser_pinned_listsInput | number[]
    lists?: listsUncheckedUpdateManyWithoutAuthorNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUserNestedInput
    users_reviewed_film?: filmsUncheckedUpdateManyWithoutReviewsByUserNestedInput
    users_liked_film?: filmsUncheckedUpdateManyWithoutLikedByUsersNestedInput
  }

  export type reviewsUpsertWithoutCommentsInput = {
    update: XOR<reviewsUpdateWithoutCommentsInput, reviewsUncheckedUpdateWithoutCommentsInput>
    create: XOR<reviewsCreateWithoutCommentsInput, reviewsUncheckedCreateWithoutCommentsInput>
    where?: reviewsWhereInput
  }

  export type reviewsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: reviewsWhereInput
    data: XOR<reviewsUpdateWithoutCommentsInput, reviewsUncheckedUpdateWithoutCommentsInput>
  }

  export type reviewsUpdateWithoutCommentsInput = {
    type?: StringFieldUpdateOperationsInput | string
    item_id?: IntFieldUpdateOperationsInput | number
    review_comments?: IntFieldUpdateOperationsInput | number
    review_comments_users?: reviewsUpdatereview_comments_usersInput | number[]
    review_likes?: IntFieldUpdateOperationsInput | number
    review_likes_users?: reviewsUpdatereview_likes_usersInput | number[]
    review_text?: StringFieldUpdateOperationsInput | string
    review_rate?: NullableIntFieldUpdateOperationsInput | number | null
    isedited?: BoolFieldUpdateOperationsInput | boolean
    published_date?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: usersUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    item_id?: IntFieldUpdateOperationsInput | number
    review_comments?: IntFieldUpdateOperationsInput | number
    review_comments_users?: reviewsUpdatereview_comments_usersInput | number[]
    review_likes?: IntFieldUpdateOperationsInput | number
    review_likes_users?: reviewsUpdatereview_likes_usersInput | number[]
    review_text?: StringFieldUpdateOperationsInput | string
    review_rate?: NullableIntFieldUpdateOperationsInput | number | null
    isedited?: BoolFieldUpdateOperationsInput | boolean
    published_date?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateWithoutListsInput = {
    user_avatar?: string
    user_name: string
    user_following_quantity?: number | null
    user_followers_quantity?: number | null
    user_reviews_quantity?: number | null
    user_reviews?: usersCreateuser_reviewsInput | number[]
    user_films_quantity?: number | null
    user_films?: usersCreateuser_filmsInput | number[]
    user_lists_quantity?: number | null
    user_lists?: usersCreateuser_listsInput | number[]
    user_favorite_films_quantity?: number | null
    user_favorite_films?: usersCreateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: number | null
    user_favorite_lists?: usersCreateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: number | null
    user_favorite_reviews?: usersCreateuser_favorite_reviewsInput | number[]
    user_bio?: string
    user_tags?: usersCreateuser_tagsInput | string[]
    user_following?: usersCreateuser_followingInput | number[]
    user_followers?: usersCreateuser_followersInput | number[]
    user_pinned_lists?: usersCreateuser_pinned_listsInput | number[]
    comments?: commentsCreateNestedManyWithoutAuthorInput
    reviews?: reviewsCreateNestedManyWithoutUserInput
    users_reviewed_film?: filmsCreateNestedManyWithoutReviewsByUserInput
    users_liked_film?: filmsCreateNestedManyWithoutLikedByUsersInput
  }

  export type usersUncheckedCreateWithoutListsInput = {
    id?: number
    user_avatar?: string
    user_name: string
    user_following_quantity?: number | null
    user_followers_quantity?: number | null
    user_reviews_quantity?: number | null
    user_reviews?: usersCreateuser_reviewsInput | number[]
    user_films_quantity?: number | null
    user_films?: usersCreateuser_filmsInput | number[]
    user_lists_quantity?: number | null
    user_lists?: usersCreateuser_listsInput | number[]
    user_favorite_films_quantity?: number | null
    user_favorite_films?: usersCreateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: number | null
    user_favorite_lists?: usersCreateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: number | null
    user_favorite_reviews?: usersCreateuser_favorite_reviewsInput | number[]
    user_bio?: string
    user_tags?: usersCreateuser_tagsInput | string[]
    user_following?: usersCreateuser_followingInput | number[]
    user_followers?: usersCreateuser_followersInput | number[]
    user_pinned_lists?: usersCreateuser_pinned_listsInput | number[]
    comments?: commentsUncheckedCreateNestedManyWithoutAuthorInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUserInput
    users_reviewed_film?: filmsUncheckedCreateNestedManyWithoutReviewsByUserInput
    users_liked_film?: filmsUncheckedCreateNestedManyWithoutLikedByUsersInput
  }

  export type usersCreateOrConnectWithoutListsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutListsInput, usersUncheckedCreateWithoutListsInput>
  }

  export type usersUpsertWithoutListsInput = {
    update: XOR<usersUpdateWithoutListsInput, usersUncheckedUpdateWithoutListsInput>
    create: XOR<usersCreateWithoutListsInput, usersUncheckedCreateWithoutListsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutListsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutListsInput, usersUncheckedUpdateWithoutListsInput>
  }

  export type usersUpdateWithoutListsInput = {
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_following_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_followers_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews?: usersUpdateuser_reviewsInput | number[]
    user_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_films?: usersUpdateuser_filmsInput | number[]
    user_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_lists?: usersUpdateuser_listsInput | number[]
    user_favorite_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_films?: usersUpdateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_lists?: usersUpdateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_reviews?: usersUpdateuser_favorite_reviewsInput | number[]
    user_bio?: StringFieldUpdateOperationsInput | string
    user_tags?: usersUpdateuser_tagsInput | string[]
    user_following?: usersUpdateuser_followingInput | number[]
    user_followers?: usersUpdateuser_followersInput | number[]
    user_pinned_lists?: usersUpdateuser_pinned_listsInput | number[]
    comments?: commentsUpdateManyWithoutAuthorNestedInput
    reviews?: reviewsUpdateManyWithoutUserNestedInput
    users_reviewed_film?: filmsUpdateManyWithoutReviewsByUserNestedInput
    users_liked_film?: filmsUpdateManyWithoutLikedByUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutListsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_following_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_followers_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews?: usersUpdateuser_reviewsInput | number[]
    user_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_films?: usersUpdateuser_filmsInput | number[]
    user_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_lists?: usersUpdateuser_listsInput | number[]
    user_favorite_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_films?: usersUpdateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_lists?: usersUpdateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_reviews?: usersUpdateuser_favorite_reviewsInput | number[]
    user_bio?: StringFieldUpdateOperationsInput | string
    user_tags?: usersUpdateuser_tagsInput | string[]
    user_following?: usersUpdateuser_followingInput | number[]
    user_followers?: usersUpdateuser_followersInput | number[]
    user_pinned_lists?: usersUpdateuser_pinned_listsInput | number[]
    comments?: commentsUncheckedUpdateManyWithoutAuthorNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUserNestedInput
    users_reviewed_film?: filmsUncheckedUpdateManyWithoutReviewsByUserNestedInput
    users_liked_film?: filmsUncheckedUpdateManyWithoutLikedByUsersNestedInput
  }

  export type commentsCreateManyAuthorInput = {
    id?: number
    item_id: number
    comment_text?: string
    published_time: bigint | number
    liked_by_users?: commentsCreateliked_by_usersInput | number[]
  }

  export type listsCreateManyAuthorInput = {
    id?: number
    publisheddate: bigint | number
    list_name: string
    list_description: string
    comments_quantity?: number
    likes?: number
    liked_by_users?: listsCreateliked_by_usersInput | number[]
    films?: listsCreatefilmsInput | number[]
    films_quantity?: number
    tags?: listsCreatetagsInput | string[]
  }

  export type reviewsCreateManyUserInput = {
    id?: number
    type: string
    item_id: number
    review_comments?: number
    review_comments_users?: reviewsCreatereview_comments_usersInput | number[]
    review_likes?: number
    review_likes_users?: reviewsCreatereview_likes_usersInput | number[]
    review_text: string
    review_rate?: number | null
    isedited?: boolean
    published_date: bigint | number
  }

  export type commentsUpdateWithoutAuthorInput = {
    comment_text?: StringFieldUpdateOperationsInput | string
    published_time?: BigIntFieldUpdateOperationsInput | bigint | number
    liked_by_users?: commentsUpdateliked_by_usersInput | number[]
    review?: reviewsUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    published_time?: BigIntFieldUpdateOperationsInput | bigint | number
    liked_by_users?: commentsUpdateliked_by_usersInput | number[]
  }

  export type commentsUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    published_time?: BigIntFieldUpdateOperationsInput | bigint | number
    liked_by_users?: commentsUpdateliked_by_usersInput | number[]
  }

  export type listsUpdateWithoutAuthorInput = {
    publisheddate?: BigIntFieldUpdateOperationsInput | bigint | number
    list_name?: StringFieldUpdateOperationsInput | string
    list_description?: StringFieldUpdateOperationsInput | string
    comments_quantity?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    liked_by_users?: listsUpdateliked_by_usersInput | number[]
    films?: listsUpdatefilmsInput | number[]
    films_quantity?: IntFieldUpdateOperationsInput | number
    tags?: listsUpdatetagsInput | string[]
  }

  export type listsUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    publisheddate?: BigIntFieldUpdateOperationsInput | bigint | number
    list_name?: StringFieldUpdateOperationsInput | string
    list_description?: StringFieldUpdateOperationsInput | string
    comments_quantity?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    liked_by_users?: listsUpdateliked_by_usersInput | number[]
    films?: listsUpdatefilmsInput | number[]
    films_quantity?: IntFieldUpdateOperationsInput | number
    tags?: listsUpdatetagsInput | string[]
  }

  export type listsUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    publisheddate?: BigIntFieldUpdateOperationsInput | bigint | number
    list_name?: StringFieldUpdateOperationsInput | string
    list_description?: StringFieldUpdateOperationsInput | string
    comments_quantity?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    liked_by_users?: listsUpdateliked_by_usersInput | number[]
    films?: listsUpdatefilmsInput | number[]
    films_quantity?: IntFieldUpdateOperationsInput | number
    tags?: listsUpdatetagsInput | string[]
  }

  export type reviewsUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    item_id?: IntFieldUpdateOperationsInput | number
    review_comments?: IntFieldUpdateOperationsInput | number
    review_comments_users?: reviewsUpdatereview_comments_usersInput | number[]
    review_likes?: IntFieldUpdateOperationsInput | number
    review_likes_users?: reviewsUpdatereview_likes_usersInput | number[]
    review_text?: StringFieldUpdateOperationsInput | string
    review_rate?: NullableIntFieldUpdateOperationsInput | number | null
    isedited?: BoolFieldUpdateOperationsInput | boolean
    published_date?: BigIntFieldUpdateOperationsInput | bigint | number
    comments?: commentsUpdateManyWithoutReviewNestedInput
  }

  export type reviewsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    item_id?: IntFieldUpdateOperationsInput | number
    review_comments?: IntFieldUpdateOperationsInput | number
    review_comments_users?: reviewsUpdatereview_comments_usersInput | number[]
    review_likes?: IntFieldUpdateOperationsInput | number
    review_likes_users?: reviewsUpdatereview_likes_usersInput | number[]
    review_text?: StringFieldUpdateOperationsInput | string
    review_rate?: NullableIntFieldUpdateOperationsInput | number | null
    isedited?: BoolFieldUpdateOperationsInput | boolean
    published_date?: BigIntFieldUpdateOperationsInput | bigint | number
    comments?: commentsUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type reviewsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    item_id?: IntFieldUpdateOperationsInput | number
    review_comments?: IntFieldUpdateOperationsInput | number
    review_comments_users?: reviewsUpdatereview_comments_usersInput | number[]
    review_likes?: IntFieldUpdateOperationsInput | number
    review_likes_users?: reviewsUpdatereview_likes_usersInput | number[]
    review_text?: StringFieldUpdateOperationsInput | string
    review_rate?: NullableIntFieldUpdateOperationsInput | number | null
    isedited?: BoolFieldUpdateOperationsInput | boolean
    published_date?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type filmsUpdateWithoutReviewsByUserInput = {
    film_name?: StringFieldUpdateOperationsInput | string
    realise_year?: IntFieldUpdateOperationsInput | number
    film_image?: StringFieldUpdateOperationsInput | string
    author_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    users_viewed?: filmsUpdateusers_viewedInput | number[]
    reviews_quantity?: IntFieldUpdateOperationsInput | number
    reviews?: filmsUpdatereviewsInput | number[]
    likes?: IntFieldUpdateOperationsInput | number
    liked_by_users?: filmsUpdateliked_by_usersInput | number[]
    rating1?: filmsUpdaterating1Input | number[]
    rating2?: filmsUpdaterating2Input | number[]
    rating3?: filmsUpdaterating3Input | number[]
    rating4?: filmsUpdaterating4Input | number[]
    rating5?: filmsUpdaterating5Input | number[]
    cast?: filmsUpdatecastInput | string[]
    crew?: JsonNullValueInput | InputJsonValue
    details?: JsonNullValueInput | InputJsonValue
    genres?: filmsUpdategenresInput | string[]
    themes?: filmsUpdatethemesInput | string[]
    likedByUsers?: usersUpdateManyWithoutUsers_liked_filmNestedInput
  }

  export type filmsUncheckedUpdateWithoutReviewsByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_name?: StringFieldUpdateOperationsInput | string
    realise_year?: IntFieldUpdateOperationsInput | number
    film_image?: StringFieldUpdateOperationsInput | string
    author_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    users_viewed?: filmsUpdateusers_viewedInput | number[]
    reviews_quantity?: IntFieldUpdateOperationsInput | number
    reviews?: filmsUpdatereviewsInput | number[]
    likes?: IntFieldUpdateOperationsInput | number
    liked_by_users?: filmsUpdateliked_by_usersInput | number[]
    rating1?: filmsUpdaterating1Input | number[]
    rating2?: filmsUpdaterating2Input | number[]
    rating3?: filmsUpdaterating3Input | number[]
    rating4?: filmsUpdaterating4Input | number[]
    rating5?: filmsUpdaterating5Input | number[]
    cast?: filmsUpdatecastInput | string[]
    crew?: JsonNullValueInput | InputJsonValue
    details?: JsonNullValueInput | InputJsonValue
    genres?: filmsUpdategenresInput | string[]
    themes?: filmsUpdatethemesInput | string[]
    likedByUsers?: usersUncheckedUpdateManyWithoutUsers_liked_filmNestedInput
  }

  export type filmsUncheckedUpdateManyWithoutReviewsByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_name?: StringFieldUpdateOperationsInput | string
    realise_year?: IntFieldUpdateOperationsInput | number
    film_image?: StringFieldUpdateOperationsInput | string
    author_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    users_viewed?: filmsUpdateusers_viewedInput | number[]
    reviews_quantity?: IntFieldUpdateOperationsInput | number
    reviews?: filmsUpdatereviewsInput | number[]
    likes?: IntFieldUpdateOperationsInput | number
    liked_by_users?: filmsUpdateliked_by_usersInput | number[]
    rating1?: filmsUpdaterating1Input | number[]
    rating2?: filmsUpdaterating2Input | number[]
    rating3?: filmsUpdaterating3Input | number[]
    rating4?: filmsUpdaterating4Input | number[]
    rating5?: filmsUpdaterating5Input | number[]
    cast?: filmsUpdatecastInput | string[]
    crew?: JsonNullValueInput | InputJsonValue
    details?: JsonNullValueInput | InputJsonValue
    genres?: filmsUpdategenresInput | string[]
    themes?: filmsUpdatethemesInput | string[]
  }

  export type filmsUpdateWithoutLikedByUsersInput = {
    film_name?: StringFieldUpdateOperationsInput | string
    realise_year?: IntFieldUpdateOperationsInput | number
    film_image?: StringFieldUpdateOperationsInput | string
    author_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    users_viewed?: filmsUpdateusers_viewedInput | number[]
    reviews_quantity?: IntFieldUpdateOperationsInput | number
    reviews?: filmsUpdatereviewsInput | number[]
    likes?: IntFieldUpdateOperationsInput | number
    liked_by_users?: filmsUpdateliked_by_usersInput | number[]
    rating1?: filmsUpdaterating1Input | number[]
    rating2?: filmsUpdaterating2Input | number[]
    rating3?: filmsUpdaterating3Input | number[]
    rating4?: filmsUpdaterating4Input | number[]
    rating5?: filmsUpdaterating5Input | number[]
    cast?: filmsUpdatecastInput | string[]
    crew?: JsonNullValueInput | InputJsonValue
    details?: JsonNullValueInput | InputJsonValue
    genres?: filmsUpdategenresInput | string[]
    themes?: filmsUpdatethemesInput | string[]
    reviewsByUser?: usersUpdateManyWithoutUsers_reviewed_filmNestedInput
  }

  export type filmsUncheckedUpdateWithoutLikedByUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_name?: StringFieldUpdateOperationsInput | string
    realise_year?: IntFieldUpdateOperationsInput | number
    film_image?: StringFieldUpdateOperationsInput | string
    author_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    users_viewed?: filmsUpdateusers_viewedInput | number[]
    reviews_quantity?: IntFieldUpdateOperationsInput | number
    reviews?: filmsUpdatereviewsInput | number[]
    likes?: IntFieldUpdateOperationsInput | number
    liked_by_users?: filmsUpdateliked_by_usersInput | number[]
    rating1?: filmsUpdaterating1Input | number[]
    rating2?: filmsUpdaterating2Input | number[]
    rating3?: filmsUpdaterating3Input | number[]
    rating4?: filmsUpdaterating4Input | number[]
    rating5?: filmsUpdaterating5Input | number[]
    cast?: filmsUpdatecastInput | string[]
    crew?: JsonNullValueInput | InputJsonValue
    details?: JsonNullValueInput | InputJsonValue
    genres?: filmsUpdategenresInput | string[]
    themes?: filmsUpdatethemesInput | string[]
    reviewsByUser?: usersUncheckedUpdateManyWithoutUsers_reviewed_filmNestedInput
  }

  export type filmsUncheckedUpdateManyWithoutLikedByUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_name?: StringFieldUpdateOperationsInput | string
    realise_year?: IntFieldUpdateOperationsInput | number
    film_image?: StringFieldUpdateOperationsInput | string
    author_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    users_viewed?: filmsUpdateusers_viewedInput | number[]
    reviews_quantity?: IntFieldUpdateOperationsInput | number
    reviews?: filmsUpdatereviewsInput | number[]
    likes?: IntFieldUpdateOperationsInput | number
    liked_by_users?: filmsUpdateliked_by_usersInput | number[]
    rating1?: filmsUpdaterating1Input | number[]
    rating2?: filmsUpdaterating2Input | number[]
    rating3?: filmsUpdaterating3Input | number[]
    rating4?: filmsUpdaterating4Input | number[]
    rating5?: filmsUpdaterating5Input | number[]
    cast?: filmsUpdatecastInput | string[]
    crew?: JsonNullValueInput | InputJsonValue
    details?: JsonNullValueInput | InputJsonValue
    genres?: filmsUpdategenresInput | string[]
    themes?: filmsUpdatethemesInput | string[]
  }

  export type usersUpdateWithoutUsers_reviewed_filmInput = {
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_following_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_followers_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews?: usersUpdateuser_reviewsInput | number[]
    user_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_films?: usersUpdateuser_filmsInput | number[]
    user_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_lists?: usersUpdateuser_listsInput | number[]
    user_favorite_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_films?: usersUpdateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_lists?: usersUpdateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_reviews?: usersUpdateuser_favorite_reviewsInput | number[]
    user_bio?: StringFieldUpdateOperationsInput | string
    user_tags?: usersUpdateuser_tagsInput | string[]
    user_following?: usersUpdateuser_followingInput | number[]
    user_followers?: usersUpdateuser_followersInput | number[]
    user_pinned_lists?: usersUpdateuser_pinned_listsInput | number[]
    comments?: commentsUpdateManyWithoutAuthorNestedInput
    lists?: listsUpdateManyWithoutAuthorNestedInput
    reviews?: reviewsUpdateManyWithoutUserNestedInput
    users_liked_film?: filmsUpdateManyWithoutLikedByUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUsers_reviewed_filmInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_following_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_followers_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews?: usersUpdateuser_reviewsInput | number[]
    user_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_films?: usersUpdateuser_filmsInput | number[]
    user_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_lists?: usersUpdateuser_listsInput | number[]
    user_favorite_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_films?: usersUpdateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_lists?: usersUpdateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_reviews?: usersUpdateuser_favorite_reviewsInput | number[]
    user_bio?: StringFieldUpdateOperationsInput | string
    user_tags?: usersUpdateuser_tagsInput | string[]
    user_following?: usersUpdateuser_followingInput | number[]
    user_followers?: usersUpdateuser_followersInput | number[]
    user_pinned_lists?: usersUpdateuser_pinned_listsInput | number[]
    comments?: commentsUncheckedUpdateManyWithoutAuthorNestedInput
    lists?: listsUncheckedUpdateManyWithoutAuthorNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUserNestedInput
    users_liked_film?: filmsUncheckedUpdateManyWithoutLikedByUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutUsers_reviewed_filmInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_following_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_followers_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews?: usersUpdateuser_reviewsInput | number[]
    user_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_films?: usersUpdateuser_filmsInput | number[]
    user_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_lists?: usersUpdateuser_listsInput | number[]
    user_favorite_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_films?: usersUpdateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_lists?: usersUpdateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_reviews?: usersUpdateuser_favorite_reviewsInput | number[]
    user_bio?: StringFieldUpdateOperationsInput | string
    user_tags?: usersUpdateuser_tagsInput | string[]
    user_following?: usersUpdateuser_followingInput | number[]
    user_followers?: usersUpdateuser_followersInput | number[]
    user_pinned_lists?: usersUpdateuser_pinned_listsInput | number[]
  }

  export type usersUpdateWithoutUsers_liked_filmInput = {
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_following_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_followers_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews?: usersUpdateuser_reviewsInput | number[]
    user_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_films?: usersUpdateuser_filmsInput | number[]
    user_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_lists?: usersUpdateuser_listsInput | number[]
    user_favorite_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_films?: usersUpdateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_lists?: usersUpdateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_reviews?: usersUpdateuser_favorite_reviewsInput | number[]
    user_bio?: StringFieldUpdateOperationsInput | string
    user_tags?: usersUpdateuser_tagsInput | string[]
    user_following?: usersUpdateuser_followingInput | number[]
    user_followers?: usersUpdateuser_followersInput | number[]
    user_pinned_lists?: usersUpdateuser_pinned_listsInput | number[]
    comments?: commentsUpdateManyWithoutAuthorNestedInput
    lists?: listsUpdateManyWithoutAuthorNestedInput
    reviews?: reviewsUpdateManyWithoutUserNestedInput
    users_reviewed_film?: filmsUpdateManyWithoutReviewsByUserNestedInput
  }

  export type usersUncheckedUpdateWithoutUsers_liked_filmInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_following_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_followers_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews?: usersUpdateuser_reviewsInput | number[]
    user_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_films?: usersUpdateuser_filmsInput | number[]
    user_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_lists?: usersUpdateuser_listsInput | number[]
    user_favorite_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_films?: usersUpdateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_lists?: usersUpdateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_reviews?: usersUpdateuser_favorite_reviewsInput | number[]
    user_bio?: StringFieldUpdateOperationsInput | string
    user_tags?: usersUpdateuser_tagsInput | string[]
    user_following?: usersUpdateuser_followingInput | number[]
    user_followers?: usersUpdateuser_followersInput | number[]
    user_pinned_lists?: usersUpdateuser_pinned_listsInput | number[]
    comments?: commentsUncheckedUpdateManyWithoutAuthorNestedInput
    lists?: listsUncheckedUpdateManyWithoutAuthorNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUserNestedInput
    users_reviewed_film?: filmsUncheckedUpdateManyWithoutReviewsByUserNestedInput
  }

  export type usersUncheckedUpdateManyWithoutUsers_liked_filmInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_avatar?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_following_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_followers_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_reviews?: usersUpdateuser_reviewsInput | number[]
    user_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_films?: usersUpdateuser_filmsInput | number[]
    user_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_lists?: usersUpdateuser_listsInput | number[]
    user_favorite_films_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_films?: usersUpdateuser_favorite_filmsInput | number[]
    user_favorite_lists_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_lists?: usersUpdateuser_favorite_listsInput | number[]
    user_favorite_reviews_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user_favorite_reviews?: usersUpdateuser_favorite_reviewsInput | number[]
    user_bio?: StringFieldUpdateOperationsInput | string
    user_tags?: usersUpdateuser_tagsInput | string[]
    user_following?: usersUpdateuser_followingInput | number[]
    user_followers?: usersUpdateuser_followersInput | number[]
    user_pinned_lists?: usersUpdateuser_pinned_listsInput | number[]
  }

  export type commentsCreateManyReviewInput = {
    id?: number
    author_id: number
    comment_text?: string
    published_time: bigint | number
    liked_by_users?: commentsCreateliked_by_usersInput | number[]
  }

  export type commentsUpdateWithoutReviewInput = {
    comment_text?: StringFieldUpdateOperationsInput | string
    published_time?: BigIntFieldUpdateOperationsInput | bigint | number
    liked_by_users?: commentsUpdateliked_by_usersInput | number[]
    author?: usersUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    published_time?: BigIntFieldUpdateOperationsInput | bigint | number
    liked_by_users?: commentsUpdateliked_by_usersInput | number[]
  }

  export type commentsUncheckedUpdateManyWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    published_time?: BigIntFieldUpdateOperationsInput | bigint | number
    liked_by_users?: commentsUpdateliked_by_usersInput | number[]
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}