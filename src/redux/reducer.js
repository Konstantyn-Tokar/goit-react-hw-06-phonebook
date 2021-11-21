import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, handelChangeFilter } from "./action";
import { getNewContact } from "../helpers/newContact";

const initialStoreItem = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const itemsReduser = createReducer(initialStoreItem, {
  [addContact]: (state, action) => getNewContact(state, action),
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReduser = createReducer("", {
  [handelChangeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items: itemsReduser,
  filter: filterReduser,
});
