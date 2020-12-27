import {
  FETCH_USER_FAIL,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
} from "../actions/jsondata";
import { Reducer, AnyAction } from "redux";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: LatLong;
}

export interface LatLong {
  lat: string;
  long: string;
}

export interface fetchState {
  loading: boolean;
  user?: User;
  error?: string;
}

export const initialState: fetchState = {
  loading: false,
  user: undefined,
  error: undefined,
};

export const fetchUserReducer: Reducer<fetchState, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: undefined,
      };
    case FETCH_USER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
