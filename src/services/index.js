import axios from "axios";
import * as services from "../constants/Services";

export const wishlists = {
  getAll: async () => {
    const response = await axios.get(services.WISHLISTS);
    return response.data;
  },
  create: async () => {
    const response = await axios.post(services.WISHLISTS, {
      name: "",
      products: []
    });

    return response.data;
  },
  update: async payload => {
    const response = await axios.patch(
      services.WISHLISTS + payload.id,
      payload
    );

    return response.data;
  }
};
