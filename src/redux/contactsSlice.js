import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { toast } from "react-toastify";

const localStorageKey = 'contacts';

const getInitialContacts = () => {
  const storageContacts = localStorage.getItem(localStorageKey);
  if (storageContacts !== null) {
    return JSON.parse(storageContacts);
  }
  return [];
};

const initialState = {
    contacts: getInitialContacts,
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                if (state.find(contact => contact.name.toLowerCase() === action.payload.name.toLowerCase()) === undefined) {
                    state.push(action.payload)
                    return toast.success(`${action.payload.name} added to your contacts`);;
                }
                return toast.error(`${action.payload.name} is already in contacts`)
            },
            prepare(contact) {
                return {
                    payload: {
                        contact,
                        id: nanoid(),
                    }
                }
            }
        },
        deleteContact: (state, action) => {
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
         }
    }
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;