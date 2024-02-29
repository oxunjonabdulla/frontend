import React from "react";
import { AuthContext } from "../context/AuthContext";

function useAuth() {
  return React.useContext(AuthContext);
}
export { useAuth };
