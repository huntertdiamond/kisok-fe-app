import { DefaultToken } from "./type.defaultToken";

type TokenWithBalance = DefaultToken & {
  userBalance: number;
};
export type { TokenWithBalance };
