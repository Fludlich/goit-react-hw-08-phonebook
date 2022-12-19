import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/store';

export function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return <div>{isLoggedIn ? children : <Navigate to="/login" />}</div>;
}
