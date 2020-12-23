export const SET_HOUSE = "SET_HOUSE";

interface house {
  type: string;
  payload: {};
}

export const set_house = (property: object): house => {
  return {
    type: SET_HOUSE,
    payload: property,
  };
};
