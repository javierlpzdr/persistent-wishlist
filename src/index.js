import React, { Component } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";

import AddWishlist from "./components/AddWishlist";
import Wishlists from "./components/Wishlists";
import store from "./store";

import "./styles.css";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <AddWishlist />
        <Wishlists />
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement || document.createElement("div"));
