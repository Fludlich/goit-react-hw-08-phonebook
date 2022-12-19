
import ContactForm from '../pages/Form/Form';

import { Phonebook } from '../components/ContactList/ContactList.styled';

import { getFetchingCurrent, getIsLoggedIn } from '../redux/store';
import { fetchContacts } from '../redux/contacts/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { SignUpView } from '../pages/SignUp/SignUp';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/login/Login';
import { Layout } from './Layout/Layout';
import { Home } from '../pages/Home/Home';

import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';


export function App() {
  const isFetchingCurrentUser = useSelector(getFetchingCurrent);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [isLoggedIn, dispatch]);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Phonebook>
        <Layout />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <SignUpView />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <Login />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactForm />
              </PrivateRoute>
            }
          ></Route>
          <Route path='*' element={<Home></Home>}></Route>
        </Routes>
      </Phonebook>
    )
  );
}
