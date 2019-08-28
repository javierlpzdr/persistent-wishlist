import React, { useState, useEffect } from "react";

const WishlistList = ({ state, actions }) => {
  return (
    <ul>
      {state.wishlists &&
        state.wishlists.map((wishlist, i) => (
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
  );
};

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};

const Wishlist = props => {
  const name = useInput(props.wishlist.name || "");
  const id = useInput(props.wishlist.id);

  useEffect(() => {
    id.setValue(props.wishlist.id);
  }, [props.wishlist]);

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({ id: id.value, name: name.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" {...id.bind} hidden />
      <label>
        name:
        <input type="text" {...name.bind} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default WishlistList;
