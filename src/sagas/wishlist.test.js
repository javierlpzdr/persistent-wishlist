import { call } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import * as sagas from "./wishlist";
import * as actions from "../actions/index";

describe("Test delay function", () => {
  const delay = sagas.delay();

  test("should start with 0, wait 2000ms, afterwards  and increment 1", async () => {
    await expect(delay(2000)).resolves.toBe(0);
    await expect(delay(2000)).resolves.toBe(1);
  });
});

/*
expectSaga(sagas.watchAddWishlistAsync)
.dispatch(actions.addWishlistAsync())
.hasFinalState({
  id: -1,
  name: "",
  products: []
});
*/

describe("updates a wishlist in server", () => {
  const payload = {
    id: 0,
    name: "asdfasdfa",
    products: []
  };

  const generator = sagas.updateWishlistAsync(payload);

  it("should update wishlist on server and update it on state", () => {
    expect(generator.next().value).toEqual(
      call(actions.updateWishlist, payload)
    );
  });
});
