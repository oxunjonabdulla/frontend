import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ redirectPath = "/", element }) => {
  const location = useLocation();

  const { isAuth } = useAuth();
  const auth = isAuth();
  if (!auth) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return element;
};

ProtectedRoute.propTypes = {
  redirectPath: PropTypes.string,
  element: PropTypes.element,
};
