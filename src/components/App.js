import { Container, MainTitle, Title } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';


export const App = () => {
  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />

      <Title>Contacts</Title>
      <Filter />
      <ContactList />

    </Container>
  );
};
