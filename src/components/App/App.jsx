import React from 'react';
import { useGetContactsQuery } from '../../services/contactsSlice/contactsSlice';
import AddContactForm from '../AddContactForm/AddContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import s from './App.module.css';

const App = () => {
  const { data: contacts } = useGetContactsQuery(null);

  return (
    <>
      {contacts && (
        <div className={s.mainContainer}>
          <h1>Phonebook</h1>
          <AddContactForm contacts={contacts} />

          <h2>Contacts</h2>
          <Filter />
          <ContactList contacts={contacts} />
        </div>
      )}
    </>
  );
};

export default App;
