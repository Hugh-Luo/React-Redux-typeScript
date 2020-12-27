import { combineReducers } from "redux";
import { UserReducer, UserState } from "./user";
import { houseReducer, houseState } from "./house";
import { employeeReducer, employeeState } from "./employee";
import { fetchUserReducer, fetchState } from "./jsondata";

export interface AppState {
  user: UserState;
  house: houseState;
  employee: employeeState;
  fetchUsers: fetchState;
}

const root = combineReducers({
  user: UserReducer,
  house: houseReducer,
  employee: employeeReducer,
  fetchUsers: fetchUserReducer,
});

export default root;
