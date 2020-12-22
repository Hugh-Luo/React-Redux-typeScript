import { cakeReducer, initialCakeState } from "./cake";
import { setCakeName, setCakeSize } from "../actions/cake";

describe("Cake reducer", () => {
  it("Should be able to set the name of the cake", () => {
    const state = {};
    const name = "Yangjie";
    const newState = cakeReducer(state, setCakeName(name));

    expect(newState).toMatchObject({ name });
  });

  it("Should be able to set the size of the cake", () => {
    const state = {};
    const size = 30;
    const newState = cakeReducer(state, setCakeSize(size));

    expect(newState).toMatchObject({ size });
  });

  it("Should create an initial state", () => {
    const newState = cakeReducer(undefined, undefined);

    expect(newState).toEqual(initialCakeState);
  });
});
