"use strict";

let currentId = 2;

export default {
  get(url) {
    return Promise.resolve({
      data: [
        {
          id: 0,
          name: "Wedding",
          products: []
        },
        {
          id: 1,
          name: "Birthday",
          products: []
        }
      ]
    });
  },
  post(url) {
    return Promise.resolve({
      data: {
        id: currentId++
      }
    });
  },
  patch(url, data) {
    return Promise.resolve({
      data
    });
  }
};
