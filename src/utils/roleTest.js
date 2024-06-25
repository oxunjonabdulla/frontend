import moment from "moment/moment";
import { useSelector } from "react-redux";

const userRoles = [
  { role: "statisticuser", path: "/statistics" },
  { path: "/pto-unit", role: "ptouser" },
  { path: "/assembly-unit", role: "collectoruser" },
  { path: "/wheel-pairs", role: "wheeluser" },
  { path: "/automobile-unit", role: "avtoconnectoruser" },
  { path: "/carriage-unit", role: "cartuser" },
  { path: "/auto-brakes", role: "avtotormozuser" },
  { path: "/defectoscopes", role: "defestoskopuser" },
  { path: "/equipment-unit", role: "equipmentuser" },
];
export const NavigateWithPath = () => {
  const { user } = useSelector(({ userMe }) => userMe);

  const data = userRoles.filter((item) => item.role === user?.role)[0];

  return { data };
};

export const timeMoment = (str) => {
  if (str) {
    const date = moment(str);
    const time = date.format("HH:mm:ss");
    const day = date.format("DD.MM.YYYY");

    return { time, day };
  }

  return null;
};
