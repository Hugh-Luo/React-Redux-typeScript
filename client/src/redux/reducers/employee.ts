import {
  EMPLOYEE_PHONE_SET,
  EMPLOYEE_EMAIL_SET,
  EMPLOYEE_AGE_SET,
  EMPLOYEE_NAME_SET,
} from "../actions/employee";
import { Reducer, AnyAction } from "redux";

export interface employeeState {
  name: string;
  age: number;
  email: string;
  phone: string;
}

export const initialEmployeeState: employeeState = {
  name: "",
  age: 0,
  email: "",
  phone: "",
};

export const employeeReducer: Reducer<employeeState> = (
  state = initialEmployeeState,
  action
) => {
  switch (action.type) {
    case EMPLOYEE_NAME_SET:
      return { ...state, name: action.payload };

    case EMPLOYEE_AGE_SET:
      return { ...state, age: action.payload };

    case EMPLOYEE_EMAIL_SET:
      return { ...state, email: action.payload };

    case EMPLOYEE_PHONE_SET:
      return { ...state, phone: action.payload };

    default:
      return state;
  }
};
