import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/store';

export function PublicRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;

  return <div>{shouldRedirect ? <Navigate to="/" /> : children}</div>;
}
