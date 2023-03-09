import { PropsWithChildren, ReactNode } from "react";

export interface IDeferProps extends PropsWithChildren{
  predicate: boolean,
  fallback: ReactNode,

  loadingText: {
    onLoad: string,
    onLoaded: string,
  }
}