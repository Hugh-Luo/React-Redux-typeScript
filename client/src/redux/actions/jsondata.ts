import { ThunkAction } from "redux-thunk";
import { UserLoader } from "../../server/userLoader";
import { User } from "../reducers/jsondata";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USER_FAIL = "FETCH_USERS_FAIL";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (user: User) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: user,
  };
};

export const fetchUsersFail = (error: any) => {
  return {
    type: FETCH_USER_FAIL,
    payload: error,
  };
};

export const getApiInfo = (): ThunkAction<
  any,
  any,
  { userLoader: UserLoader },
  any
> => {
  return async (dispatch, getState, { userLoader }) => {
    dispatch(fetchUsersRequest());

    try {
      const user = await userLoader.getUser();
      dispatch(fetchUsersSuccess(user));
    } catch (err) {
      const errorMessage = err.message;
      dispatch(fetchUsersFail(errorMessage));
    }
  };
};
