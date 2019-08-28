import * as types from "../constants/ActionTypes";

/**
 * Reducer which contains all wishlists with their data
 * @param {Array} state
 * @param {Object} action
 */
const wishlist = (state = [], action) => {
  switch (action.type) {
    case types.GET_WISHLISTS:
      return [...state];
    case types.UPDATE_WISHLISTS:
      return action.payload ? [...action.payload] : state;
    case types.ADD_WISHLIST:
      return [
        ...state,
        {
          id: -1,
          name: "",
          products: []
        }
      ];
    case types.SAVE_WISHLIST:
      let position = state.findIndex(wishlist => wishlist.id === -1);

      const newState = state;
      newState[position].id = action.payload.id;

      return newState;
    case types.UPDATE_WISHLIST:
      return state.map(wishlist => {
        if (wishlist.id === action.payload.id) {
          return Object.assign(wishlist, action.payload);
        }

        return wishlist;
      });
    default:
      return state;
  }
};

export default wishlist;
