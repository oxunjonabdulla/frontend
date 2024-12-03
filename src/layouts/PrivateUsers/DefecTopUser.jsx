import { useSelector } from "react-redux";
import ErrorSend from "../../utils/ErrorSend";

import PropTypes from "prop-types";
export const DefecTopUser = ({ children }) => {
  const { user } = useSelector(({ userMe }) => userMe);
  if (user === null) return;
  if (user?.role === "defestoskopuser" || user?.role === "Superuser") 
    return children;
  else return <ErrorSend />;
};
DefecTopUser.propTypes = {
  children: PropTypes.element,
};
