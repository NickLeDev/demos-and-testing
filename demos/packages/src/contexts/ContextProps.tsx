import { createContext, PropsWithChildren, useContext } from "react";

type Props = {
  name?: string,
}

export const PropsContext = createContext<Props>({});

export default function PropsProvider({ children, name }: PropsWithChildren<Props>) {


  return <PropsContext.Provider
    value={{
      name: "HELLO"
    }}
  >
    {children}
  </PropsContext.Provider>
}