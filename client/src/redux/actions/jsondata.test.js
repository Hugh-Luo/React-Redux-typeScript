import {
  fetchUsersFail,
  fetchUsersRequest,
  fetchUsersSuccess,
  getApiInfo,
} from "./jsondata";

describe("Jsondata action creator", () => {
  it("Should handle a successful fetch from the server", async () => {
    const action = getApiInfo();
    const user = { id: 1234 };
    const promise = Promise.resolve(user);
    const userLoader = { getUser: jest.fn(() => promise) };
    const dispatch = jest.fn();
    const getState = jest.fn();

    action(dispatch, getState, { userLoader });

    expect(dispatch).toHaveBeenCalledWith(fetchUsersRequest());

    await userLoader.getUser();

    expect(dispatch).toHaveBeenCalledWith(fetchUsersSuccess(user));
    expect(getState).not.toHaveBeenCalled();
  });

  it("Should correctly handle a failed fetch from the server", async () => {
    const action = getApiInfo();
    const error = new Error("Oh no");
    const promise = Promise.reject(error);
    const userLoader = {
      getUser: jest.fn(() => promise),
    };
    const dispatch = jest.fn();
    const getState = jest.fn();

    action(dispatch, getState, { userLoader });

    expect(dispatch).toHaveBeenCalledWith(fetchUsersRequest());

    await userLoader.getUser().catch(() => {});

    expect(dispatch).toHaveBeenCalledWith(fetchUsersFail(error.message));
    expect(getState).not.toHaveBeenCalled();
  });
});
