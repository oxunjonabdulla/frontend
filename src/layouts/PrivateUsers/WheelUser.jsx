import { useSelector } from "react-redux";
import ErrorSend from "../../utils/ErrorSend";

import PropTypes from "prop-types";
export const WheelUser = ({ children }) => {
  const { user } = useSelector(({ userMe }) => userMe);
  if (user === null) return;
  if (user?.role === "wheeluser" || user?.role === "Superuser") return children;
  else return <ErrorSend />;
};
WheelUser.propTypes = {
  children: PropTypes.element,
};
