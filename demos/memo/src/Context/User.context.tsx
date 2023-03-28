import { useState, createContext, PropsWithChildren, useEffect } from "react";

export type User = {
  id: number | null;
  firstName: string;
  lastName: string;
  age: number | null;
}

export type UserContext = {
  user: User;
  connect: () => void,
  disconnect: () => void,
}

const EMPTY_USER = {
  id: null,
  firstName: "",
  lastName: "",
  age: null,
}

export const UserContext = createContext<UserContext>({
  user: EMPTY_USER,
  connect: () => {},
  disconnect: () => {},
});

export default function UserProvider({ children }: PropsWithChildren<{}>) {
  const [userData, setUserData] = useState<User>(EMPTY_USER);

  useEffect(() => {
    const fetch = async () => {
      const data = await getNewUser();
      setUserData(data);
    }

    if (!userData) {
      fetch().catch();
    }

  }, [userData]);

  const disconnect = () => {
    setUserData(EMPTY_USER);
  }

  const connect = async () => {
    const data = await getNewUser();
    setUserData(data);
  }

  return (
    <UserContext.Provider value={{
      user: userData,
      connect,
      disconnect,
    }}>
      {children}
    </UserContext.Provider>
  )
}

function getNewUser() {
  const id = Math.floor(Math.random() * 10) + 1;
  return fetch(`https://dummyjson.com/users/${id}`)
    .then((res) => res.json())
    .then(res => ({
      id: res?.id ?? 0,
      firstName: res?.firstName ?? "",
      lastName: res?.lastName ?? "",
      age: res?.age ?? 0,
    }));
}
