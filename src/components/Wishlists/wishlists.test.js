import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import Wishlists, { Wishlist } from "./Wishlists";
import { shallow } from "enzyme";

const shallowSetup = () => {
  const props = {
    state: {
      wishlists: [
        {
          id: 0,
          name: "wedding",
          products: []
        },
        {
          id: 2,
          name: "wedding",
          products: []
        }
      ]
    },
    actions: {}
  };

  const enzymeWrapper = shallow(<Wishlists {...props} />);

  return { props, enzymeWrapper };
};

describe("App Component", () => {
  const { enzymeWrapper, props } = shallowSetup();

  it("renders without crashing", () => {
    expect(enzymeWrapper.find("li").length).toBe(2);
  });
});
