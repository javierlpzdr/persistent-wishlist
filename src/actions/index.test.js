import * as actions from "./index";
import * as types from "../constants/ActionTypes";

describe("actions", () => {
  it("should create a action to create a wishlist", () => {
    const expectedAction = {
      type: types.ADD_WISHLIST
    };
    expect(actions.addWishlist()).toEqual(expectedAction);
  });

  it("should create a action to create a wishlist on the server", () => {
    const expectedAction = {
      type: types.ADD_WISHLIST_ASYNC
    };
    expect(actions.addWishlistAsync()).toEqual(expectedAction);
  });

  it("should create a action to update a wishlist", () => {
    const payload = {
      id: 0,
      name: "name",
      products: []
    };

    const expectedAction = {
      type: types.UPDATE_WISHLIST,
      payload
    };
    expect(actions.updateWishlist(payload)).toEqual(expectedAction);
  });

  it("should create a action to update a wishlist on the server", () => {
    const payload = {
      id: 0,
      name: "name",
      products: []
    };

    const expectedAction = {
      type: types.UPDATE_WISHLIST_ASYNC,
      payload
    };
    expect(actions.updateWishlistAsync(payload)).toEqual(expectedAction);
  });

  it("should create a action to save a wishlist", () => {
    const payload = 0;
    expect(actions.saveWishlist(payload)).toEqual({
      type: types.SAVE_WISHLIST,
      payload
    });
  });
});
