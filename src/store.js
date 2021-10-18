import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsApi } from './services';
import rootReducer from './reducers';

const store = configureStore({
  reducer: {
    globalStore: rootReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: [...getDefaultMiddleware(), contactsApi.middleware],
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
