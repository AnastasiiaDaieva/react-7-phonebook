import React from 'react';
import s from 'components/Contacts/ContactsItem.module.css';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'store/slice';

function ContactsItem({ id, item }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const { name, phone } = item;
  return (
    <li key={id} id={id} className={s.ContactsItem}>
      <span className={s.ContactsItem__text}>
        {name}: {phone}
      </span>
      <button
        className={s.ContactsItem__button}
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
}

ContactsItem.propTypes = {
  id: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
};

export { ContactsItem };
