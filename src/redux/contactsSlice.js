import { createSlice } from '@reduxjs/toolkit';

const localStorageKey = 'contacts';

const getInitialContacts = () => {
  const storageContacts = localStorage.getItem(localStorageKey);
  if (storageContacts !== null) {
    return JSON.parse(storageContacts);
  }
  return [];
};

const initialState = {
  contacts: getInitialContacts(),
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },

    deleteContact: (state, action) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
