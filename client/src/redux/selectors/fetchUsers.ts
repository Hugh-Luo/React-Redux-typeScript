import { fetchState } from "../reducers/jsondata";
import { createSelector } from "reselect";
import { getUsersInfo } from "./common";

export const getUsers = () =>
  createSelector(getUsersInfo, (state: fetchState) => state.user);
