import React, { Fragment } from "react";

const AddWishlist = ({ actions }) => {
  return (
    <Fragment>
      <button onClick={() => actions.addWishlist()}>Add</button>
      <button onClick={() => actions.addWishlistAsync()}>Add Async</button>
    </Fragment>
  );
};

export default AddWishlist;
