export const SET_EMPLOYEE_NAME = "SET_EMPLOYEE_NAME";
export const SET_EMPLOYEE_AGE = "SET_EMPLOYEE_AGE";
export const SET_EMPLOYEE_EMAIL = "SET_EMPLOYEE_EMAIL";
export const SET_EMPLOYEE_PHONE = "SET_EMPLOYEE_PHONE";

export const Set_employee_name = (name: string) => {
  return {
    type: SET_EMPLOYEE_NAME,
    payload: name,
  };
};

export const Set_employee_age = (age: number) => {
  return {
    type: SET_EMPLOYEE_AGE,
    payload: age,
  };
};

export const Set_employee_email = (email: string) => {
  return {
    type: SET_EMPLOYEE_EMAIL,
    payload: email,
  };
};

export const Set_employee_phone = (phone: string) => {
  return {
    type: SET_EMPLOYEE_PHONE,
    payload: phone,
  };
};
