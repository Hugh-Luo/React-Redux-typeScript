import { employeeReducer, initial_employeeSatate } from "../reducers/employee";
import {
  Set_employee_age,
  Set_employee_name,
  Set_employee_email,
  Set_employee_phone,
} from "../actions/employee";

describe("Employee Reducer", () => {
  it("should be able to set employee name", () => {
    const newState = employeeReducer(
      initial_employeeSatate,
      Set_employee_name("hugh")
    );

    expect(newState).toMatchObject({ name: "hugh" });

    expect(newState).toEqual({ name: "hugh", age: 0, email: "", phone: "" });
  });
});
