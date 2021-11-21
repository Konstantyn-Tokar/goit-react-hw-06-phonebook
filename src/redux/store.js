import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialStoreItem = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const itemsReduser = (state = initialStoreItem, { type, payload }) => {
  switch (type) {
    case "contact/add":
      const existingContact = state.some(({ name }) => name === payload.name);
      return (
        !existingContact
          ? [...state, payload]
          : alert(`Пользователь с именем ${payload.name} уже добавлен`),
        state
      );

    case "contact/delete":
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filterReduser = (state = "", { type, payload }) => {
  switch (type) {
    case "contact/filter":
      return payload;

    default:
      return state;
  }
};

const contactsReduser = combineReducers({
  items: itemsReduser,
  filter: filterReduser,
});

const rootReduser = combineReducers({
  contacts: contactsReduser,
});

const store = createStore(rootReduser, composeWithDevTools());

export default store;
