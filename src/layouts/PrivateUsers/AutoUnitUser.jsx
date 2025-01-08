import { useSelector } from "react-redux";
import ErrorSend from "../../utils/ErrorSend";
import PropTypes from "prop-types";

export const AutoUnitUser = ({ children }) => {
  const { user } = useSelector(({ userMe }) => userMe);
  if (user === null) return;
  if (user?.role === "avtoconnectoruser" || user?.role === "Superuser") return children;
  else return <ErrorSend />;
};
AutoUnitUser.propTypes = {
  children: PropTypes.element,
};
