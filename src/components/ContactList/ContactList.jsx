import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/action";

function ContactList({ contacts, deleteContact }) {
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
            onClick={() => deleteContact(id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const getFilterContacts = (contacts, filter) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.trim().toLowerCase())
  );
};

const mapStateToProps = (state) => ({
  contacts: getFilterContacts(state.contacts.items, state.contacts.filter),
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
