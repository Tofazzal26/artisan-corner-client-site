import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const tofa = "tofazzal";
  const info = { tofa };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
