import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";

export const UserContext = createContext({ user: null });

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth);
    });
  }, [user]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
