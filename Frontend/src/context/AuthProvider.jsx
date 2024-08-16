import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// here children are all the components like navbar, course, app.jsx etc to whom we want to give access to the context api
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
