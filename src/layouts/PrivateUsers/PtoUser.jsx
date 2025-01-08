import { useSelector } from "react-redux";
import ErrorSend from "../../utils/ErrorSend";

import PropTypes from "prop-types";
export const PtoUser = ({ children }) => {
  const { user } = useSelector(({ userMe }) => userMe);
  if (user === null) return;
  if (user?.role === "ptouser" || user?.role === "Superuser") return children;
  else return <ErrorSend />;
};
PtoUser.propTypes = {
  children: PropTypes.element,
};
