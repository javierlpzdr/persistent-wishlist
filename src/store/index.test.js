import store from "./index";
import * as actions from "../actions";

describe("store", () => {
  it("get all wishlists", async () => {
    const expected = [
      {
        id: 0,
        name: "Wedding",
        products: []
      },
      {
        id: 1,
        name: "Birthday",
        products: []
      }
    ];

    await store.dispatch(actions.getWishlistsAsync());

    const actual = store.getState();

    expect(actual.wishlists).toEqual(expected);
  });

  it("add a wishlists", async () => {
    const expected = [
      {
        id: 0,
        name: "Wedding",
        products: []
      },
      {
        id: 1,
        name: "Birthday",
        products: []
      },
      {
        id: -1,
        name: "",
        products: []
      }
    ];

    await store.dispatch(actions.addWishlist());

    const actual = store.getState();

    expect(actual.wishlists).toEqual(expected);
  });
});
