import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/store';
import { getName } from 'redux/store';
import { logout } from 'redux/auth/auth-operations';

export const AppBar = () => {
    
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const name = useSelector(getName);

  return (
    <header>
      {isLoggedIn ? (
        <div>
          <Link to={'/'}>Home</Link>

          <Link to={'/contacts'}>
            <p>Contact Book</p>
          </Link>
          <div>
            <p>{`Like to see u ${name}`}</p>
            {/* <Link to={'/'}> */}
            <button onClick={() => dispatch(logout())}>LogOut</button>
            {/* </Link> */}
          </div>
        </div>
      ) : (
        <div>
          <Link to={'/'}>Home</Link>
          <Link to={'register'}>
            <p>SignUp</p>
          </Link>
          <Link to={'/login'}>
            <p>Login</p>
          </Link>
        </div>
      )}
    </header>
  );
};
<p>SignUp</p>;
