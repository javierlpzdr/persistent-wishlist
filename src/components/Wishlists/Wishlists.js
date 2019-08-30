import React, { useState } from "react";

const Wishlists = ({ state, actions }) => {
  return (
    <React.Fragment>
      {state.wishlists ? (
        <ul>
          {state.wishlists.map((wishlist, i) => (
            <li key={i}>
              <Wishlist
                wishlist={wishlist}
                onSubmit={data => {
                  actions.updateWishlistAsync(data, i);
                }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h2>{"List is empty"}</h2>
      )}
    </React.Fragment>
  );
};

const useForm = (initialState, callback) => {
  const [values, setValues] = useState(initialState);

  const handleSubmit = e => {
    e.preventDefault();
    callback(values);
  };

  const handleChange = e => {
    e.persist();

    setValues(values => ({ ...values, [e.target.name]: e.target.value }));
  };

  return {
    values,
    handleChange,
    handleSubmit
  };
};

const Wishlist = props => {
  const { values, handleChange, handleSubmit } = useForm(
    props.wishlist,
    props.onSubmit
  );

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="id" readOnly value={values.id} hidden />
      <label>
        name:
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Wishlists;
