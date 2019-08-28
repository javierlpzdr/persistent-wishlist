import * as services from "./index";

it("fetches all wishlists", async () => {
  const wishlists = await services.wishlists.getAll();

  expect(wishlists).toEqual([
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
  ]);
});

it("create a wishlists", async () => {
  const wishlists = await services.wishlists.create({
    name: "Office",
    products: []
  });

  expect(wishlists).toEqual({ id: 2 });
});

it("update a wishlists", async () => {
  const wishlists = await services.wishlists.update({
    id: 2,
    name: "Office 2",
    products: []
  });

  expect(wishlists).toEqual({
    id: 2,
    name: "Office 2",
    products: []
  });
});
