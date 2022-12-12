import { createSlice, nanoid } from '@reduxjs/toolkit';


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    add: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { add, remove } = contactsSlice.actions;

//selectors

export const getContacts = state => state.root.contacts;
