import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <p className={css.info}>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={css.btn}
          ></button>
        </li>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
