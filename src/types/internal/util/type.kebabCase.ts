type KebabCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? `-${Lowercase<T>}` : T}${KebabCase<U>}`
  : S;

type KebabCaseKeys<T> = {
  [K in keyof T as KebabCase<string & K>]: T[K];
};

export type { KebabCase, KebabCaseKeys };
