# Persistent wishlists &middot;

The project implements a use case in which a user adds new wishlist to their profile. Instead of waiting for the new ID to come from the server to editing, we want to add a temporary ID (-1). If we add a new name change, we will send a PATCH request and if everything works correctly, we wil get all the changes.

We must avoid to use -1 as ID when submitting the PATCH. Instead we should use the server ID. To do this, let's use an action channel with Redux Saga. With that in mind, we'll wait until we get the ID, but we can edit the wishlist at the same time.

I add the ability to edit different wishlists at same time keeping the changes with their position in the state. As a next step, it should be persistent through a id in the UI.

## Getting started

We've got a test group to run and a prototype to interact with the buttons. Each test is focused on one application layer. The interactive prototype uses a mock api stored in /src/**MOCKS**/db.json.

## Installation

1. Clone the repository on your local machine
2. yarn install

To perform the tests:
yarn test

To ron the application:
yarn mock:api
yarn start

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
