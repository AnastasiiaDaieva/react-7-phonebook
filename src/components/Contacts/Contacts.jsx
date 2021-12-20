import { Section } from 'components/Section/Section';
import { ContactsItem } from './ContactsItem';
import s from 'components/Contacts/Contacts.module.css';
import PropTypes from 'prop-types';

function Contacts({ data }) {
  return (
    <Section className={s.Contacts} text="Contacts">
      {data && (
        <ul className={s.Contacts__list}>
          {data.length === 0 ? (
            <h3 className={s.Contacts__message}>Nothing is here</h3>
          ) : (
            data.map(contact => (
              <ContactsItem key={contact.id} id={contact.id} item={contact} />
            ))
          )}
        </ul>
      )}
    </Section>
  );
}

Contacts.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  number: PropTypes.string,
};

export default Contacts;
