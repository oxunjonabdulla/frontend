export * from "./SearchTrain";
export * from "./SliderMock";
export * from "./BreadCumbs";
// dateUtils.js

export const reverseDateFormat = (dateString) => {
  const [year, month, day] = dateString.split("-");
  return `${day}-${month}-${year}`;
};
