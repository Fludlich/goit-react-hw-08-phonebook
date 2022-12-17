import { ContactList } from './ContactList/ContactList';
import ContactForm from './Form/Form';
 import { Filter } from './Filter/Filter';
import { Phonebook } from '../components/ContactList/ContactList.styled';

import { getContacts } from '../redux/store';
import { fetchContacts } from '../redux/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

export function App() {

  const dispatch = useDispatch()
 
 useEffect(() => {
 dispatch(fetchContacts())

}, [dispatch]);


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
