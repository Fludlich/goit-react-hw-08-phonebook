import { configureStore } from "@reduxjs/toolkit";

 import { filterSlice } from './slices/filterSlice'

import { contactsSlice } from "./slices/contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
})

export default store

export const getContacts = state => state.contacts.contactList;
