import reducer from "./wishlists";
import * as types from "../constants/ActionTypes";

describe("wishlist reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should add the first item to the state", () => {
    expect(
      reducer([], {
        type: types.ADD_WISHLIST
      })
    ).toEqual([
      {
        id: -1,
        name: "",
        products: []
      }
    ]);
  });

  it("should add the second item to the state", () => {
    expect(
      reducer(
        [
          {
            id: 0,
            name: "",
            products: []
          }
        ],
        {
          type: types.ADD_WISHLIST
        }
      )
    ).toEqual([
      {
        id: 0,
        name: "",
        products: []
      },
      {
        id: -1,
        name: "",
        products: []
      }
    ]);
  });
});
