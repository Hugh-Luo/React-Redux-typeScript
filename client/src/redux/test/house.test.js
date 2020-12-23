import App from "../../components/App";
import { houseReducer } from "../reducers/house";
import { set_house } from "../actions/house";
import {
  getHouse_location,
  getHouse_area,
  getHouse_price,
} from "../selectors/house";

describe("House Reducer", () => {
  it("should store a house information", () => {
    const state = {};
    const house_info = {
      location: "asdf 222",
      area: 500,
      price: 2000000,
    };

    const newHouseState = houseReducer(state, set_house(house_info));

    expect(newHouseState).toEqual(house_info);
  });

  it("should be able to get the house's location, area, price", () => {
    const AppState = {
      house: {
        location: "asdf 222",
        area: 500,
        price: 2000000,
      },
    };

    const location = getHouse_location(AppState);
    const area = getHouse_area(AppState);
    const price = getHouse_price(AppState);

    expect(location).toEqual("asdf 222");
    expect(area).toEqual(500);
    expect(price).toEqual(2000000);
  });
});
