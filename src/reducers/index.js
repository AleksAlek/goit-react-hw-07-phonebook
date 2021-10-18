import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
