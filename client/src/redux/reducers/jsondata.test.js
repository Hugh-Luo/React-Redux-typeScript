import { FETCH_USER_FAIL, FETCH_USERS_SUCCESS } from "../actions/jsondata";
import { fetchUserReducer, initialState } from "./jsondata";

describe("FetchUsers Reducer", () => {
  it('should be able to store the information when "fetch successfully"', () => {
    const fetch_successful = {
      type: FETCH_USERS_SUCCESS,
      payload: [
        {
          name: "nice",
          age: 20,
        },
        {
          name: "good",
          age: 12,
        },
      ],
    };

    const fetch_get = fetchUserReducer(initialState, fetch_successful);

    expect(fetch_get).toMatchObject({
      user: [
        {
          name: "nice",
          age: 20,
        },
        {
          name: "good",
          age: 12,
        },
      ],
    });
  });

  it("should be able to get the error message when there is an error", () => {
    const fetch_fail = {
      type: FETCH_USER_FAIL,
      payload: "ERROR MESSAGE",
    };

    const fetch_error = fetchUserReducer(initialState, fetch_fail);

    expect(fetch_error).toMatchObject({
      user: undefined,
      error: "ERROR MESSAGE",
    });
  });
});
