import { getUser } from "./common";
import { createSelector } from "reselect";

export const getUserEmail = createSelector(getUser, (user) => user.email);
export const getUserPassword = createSelector(getUser, (user) => user.password);
