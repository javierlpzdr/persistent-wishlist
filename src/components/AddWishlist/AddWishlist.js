import React from "react";

const AddWishlist = ({ actions }) => {
  return <button onClick={() => actions.addWishlistAsync()}>Add</button>;
};

export default AddWishlist;
