import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { isAuth } from "../Service/authService";

export const ProtectedRoute = ({ redirectPath = "/", element }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = isAuth();
  if (!auth) {
    navigate(redirectPath, { state: { from: location }, replace: true });
  }

  return element;
};

ProtectedRoute.propTypes = {
  redirectPath: PropTypes.string,
  element: PropTypes.element,
};
