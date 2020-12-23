import { getHouse } from "./common";
import { createSelector } from "reselect";

export const getHouse_location = createSelector(
  getHouse,
  (state) => state.location
);
export const getHouse_area = createSelector(getHouse, (state) => state.area);
export const getHouse_price = createSelector(getHouse, (state) => state.price);
