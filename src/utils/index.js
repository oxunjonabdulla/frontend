export * from "./SearchTrain";
export * from "./SliderMock";
export * from "./BreadCumbs";
// dateUtils.js

export const reverseDateFormat = (dateString) => {
  const [year, month, day] = dateString.split("-");
  return `${day}-${month}-${year}`;
};
export const repairTypes = [
  { value: "tr", label: "ТР (JT)" },
  { value: "dr", label: "ДР (DТ)" },
  { value: "kp", label: "КР (KТ)" },
  { value: "krp", label: "КРП (KTP)" },
];

export const repairTypesName = (str) => {
  if (!str) {
    return "N/A";
  }
  return repairTypes?.find((e) => e.value === str?.toLowerCase()).label;
};
