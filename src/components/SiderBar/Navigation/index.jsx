import { List, ListItem } from "@chakra-ui/react";

import { NavItem } from "./NavItem";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { home } from "@/assets";
import { routersSidebar } from "@/utils/mock_heads";

const home_page = {
  isWork: false,
  label: "Bosh Sahifa",
  path: "/",
  type: "link",
  icon: home,
};
export const Navigation = ({ collapse, setMocileCollapse }) => {
  const { user } = useSelector(({ userMe }) => userMe);
  return (
    <List w="full" overflow={"hidden"}>
      <ListItem onClick={() => setMocileCollapse(false)}>
        <NavItem item={home_page} collapse={collapse} />
      </ListItem>
      {routersSidebar
        .filter((item) =>
          user?.role === "Superuser" ? item : item?.role === user?.role
        )
        .map((item, index) => (
          <ListItem key={index} onClick={() => setMocileCollapse(false)}>
            <NavItem item={item} collapse={collapse} />
          </ListItem>
        ))}
    </List>
  );
};
Navigation.propTypes = {
  collapse: PropTypes.bool,
  setMocileCollapse: PropTypes.func,
};
