export * from "./SearchTrain";
export * from "./SliderMock";
export * from "./BreadCumbs";
// dateUtils.js

export const reverseDateFormat = (dateString) => {
  if (!dateString) {
    return "0";
  }
  const [year, month, day] = dateString.split("-");
  return `${day}-${month}-${year}`;
};
export const repairTypes = [
  { value: "tr", label: "ТР (JT)" },
  { value: "dr", label: "ДР (DТ)" },
  { value: "drp", label: "ДРП" },
  { value: "kp", label: "КР (KТ)" },
  { value: "krp", label: "КРП (KTP)" },
];

export const repairTypesName = (str) => {
  if (!str) {
    return "N/A";
  }
  return repairTypes?.find((e) => e.value === str?.toLowerCase()).label;
};
