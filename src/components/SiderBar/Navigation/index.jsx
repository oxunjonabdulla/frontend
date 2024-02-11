import { List, ListItem } from "@chakra-ui/react";

import { NavItem } from "./NavItem";
import {
  faChartSimple,
  faGauge,
  faGears,
  faHomeAlt,
  faMicroscope,
  faPeopleCarryBox,
  faRing,
  faTrailer,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";
import { faAutoprefixer } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
const items = [
  {
    isWork: false,
    label: "Statistika va hisobga olish bo‘limi",
    path: "/statistics",
    type: "link",
    icon: faChartSimple,
    role: "statisticuser",
  },
  {
    isWork: false,
    label: "PTO operator",
    path: "/pto-unit",
    type: "link",
    icon: faTrain,
    role: "ptouser",
  },
  {
    isWork: false,
    label: "Yig‘uv bo‘linmasi",
    path: "/assembly-unit",
    type: "link",
    icon: faGears,
    role: "collectoruser",
  },
  {
    isWork: false,
    label: "G‘ildirak juftlikalar bo‘linmasi",
    path: "/wheel-pairs",
    type: "link",
    icon: faRing,
    role: "wheeluser",
  },

  {
    isWork: false,
    label: "Avtobirikma bo‘linmasi",
    path: "/automobile-unit",
    type: "link",
    icon: faAutoprefixer,
    role: "avtoconnectoruser",
  },
  {
    isWork: false,
    label: "Aravalar bo‘linmasi",
    path: "/carriage-unit",
    type: "link",
    icon: faTrailer,
    role: "cartuser",
  },
  {
    isWork: false,
    label: "Avtotormozlar bo‘linmasi",
    path: "/auto-brakes",
    type: "link",
    icon: faGauge,

    role: "avtotormozuser",
  },
  {
    isWork: false,
    label: "Defektoskoplar",
    path: "/defectoscopes",
    type: "link",
    icon: faMicroscope,
    role: "defestoskopuser",
  },
  {
    isWork: true,
    label: "Jixozlash bo‘linmasi",
    path: "/equipment-unit",
    type: "link",

    role: "equipmentuser",
    icon: faPeopleCarryBox,
  },
];
const home_page = {
  isWork: false,
  label: "Bosh Sahifa",
  path: "/",
  type: "link",
  icon: faHomeAlt,
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
