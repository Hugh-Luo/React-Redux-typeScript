import { AnyAction } from "redux";
import { Reducer } from "react";

export interface House {
  id: string;
  address: string;
  images: string[];
}

export const initialHouseState: House = {
  id: "nice",
  address: "hugh",
  images: ["q", "b"],
};

export const currentHouseReducer: Reducer<House, AnyAction> = (
  state = initialHouseState,
  action
) => {
  return state;
};
