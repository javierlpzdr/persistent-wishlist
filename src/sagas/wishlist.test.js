import { call } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import * as sagas from "./wishlist";
import * as actions from "../actions/index";
import reducer from "../reducers/index";

jest.setTimeout(30000);
expectSaga.DEFAULT_TIMEOUT = 10000; // set it to 500ms

describe("Tests create wishlist", () => {
  it("should add a new wishlist and update it with a generated id", () => {
    return expectSaga(sagas.watchAddWishlistAsync)
      .withReducer(reducer)
      .dispatch(actions.addWishlistAsync())
      .dispatch(
        actions.updateWishlistAsync(
          {
            id: -1,
            name: "kitchen",
            products: []
          },
          0
        )
      )
      .hasFinalState({
        wishlists: [
          {
            id: 2,
            name: "kitchen",
            products: []
          }
        ]
      })
      .run();
  });

  it("shoud add 2 new wishlists and update the first item", () => {
    return expectSaga(sagas.watchAddWishlistAsync)
      .withReducer(reducer)
      .dispatch(actions.addWishlistAsync())
      .dispatch(actions.addWishlistAsync())
      .dispatch(
        actions.updateWishlistAsync(
          {
            id: -1,
            name: "kitchen",
            products: []
          },
          0
        )
      )
      .hasFinalState({
        wishlists: [
          {
            id: 3,
            name: "kitchen",
            products: []
          },
          {
            id: 4,
            name: "",
            products: []
          }
        ]
      })
      .run();
  });
});
