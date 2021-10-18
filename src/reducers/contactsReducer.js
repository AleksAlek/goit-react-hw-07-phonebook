import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from '../actions/contactsActions';

const contactsReducer = createReducer([], {
  [addContact.type]: (state, { payload }) => [...state, payload],
  [deleteContact.type]: (state, { payload }) => payload,
});

export default contactsReducer;
