import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer,
FLUSH,
REHYDRATE,
PAUSE,
PERSIST,
PURGE,
REGISTER
 } from "redux-persist";
 import storage from "redux-persist/lib/storage";
 import  authReducer  from './auth/auth-slice'
import { contactsSlice } from "./contacts/slices/contactsSlice";
import { filterSlice } from "./contacts/slices/filterSlice";

const authPersistConfig={
  key:'auth',
  storage,
  whitelist: ['token']
}
export const store= configureStore({
    reducer:{
       auth: persistReducer(authPersistConfig, authReducer),
      contacts: contactsSlice.reducer,
      filter: filterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})



export const getContacts = state => state.contacts.contactList;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getName = state => state.auth.user.name
export const getCurrentUser = state => state.auth.token
export const getFetchingCurrent= state => state.auth.isFetchingCurrentUser
export const persistor = persistStore(store)