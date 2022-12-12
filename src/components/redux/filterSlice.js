import { createSlice } from "@reduxjs/toolkit";


export const contactsFilter = createSlice({
    name: 'filter',
    initialState:'',
    reducers:{
        text(state, action){
            return action.payload
        }
    }
})

export const {text} = contactsFilter.actions;

export const getFilter = state => state.root.filter;