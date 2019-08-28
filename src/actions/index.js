import * as types from "../constants/ActionTypes";

// Get all wishlists from state
export const getWishlists = () => ({
  type: types.GET_WISHLISTS
});

// Get all wishlists from server
export const getWishlistsAsync = () => ({
  type: types.GET_WISHLISTS_ASYNC
});

// update wishlits in state
export const updateWishlists = payload => ({
  type: types.UPDATE_WISHLISTS,
  payload
});

// Add a new temporal wishlist to store
export const addWishlist = () => ({
  type: types.ADD_WISHLIST
});

// Add a new wishlist to server
export const addWishlistAsync = () => ({
  type: types.ADD_WISHLIST_ASYNC
});

/**
 * Update a wishlist on server
 * @param {Object} payload Object with data to update
 * @param {Integer} index Wishlist index for get its reference
 */
export const updateWishlistAsync = (payload, index) => ({
  type: types.UPDATE_WISHLIST_ASYNC,
  payload,
  index
});

/**
 * Update a wishlist on store
 * @param {Object} payload Object with data to replace
 */
export const updateWishlist = payload => ({
  type: types.UPDATE_WISHLIST,
  payload
});

/**
 * Save a temporal payload with its id
 * @param {Integer} id
 */
export const saveWishlist = payload => ({
  type: types.SAVE_WISHLIST,
  payload
});
