
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model GroceryItem
 * 
 */
export type GroceryItem = $Result.DefaultSelection<Prisma.$GroceryItemPayload>
/**
 * Model GroceryCategory
 * 
 */
export type GroceryCategory = $Result.DefaultSelection<Prisma.$GroceryCategoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groceryItem`: Exposes CRUD operations for the **GroceryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroceryItems
    * const groceryItems = await prisma.groceryItem.findMany()
    * ```
    */
  get groceryItem(): Prisma.GroceryItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groceryCategory`: Exposes CRUD operations for the **GroceryCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroceryCategories
    * const groceryCategories = await prisma.groceryCategory.findMany()
    * ```
    */
  get groceryCategory(): Prisma.GroceryCategoryDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    GroceryItem: 'GroceryItem',
    GroceryCategory: 'GroceryCategory'
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
      modelProps: "user" | "groceryItem" | "groceryCategory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      GroceryItem: {
        payload: Prisma.$GroceryItemPayload<ExtArgs>
        fields: Prisma.GroceryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroceryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroceryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>
          }
          findFirst: {
            args: Prisma.GroceryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroceryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>
          }
          findMany: {
            args: Prisma.GroceryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>[]
          }
          create: {
            args: Prisma.GroceryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>
          }
          createMany: {
            args: Prisma.GroceryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroceryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>[]
          }
          delete: {
            args: Prisma.GroceryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>
          }
          update: {
            args: Prisma.GroceryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>
          }
          deleteMany: {
            args: Prisma.GroceryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroceryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroceryItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>[]
          }
          upsert: {
            args: Prisma.GroceryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>
          }
          aggregate: {
            args: Prisma.GroceryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroceryItem>
          }
          groupBy: {
            args: Prisma.GroceryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroceryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroceryItemCountArgs<ExtArgs>
            result: $Utils.Optional<GroceryItemCountAggregateOutputType> | number
          }
        }
      }
      GroceryCategory: {
        payload: Prisma.$GroceryCategoryPayload<ExtArgs>
        fields: Prisma.GroceryCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroceryCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroceryCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryCategoryPayload>
          }
          findFirst: {
            args: Prisma.GroceryCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroceryCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryCategoryPayload>
          }
          findMany: {
            args: Prisma.GroceryCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryCategoryPayload>[]
          }
          create: {
            args: Prisma.GroceryCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryCategoryPayload>
          }
          createMany: {
            args: Prisma.GroceryCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroceryCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryCategoryPayload>[]
          }
          delete: {
            args: Prisma.GroceryCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryCategoryPayload>
          }
          update: {
            args: Prisma.GroceryCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryCategoryPayload>
          }
          deleteMany: {
            args: Prisma.GroceryCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroceryCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroceryCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryCategoryPayload>[]
          }
          upsert: {
            args: Prisma.GroceryCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryCategoryPayload>
          }
          aggregate: {
            args: Prisma.GroceryCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroceryCategory>
          }
          groupBy: {
            args: Prisma.GroceryCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroceryCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroceryCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<GroceryCategoryCountAggregateOutputType> | number
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
    user?: UserOmit
    groceryItem?: GroceryItemOmit
    groceryCategory?: GroceryCategoryOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    groceryItems: number
    groceryCategories: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groceryItems?: boolean | UserCountOutputTypeCountGroceryItemsArgs
    groceryCategories?: boolean | UserCountOutputTypeCountGroceryCategoriesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroceryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroceryItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroceryCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroceryCategoryWhereInput
  }


  /**
   * Count Type GroceryCategoryCountOutputType
   */

  export type GroceryCategoryCountOutputType = {
    children: number
    items: number
  }

  export type GroceryCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | GroceryCategoryCountOutputTypeCountChildrenArgs
    items?: boolean | GroceryCategoryCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * GroceryCategoryCountOutputType without action
   */
  export type GroceryCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryCategoryCountOutputType
     */
    select?: GroceryCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroceryCategoryCountOutputType without action
   */
  export type GroceryCategoryCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroceryCategoryWhereInput
  }

  /**
   * GroceryCategoryCountOutputType without action
   */
  export type GroceryCategoryCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroceryItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    auth0Id: string | null
    email: string | null
    name: string | null
    picture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    auth0Id: string | null
    email: string | null
    name: string | null
    picture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    auth0Id: number
    email: number
    name: number
    picture: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    auth0Id?: true
    email?: true
    name?: true
    picture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    auth0Id?: true
    email?: true
    name?: true
    picture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    auth0Id?: true
    email?: true
    name?: true
    picture?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    auth0Id: string
    email: string
    name: string | null
    picture: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auth0Id?: boolean
    email?: boolean
    name?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groceryItems?: boolean | User$groceryItemsArgs<ExtArgs>
    groceryCategories?: boolean | User$groceryCategoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auth0Id?: boolean
    email?: boolean
    name?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auth0Id?: boolean
    email?: boolean
    name?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    auth0Id?: boolean
    email?: boolean
    name?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "auth0Id" | "email" | "name" | "picture" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groceryItems?: boolean | User$groceryItemsArgs<ExtArgs>
    groceryCategories?: boolean | User$groceryCategoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      groceryItems: Prisma.$GroceryItemPayload<ExtArgs>[]
      groceryCategories: Prisma.$GroceryCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      auth0Id: string
      email: string
      name: string | null
      picture: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groceryItems<T extends User$groceryItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$groceryItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groceryCategories<T extends User$groceryCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$groceryCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly auth0Id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.groceryItems
   */
  export type User$groceryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
    where?: GroceryItemWhereInput
    orderBy?: GroceryItemOrderByWithRelationInput | GroceryItemOrderByWithRelationInput[]
    cursor?: GroceryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroceryItemScalarFieldEnum | GroceryItemScalarFieldEnum[]
  }

  /**
   * User.groceryCategories
   */
  export type User$groceryCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryCategory
     */
    select?: GroceryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryCategory
     */
    omit?: GroceryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryCategoryInclude<ExtArgs> | null
    where?: GroceryCategoryWhereInput
    orderBy?: GroceryCategoryOrderByWithRelationInput | GroceryCategoryOrderByWithRelationInput[]
    cursor?: GroceryCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroceryCategoryScalarFieldEnum | GroceryCategoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model GroceryItem
   */

  export type AggregateGroceryItem = {
    _count: GroceryItemCountAggregateOutputType | null
    _avg: GroceryItemAvgAggregateOutputType | null
    _sum: GroceryItemSumAggregateOutputType | null
    _min: GroceryItemMinAggregateOutputType | null
    _max: GroceryItemMaxAggregateOutputType | null
  }

  export type GroceryItemAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type GroceryItemSumAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type GroceryItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    quantity: number | null
    checked: boolean | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    categoryId: string | null
  }

  export type GroceryItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    quantity: number | null
    checked: boolean | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    categoryId: string | null
  }

  export type GroceryItemCountAggregateOutputType = {
    id: number
    name: number
    quantity: number
    checked: number
    notes: number
    createdAt: number
    updatedAt: number
    userId: number
    categoryId: number
    _all: number
  }


  export type GroceryItemAvgAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type GroceryItemSumAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type GroceryItemMinAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    checked?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
  }

  export type GroceryItemMaxAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    checked?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
  }

  export type GroceryItemCountAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    checked?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
    _all?: true
  }

  export type GroceryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroceryItem to aggregate.
     */
    where?: GroceryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroceryItems to fetch.
     */
    orderBy?: GroceryItemOrderByWithRelationInput | GroceryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroceryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroceryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroceryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroceryItems
    **/
    _count?: true | GroceryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroceryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroceryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroceryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroceryItemMaxAggregateInputType
  }

  export type GetGroceryItemAggregateType<T extends GroceryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateGroceryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroceryItem[P]>
      : GetScalarType<T[P], AggregateGroceryItem[P]>
  }




  export type GroceryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroceryItemWhereInput
    orderBy?: GroceryItemOrderByWithAggregationInput | GroceryItemOrderByWithAggregationInput[]
    by: GroceryItemScalarFieldEnum[] | GroceryItemScalarFieldEnum
    having?: GroceryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroceryItemCountAggregateInputType | true
    _avg?: GroceryItemAvgAggregateInputType
    _sum?: GroceryItemSumAggregateInputType
    _min?: GroceryItemMinAggregateInputType
    _max?: GroceryItemMaxAggregateInputType
  }

  export type GroceryItemGroupByOutputType = {
    id: number
    name: string
    quantity: number
    checked: boolean
    notes: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    categoryId: string | null
    _count: GroceryItemCountAggregateOutputType | null
    _avg: GroceryItemAvgAggregateOutputType | null
    _sum: GroceryItemSumAggregateOutputType | null
    _min: GroceryItemMinAggregateOutputType | null
    _max: GroceryItemMaxAggregateOutputType | null
  }

  type GetGroceryItemGroupByPayload<T extends GroceryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroceryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroceryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroceryItemGroupByOutputType[P]>
            : GetScalarType<T[P], GroceryItemGroupByOutputType[P]>
        }
      >
    >


  export type GroceryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    checked?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | GroceryItem$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["groceryItem"]>

  export type GroceryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    checked?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | GroceryItem$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["groceryItem"]>

  export type GroceryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    checked?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | GroceryItem$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["groceryItem"]>

  export type GroceryItemSelectScalar = {
    id?: boolean
    name?: boolean
    quantity?: boolean
    checked?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
  }

  export type GroceryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "quantity" | "checked" | "notes" | "createdAt" | "updatedAt" | "userId" | "categoryId", ExtArgs["result"]["groceryItem"]>
  export type GroceryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | GroceryItem$categoryArgs<ExtArgs>
  }
  export type GroceryItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | GroceryItem$categoryArgs<ExtArgs>
  }
  export type GroceryItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | GroceryItem$categoryArgs<ExtArgs>
  }

  export type $GroceryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroceryItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$GroceryCategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      quantity: number
      checked: boolean
      notes: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
      categoryId: string | null
    }, ExtArgs["result"]["groceryItem"]>
    composites: {}
  }

  type GroceryItemGetPayload<S extends boolean | null | undefined | GroceryItemDefaultArgs> = $Result.GetResult<Prisma.$GroceryItemPayload, S>

  type GroceryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroceryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroceryItemCountAggregateInputType | true
    }

  export interface GroceryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroceryItem'], meta: { name: 'GroceryItem' } }
    /**
     * Find zero or one GroceryItem that matches the filter.
     * @param {GroceryItemFindUniqueArgs} args - Arguments to find a GroceryItem
     * @example
     * // Get one GroceryItem
     * const groceryItem = await prisma.groceryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroceryItemFindUniqueArgs>(args: SelectSubset<T, GroceryItemFindUniqueArgs<ExtArgs>>): Prisma__GroceryItemClient<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroceryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroceryItemFindUniqueOrThrowArgs} args - Arguments to find a GroceryItem
     * @example
     * // Get one GroceryItem
     * const groceryItem = await prisma.groceryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroceryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, GroceryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroceryItemClient<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroceryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryItemFindFirstArgs} args - Arguments to find a GroceryItem
     * @example
     * // Get one GroceryItem
     * const groceryItem = await prisma.groceryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroceryItemFindFirstArgs>(args?: SelectSubset<T, GroceryItemFindFirstArgs<ExtArgs>>): Prisma__GroceryItemClient<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroceryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryItemFindFirstOrThrowArgs} args - Arguments to find a GroceryItem
     * @example
     * // Get one GroceryItem
     * const groceryItem = await prisma.groceryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroceryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, GroceryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroceryItemClient<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroceryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroceryItems
     * const groceryItems = await prisma.groceryItem.findMany()
     * 
     * // Get first 10 GroceryItems
     * const groceryItems = await prisma.groceryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groceryItemWithIdOnly = await prisma.groceryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroceryItemFindManyArgs>(args?: SelectSubset<T, GroceryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroceryItem.
     * @param {GroceryItemCreateArgs} args - Arguments to create a GroceryItem.
     * @example
     * // Create one GroceryItem
     * const GroceryItem = await prisma.groceryItem.create({
     *   data: {
     *     // ... data to create a GroceryItem
     *   }
     * })
     * 
     */
    create<T extends GroceryItemCreateArgs>(args: SelectSubset<T, GroceryItemCreateArgs<ExtArgs>>): Prisma__GroceryItemClient<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroceryItems.
     * @param {GroceryItemCreateManyArgs} args - Arguments to create many GroceryItems.
     * @example
     * // Create many GroceryItems
     * const groceryItem = await prisma.groceryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroceryItemCreateManyArgs>(args?: SelectSubset<T, GroceryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroceryItems and returns the data saved in the database.
     * @param {GroceryItemCreateManyAndReturnArgs} args - Arguments to create many GroceryItems.
     * @example
     * // Create many GroceryItems
     * const groceryItem = await prisma.groceryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroceryItems and only return the `id`
     * const groceryItemWithIdOnly = await prisma.groceryItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroceryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, GroceryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroceryItem.
     * @param {GroceryItemDeleteArgs} args - Arguments to delete one GroceryItem.
     * @example
     * // Delete one GroceryItem
     * const GroceryItem = await prisma.groceryItem.delete({
     *   where: {
     *     // ... filter to delete one GroceryItem
     *   }
     * })
     * 
     */
    delete<T extends GroceryItemDeleteArgs>(args: SelectSubset<T, GroceryItemDeleteArgs<ExtArgs>>): Prisma__GroceryItemClient<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroceryItem.
     * @param {GroceryItemUpdateArgs} args - Arguments to update one GroceryItem.
     * @example
     * // Update one GroceryItem
     * const groceryItem = await prisma.groceryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroceryItemUpdateArgs>(args: SelectSubset<T, GroceryItemUpdateArgs<ExtArgs>>): Prisma__GroceryItemClient<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroceryItems.
     * @param {GroceryItemDeleteManyArgs} args - Arguments to filter GroceryItems to delete.
     * @example
     * // Delete a few GroceryItems
     * const { count } = await prisma.groceryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroceryItemDeleteManyArgs>(args?: SelectSubset<T, GroceryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroceryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroceryItems
     * const groceryItem = await prisma.groceryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroceryItemUpdateManyArgs>(args: SelectSubset<T, GroceryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroceryItems and returns the data updated in the database.
     * @param {GroceryItemUpdateManyAndReturnArgs} args - Arguments to update many GroceryItems.
     * @example
     * // Update many GroceryItems
     * const groceryItem = await prisma.groceryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroceryItems and only return the `id`
     * const groceryItemWithIdOnly = await prisma.groceryItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroceryItemUpdateManyAndReturnArgs>(args: SelectSubset<T, GroceryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroceryItem.
     * @param {GroceryItemUpsertArgs} args - Arguments to update or create a GroceryItem.
     * @example
     * // Update or create a GroceryItem
     * const groceryItem = await prisma.groceryItem.upsert({
     *   create: {
     *     // ... data to create a GroceryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroceryItem we want to update
     *   }
     * })
     */
    upsert<T extends GroceryItemUpsertArgs>(args: SelectSubset<T, GroceryItemUpsertArgs<ExtArgs>>): Prisma__GroceryItemClient<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroceryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryItemCountArgs} args - Arguments to filter GroceryItems to count.
     * @example
     * // Count the number of GroceryItems
     * const count = await prisma.groceryItem.count({
     *   where: {
     *     // ... the filter for the GroceryItems we want to count
     *   }
     * })
    **/
    count<T extends GroceryItemCountArgs>(
      args?: Subset<T, GroceryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroceryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroceryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroceryItemAggregateArgs>(args: Subset<T, GroceryItemAggregateArgs>): Prisma.PrismaPromise<GetGroceryItemAggregateType<T>>

    /**
     * Group by GroceryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryItemGroupByArgs} args - Group by arguments.
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
      T extends GroceryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroceryItemGroupByArgs['orderBy'] }
        : { orderBy?: GroceryItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroceryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroceryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroceryItem model
   */
  readonly fields: GroceryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroceryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroceryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends GroceryItem$categoryArgs<ExtArgs> = {}>(args?: Subset<T, GroceryItem$categoryArgs<ExtArgs>>): Prisma__GroceryCategoryClient<$Result.GetResult<Prisma.$GroceryCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GroceryItem model
   */
  interface GroceryItemFieldRefs {
    readonly id: FieldRef<"GroceryItem", 'Int'>
    readonly name: FieldRef<"GroceryItem", 'String'>
    readonly quantity: FieldRef<"GroceryItem", 'Int'>
    readonly checked: FieldRef<"GroceryItem", 'Boolean'>
    readonly notes: FieldRef<"GroceryItem", 'String'>
    readonly createdAt: FieldRef<"GroceryItem", 'DateTime'>
    readonly updatedAt: FieldRef<"GroceryItem", 'DateTime'>
    readonly userId: FieldRef<"GroceryItem", 'String'>
    readonly categoryId: FieldRef<"GroceryItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GroceryItem findUnique
   */
  export type GroceryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
    /**
     * Filter, which GroceryItem to fetch.
     */
    where: GroceryItemWhereUniqueInput
  }

  /**
   * GroceryItem findUniqueOrThrow
   */
  export type GroceryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
    /**
     * Filter, which GroceryItem to fetch.
     */
    where: GroceryItemWhereUniqueInput
  }

  /**
   * GroceryItem findFirst
   */
  export type GroceryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
    /**
     * Filter, which GroceryItem to fetch.
     */
    where?: GroceryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroceryItems to fetch.
     */
    orderBy?: GroceryItemOrderByWithRelationInput | GroceryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroceryItems.
     */
    cursor?: GroceryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroceryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroceryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroceryItems.
     */
    distinct?: GroceryItemScalarFieldEnum | GroceryItemScalarFieldEnum[]
  }

  /**
   * GroceryItem findFirstOrThrow
   */
  export type GroceryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
    /**
     * Filter, which GroceryItem to fetch.
     */
    where?: GroceryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroceryItems to fetch.
     */
    orderBy?: GroceryItemOrderByWithRelationInput | GroceryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroceryItems.
     */
    cursor?: GroceryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroceryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroceryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroceryItems.
     */
    distinct?: GroceryItemScalarFieldEnum | GroceryItemScalarFieldEnum[]
  }

  /**
   * GroceryItem findMany
   */
  export type GroceryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
    /**
     * Filter, which GroceryItems to fetch.
     */
    where?: GroceryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroceryItems to fetch.
     */
    orderBy?: GroceryItemOrderByWithRelationInput | GroceryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroceryItems.
     */
    cursor?: GroceryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroceryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroceryItems.
     */
    skip?: number
    distinct?: GroceryItemScalarFieldEnum | GroceryItemScalarFieldEnum[]
  }

  /**
   * GroceryItem create
   */
  export type GroceryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a GroceryItem.
     */
    data: XOR<GroceryItemCreateInput, GroceryItemUncheckedCreateInput>
  }

  /**
   * GroceryItem createMany
   */
  export type GroceryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroceryItems.
     */
    data: GroceryItemCreateManyInput | GroceryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroceryItem createManyAndReturn
   */
  export type GroceryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * The data used to create many GroceryItems.
     */
    data: GroceryItemCreateManyInput | GroceryItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroceryItem update
   */
  export type GroceryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a GroceryItem.
     */
    data: XOR<GroceryItemUpdateInput, GroceryItemUncheckedUpdateInput>
    /**
     * Choose, which GroceryItem to update.
     */
    where: GroceryItemWhereUniqueInput
  }

  /**
   * GroceryItem updateMany
   */
  export type GroceryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroceryItems.
     */
    data: XOR<GroceryItemUpdateManyMutationInput, GroceryItemUncheckedUpdateManyInput>
    /**
     * Filter which GroceryItems to update
     */
    where?: GroceryItemWhereInput
    /**
     * Limit how many GroceryItems to update.
     */
    limit?: number
  }

  /**
   * GroceryItem updateManyAndReturn
   */
  export type GroceryItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * The data used to update GroceryItems.
     */
    data: XOR<GroceryItemUpdateManyMutationInput, GroceryItemUncheckedUpdateManyInput>
    /**
     * Filter which GroceryItems to update
     */
    where?: GroceryItemWhereInput
    /**
     * Limit how many GroceryItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroceryItem upsert
   */
  export type GroceryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the GroceryItem to update in case it exists.
     */
    where: GroceryItemWhereUniqueInput
    /**
     * In case the GroceryItem found by the `where` argument doesn't exist, create a new GroceryItem with this data.
     */
    create: XOR<GroceryItemCreateInput, GroceryItemUncheckedCreateInput>
    /**
     * In case the GroceryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroceryItemUpdateInput, GroceryItemUncheckedUpdateInput>
  }

  /**
   * GroceryItem delete
   */
  export type GroceryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
    /**
     * Filter which GroceryItem to delete.
     */
    where: GroceryItemWhereUniqueInput
  }

  /**
   * GroceryItem deleteMany
   */
  export type GroceryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroceryItems to delete
     */
    where?: GroceryItemWhereInput
    /**
     * Limit how many GroceryItems to delete.
     */
    limit?: number
  }

  /**
   * GroceryItem.category
   */
  export type GroceryItem$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryCategory
     */
    select?: GroceryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryCategory
     */
    omit?: GroceryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryCategoryInclude<ExtArgs> | null
    where?: GroceryCategoryWhereInput
  }

  /**
   * GroceryItem without action
   */
  export type GroceryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
  }


  /**
   * Model GroceryCategory
   */

  export type AggregateGroceryCategory = {
    _count: GroceryCategoryCountAggregateOutputType | null
    _min: GroceryCategoryMinAggregateOutputType | null
    _max: GroceryCategoryMaxAggregateOutputType | null
  }

  export type GroceryCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    icon: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type GroceryCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    icon: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type GroceryCategoryCountAggregateOutputType = {
    id: number
    name: number
    color: number
    icon: number
    parentId: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type GroceryCategoryMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    icon?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type GroceryCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    icon?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type GroceryCategoryCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    icon?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type GroceryCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroceryCategory to aggregate.
     */
    where?: GroceryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroceryCategories to fetch.
     */
    orderBy?: GroceryCategoryOrderByWithRelationInput | GroceryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroceryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroceryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroceryCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroceryCategories
    **/
    _count?: true | GroceryCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroceryCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroceryCategoryMaxAggregateInputType
  }

  export type GetGroceryCategoryAggregateType<T extends GroceryCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateGroceryCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroceryCategory[P]>
      : GetScalarType<T[P], AggregateGroceryCategory[P]>
  }




  export type GroceryCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroceryCategoryWhereInput
    orderBy?: GroceryCategoryOrderByWithAggregationInput | GroceryCategoryOrderByWithAggregationInput[]
    by: GroceryCategoryScalarFieldEnum[] | GroceryCategoryScalarFieldEnum
    having?: GroceryCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroceryCategoryCountAggregateInputType | true
    _min?: GroceryCategoryMinAggregateInputType
    _max?: GroceryCategoryMaxAggregateInputType
  }

  export type GroceryCategoryGroupByOutputType = {
    id: string
    name: string
    color: string | null
    icon: string | null
    parentId: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: GroceryCategoryCountAggregateOutputType | null
    _min: GroceryCategoryMinAggregateOutputType | null
    _max: GroceryCategoryMaxAggregateOutputType | null
  }

  type GetGroceryCategoryGroupByPayload<T extends GroceryCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroceryCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroceryCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroceryCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], GroceryCategoryGroupByOutputType[P]>
        }
      >
    >


  export type GroceryCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    icon?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    parent?: boolean | GroceryCategory$parentArgs<ExtArgs>
    children?: boolean | GroceryCategory$childrenArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | GroceryCategory$itemsArgs<ExtArgs>
    _count?: boolean | GroceryCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groceryCategory"]>

  export type GroceryCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    icon?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    parent?: boolean | GroceryCategory$parentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groceryCategory"]>

  export type GroceryCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    icon?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    parent?: boolean | GroceryCategory$parentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groceryCategory"]>

  export type GroceryCategorySelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
    icon?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type GroceryCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "color" | "icon" | "parentId" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["groceryCategory"]>
  export type GroceryCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | GroceryCategory$parentArgs<ExtArgs>
    children?: boolean | GroceryCategory$childrenArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | GroceryCategory$itemsArgs<ExtArgs>
    _count?: boolean | GroceryCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroceryCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | GroceryCategory$parentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroceryCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | GroceryCategory$parentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroceryCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroceryCategory"
    objects: {
      parent: Prisma.$GroceryCategoryPayload<ExtArgs> | null
      children: Prisma.$GroceryCategoryPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$GroceryItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      color: string | null
      icon: string | null
      parentId: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["groceryCategory"]>
    composites: {}
  }

  type GroceryCategoryGetPayload<S extends boolean | null | undefined | GroceryCategoryDefaultArgs> = $Result.GetResult<Prisma.$GroceryCategoryPayload, S>

  type GroceryCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroceryCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroceryCategoryCountAggregateInputType | true
    }

  export interface GroceryCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroceryCategory'], meta: { name: 'GroceryCategory' } }
    /**
     * Find zero or one GroceryCategory that matches the filter.
     * @param {GroceryCategoryFindUniqueArgs} args - Arguments to find a GroceryCategory
     * @example
     * // Get one GroceryCategory
     * const groceryCategory = await prisma.groceryCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroceryCategoryFindUniqueArgs>(args: SelectSubset<T, GroceryCategoryFindUniqueArgs<ExtArgs>>): Prisma__GroceryCategoryClient<$Result.GetResult<Prisma.$GroceryCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroceryCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroceryCategoryFindUniqueOrThrowArgs} args - Arguments to find a GroceryCategory
     * @example
     * // Get one GroceryCategory
     * const groceryCategory = await prisma.groceryCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroceryCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, GroceryCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroceryCategoryClient<$Result.GetResult<Prisma.$GroceryCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroceryCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryCategoryFindFirstArgs} args - Arguments to find a GroceryCategory
     * @example
     * // Get one GroceryCategory
     * const groceryCategory = await prisma.groceryCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroceryCategoryFindFirstArgs>(args?: SelectSubset<T, GroceryCategoryFindFirstArgs<ExtArgs>>): Prisma__GroceryCategoryClient<$Result.GetResult<Prisma.$GroceryCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroceryCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryCategoryFindFirstOrThrowArgs} args - Arguments to find a GroceryCategory
     * @example
     * // Get one GroceryCategory
     * const groceryCategory = await prisma.groceryCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroceryCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, GroceryCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroceryCategoryClient<$Result.GetResult<Prisma.$GroceryCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroceryCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroceryCategories
     * const groceryCategories = await prisma.groceryCategory.findMany()
     * 
     * // Get first 10 GroceryCategories
     * const groceryCategories = await prisma.groceryCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groceryCategoryWithIdOnly = await prisma.groceryCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroceryCategoryFindManyArgs>(args?: SelectSubset<T, GroceryCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroceryCategory.
     * @param {GroceryCategoryCreateArgs} args - Arguments to create a GroceryCategory.
     * @example
     * // Create one GroceryCategory
     * const GroceryCategory = await prisma.groceryCategory.create({
     *   data: {
     *     // ... data to create a GroceryCategory
     *   }
     * })
     * 
     */
    create<T extends GroceryCategoryCreateArgs>(args: SelectSubset<T, GroceryCategoryCreateArgs<ExtArgs>>): Prisma__GroceryCategoryClient<$Result.GetResult<Prisma.$GroceryCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroceryCategories.
     * @param {GroceryCategoryCreateManyArgs} args - Arguments to create many GroceryCategories.
     * @example
     * // Create many GroceryCategories
     * const groceryCategory = await prisma.groceryCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroceryCategoryCreateManyArgs>(args?: SelectSubset<T, GroceryCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroceryCategories and returns the data saved in the database.
     * @param {GroceryCategoryCreateManyAndReturnArgs} args - Arguments to create many GroceryCategories.
     * @example
     * // Create many GroceryCategories
     * const groceryCategory = await prisma.groceryCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroceryCategories and only return the `id`
     * const groceryCategoryWithIdOnly = await prisma.groceryCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroceryCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, GroceryCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroceryCategory.
     * @param {GroceryCategoryDeleteArgs} args - Arguments to delete one GroceryCategory.
     * @example
     * // Delete one GroceryCategory
     * const GroceryCategory = await prisma.groceryCategory.delete({
     *   where: {
     *     // ... filter to delete one GroceryCategory
     *   }
     * })
     * 
     */
    delete<T extends GroceryCategoryDeleteArgs>(args: SelectSubset<T, GroceryCategoryDeleteArgs<ExtArgs>>): Prisma__GroceryCategoryClient<$Result.GetResult<Prisma.$GroceryCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroceryCategory.
     * @param {GroceryCategoryUpdateArgs} args - Arguments to update one GroceryCategory.
     * @example
     * // Update one GroceryCategory
     * const groceryCategory = await prisma.groceryCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroceryCategoryUpdateArgs>(args: SelectSubset<T, GroceryCategoryUpdateArgs<ExtArgs>>): Prisma__GroceryCategoryClient<$Result.GetResult<Prisma.$GroceryCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroceryCategories.
     * @param {GroceryCategoryDeleteManyArgs} args - Arguments to filter GroceryCategories to delete.
     * @example
     * // Delete a few GroceryCategories
     * const { count } = await prisma.groceryCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroceryCategoryDeleteManyArgs>(args?: SelectSubset<T, GroceryCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroceryCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroceryCategories
     * const groceryCategory = await prisma.groceryCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroceryCategoryUpdateManyArgs>(args: SelectSubset<T, GroceryCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroceryCategories and returns the data updated in the database.
     * @param {GroceryCategoryUpdateManyAndReturnArgs} args - Arguments to update many GroceryCategories.
     * @example
     * // Update many GroceryCategories
     * const groceryCategory = await prisma.groceryCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroceryCategories and only return the `id`
     * const groceryCategoryWithIdOnly = await prisma.groceryCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroceryCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, GroceryCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroceryCategory.
     * @param {GroceryCategoryUpsertArgs} args - Arguments to update or create a GroceryCategory.
     * @example
     * // Update or create a GroceryCategory
     * const groceryCategory = await prisma.groceryCategory.upsert({
     *   create: {
     *     // ... data to create a GroceryCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroceryCategory we want to update
     *   }
     * })
     */
    upsert<T extends GroceryCategoryUpsertArgs>(args: SelectSubset<T, GroceryCategoryUpsertArgs<ExtArgs>>): Prisma__GroceryCategoryClient<$Result.GetResult<Prisma.$GroceryCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroceryCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryCategoryCountArgs} args - Arguments to filter GroceryCategories to count.
     * @example
     * // Count the number of GroceryCategories
     * const count = await prisma.groceryCategory.count({
     *   where: {
     *     // ... the filter for the GroceryCategories we want to count
     *   }
     * })
    **/
    count<T extends GroceryCategoryCountArgs>(
      args?: Subset<T, GroceryCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroceryCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroceryCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroceryCategoryAggregateArgs>(args: Subset<T, GroceryCategoryAggregateArgs>): Prisma.PrismaPromise<GetGroceryCategoryAggregateType<T>>

    /**
     * Group by GroceryCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryCategoryGroupByArgs} args - Group by arguments.
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
      T extends GroceryCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroceryCategoryGroupByArgs['orderBy'] }
        : { orderBy?: GroceryCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroceryCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroceryCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroceryCategory model
   */
  readonly fields: GroceryCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroceryCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroceryCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends GroceryCategory$parentArgs<ExtArgs> = {}>(args?: Subset<T, GroceryCategory$parentArgs<ExtArgs>>): Prisma__GroceryCategoryClient<$Result.GetResult<Prisma.$GroceryCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends GroceryCategory$childrenArgs<ExtArgs> = {}>(args?: Subset<T, GroceryCategory$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends GroceryCategory$itemsArgs<ExtArgs> = {}>(args?: Subset<T, GroceryCategory$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GroceryCategory model
   */
  interface GroceryCategoryFieldRefs {
    readonly id: FieldRef<"GroceryCategory", 'String'>
    readonly name: FieldRef<"GroceryCategory", 'String'>
    readonly color: FieldRef<"GroceryCategory", 'String'>
    readonly icon: FieldRef<"GroceryCategory", 'String'>
    readonly parentId: FieldRef<"GroceryCategory", 'String'>
    readonly createdAt: FieldRef<"GroceryCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"GroceryCategory", 'DateTime'>
    readonly userId: FieldRef<"GroceryCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GroceryCategory findUnique
   */
  export type GroceryCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryCategory
     */
    select?: GroceryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryCategory
     */
    omit?: GroceryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which GroceryCategory to fetch.
     */
    where: GroceryCategoryWhereUniqueInput
  }

  /**
   * GroceryCategory findUniqueOrThrow
   */
  export type GroceryCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryCategory
     */
    select?: GroceryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryCategory
     */
    omit?: GroceryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which GroceryCategory to fetch.
     */
    where: GroceryCategoryWhereUniqueInput
  }

  /**
   * GroceryCategory findFirst
   */
  export type GroceryCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryCategory
     */
    select?: GroceryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryCategory
     */
    omit?: GroceryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which GroceryCategory to fetch.
     */
    where?: GroceryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroceryCategories to fetch.
     */
    orderBy?: GroceryCategoryOrderByWithRelationInput | GroceryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroceryCategories.
     */
    cursor?: GroceryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroceryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroceryCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroceryCategories.
     */
    distinct?: GroceryCategoryScalarFieldEnum | GroceryCategoryScalarFieldEnum[]
  }

  /**
   * GroceryCategory findFirstOrThrow
   */
  export type GroceryCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryCategory
     */
    select?: GroceryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryCategory
     */
    omit?: GroceryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which GroceryCategory to fetch.
     */
    where?: GroceryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroceryCategories to fetch.
     */
    orderBy?: GroceryCategoryOrderByWithRelationInput | GroceryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroceryCategories.
     */
    cursor?: GroceryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroceryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroceryCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroceryCategories.
     */
    distinct?: GroceryCategoryScalarFieldEnum | GroceryCategoryScalarFieldEnum[]
  }

  /**
   * GroceryCategory findMany
   */
  export type GroceryCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryCategory
     */
    select?: GroceryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryCategory
     */
    omit?: GroceryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which GroceryCategories to fetch.
     */
    where?: GroceryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroceryCategories to fetch.
     */
    orderBy?: GroceryCategoryOrderByWithRelationInput | GroceryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroceryCategories.
     */
    cursor?: GroceryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroceryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroceryCategories.
     */
    skip?: number
    distinct?: GroceryCategoryScalarFieldEnum | GroceryCategoryScalarFieldEnum[]
  }

  /**
   * GroceryCategory create
   */
  export type GroceryCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryCategory
     */
    select?: GroceryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryCategory
     */
    omit?: GroceryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a GroceryCategory.
     */
    data: XOR<GroceryCategoryCreateInput, GroceryCategoryUncheckedCreateInput>
  }

  /**
   * GroceryCategory createMany
   */
  export type GroceryCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroceryCategories.
     */
    data: GroceryCategoryCreateManyInput | GroceryCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroceryCategory createManyAndReturn
   */
  export type GroceryCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryCategory
     */
    select?: GroceryCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryCategory
     */
    omit?: GroceryCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many GroceryCategories.
     */
    data: GroceryCategoryCreateManyInput | GroceryCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroceryCategory update
   */
  export type GroceryCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryCategory
     */
    select?: GroceryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryCategory
     */
    omit?: GroceryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a GroceryCategory.
     */
    data: XOR<GroceryCategoryUpdateInput, GroceryCategoryUncheckedUpdateInput>
    /**
     * Choose, which GroceryCategory to update.
     */
    where: GroceryCategoryWhereUniqueInput
  }

  /**
   * GroceryCategory updateMany
   */
  export type GroceryCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroceryCategories.
     */
    data: XOR<GroceryCategoryUpdateManyMutationInput, GroceryCategoryUncheckedUpdateManyInput>
    /**
     * Filter which GroceryCategories to update
     */
    where?: GroceryCategoryWhereInput
    /**
     * Limit how many GroceryCategories to update.
     */
    limit?: number
  }

  /**
   * GroceryCategory updateManyAndReturn
   */
  export type GroceryCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryCategory
     */
    select?: GroceryCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryCategory
     */
    omit?: GroceryCategoryOmit<ExtArgs> | null
    /**
     * The data used to update GroceryCategories.
     */
    data: XOR<GroceryCategoryUpdateManyMutationInput, GroceryCategoryUncheckedUpdateManyInput>
    /**
     * Filter which GroceryCategories to update
     */
    where?: GroceryCategoryWhereInput
    /**
     * Limit how many GroceryCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroceryCategory upsert
   */
  export type GroceryCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryCategory
     */
    select?: GroceryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryCategory
     */
    omit?: GroceryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the GroceryCategory to update in case it exists.
     */
    where: GroceryCategoryWhereUniqueInput
    /**
     * In case the GroceryCategory found by the `where` argument doesn't exist, create a new GroceryCategory with this data.
     */
    create: XOR<GroceryCategoryCreateInput, GroceryCategoryUncheckedCreateInput>
    /**
     * In case the GroceryCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroceryCategoryUpdateInput, GroceryCategoryUncheckedUpdateInput>
  }

  /**
   * GroceryCategory delete
   */
  export type GroceryCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryCategory
     */
    select?: GroceryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryCategory
     */
    omit?: GroceryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryCategoryInclude<ExtArgs> | null
    /**
     * Filter which GroceryCategory to delete.
     */
    where: GroceryCategoryWhereUniqueInput
  }

  /**
   * GroceryCategory deleteMany
   */
  export type GroceryCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroceryCategories to delete
     */
    where?: GroceryCategoryWhereInput
    /**
     * Limit how many GroceryCategories to delete.
     */
    limit?: number
  }

  /**
   * GroceryCategory.parent
   */
  export type GroceryCategory$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryCategory
     */
    select?: GroceryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryCategory
     */
    omit?: GroceryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryCategoryInclude<ExtArgs> | null
    where?: GroceryCategoryWhereInput
  }

  /**
   * GroceryCategory.children
   */
  export type GroceryCategory$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryCategory
     */
    select?: GroceryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryCategory
     */
    omit?: GroceryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryCategoryInclude<ExtArgs> | null
    where?: GroceryCategoryWhereInput
    orderBy?: GroceryCategoryOrderByWithRelationInput | GroceryCategoryOrderByWithRelationInput[]
    cursor?: GroceryCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroceryCategoryScalarFieldEnum | GroceryCategoryScalarFieldEnum[]
  }

  /**
   * GroceryCategory.items
   */
  export type GroceryCategory$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryItem
     */
    select?: GroceryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryItem
     */
    omit?: GroceryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null
    where?: GroceryItemWhereInput
    orderBy?: GroceryItemOrderByWithRelationInput | GroceryItemOrderByWithRelationInput[]
    cursor?: GroceryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroceryItemScalarFieldEnum | GroceryItemScalarFieldEnum[]
  }

  /**
   * GroceryCategory without action
   */
  export type GroceryCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroceryCategory
     */
    select?: GroceryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroceryCategory
     */
    omit?: GroceryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryCategoryInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    auth0Id: 'auth0Id',
    email: 'email',
    name: 'name',
    picture: 'picture',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GroceryItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    quantity: 'quantity',
    checked: 'checked',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    categoryId: 'categoryId'
  };

  export type GroceryItemScalarFieldEnum = (typeof GroceryItemScalarFieldEnum)[keyof typeof GroceryItemScalarFieldEnum]


  export const GroceryCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    icon: 'icon',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type GroceryCategoryScalarFieldEnum = (typeof GroceryCategoryScalarFieldEnum)[keyof typeof GroceryCategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    auth0Id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    groceryItems?: GroceryItemListRelationFilter
    groceryCategories?: GroceryCategoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    auth0Id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groceryItems?: GroceryItemOrderByRelationAggregateInput
    groceryCategories?: GroceryCategoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    auth0Id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    groceryItems?: GroceryItemListRelationFilter
    groceryCategories?: GroceryCategoryListRelationFilter
  }, "id" | "auth0Id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    auth0Id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    auth0Id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GroceryItemWhereInput = {
    AND?: GroceryItemWhereInput | GroceryItemWhereInput[]
    OR?: GroceryItemWhereInput[]
    NOT?: GroceryItemWhereInput | GroceryItemWhereInput[]
    id?: IntFilter<"GroceryItem"> | number
    name?: StringFilter<"GroceryItem"> | string
    quantity?: IntFilter<"GroceryItem"> | number
    checked?: BoolFilter<"GroceryItem"> | boolean
    notes?: StringNullableFilter<"GroceryItem"> | string | null
    createdAt?: DateTimeFilter<"GroceryItem"> | Date | string
    updatedAt?: DateTimeFilter<"GroceryItem"> | Date | string
    userId?: StringFilter<"GroceryItem"> | string
    categoryId?: StringNullableFilter<"GroceryItem"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<GroceryCategoryNullableScalarRelationFilter, GroceryCategoryWhereInput> | null
  }

  export type GroceryItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    checked?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    category?: GroceryCategoryOrderByWithRelationInput
  }

  export type GroceryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GroceryItemWhereInput | GroceryItemWhereInput[]
    OR?: GroceryItemWhereInput[]
    NOT?: GroceryItemWhereInput | GroceryItemWhereInput[]
    name?: StringFilter<"GroceryItem"> | string
    quantity?: IntFilter<"GroceryItem"> | number
    checked?: BoolFilter<"GroceryItem"> | boolean
    notes?: StringNullableFilter<"GroceryItem"> | string | null
    createdAt?: DateTimeFilter<"GroceryItem"> | Date | string
    updatedAt?: DateTimeFilter<"GroceryItem"> | Date | string
    userId?: StringFilter<"GroceryItem"> | string
    categoryId?: StringNullableFilter<"GroceryItem"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<GroceryCategoryNullableScalarRelationFilter, GroceryCategoryWhereInput> | null
  }, "id">

  export type GroceryItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    checked?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    _count?: GroceryItemCountOrderByAggregateInput
    _avg?: GroceryItemAvgOrderByAggregateInput
    _max?: GroceryItemMaxOrderByAggregateInput
    _min?: GroceryItemMinOrderByAggregateInput
    _sum?: GroceryItemSumOrderByAggregateInput
  }

  export type GroceryItemScalarWhereWithAggregatesInput = {
    AND?: GroceryItemScalarWhereWithAggregatesInput | GroceryItemScalarWhereWithAggregatesInput[]
    OR?: GroceryItemScalarWhereWithAggregatesInput[]
    NOT?: GroceryItemScalarWhereWithAggregatesInput | GroceryItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GroceryItem"> | number
    name?: StringWithAggregatesFilter<"GroceryItem"> | string
    quantity?: IntWithAggregatesFilter<"GroceryItem"> | number
    checked?: BoolWithAggregatesFilter<"GroceryItem"> | boolean
    notes?: StringNullableWithAggregatesFilter<"GroceryItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GroceryItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GroceryItem"> | Date | string
    userId?: StringWithAggregatesFilter<"GroceryItem"> | string
    categoryId?: StringNullableWithAggregatesFilter<"GroceryItem"> | string | null
  }

  export type GroceryCategoryWhereInput = {
    AND?: GroceryCategoryWhereInput | GroceryCategoryWhereInput[]
    OR?: GroceryCategoryWhereInput[]
    NOT?: GroceryCategoryWhereInput | GroceryCategoryWhereInput[]
    id?: StringFilter<"GroceryCategory"> | string
    name?: StringFilter<"GroceryCategory"> | string
    color?: StringNullableFilter<"GroceryCategory"> | string | null
    icon?: StringNullableFilter<"GroceryCategory"> | string | null
    parentId?: StringNullableFilter<"GroceryCategory"> | string | null
    createdAt?: DateTimeFilter<"GroceryCategory"> | Date | string
    updatedAt?: DateTimeFilter<"GroceryCategory"> | Date | string
    userId?: StringFilter<"GroceryCategory"> | string
    parent?: XOR<GroceryCategoryNullableScalarRelationFilter, GroceryCategoryWhereInput> | null
    children?: GroceryCategoryListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: GroceryItemListRelationFilter
  }

  export type GroceryCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    parent?: GroceryCategoryOrderByWithRelationInput
    children?: GroceryCategoryOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    items?: GroceryItemOrderByRelationAggregateInput
  }

  export type GroceryCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroceryCategoryWhereInput | GroceryCategoryWhereInput[]
    OR?: GroceryCategoryWhereInput[]
    NOT?: GroceryCategoryWhereInput | GroceryCategoryWhereInput[]
    name?: StringFilter<"GroceryCategory"> | string
    color?: StringNullableFilter<"GroceryCategory"> | string | null
    icon?: StringNullableFilter<"GroceryCategory"> | string | null
    parentId?: StringNullableFilter<"GroceryCategory"> | string | null
    createdAt?: DateTimeFilter<"GroceryCategory"> | Date | string
    updatedAt?: DateTimeFilter<"GroceryCategory"> | Date | string
    userId?: StringFilter<"GroceryCategory"> | string
    parent?: XOR<GroceryCategoryNullableScalarRelationFilter, GroceryCategoryWhereInput> | null
    children?: GroceryCategoryListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: GroceryItemListRelationFilter
  }, "id">

  export type GroceryCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: GroceryCategoryCountOrderByAggregateInput
    _max?: GroceryCategoryMaxOrderByAggregateInput
    _min?: GroceryCategoryMinOrderByAggregateInput
  }

  export type GroceryCategoryScalarWhereWithAggregatesInput = {
    AND?: GroceryCategoryScalarWhereWithAggregatesInput | GroceryCategoryScalarWhereWithAggregatesInput[]
    OR?: GroceryCategoryScalarWhereWithAggregatesInput[]
    NOT?: GroceryCategoryScalarWhereWithAggregatesInput | GroceryCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroceryCategory"> | string
    name?: StringWithAggregatesFilter<"GroceryCategory"> | string
    color?: StringNullableWithAggregatesFilter<"GroceryCategory"> | string | null
    icon?: StringNullableWithAggregatesFilter<"GroceryCategory"> | string | null
    parentId?: StringNullableWithAggregatesFilter<"GroceryCategory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GroceryCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GroceryCategory"> | Date | string
    userId?: StringWithAggregatesFilter<"GroceryCategory"> | string
  }

  export type UserCreateInput = {
    id?: string
    auth0Id: string
    email: string
    name?: string | null
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groceryItems?: GroceryItemCreateNestedManyWithoutUserInput
    groceryCategories?: GroceryCategoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    auth0Id: string
    email: string
    name?: string | null
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groceryItems?: GroceryItemUncheckedCreateNestedManyWithoutUserInput
    groceryCategories?: GroceryCategoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groceryItems?: GroceryItemUpdateManyWithoutUserNestedInput
    groceryCategories?: GroceryCategoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groceryItems?: GroceryItemUncheckedUpdateManyWithoutUserNestedInput
    groceryCategories?: GroceryCategoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    auth0Id: string
    email: string
    name?: string | null
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroceryItemCreateInput = {
    name: string
    quantity?: number
    checked?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGroceryItemsInput
    category?: GroceryCategoryCreateNestedOneWithoutItemsInput
  }

  export type GroceryItemUncheckedCreateInput = {
    id?: number
    name: string
    quantity?: number
    checked?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId?: string | null
  }

  export type GroceryItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    checked?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGroceryItemsNestedInput
    category?: GroceryCategoryUpdateOneWithoutItemsNestedInput
  }

  export type GroceryItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    checked?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroceryItemCreateManyInput = {
    id?: number
    name: string
    quantity?: number
    checked?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId?: string | null
  }

  export type GroceryItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    checked?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroceryItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    checked?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroceryCategoryCreateInput = {
    id?: string
    name: string
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: GroceryCategoryCreateNestedOneWithoutChildrenInput
    children?: GroceryCategoryCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutGroceryCategoriesInput
    items?: GroceryItemCreateNestedManyWithoutCategoryInput
  }

  export type GroceryCategoryUncheckedCreateInput = {
    id?: string
    name: string
    color?: string | null
    icon?: string | null
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    children?: GroceryCategoryUncheckedCreateNestedManyWithoutParentInput
    items?: GroceryItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type GroceryCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: GroceryCategoryUpdateOneWithoutChildrenNestedInput
    children?: GroceryCategoryUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutGroceryCategoriesNestedInput
    items?: GroceryItemUpdateManyWithoutCategoryNestedInput
  }

  export type GroceryCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    children?: GroceryCategoryUncheckedUpdateManyWithoutParentNestedInput
    items?: GroceryItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type GroceryCategoryCreateManyInput = {
    id?: string
    name: string
    color?: string | null
    icon?: string | null
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type GroceryCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroceryCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GroceryItemListRelationFilter = {
    every?: GroceryItemWhereInput
    some?: GroceryItemWhereInput
    none?: GroceryItemWhereInput
  }

  export type GroceryCategoryListRelationFilter = {
    every?: GroceryCategoryWhereInput
    some?: GroceryCategoryWhereInput
    none?: GroceryCategoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GroceryItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroceryCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    auth0Id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    auth0Id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    auth0Id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GroceryCategoryNullableScalarRelationFilter = {
    is?: GroceryCategoryWhereInput | null
    isNot?: GroceryCategoryWhereInput | null
  }

  export type GroceryItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    checked?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type GroceryItemAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type GroceryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    checked?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type GroceryItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    checked?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type GroceryItemSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GroceryCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type GroceryCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type GroceryCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type GroceryItemCreateNestedManyWithoutUserInput = {
    create?: XOR<GroceryItemCreateWithoutUserInput, GroceryItemUncheckedCreateWithoutUserInput> | GroceryItemCreateWithoutUserInput[] | GroceryItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroceryItemCreateOrConnectWithoutUserInput | GroceryItemCreateOrConnectWithoutUserInput[]
    createMany?: GroceryItemCreateManyUserInputEnvelope
    connect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
  }

  export type GroceryCategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<GroceryCategoryCreateWithoutUserInput, GroceryCategoryUncheckedCreateWithoutUserInput> | GroceryCategoryCreateWithoutUserInput[] | GroceryCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroceryCategoryCreateOrConnectWithoutUserInput | GroceryCategoryCreateOrConnectWithoutUserInput[]
    createMany?: GroceryCategoryCreateManyUserInputEnvelope
    connect?: GroceryCategoryWhereUniqueInput | GroceryCategoryWhereUniqueInput[]
  }

  export type GroceryItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroceryItemCreateWithoutUserInput, GroceryItemUncheckedCreateWithoutUserInput> | GroceryItemCreateWithoutUserInput[] | GroceryItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroceryItemCreateOrConnectWithoutUserInput | GroceryItemCreateOrConnectWithoutUserInput[]
    createMany?: GroceryItemCreateManyUserInputEnvelope
    connect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
  }

  export type GroceryCategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroceryCategoryCreateWithoutUserInput, GroceryCategoryUncheckedCreateWithoutUserInput> | GroceryCategoryCreateWithoutUserInput[] | GroceryCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroceryCategoryCreateOrConnectWithoutUserInput | GroceryCategoryCreateOrConnectWithoutUserInput[]
    createMany?: GroceryCategoryCreateManyUserInputEnvelope
    connect?: GroceryCategoryWhereUniqueInput | GroceryCategoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroceryItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroceryItemCreateWithoutUserInput, GroceryItemUncheckedCreateWithoutUserInput> | GroceryItemCreateWithoutUserInput[] | GroceryItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroceryItemCreateOrConnectWithoutUserInput | GroceryItemCreateOrConnectWithoutUserInput[]
    upsert?: GroceryItemUpsertWithWhereUniqueWithoutUserInput | GroceryItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroceryItemCreateManyUserInputEnvelope
    set?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    disconnect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    delete?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    connect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    update?: GroceryItemUpdateWithWhereUniqueWithoutUserInput | GroceryItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroceryItemUpdateManyWithWhereWithoutUserInput | GroceryItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroceryItemScalarWhereInput | GroceryItemScalarWhereInput[]
  }

  export type GroceryCategoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroceryCategoryCreateWithoutUserInput, GroceryCategoryUncheckedCreateWithoutUserInput> | GroceryCategoryCreateWithoutUserInput[] | GroceryCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroceryCategoryCreateOrConnectWithoutUserInput | GroceryCategoryCreateOrConnectWithoutUserInput[]
    upsert?: GroceryCategoryUpsertWithWhereUniqueWithoutUserInput | GroceryCategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroceryCategoryCreateManyUserInputEnvelope
    set?: GroceryCategoryWhereUniqueInput | GroceryCategoryWhereUniqueInput[]
    disconnect?: GroceryCategoryWhereUniqueInput | GroceryCategoryWhereUniqueInput[]
    delete?: GroceryCategoryWhereUniqueInput | GroceryCategoryWhereUniqueInput[]
    connect?: GroceryCategoryWhereUniqueInput | GroceryCategoryWhereUniqueInput[]
    update?: GroceryCategoryUpdateWithWhereUniqueWithoutUserInput | GroceryCategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroceryCategoryUpdateManyWithWhereWithoutUserInput | GroceryCategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroceryCategoryScalarWhereInput | GroceryCategoryScalarWhereInput[]
  }

  export type GroceryItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroceryItemCreateWithoutUserInput, GroceryItemUncheckedCreateWithoutUserInput> | GroceryItemCreateWithoutUserInput[] | GroceryItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroceryItemCreateOrConnectWithoutUserInput | GroceryItemCreateOrConnectWithoutUserInput[]
    upsert?: GroceryItemUpsertWithWhereUniqueWithoutUserInput | GroceryItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroceryItemCreateManyUserInputEnvelope
    set?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    disconnect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    delete?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    connect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    update?: GroceryItemUpdateWithWhereUniqueWithoutUserInput | GroceryItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroceryItemUpdateManyWithWhereWithoutUserInput | GroceryItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroceryItemScalarWhereInput | GroceryItemScalarWhereInput[]
  }

  export type GroceryCategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroceryCategoryCreateWithoutUserInput, GroceryCategoryUncheckedCreateWithoutUserInput> | GroceryCategoryCreateWithoutUserInput[] | GroceryCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroceryCategoryCreateOrConnectWithoutUserInput | GroceryCategoryCreateOrConnectWithoutUserInput[]
    upsert?: GroceryCategoryUpsertWithWhereUniqueWithoutUserInput | GroceryCategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroceryCategoryCreateManyUserInputEnvelope
    set?: GroceryCategoryWhereUniqueInput | GroceryCategoryWhereUniqueInput[]
    disconnect?: GroceryCategoryWhereUniqueInput | GroceryCategoryWhereUniqueInput[]
    delete?: GroceryCategoryWhereUniqueInput | GroceryCategoryWhereUniqueInput[]
    connect?: GroceryCategoryWhereUniqueInput | GroceryCategoryWhereUniqueInput[]
    update?: GroceryCategoryUpdateWithWhereUniqueWithoutUserInput | GroceryCategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroceryCategoryUpdateManyWithWhereWithoutUserInput | GroceryCategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroceryCategoryScalarWhereInput | GroceryCategoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGroceryItemsInput = {
    create?: XOR<UserCreateWithoutGroceryItemsInput, UserUncheckedCreateWithoutGroceryItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroceryItemsInput
    connect?: UserWhereUniqueInput
  }

  export type GroceryCategoryCreateNestedOneWithoutItemsInput = {
    create?: XOR<GroceryCategoryCreateWithoutItemsInput, GroceryCategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: GroceryCategoryCreateOrConnectWithoutItemsInput
    connect?: GroceryCategoryWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutGroceryItemsNestedInput = {
    create?: XOR<UserCreateWithoutGroceryItemsInput, UserUncheckedCreateWithoutGroceryItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroceryItemsInput
    upsert?: UserUpsertWithoutGroceryItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroceryItemsInput, UserUpdateWithoutGroceryItemsInput>, UserUncheckedUpdateWithoutGroceryItemsInput>
  }

  export type GroceryCategoryUpdateOneWithoutItemsNestedInput = {
    create?: XOR<GroceryCategoryCreateWithoutItemsInput, GroceryCategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: GroceryCategoryCreateOrConnectWithoutItemsInput
    upsert?: GroceryCategoryUpsertWithoutItemsInput
    disconnect?: GroceryCategoryWhereInput | boolean
    delete?: GroceryCategoryWhereInput | boolean
    connect?: GroceryCategoryWhereUniqueInput
    update?: XOR<XOR<GroceryCategoryUpdateToOneWithWhereWithoutItemsInput, GroceryCategoryUpdateWithoutItemsInput>, GroceryCategoryUncheckedUpdateWithoutItemsInput>
  }

  export type GroceryCategoryCreateNestedOneWithoutChildrenInput = {
    create?: XOR<GroceryCategoryCreateWithoutChildrenInput, GroceryCategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: GroceryCategoryCreateOrConnectWithoutChildrenInput
    connect?: GroceryCategoryWhereUniqueInput
  }

  export type GroceryCategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<GroceryCategoryCreateWithoutParentInput, GroceryCategoryUncheckedCreateWithoutParentInput> | GroceryCategoryCreateWithoutParentInput[] | GroceryCategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: GroceryCategoryCreateOrConnectWithoutParentInput | GroceryCategoryCreateOrConnectWithoutParentInput[]
    createMany?: GroceryCategoryCreateManyParentInputEnvelope
    connect?: GroceryCategoryWhereUniqueInput | GroceryCategoryWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutGroceryCategoriesInput = {
    create?: XOR<UserCreateWithoutGroceryCategoriesInput, UserUncheckedCreateWithoutGroceryCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroceryCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type GroceryItemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<GroceryItemCreateWithoutCategoryInput, GroceryItemUncheckedCreateWithoutCategoryInput> | GroceryItemCreateWithoutCategoryInput[] | GroceryItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: GroceryItemCreateOrConnectWithoutCategoryInput | GroceryItemCreateOrConnectWithoutCategoryInput[]
    createMany?: GroceryItemCreateManyCategoryInputEnvelope
    connect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
  }

  export type GroceryCategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<GroceryCategoryCreateWithoutParentInput, GroceryCategoryUncheckedCreateWithoutParentInput> | GroceryCategoryCreateWithoutParentInput[] | GroceryCategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: GroceryCategoryCreateOrConnectWithoutParentInput | GroceryCategoryCreateOrConnectWithoutParentInput[]
    createMany?: GroceryCategoryCreateManyParentInputEnvelope
    connect?: GroceryCategoryWhereUniqueInput | GroceryCategoryWhereUniqueInput[]
  }

  export type GroceryItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<GroceryItemCreateWithoutCategoryInput, GroceryItemUncheckedCreateWithoutCategoryInput> | GroceryItemCreateWithoutCategoryInput[] | GroceryItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: GroceryItemCreateOrConnectWithoutCategoryInput | GroceryItemCreateOrConnectWithoutCategoryInput[]
    createMany?: GroceryItemCreateManyCategoryInputEnvelope
    connect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
  }

  export type GroceryCategoryUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<GroceryCategoryCreateWithoutChildrenInput, GroceryCategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: GroceryCategoryCreateOrConnectWithoutChildrenInput
    upsert?: GroceryCategoryUpsertWithoutChildrenInput
    disconnect?: GroceryCategoryWhereInput | boolean
    delete?: GroceryCategoryWhereInput | boolean
    connect?: GroceryCategoryWhereUniqueInput
    update?: XOR<XOR<GroceryCategoryUpdateToOneWithWhereWithoutChildrenInput, GroceryCategoryUpdateWithoutChildrenInput>, GroceryCategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type GroceryCategoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<GroceryCategoryCreateWithoutParentInput, GroceryCategoryUncheckedCreateWithoutParentInput> | GroceryCategoryCreateWithoutParentInput[] | GroceryCategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: GroceryCategoryCreateOrConnectWithoutParentInput | GroceryCategoryCreateOrConnectWithoutParentInput[]
    upsert?: GroceryCategoryUpsertWithWhereUniqueWithoutParentInput | GroceryCategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: GroceryCategoryCreateManyParentInputEnvelope
    set?: GroceryCategoryWhereUniqueInput | GroceryCategoryWhereUniqueInput[]
    disconnect?: GroceryCategoryWhereUniqueInput | GroceryCategoryWhereUniqueInput[]
    delete?: GroceryCategoryWhereUniqueInput | GroceryCategoryWhereUniqueInput[]
    connect?: GroceryCategoryWhereUniqueInput | GroceryCategoryWhereUniqueInput[]
    update?: GroceryCategoryUpdateWithWhereUniqueWithoutParentInput | GroceryCategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: GroceryCategoryUpdateManyWithWhereWithoutParentInput | GroceryCategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: GroceryCategoryScalarWhereInput | GroceryCategoryScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutGroceryCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutGroceryCategoriesInput, UserUncheckedCreateWithoutGroceryCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroceryCategoriesInput
    upsert?: UserUpsertWithoutGroceryCategoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroceryCategoriesInput, UserUpdateWithoutGroceryCategoriesInput>, UserUncheckedUpdateWithoutGroceryCategoriesInput>
  }

  export type GroceryItemUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<GroceryItemCreateWithoutCategoryInput, GroceryItemUncheckedCreateWithoutCategoryInput> | GroceryItemCreateWithoutCategoryInput[] | GroceryItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: GroceryItemCreateOrConnectWithoutCategoryInput | GroceryItemCreateOrConnectWithoutCategoryInput[]
    upsert?: GroceryItemUpsertWithWhereUniqueWithoutCategoryInput | GroceryItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: GroceryItemCreateManyCategoryInputEnvelope
    set?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    disconnect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    delete?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    connect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    update?: GroceryItemUpdateWithWhereUniqueWithoutCategoryInput | GroceryItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: GroceryItemUpdateManyWithWhereWithoutCategoryInput | GroceryItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: GroceryItemScalarWhereInput | GroceryItemScalarWhereInput[]
  }

  export type GroceryCategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<GroceryCategoryCreateWithoutParentInput, GroceryCategoryUncheckedCreateWithoutParentInput> | GroceryCategoryCreateWithoutParentInput[] | GroceryCategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: GroceryCategoryCreateOrConnectWithoutParentInput | GroceryCategoryCreateOrConnectWithoutParentInput[]
    upsert?: GroceryCategoryUpsertWithWhereUniqueWithoutParentInput | GroceryCategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: GroceryCategoryCreateManyParentInputEnvelope
    set?: GroceryCategoryWhereUniqueInput | GroceryCategoryWhereUniqueInput[]
    disconnect?: GroceryCategoryWhereUniqueInput | GroceryCategoryWhereUniqueInput[]
    delete?: GroceryCategoryWhereUniqueInput | GroceryCategoryWhereUniqueInput[]
    connect?: GroceryCategoryWhereUniqueInput | GroceryCategoryWhereUniqueInput[]
    update?: GroceryCategoryUpdateWithWhereUniqueWithoutParentInput | GroceryCategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: GroceryCategoryUpdateManyWithWhereWithoutParentInput | GroceryCategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: GroceryCategoryScalarWhereInput | GroceryCategoryScalarWhereInput[]
  }

  export type GroceryItemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<GroceryItemCreateWithoutCategoryInput, GroceryItemUncheckedCreateWithoutCategoryInput> | GroceryItemCreateWithoutCategoryInput[] | GroceryItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: GroceryItemCreateOrConnectWithoutCategoryInput | GroceryItemCreateOrConnectWithoutCategoryInput[]
    upsert?: GroceryItemUpsertWithWhereUniqueWithoutCategoryInput | GroceryItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: GroceryItemCreateManyCategoryInputEnvelope
    set?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    disconnect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    delete?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    connect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[]
    update?: GroceryItemUpdateWithWhereUniqueWithoutCategoryInput | GroceryItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: GroceryItemUpdateManyWithWhereWithoutCategoryInput | GroceryItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: GroceryItemScalarWhereInput | GroceryItemScalarWhereInput[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GroceryItemCreateWithoutUserInput = {
    name: string
    quantity?: number
    checked?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: GroceryCategoryCreateNestedOneWithoutItemsInput
  }

  export type GroceryItemUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    quantity?: number
    checked?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
  }

  export type GroceryItemCreateOrConnectWithoutUserInput = {
    where: GroceryItemWhereUniqueInput
    create: XOR<GroceryItemCreateWithoutUserInput, GroceryItemUncheckedCreateWithoutUserInput>
  }

  export type GroceryItemCreateManyUserInputEnvelope = {
    data: GroceryItemCreateManyUserInput | GroceryItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GroceryCategoryCreateWithoutUserInput = {
    id?: string
    name: string
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: GroceryCategoryCreateNestedOneWithoutChildrenInput
    children?: GroceryCategoryCreateNestedManyWithoutParentInput
    items?: GroceryItemCreateNestedManyWithoutCategoryInput
  }

  export type GroceryCategoryUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    color?: string | null
    icon?: string | null
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: GroceryCategoryUncheckedCreateNestedManyWithoutParentInput
    items?: GroceryItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type GroceryCategoryCreateOrConnectWithoutUserInput = {
    where: GroceryCategoryWhereUniqueInput
    create: XOR<GroceryCategoryCreateWithoutUserInput, GroceryCategoryUncheckedCreateWithoutUserInput>
  }

  export type GroceryCategoryCreateManyUserInputEnvelope = {
    data: GroceryCategoryCreateManyUserInput | GroceryCategoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GroceryItemUpsertWithWhereUniqueWithoutUserInput = {
    where: GroceryItemWhereUniqueInput
    update: XOR<GroceryItemUpdateWithoutUserInput, GroceryItemUncheckedUpdateWithoutUserInput>
    create: XOR<GroceryItemCreateWithoutUserInput, GroceryItemUncheckedCreateWithoutUserInput>
  }

  export type GroceryItemUpdateWithWhereUniqueWithoutUserInput = {
    where: GroceryItemWhereUniqueInput
    data: XOR<GroceryItemUpdateWithoutUserInput, GroceryItemUncheckedUpdateWithoutUserInput>
  }

  export type GroceryItemUpdateManyWithWhereWithoutUserInput = {
    where: GroceryItemScalarWhereInput
    data: XOR<GroceryItemUpdateManyMutationInput, GroceryItemUncheckedUpdateManyWithoutUserInput>
  }

  export type GroceryItemScalarWhereInput = {
    AND?: GroceryItemScalarWhereInput | GroceryItemScalarWhereInput[]
    OR?: GroceryItemScalarWhereInput[]
    NOT?: GroceryItemScalarWhereInput | GroceryItemScalarWhereInput[]
    id?: IntFilter<"GroceryItem"> | number
    name?: StringFilter<"GroceryItem"> | string
    quantity?: IntFilter<"GroceryItem"> | number
    checked?: BoolFilter<"GroceryItem"> | boolean
    notes?: StringNullableFilter<"GroceryItem"> | string | null
    createdAt?: DateTimeFilter<"GroceryItem"> | Date | string
    updatedAt?: DateTimeFilter<"GroceryItem"> | Date | string
    userId?: StringFilter<"GroceryItem"> | string
    categoryId?: StringNullableFilter<"GroceryItem"> | string | null
  }

  export type GroceryCategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: GroceryCategoryWhereUniqueInput
    update: XOR<GroceryCategoryUpdateWithoutUserInput, GroceryCategoryUncheckedUpdateWithoutUserInput>
    create: XOR<GroceryCategoryCreateWithoutUserInput, GroceryCategoryUncheckedCreateWithoutUserInput>
  }

  export type GroceryCategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: GroceryCategoryWhereUniqueInput
    data: XOR<GroceryCategoryUpdateWithoutUserInput, GroceryCategoryUncheckedUpdateWithoutUserInput>
  }

  export type GroceryCategoryUpdateManyWithWhereWithoutUserInput = {
    where: GroceryCategoryScalarWhereInput
    data: XOR<GroceryCategoryUpdateManyMutationInput, GroceryCategoryUncheckedUpdateManyWithoutUserInput>
  }

  export type GroceryCategoryScalarWhereInput = {
    AND?: GroceryCategoryScalarWhereInput | GroceryCategoryScalarWhereInput[]
    OR?: GroceryCategoryScalarWhereInput[]
    NOT?: GroceryCategoryScalarWhereInput | GroceryCategoryScalarWhereInput[]
    id?: StringFilter<"GroceryCategory"> | string
    name?: StringFilter<"GroceryCategory"> | string
    color?: StringNullableFilter<"GroceryCategory"> | string | null
    icon?: StringNullableFilter<"GroceryCategory"> | string | null
    parentId?: StringNullableFilter<"GroceryCategory"> | string | null
    createdAt?: DateTimeFilter<"GroceryCategory"> | Date | string
    updatedAt?: DateTimeFilter<"GroceryCategory"> | Date | string
    userId?: StringFilter<"GroceryCategory"> | string
  }

  export type UserCreateWithoutGroceryItemsInput = {
    id?: string
    auth0Id: string
    email: string
    name?: string | null
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groceryCategories?: GroceryCategoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGroceryItemsInput = {
    id?: string
    auth0Id: string
    email: string
    name?: string | null
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groceryCategories?: GroceryCategoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGroceryItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroceryItemsInput, UserUncheckedCreateWithoutGroceryItemsInput>
  }

  export type GroceryCategoryCreateWithoutItemsInput = {
    id?: string
    name: string
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: GroceryCategoryCreateNestedOneWithoutChildrenInput
    children?: GroceryCategoryCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutGroceryCategoriesInput
  }

  export type GroceryCategoryUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    color?: string | null
    icon?: string | null
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    children?: GroceryCategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type GroceryCategoryCreateOrConnectWithoutItemsInput = {
    where: GroceryCategoryWhereUniqueInput
    create: XOR<GroceryCategoryCreateWithoutItemsInput, GroceryCategoryUncheckedCreateWithoutItemsInput>
  }

  export type UserUpsertWithoutGroceryItemsInput = {
    update: XOR<UserUpdateWithoutGroceryItemsInput, UserUncheckedUpdateWithoutGroceryItemsInput>
    create: XOR<UserCreateWithoutGroceryItemsInput, UserUncheckedCreateWithoutGroceryItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroceryItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroceryItemsInput, UserUncheckedUpdateWithoutGroceryItemsInput>
  }

  export type UserUpdateWithoutGroceryItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groceryCategories?: GroceryCategoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroceryItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groceryCategories?: GroceryCategoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroceryCategoryUpsertWithoutItemsInput = {
    update: XOR<GroceryCategoryUpdateWithoutItemsInput, GroceryCategoryUncheckedUpdateWithoutItemsInput>
    create: XOR<GroceryCategoryCreateWithoutItemsInput, GroceryCategoryUncheckedCreateWithoutItemsInput>
    where?: GroceryCategoryWhereInput
  }

  export type GroceryCategoryUpdateToOneWithWhereWithoutItemsInput = {
    where?: GroceryCategoryWhereInput
    data: XOR<GroceryCategoryUpdateWithoutItemsInput, GroceryCategoryUncheckedUpdateWithoutItemsInput>
  }

  export type GroceryCategoryUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: GroceryCategoryUpdateOneWithoutChildrenNestedInput
    children?: GroceryCategoryUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutGroceryCategoriesNestedInput
  }

  export type GroceryCategoryUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    children?: GroceryCategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type GroceryCategoryCreateWithoutChildrenInput = {
    id?: string
    name: string
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: GroceryCategoryCreateNestedOneWithoutChildrenInput
    user: UserCreateNestedOneWithoutGroceryCategoriesInput
    items?: GroceryItemCreateNestedManyWithoutCategoryInput
  }

  export type GroceryCategoryUncheckedCreateWithoutChildrenInput = {
    id?: string
    name: string
    color?: string | null
    icon?: string | null
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    items?: GroceryItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type GroceryCategoryCreateOrConnectWithoutChildrenInput = {
    where: GroceryCategoryWhereUniqueInput
    create: XOR<GroceryCategoryCreateWithoutChildrenInput, GroceryCategoryUncheckedCreateWithoutChildrenInput>
  }

  export type GroceryCategoryCreateWithoutParentInput = {
    id?: string
    name: string
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: GroceryCategoryCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutGroceryCategoriesInput
    items?: GroceryItemCreateNestedManyWithoutCategoryInput
  }

  export type GroceryCategoryUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    children?: GroceryCategoryUncheckedCreateNestedManyWithoutParentInput
    items?: GroceryItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type GroceryCategoryCreateOrConnectWithoutParentInput = {
    where: GroceryCategoryWhereUniqueInput
    create: XOR<GroceryCategoryCreateWithoutParentInput, GroceryCategoryUncheckedCreateWithoutParentInput>
  }

  export type GroceryCategoryCreateManyParentInputEnvelope = {
    data: GroceryCategoryCreateManyParentInput | GroceryCategoryCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutGroceryCategoriesInput = {
    id?: string
    auth0Id: string
    email: string
    name?: string | null
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groceryItems?: GroceryItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGroceryCategoriesInput = {
    id?: string
    auth0Id: string
    email: string
    name?: string | null
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groceryItems?: GroceryItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGroceryCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroceryCategoriesInput, UserUncheckedCreateWithoutGroceryCategoriesInput>
  }

  export type GroceryItemCreateWithoutCategoryInput = {
    name: string
    quantity?: number
    checked?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGroceryItemsInput
  }

  export type GroceryItemUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    quantity?: number
    checked?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type GroceryItemCreateOrConnectWithoutCategoryInput = {
    where: GroceryItemWhereUniqueInput
    create: XOR<GroceryItemCreateWithoutCategoryInput, GroceryItemUncheckedCreateWithoutCategoryInput>
  }

  export type GroceryItemCreateManyCategoryInputEnvelope = {
    data: GroceryItemCreateManyCategoryInput | GroceryItemCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type GroceryCategoryUpsertWithoutChildrenInput = {
    update: XOR<GroceryCategoryUpdateWithoutChildrenInput, GroceryCategoryUncheckedUpdateWithoutChildrenInput>
    create: XOR<GroceryCategoryCreateWithoutChildrenInput, GroceryCategoryUncheckedCreateWithoutChildrenInput>
    where?: GroceryCategoryWhereInput
  }

  export type GroceryCategoryUpdateToOneWithWhereWithoutChildrenInput = {
    where?: GroceryCategoryWhereInput
    data: XOR<GroceryCategoryUpdateWithoutChildrenInput, GroceryCategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type GroceryCategoryUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: GroceryCategoryUpdateOneWithoutChildrenNestedInput
    user?: UserUpdateOneRequiredWithoutGroceryCategoriesNestedInput
    items?: GroceryItemUpdateManyWithoutCategoryNestedInput
  }

  export type GroceryCategoryUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    items?: GroceryItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type GroceryCategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: GroceryCategoryWhereUniqueInput
    update: XOR<GroceryCategoryUpdateWithoutParentInput, GroceryCategoryUncheckedUpdateWithoutParentInput>
    create: XOR<GroceryCategoryCreateWithoutParentInput, GroceryCategoryUncheckedCreateWithoutParentInput>
  }

  export type GroceryCategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: GroceryCategoryWhereUniqueInput
    data: XOR<GroceryCategoryUpdateWithoutParentInput, GroceryCategoryUncheckedUpdateWithoutParentInput>
  }

  export type GroceryCategoryUpdateManyWithWhereWithoutParentInput = {
    where: GroceryCategoryScalarWhereInput
    data: XOR<GroceryCategoryUpdateManyMutationInput, GroceryCategoryUncheckedUpdateManyWithoutParentInput>
  }

  export type UserUpsertWithoutGroceryCategoriesInput = {
    update: XOR<UserUpdateWithoutGroceryCategoriesInput, UserUncheckedUpdateWithoutGroceryCategoriesInput>
    create: XOR<UserCreateWithoutGroceryCategoriesInput, UserUncheckedCreateWithoutGroceryCategoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroceryCategoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroceryCategoriesInput, UserUncheckedUpdateWithoutGroceryCategoriesInput>
  }

  export type UserUpdateWithoutGroceryCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groceryItems?: GroceryItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroceryCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groceryItems?: GroceryItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroceryItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: GroceryItemWhereUniqueInput
    update: XOR<GroceryItemUpdateWithoutCategoryInput, GroceryItemUncheckedUpdateWithoutCategoryInput>
    create: XOR<GroceryItemCreateWithoutCategoryInput, GroceryItemUncheckedCreateWithoutCategoryInput>
  }

  export type GroceryItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: GroceryItemWhereUniqueInput
    data: XOR<GroceryItemUpdateWithoutCategoryInput, GroceryItemUncheckedUpdateWithoutCategoryInput>
  }

  export type GroceryItemUpdateManyWithWhereWithoutCategoryInput = {
    where: GroceryItemScalarWhereInput
    data: XOR<GroceryItemUpdateManyMutationInput, GroceryItemUncheckedUpdateManyWithoutCategoryInput>
  }

  export type GroceryItemCreateManyUserInput = {
    id?: number
    name: string
    quantity?: number
    checked?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
  }

  export type GroceryCategoryCreateManyUserInput = {
    id?: string
    name: string
    color?: string | null
    icon?: string | null
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroceryItemUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    checked?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: GroceryCategoryUpdateOneWithoutItemsNestedInput
  }

  export type GroceryItemUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    checked?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroceryItemUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    checked?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroceryCategoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: GroceryCategoryUpdateOneWithoutChildrenNestedInput
    children?: GroceryCategoryUpdateManyWithoutParentNestedInput
    items?: GroceryItemUpdateManyWithoutCategoryNestedInput
  }

  export type GroceryCategoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: GroceryCategoryUncheckedUpdateManyWithoutParentNestedInput
    items?: GroceryItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type GroceryCategoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroceryCategoryCreateManyParentInput = {
    id?: string
    name: string
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type GroceryItemCreateManyCategoryInput = {
    id?: number
    name: string
    quantity?: number
    checked?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type GroceryCategoryUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: GroceryCategoryUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutGroceryCategoriesNestedInput
    items?: GroceryItemUpdateManyWithoutCategoryNestedInput
  }

  export type GroceryCategoryUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    children?: GroceryCategoryUncheckedUpdateManyWithoutParentNestedInput
    items?: GroceryItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type GroceryCategoryUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GroceryItemUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    checked?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGroceryItemsNestedInput
  }

  export type GroceryItemUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    checked?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GroceryItemUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    checked?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
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