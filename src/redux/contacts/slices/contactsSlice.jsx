
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from '../contactsOperations';


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactList: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder)=>{
    builder

    .addCase(addContact.pending, state => {
      state.isLoading = true;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.contactList.unshift(action.payload);
      state.isLoading = false;
    })
    .addCase(addContact.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })

    .addCase(fetchContacts.pending, state => {
      state.isLoading = true;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.contactList = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })

    .addCase(deleteContact.pending, state => {
      state.isLoading = true;
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.contactList = state.contactList.filter(
        contact => contact.id !== action.payload
      );
      state.isLoading = false;
    })
    .addCase(deleteContact.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  }
})
