import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

const localStorageKey = 'contacts';

const getInitialContacts = () => {
  const storageContacts = localStorage.getItem(localStorageKey);
  if (storageContacts !== null) {
    return JSON.parse(storageContacts);
  }
  return [];
};
// console.log(getInitialContacts());

const initialState = {
  contacts: getInitialContacts(),
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        // state.contacts.push(action.payload)

        state.find(contact => contact.name.toLowerCase() === action.payload.name.toLowerCase()) === undefined ?
        state.push(action.payload) : toast.error(`${action.payload.name} is already in contacts`)

      },
      prepare(contact) {
        return {
          payload: {
            contact,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: (state, action) => {
      const index = state.findIndex(
        contact => contact.id === action.payload
      );
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
