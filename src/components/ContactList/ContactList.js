import { useDispatch, useSelector } from 'react-redux';
import { DeleteBtn, List, ListItem, Marker } from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice';
import { changeFilterByName } from 'redux/filterSlice';
import { getContacts, getFilterByName } from 'redux/selectors';

const getVisibleContacts = (contacts, changeFilterByName) => {

}

export const ContactList = () => {
  const contacts = useSelector(getContacts);  
  const filterByName = useSelector(getFilterByName);  
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterByName.toLowerCase())
  );
  console.log(visibleContacts);

  const dispatch = useDispatch();

  return (
    <List>
      {

        visibleContacts.map(contact => (
        <ListItem key={contact.id}>
          <Marker></Marker>
          <p>
            {contact.name}: {contact.number}
          </p>

          <DeleteBtn onClick={() => dispatch(deleteContact(contact.id))}>Delete</DeleteBtn>
        </ListItem>
      ))
      }
    </List>
  );
};
