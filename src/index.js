import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";

import AddWishlist from "./components/AddWishlist";
import Wishlists from "./components/Wishlists";
import store from "./store";

import "./styles.css";

function App() {
  return (
    <div>
      <AddWishlist />
      <Wishlists />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
