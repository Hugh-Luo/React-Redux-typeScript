import { Reducer } from "react";
import { AnyAction } from "redux";
import { CAKE_SET_NAME, CAKE_SET_SIZE } from "../actions/cake";

export interface CakeState {
  name: string;
  size: number;
}

export const initialCakeState: CakeState = {
  name: "Birthday",
  size: 3,
};

export const cakeReducer: Reducer<CakeState, AnyAction> = (
  state = initialCakeState,
  action
) => {
  switch (action?.type) {
    case CAKE_SET_NAME:
      // DONT do this, because we never want to modify the original state object,
      // instead we return a brand new state having applied the action
      // state.name = action.payload;
      // return state;

      return { ...state, name: action.payload };
    case CAKE_SET_SIZE:
      return { ...state, size: action.payload };
    default:
      return state;
  }
};
