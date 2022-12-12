import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {persistStore } from 'redux-persist'
import { contactsFilter } from './filterSlice'
import { contactsSlice } from "./contactsSlice";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'

export const persistConfig ={
    key: 'root',
    storage,
}


const rootReducer = combineReducers({
    contacts: contactsSlice.reducer,
    filter: contactsFilter.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer:{
        root: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})




export const persistor = persistStore(store)