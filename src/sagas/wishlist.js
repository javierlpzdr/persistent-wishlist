import {
  take,
  actionChannel,
  takeEvery,
  select,
  call,
  put
} from "redux-saga/effects";

import * as types from "../constants/ActionTypes";
import * as actions from "../actions";
import * as services from "../services";

// Get all wishlists from state
const getWishlists = state => state.wishlists;

/**
 * Generator which request to the API create a new wishlist getting its id.
 * Afterwards it's updated on store
 */
export function* addWishlistAsync() {
  try {
    const id = yield call(services.wishlists.create);
    debugger;
    yield put(actions.saveWishlist(id));
  } catch (error) {
    console.error(error);
    return;
  }
}

/**
 * Update Wishlist on store and server
 * @param {Object} payload   Data to update
 */
export function* updateWishlistAsync(payload) {
  // Update wishlist in store
  yield put(actions.updateWishlist(payload));

  // Request api to update wishlist on server
  try {
    yield call(services.wishlists.update, payload);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Generator that iterate for each action taking every
 * ADD_WISHLIST_ASYNC actionand adding to a channel
 * every asynchronous action
 * @param {Object} action observed action with data
 */
export function* watchAddWishlistAsync(action) {
  yield takeEvery(types.GET_WISHLISTS_ASYNC, function*(dispatch) {
    const result = yield call(services.wishlists.getAll);
    yield put(actions.updateWishlists(result));
  });

  yield takeEvery(types.ADD_WISHLIST_ASYNC, function*(dispatch) {
    yield put(actions.addWishlist());
  });

  const queue = yield actionChannel([
    "ADD_WISHLIST_ASYNC",
    "UPDATE_WISHLIST_ASYNC"
  ]);

  while (true) {
    /**
     * We take the data from the action and in condition
     * of its type we could each function
     */
    const { type, payload, index } = yield take(queue);

    if (type === types.ADD_WISHLIST_ASYNC) {
      yield call(addWishlistAsync, payload);
    }

    if (type === types.UPDATE_WISHLIST_ASYNC) {
      /**
       * If the id haven't updated when it was sent, we'll use
       * its index in the list as reference.
       * TODO: Use a temporal hash or id instead of the position in the list (redux-immutable?)
       */

      if (payload.id === -1) {
        const wishlists = yield select(getWishlists);

        if (wishlists[index].id === -1) {
          return;
        }

        payload.id = wishlists[index].id;
      }

      yield call(updateWishlistAsync, payload);
    }
  }
}
