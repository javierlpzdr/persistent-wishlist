import * as types from "../constants/ActionTypes";

export const addWishlist = payload => ({
  type: types.ADD_WISHLIST
});

export const addWishlistAsync = payload => ({
  type: types.ADD_WISHLIST_ASYNC
});

export const updateWishlistAsync = (payload, index) => ({
  type: types.UPDATE_WISHLIST_ASYNC,
  payload,
  index
});

export const updateWishlist = payload => ({
  type: types.UPDATE_WISHLIST,
  payload
});

export const saveWishlist = payload => ({
  type: types.SAVE_WISHLIST,
  payload
});
