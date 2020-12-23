import { combineReducers } from "redux";
import { UserReducer, userState } from "./reducers/user";
import { houseReducer, houseState } from "./reducers/house";
import { employeeReducer, employeeState } from "./reducers/employee";

export interface AppState {
  user: userState;
  house: houseState;
  employee: employeeState;
}

const rootReducer = combineReducers({
  user: UserReducer,
  house: houseReducer,
  employee: employeeReducer,
});

export default rootReducer;
