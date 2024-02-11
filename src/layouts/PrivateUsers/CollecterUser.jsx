import { useSelector } from "react-redux";
import ErrorSend from "../../utils/ErrorSend";

import PropTypes from "prop-types";
export const CollectUser = ({ children }) => {
  const { user } = useSelector(({ userMe }) => userMe);
  if (user === null) {
    return;
  }
  if (user?.role === "collectoruser" || user?.role === "Superuser") {
    return children;
  } else return <ErrorSend />;
};
CollectUser.propTypes = {
  children: PropTypes.element,
};
