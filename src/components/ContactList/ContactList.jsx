
import { Box, Text, List, Item, Button } from './ContactList.styled'
import { useDispatch } from 'react-redux';
import { remove } from '../../redux/contactsSlice';

import { FilteredContacts } from '../../Utils/FilteredContacts'

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsList = FilteredContacts()

  const handleContactRemove = event => {
    dispatch(remove(event.currentTarget.id));
  };
  
  return (
    <Box>
      {contactsList.length === 0 ? (
        <Text>Your contacts list is empty</Text>
      ) : (
        <List>
          {contactsList.map(el => {
            const {id, number, name} = el
            return (
              <Item key={id}>
                {name}:   {number}{' '}
                <Button id={id} onClick={handleContactRemove}>
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


 