import { useState, createContext, PropsWithChildren, useEffect } from "react";

export type User = {
  id: number | null;
  firstName: string;
  lastName: string;
  age: number | null;
}

export type UserContext = {
  user: User;
}

const EMPTY_USER = {
  id: null,
  firstName: "",
  lastName: "",
  age: null,
}

export const UserContext = createContext<UserContext>({
  user: EMPTY_USER,
});

export default function UserProvider({ children }: PropsWithChildren<{}>) {
  const [userData, setUserData] = useState<User>(EMPTY_USER);

  useEffect(() => {
    const id = Math.floor(Math.random() * 10) + 1;
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then(res => setUserData({
        id: res?.id ?? 0,
        firstName: res?.firstName ?? "",
        lastName: res?.lastName ?? "",
        age: res?.age ?? 0,
      }));
  }, [])

  return (
    <UserContext.Provider value={{
      user: userData,
    }}>
      {children}
    </UserContext.Provider>
  )

}
