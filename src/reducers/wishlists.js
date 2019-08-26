import * as types from "../constants/ActionTypes";

const wishlist = (state = [], action) => {
  switch (action.type) {
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
      newState[position].id = action.payload;

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
