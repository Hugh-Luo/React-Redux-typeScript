import { combineReducers } from "redux";
import { cakeReducer, CakeState } from "./cake";

export interface AppState {
  cake: CakeState;
}

export const reducer = combineReducers({
  cake: cakeReducer,
});
