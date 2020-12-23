import { AppState } from "../rootReducer";
import { userState } from "../reducers/user";
import { houseState } from "../reducers/house";

export const getUser = (state: AppState): userState => {
  return state.user;
};

export const getHouse = (state: AppState): houseState => {
  return state.house;
};
