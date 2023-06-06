// export const getContacts = state => state.contacts.contacts;

// export const getFilter = state => state.filter;

export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilteredContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);

  if (!contacts || !filter) {
    return null; // Або поверніть порожній масив []
  }

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

// export const selectFilteredContacts = state => {
//   const contacts = selectContacts(state);
//   const filter = selectFilter(state);

//   return contacts?.filter(contact =>
//     contact?.name?.toLowerCase().includes(filter.toLowerCase())
//   );
// };
