import { useSelector } from 'react-redux';
import { getContacts } from '../redux/store';
import { getFilter } from '../redux/contacts/slices/filterSlice';

export const FilteredContacts = () =>{

  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  
    const normalizedFilter = filter.toLowerCase();

    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    } else {
      return contacts;
    }
  }