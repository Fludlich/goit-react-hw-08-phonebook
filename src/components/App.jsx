import { ContactList } from './ContactList/ContactList';
import ContactForm from './Form/Form';
import { Filter } from './Filter/Filter';
import { Phonebook } from '../components/ContactList/ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/contactsSlice';

export function App() {

  const contacts = useSelector(getContacts);


  return (
    <Phonebook>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && (
        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      )}
    </Phonebook>
  );
}
