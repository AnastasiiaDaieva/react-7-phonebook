import React from 'react';
import { Section } from 'components/Section/Section';
import { ContactsItem } from './ContactsItem';
import s from 'components/Contacts/Contacts.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from 'store/operations';

function Contacts({ contacts, onDeleteContact }) {
  return (
    <Section className={s.Contacts} text="Contacts">
      <ul className={s.Contacts__list}>
        {contacts.length === 0 ? (
          <h3 className={s.Contacts__message}>Nothing is here</h3>
        ) : (
          contacts.map(({ name, id, number }) => (
            <ContactsItem
              deleteFunc={() => onDeleteContact(id)}
              name={name}
              key={id}
              number={number}
            />
          ))
        )}
      </ul>
    </Section>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  number: PropTypes.string,
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
