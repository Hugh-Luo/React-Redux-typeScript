import { AppState } from "../reducers";
import { CakeState } from "../reducers/cake";

export function getCake(state: AppState): CakeState {
  return state.cake;
}
