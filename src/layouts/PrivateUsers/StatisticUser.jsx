import { useSelector } from "react-redux";
import ErrorSend from "../../utils/ErrorSend";

import PropTypes from "prop-types";
export const StatisticUser = ({ children }) => {
  const { user } = useSelector(({ userMe }) => userMe);
  if (user === null) {
    return;
  }
  if (user?.role === "statisticuser" || user?.role === "Superuser") {
    return children;
  } else return <ErrorSend />;
};
StatisticUser.propTypes = {
  children: PropTypes.element,
};
