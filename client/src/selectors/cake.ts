import { createSelector } from "reselect";
import { AppState } from "../reducers";
import { getCake } from "./common";

export const getCakeName = createSelector(getCake, (cake) => cake.name);

export const getCakeSize = createSelector(getCake, (cake) => cake.size);

export const getLargeCakeSize = createSelector(getCakeSize, (size) => size * 2);

const state: AppState = {
  cake: { name: "fred", size: 3 },
};

getCakeName(state); // === "fred"
getLargeCakeSize(state); // === 6
