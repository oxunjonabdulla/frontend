import { createContext } from "react";
import { getToken, isAuth, login, logout } from "../Service/authService";

export const AuthContext = createContext(null);

const AuthProvider = ({ children, ...rest }) => {
  const authSettings = {
    isAuth,
    getToken,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={authSettings} {...rest}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
