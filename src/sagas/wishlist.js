import {
  take,
  actionChannel,
  takeEvery,
  select,
  call
} from "redux-saga/effects";

import * as types from "../constants/ActionTypes";
import * as actions from "../actions/index";

const getWishlists = state => state.wishlists;

export const delay = ms => {
  let index = 0;

  return () =>
    new Promise(res => {
      setTimeout(() => res(index++), ms);
    });
};

export function* addWishlistAsync() {
  const id = yield call(delay, 6000);
  return yield call(actions.saveWishlist, id);
}

export function* updateWishlistAsync(payload) {
  yield call(actions.updateWishlist, payload);
  yield delay(6000);
}

export function* watchAddWishlistAsync(action) {
  yield takeEvery("ADD_WISHLIST_ASYNC", function*() {
    yield call(actions.addWishlist);
  });

  const queue = yield actionChannel([
    types["ADD_WISHLIST_ASYNC"],
    types["UPDATE_WISHLIST_ASYNC"]
  ]);

  while (true) {
    const { type, payload, index } = yield take(queue);

    if (type === types.ADD_WISHLIST_ASYNC) {
      yield call(addWishlistAsync);
    }

    if (type === types.UPDATE_WISHLIST_ASYNC) {
      if (payload.id === -1) {
        const wishlists = yield select(getWishlists);
        payload.id = wishlists[index].id;
      }

      yield call(updateWishlistAsync, payload());
    }
  }
}
