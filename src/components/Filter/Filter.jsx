import { useSelector, useDispatch } from "react-redux";
import { handelChangeFilter } from "../../redux/action";
import s from "./Filter.module.css";

export default function Filter() {
  const filter = useSelector(({ contacts }) => contacts.filter);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className={s.title}>Find contacts by name</h2>
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispatch(handelChangeFilter(e.currentTarget.value))}
      />
    </>
  );
}

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   handelChangeFilter: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   filter: state.contacts.filter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   handelChangeFilter: (value) => dispatch(handelChangeFilter(value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
