import { List, ListItem } from "@chakra-ui/react";

import { NavItem } from "./NavItem";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
  Aravalar,
  Avtobirikma,
  Avtotormoz,
  Defostoskop,
  Gildirak,
  Joxozlash,
  PtoOperator,
  Statistika,
  Yiguv,
  home,
} from "../../../assets";
const items = [
  {
    isWork: false,
    label: "Statistika va hisobga olish bo‘limi",
    path: "/statistics",
    type: "link",
    icon: Statistika,
    role: "statisticuser",
  },
  {
    isWork: false,
    label: "PTO operator",
    path: "/pto-unit",
    type: "link",
    icon: PtoOperator,
    role: "ptouser",
  },
  {
    isWork: false,
    label: "Yig‘uv bo‘linmasi",
    path: "/assembly-unit",
    type: "link",
    icon: Yiguv,
    role: "collectoruser",
  },
  {
    isWork: false,
    label: "G‘ildirak juftlikalar bo‘linmasi",
    path: "/wheel-pairs",
    type: "link",
    icon: Gildirak,
    role: "wheeluser",
  },

  {
    isWork: false,
    label: "Avtobirikma bo‘linmasi",
    path: "/automobile-unit",
    type: "link",
    icon: Avtobirikma,
    role: "avtoconnectoruser",
  },
  {
    isWork: false,
    label: "Aravalar bo‘linmasi",
    path: "/carriage-unit",
    type: "link",
    icon: Aravalar,
    role: "cartuser",
  },
  {
    isWork: false,
    label: "Avtotormozlar bo‘linmasi",
    path: "/auto-brakes",
    type: "link",
    icon: Avtotormoz,

    role: "avtotormozuser",
  },
  {
    isWork: false,
    label: "Defektoskoplar",
    path: "/defectoscopes",
    type: "link",
    icon: Defostoskop,
    role: "defestoskopuser",
  },
  {
    isWork: true,
    label: "Jixozlash bo‘linmasi",
    path: "/equipment-unit",
    type: "link",

    role: "equipmentuser",
    icon: Joxozlash,
  },
];
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
    <List w="full" my={8}>
      <ListItem onClick={() => setMocileCollapse(false)}>
        <NavItem item={home_page} collapse={collapse} />
      </ListItem>
      {items
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
