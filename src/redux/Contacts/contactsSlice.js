// import { createSlice } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';

// const initialState = {
//   contacts: [
//     { id: '1a1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: '2a1', name: 'Hermione Kline', number: '443-89-12' },
//     { id: '3a1', name: 'Eden Clements', number: '645-17-79' },
//     { id: '4a1', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact: (state, action) => {
//       state.contacts.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       state.contacts = state.contacts.filter(
//         item => item.id !== action.payload
//       );
//     },
//   },
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['contacts'],
// };

// export const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// export const { addContact, deleteContact } = contactsSlice.actions;
//
//
//
//
//
//
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
