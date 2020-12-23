export const SET_EMAIL = "SET_EMAIL";
export const SET_PASSWORD = "SET_PASSWORD";

interface email {
  type: string;
  payload: string;
}

export const Set_Email = (email: string): email => {
  return {
    type: SET_EMAIL,
    payload: email,
  };
};

interface password {
  type: string;
  payload: string;
}

export const Set_Password = (password: string): password => {
  return {
    type: SET_PASSWORD,
    payload: password,
  };
};
