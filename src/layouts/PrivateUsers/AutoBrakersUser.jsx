import { useSelector } from "react-redux";
import ErrorSend from "../../utils/ErrorSend";
import PropTypes from "prop-types";

export const AutoBrakersUser = ({ children }) => {
  const { user } = useSelector(({ userMe }) => userMe);
  if (user === null) {
    return;
  }
  if (user?.role === "avtotormozuser" || user?.role === "Superuser") {
    return children;
  } else return <ErrorSend />;
};
AutoBrakersUser.propTypes = {
  children: PropTypes.element.isRequired,
};
