import { stat } from "fs";
import {
  SET_EMPLOYEE_PHONE,
  SET_EMPLOYEE_EMAIL,
  SET_EMPLOYEE_AGE,
  SET_EMPLOYEE_NAME,
} from "../actions/employee";
import { Reducer, AnyAction } from "redux";

export interface employeeState {
  name: string;
  age: number;
  email: string;
  phone: string;
}

export const initial_employeeSatate: employeeState = {
  name: "",
  age: 0,
  email: "",
  phone: "",
};

export const employeeReducer: Reducer<employeeState> = (
  state = initial_employeeSatate,
  action
) => {
  switch (action.type) {
    case SET_EMPLOYEE_NAME:
      return { ...state, name: action.payload };

    case SET_EMPLOYEE_AGE:
      return { ...state, age: action.payload };

    case SET_EMPLOYEE_EMAIL:
      return { ...state, email: action.payload };

    case SET_EMPLOYEE_PHONE:
      return { ...state, phone: action.payload };

    default:
      return state;
  }
};
