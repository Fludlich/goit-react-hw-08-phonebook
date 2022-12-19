import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Input, Label, Button, Box } from './Form.styled';
import { ContactsVarification } from 'Utils/ContactsVerification';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/store';
import { addContact } from '../../redux/contacts/contactsOperations';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';




export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const sendForm = event => {
    event.preventDefault();

    const data = {
      name: name,
      number: number,
    };

    if (ContactsVarification(data, contacts)) {
      dispatch(addContact(data));
    }

    setName('');
    setNumber('');
  };

  return (
  <Box>
   <Form onSubmit={sendForm}>
     <Label htmlFor={nameInputId}>
       Name
       <Input
         type="text"
         name="name"
         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
         required
         value={name}
         onChange={handleChange}
         id={nameInputId}
       />
     </Label>
     <Label htmlFor={numberInputId}>
       Number
       <Input
         type="tel"
         name="number"
         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
         required
         value={number}
         onChange={handleChange}
         id={numberInputId}
       />
     </Label>
     <Button type="submit">Add contact</Button>
 
   </Form>

      {
        contacts.length>0? <>   <Filter />
        <ContactList /></> : <p>Youre contact list is empty</p>
      }
 {/* <Filter />
 <ContactList /> */}
 </Box>
  );
}
