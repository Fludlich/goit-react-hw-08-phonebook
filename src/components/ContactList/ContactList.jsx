
import { Box, Text, List, Item, Button } from './ContactList.styled'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOperations';
import { FilteredContacts } from '../../Utils/FilteredContacts'

export const ContactList = () => {
  const dispatch = useDispatch();

  const contactsList = FilteredContacts()

  return (
    <Box>
      {contactsList.length === 0 ? (
        <Text>Your contacts list is empty</Text>
      ) : (
        <List>
          {contactsList.map(el => {
            const { id, number, name} = el
            return (
              <Item key={`${id}`}>
                {name}:   {number}{' '}
                <Button id={id} onClick={()=>dispatch(deleteContact(id))}>
                  Remove
                </Button>
              </Item>
            );
          })}
        </List>
       )} 
    </Box>
  );
};


 