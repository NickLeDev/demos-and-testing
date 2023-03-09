import { PropsWithChildren, ReactNode } from "react";

export interface IDeferProps extends PropsWithChildren{
  predicate: boolean,
  fallback: ReactNode,
  a11yText: string,
}