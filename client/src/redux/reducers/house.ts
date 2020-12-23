import { SET_HOUSE } from "../actions/house";
import { Reducer, AnyAction } from "redux";

export interface houseState {
  location: string;
  area: number;
  price: number;
}
export const initial_houseState: houseState = {
  location: "",
  area: 0,
  price: 0,
};

export const houseReducer: Reducer<houseState, AnyAction> = (
  state = initial_houseState,
  action
) => {
  switch (action.type) {
    case SET_HOUSE:
      return (state = action.payload);

    default:
      return state;
  }
};
