import shortid from "shortid";

const addContact = (name, number) => {
  return {
    type: "contact/add",
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
};

const deleteContact = (id) => ({
  type: "contact/delete",
  payload: id,
});

const handelChangeFilter = (value) => ({
  type: "contact/filter",
  payload: value,
});

export { addContact, deleteContact, handelChangeFilter };
