import { AnyAction } from "redux";

export const CAKE_SET_NAME = "CAKE_SET_NAME";
export const CAKE_SET_SIZE = "CAKE_SET_SIZE";

export function setCakeName(name: string): AnyAction {
  return { type: CAKE_SET_NAME, payload: name };
}

export function setCakeSize(size: number): AnyAction {
  return { type: CAKE_SET_SIZE, payload: size };
}
