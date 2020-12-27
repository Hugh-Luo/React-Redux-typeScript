import { SET_EMAIL, SET_PASSWORD } from "../actions/user";
import { Reducer } from "redux";
import { AnyAction } from "redux";

export interface UserState {
  email: string;
  password: string;
}

export const user_initialState = {
  email: "hugh.luo@a.777",
  password: "YouCanDoIt",
};

export const UserReducer: Reducer<UserState, AnyAction> = (
  state = user_initialState,
  action
) => {
  switch (action.type) {
    case SET_EMAIL:
      return { ...state, email: action.payload };

    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };

    default:
      return state;
  }
};
