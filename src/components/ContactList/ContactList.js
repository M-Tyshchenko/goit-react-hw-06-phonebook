// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteBtn, List, ListItem, Marker } from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilterByName } from 'redux/selectors';

// const localStorageKey = 'contacts';

const getVisibleContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterByName = useSelector(getFilterByName);
  const visibleContacts = getVisibleContacts(contacts, filterByName);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <List>
      {visibleContacts.map(contact => (
        <ListItem key={contact.id}>
          <Marker></Marker>
          <p>
            {contact.name}: {contact.number}
          </p>

          <DeleteBtn onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </DeleteBtn>
        </ListItem>
      ))}
    </List>
  );
};
