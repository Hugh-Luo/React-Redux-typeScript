import { Set_Email, Set_Password } from "../actions/user";
import { UserReducer, user_initialState } from "../reducers/user";
import { getUserEmail, getUserPassword } from "../selectors/user";

describe("User Reducer", () => {
  it("should be able to set the email", () => {
    const state = {};
    const email = "goodmorning@a.com";
    const newState = UserReducer(state, Set_Email(email));

    expect(newState).toMatchObject({ email });
  });

  it("should be able to set the password", () => {
    const state = {};
    const password = "3333";
    const newState = UserReducer(state, Set_Password(password));

    expect(newState).toMatchObject({ password });
  });

  it("should be able to make a new user", () => {
    const state = {};
    const email = "niceday@a.com";
    const password = "itIs";
    const newEamilState = UserReducer(state, Set_Email(email));
    const newPasswordState = UserReducer(state, Set_Password(password));

    const UserInfo = {
      newEamilState,
      newPasswordState,
    };

    expect(UserInfo).toMatchObject({
      newEamilState: { email: email },
      newPasswordState: { password: password },
    });
  });

  it("should be able to change the user info", () => {
    const state = user_initialState;
    const email = "good";
    const password = "555";

    const updateEamilState = UserReducer(state, Set_Email(email));
    const updatePasswordState = UserReducer(state, Set_Password(password));

    expect(updateEamilState).toEqual({ ...state, email: email });
    expect(updatePasswordState).toEqual({ ...state, password: password });
  });

  it("should be return the user's email and password", () => {
    const AppState = {
      user: user_initialState,
    };
    const email = getUserEmail(AppState);
    const password = getUserPassword(AppState);

    expect(email).toEqual("hugh.luo@a.777");
    expect(password).toEqual("YouCanDoIt");
  });
});
