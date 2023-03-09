import React, { PropsWithChildren } from "react";

export interface ScreenReaderOnlyProps extends PropsWithChildren  {
  as?: React.ComponentType | string;
  id?: string;
  htmlFor?: string;
}