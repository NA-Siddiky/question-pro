// src/utils/useUser.tsx
import React, { Dispatch, createContext, useContext, useState } from "react";

interface User {
  name?: string;
  email?: string;
}

interface UserContext extends User {
  setUser: Dispatch<any>;
}

const UserContext = createContext<UserContext | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>({
    name: "Siddidy",
    email: "siddidy@gmail.com",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
