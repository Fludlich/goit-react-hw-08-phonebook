import { ContactList } from './ContactList/ContactList';
import ContactForm from './Form/Form';
import { Filter } from './Filter/Filter';
import { Phonebook } from '../components/ContactList/ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { text, getFilter } from './redux/filterSlice';
import { add, remove, getContacts } from './redux/contactsSlice';

export function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);


  const changeFilter = event => {
    dispatch(text(event.currentTarget.value));
  };

  const formSubmitHandler = data => {
    const { name, number } = data;
    if (contacts.length > 0) {
      let nameLIst = contacts.map(contact => contact.name);
      if (nameLIst.includes(name.toLowerCase())) {
        return alert(`${name} is already in your contacts.`);
      } else {
        dispatch(add(name, number));
      }
    } else {
      dispatch(add(name, number));
    }
  };
  const handleContactRemove = event => {
    const contactToRemove = event.currentTarget.id;
    dispatch(remove(contactToRemove));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    } else {
      return contacts;
    }
  };
  const vizibleContacts = getVisibleContacts();

  return (
    <Phonebook>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      {contacts.length > 0 && (
        <div>
          <h2>Contacts</h2>
          <Filter value={filter} onSearchContact={changeFilter} />
          <ContactList
            contactsList={vizibleContacts}
            onRemove={handleContactRemove}
          />
        </div>
      )}
    </Phonebook>
  );
}
