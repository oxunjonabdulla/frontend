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
export const signature_roles = [
  "deputyheadrepairsuser",
  "collectworkshopmaster",
  "technicalcontrolworker",
  "head_vtxkb_user",
  "traffic_safety_depot_duty_officer_user",
  "receiving_master",
  "wheel_signature_user",
  "defestoskop_signature_user",
  "wheel_plumber_user",
  "aravalar_brigadr_or_master_user",
  "avto_connector_brigadr_or_master_user",
  "avto_connector_plumber_signature_user",
  "avto_connector_payvandchi_signature_user",
  "avto_connector_defektoskopistr_signature_user",
  "avtotormoz_plumber_user",
  "avtotormoz_receiving_master_user",
];

export const NavigateWithPath = () => {
  const { user } = useSelector(({ userMe }) => userMe);

  const data = userRoles.filter((item) => item.role === user?.role)[0];

  return { data };
};

export const timeMoment = (str) => {
  if (str) {
    const date = moment(str);
    const time = date.format("HH:mm");
    const day = date.format("DD.MM.YYYY");

    return { time, day };
  }

  return null;
};
