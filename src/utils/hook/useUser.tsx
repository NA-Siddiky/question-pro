// src/utils/useUser.tsx
import React, { createContext, useCallback, useContext, useState } from "react";

interface IUser {
  name?: string;
  email?: string;
}

interface IUserContext extends IUser {
  setUser: (user: IUser) => void;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUserState] = useState<IUser>({});

  const setUser = useCallback((newUser: IUser) => {
    setUserState(newUser);
  }, []);

  return (
    <UserContext.Provider value={{ ...user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
