import { createAction, nanoid } from "@reduxjs/toolkit";

const addContact = createAction("contact/add", (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

const deleteContact = createAction("contact/delete");

const handelChangeFilter = createAction("contact/filter");

export { addContact, deleteContact, handelChangeFilter };
