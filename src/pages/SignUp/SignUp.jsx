import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/auth/auth-operations';

export const SignUpView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault()
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1>SignUp</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
             value={name}
            name="name"
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
             value={email}
            name="email"
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
             value={password}
            name="password"
            onChange={handleChange}
          />
        </label>
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};
