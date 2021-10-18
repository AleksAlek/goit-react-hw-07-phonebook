import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './AddContactForm.module.css';
import { addContact } from '../../actions/contactsActions';

const initialState = {
  name: '',
  number: '',
};

const AddContactForm = ({ contacts }) => {
  const [contact, setContact] = useState(initialState);

  const dispatch = useDispatch();

  const handleContactData = e =>
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = e => {
    e.preventDefault();

    for (const { name } of contacts) {
      if (name === contact.name) {
        alert(`${name} is already in contacts`);

        return;
      }
    }

    const newContact = {
      id: shortid.generate(),
      name: contact.name,
      number: contact.number,
    };

    dispatch(addContact(newContact));
    setContact({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={s.addForm}>
      <label className={s.formLabel}>
        Name
        <input
          className={s.formInput}
          value={contact.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleContactData}
        />
      </label>

      <label className={s.formLabel}>
        Number
        <input
          className={s.formInput}
          value={contact.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleContactData}
        />
      </label>

      <button type="submit" className={s.formBtn}>
        Add contact
      </button>
    </form>
  );
};

AddContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default AddContactForm;
