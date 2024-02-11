import { useSelector } from "react-redux";
import ErrorSend from "../../utils/ErrorSend";

import PropTypes from "prop-types";
export const CarriageUser = ({ children }) => {
  const { user } = useSelector(({ userMe }) => userMe);
  if (user === null) {
    return;
  }
  if (user?.role === "cartuser" || user?.role === "Superuser") {
    return children;
  } else return <ErrorSend />;
};
CarriageUser.propTypes = {
  children: PropTypes.element,
};
