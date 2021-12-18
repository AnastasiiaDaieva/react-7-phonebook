import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.contacts.filter;

const getContacts = state => state.contacts.items;

// export const getVisibleContactsOld = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

//  memoization from the Reselect library

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export const isLoading = state => state.contacts.loading;
