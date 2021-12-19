import { Section } from 'components/Section/Section';
import s from 'components/Form/Form.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from 'store/operations';
import { useAddContactMutation, useFetchContactsQuery } from 'store/slice';
import ClipLoader from 'react-spinners/ClipLoader';

function Form() {
  const { data } = useFetchContactsQuery();
  console.log(data);

  const [addContact, { isLoading }] = useAddContactMutation();

  // const findMap = data.find(contact => contact.name === name);

  const handleSubmit = async e => {
    // if (findMap) {
    //   alert(`${name} is already in contacts!`);
    //   return;
    // } else {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const phone = e.currentTarget.elements.number.value;
    e.currentTarget.reset();
    try {
      await addContact({ name, phone });
      console.log('success');
    } catch (error) {
      console.log(error.message);
    }
    // }
  };

  return (
    <Section className="Phonebook" text="Phonebook">
      <form onSubmit={handleSubmit} className={s.Form}>
        <label htmlFor="input-name" className={s.Form__item}>
          Name
        </label>
        <input
          className={s.Form__input}
          id="input-name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <label htmlFor="input-tel" className={s.Form__item}>
          Phone number
        </label>
        <input
          className={s.Form__input}
          id="input-tel"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />

        <button type="submit" disabled={isLoading} className={s.Form__button}>
          Add contact{isLoading && <ClipLoader color="#000000" size={12} />}
        </button>
      </form>
    </Section>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) => dispatch(addContact({ name, number })),
});

export default connect(null, mapDispatchToProps)(Form);
