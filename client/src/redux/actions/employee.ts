export const EMPLOYEE_NAME_SET = "SET_EMPLOYEE_NAME";
export const EMPLOYEE_AGE_SET = "SET_EMPLOYEE_AGE";
export const EMPLOYEE_EMAIL_SET = "SET_EMPLOYEE_EMAIL";
export const EMPLOYEE_PHONE_SET = "SET_EMPLOYEE_PHONE";

export const Set_employee_name = (name: string) => {
  return {
    type: EMPLOYEE_NAME_SET,
    payload: name,
  };
};

export const Set_employee_age = (age: number) => {
  return {
    type: EMPLOYEE_AGE_SET,
    payload: age,
  };
};

export const Set_employee_email = (email: string) => {
  return {
    type: EMPLOYEE_EMAIL_SET,
    payload: email,
  };
};

export const Set_employee_phone = (phone: string) => {
  return {
    type: EMPLOYEE_PHONE_SET,
    payload: phone,
  };
};
