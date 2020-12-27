import { AppState } from "../reducers/root";
import { UserState } from "../reducers/user";
import { houseState } from "../reducers/house";
import { fetchState } from "../reducers/jsondata";

export const getUser = (state: AppState): UserState => {
  return state.user;
};

export const getHouse = (state: AppState): houseState => {
  return state.house;
};

export const getUsersInfo = (state: AppState): fetchState => {
  return state.fetchUsers;
};
