import React from 'react';
import { Section } from 'components/Section/Section';
import { ContactsItem } from './ContactsItem';
import s from 'components/Contacts/Contacts.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from 'store/operations';
import { getVisibleContacts } from 'store/selectors';
import ClipLoader from 'react-spinners/ClipLoader';
import { useFetchContactsQuery, useDeleteContactMutation } from 'store/slice';

function Contacts() {
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  console.log(data);
  return (
    <Section className={s.Contacts} text="Contacts">
      {isFetching && <ClipLoader color="#000000" size={150} />}
      {data && (
        <ul className={s.Contacts__list}>
          {data.length === 0 ? (
            <h3 className={s.Contacts__message}>Nothing is here</h3>
          ) : (
            data.map(({ name, id, phone }) => (
              <ContactsItem
                name={name}
                key={id}
                id={id}
                number={phone}
                deleting={isDeleting}
                onDelete={deleteContact}
              />
            ))
          )}
        </ul>
      )}
    </Section>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  number: PropTypes.string,
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
