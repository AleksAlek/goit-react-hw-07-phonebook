import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../actions/contactsActions';
import s from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );

  const handleDelete = id => {
    const newContactsArray = contacts.filter(contact => contact.id !== id);
    dispatch(deleteContact(newContactsArray));
  };

  return (
    <ul className={s.contactsList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactsItem}>
          <p className={s.contactsName}>
            {name}: {number}
          </p>

          <button
            className={s.contactsBtn}
            type="button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
