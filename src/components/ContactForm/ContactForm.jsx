import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/action";

import s from "./ContactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumder] = useState("");
  const dispatch = useDispatch();

  const handelChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumder(value);
        break;

      default:
        return;
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    dispatch(addContact(name, number));
    console.log(name, number);
    toСlear();
  };

  const toСlear = () => {
    setName("");
    setNumder("");
  };

  return (
    <form onSubmit={handelSubmit}>
      <h1 className={s.title}>Phonebook </h1>
      <label className={s.label}>
        <p className={s.text}>Name</p>
        <input
          type="text"
          className={s.input}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handelChange}
        />
      </label>
      <label>
        <p className={s.text}>Number</p>
        <input
          type="tel"
          className={s.input}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handelChange}
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   onSumbit: (name, number) => dispatch(addContact(name, number)),
// });

// export default connect(null, mapDispatchToProps)(ContactForm);
