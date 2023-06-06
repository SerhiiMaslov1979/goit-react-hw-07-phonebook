import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from '../redux/Filter/filterSlice';

import { contactsReducer } from '../redux/Contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
