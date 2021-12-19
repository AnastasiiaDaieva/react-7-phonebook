import React from 'react';
import s from 'components/Contacts/ContactsItem.module.css';
import PropTypes from 'prop-types';

function ContactsItem({ id, name, number, onDelete, deleting }) {
  return (
    <>
      <li key={id} id={id} className={s.ContactsItem}>
        <span className={s.ContactsItem__text}>
          {name}: {number}
        </span>
      </li>
      <button
        type="button"
        className={s.ContactsItem__button}
        onClick={() => onDelete(id)}
      >
        {deleting ? 'Deleting...' : 'Delete'}
      </button>
    </>
  );
}

ContactsItem.propTypes = {
  id: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
};

export { ContactsItem };
