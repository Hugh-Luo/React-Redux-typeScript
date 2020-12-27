import { employeeReducer, initialEmployeeState } from "./employee";
import {
  Set_employee_age,
  Set_employee_name,
  Set_employee_email,
  Set_employee_phone,
} from "../actions/employee";

describe("Employee Reducer", () => {
  it("should be able to set employee name", () => {
    const newState = employeeReducer(
      initialEmployeeState,
      Set_employee_name("hugh")
    );

    expect(newState).toMatchObject({ name: "hugh" });

    expect(newState).toEqual({ name: "hugh", age: 0, email: "", phone: "" });
  });

  it("should be able to set employee age", () => {
    const newState = employeeReducer(
      initialEmployeeState,
      Set_employee_age(20)
    );

    expect(newState).toMatchObject({ age: 20 });
  });

  it("should be able to set employee email", () => {
    const newState = employeeReducer(
      initialEmployeeState,
      Set_employee_email("Happy_Christmas@a.com")
    );
    expect(newState).toMatchObject({ email: "Happy_Christmas@a.com" });
  });

  it("should be able to set employee phone", () => {
    const newState = employeeReducer(
      initialEmployeeState,
      Set_employee_phone("+08888888888")
    );
    expect(newState).toMatchObject({ phone: "+08888888888" });
  });
});
