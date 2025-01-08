import { useSelector } from "react-redux";
import ErrorSend from "../../utils/ErrorSend";

import PropTypes from "prop-types";
export const EquipUser = ({ children }) => {
  const { user } = useSelector(({ userMe }) => userMe);
  if (user === null) return;
  if (user?.role === "equipmentuser" || user?.role === "Superuser") return children;
  else return <ErrorSend />;
};
EquipUser.propTypes = {
  children: PropTypes.element,
};
