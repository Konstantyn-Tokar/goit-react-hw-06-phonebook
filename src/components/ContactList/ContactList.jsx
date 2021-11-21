import s from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/action";
import { getFilterContacts } from "../../helpers/filter";

export default function ContactList() {
  const contacts = useSelector(({ contacts: { items, filter } }) =>
    getFilterContacts(items, filter)
  );

  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <div>
            <p className={s.text}>
              Name: <span className={s.text_d}>{name}</span>
            </p>
            <p className={s.text}>
              Number: <span className={s.text_d}>{number}</span>
            </p>
          </div>
          <button
            type="button"
            id={id}
            className={s.button}
            onClick={() => dispatch(deleteContact(id))}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// const getFilterContacts = (contacts, filter) => {
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(filter.trim().toLowerCase())
//   );
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getFilterContacts(items, filter),
// });

// const mapDispatchToProps = (dispatch) => ({
//   deleteContact: (id) => dispatch(deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
