import { Input } from './Filter.styled'
import PropTypes from 'prop-types';

// import { useDispatch, useSelector } from 'react-redux';
// import {  increment } from './redux/store'



export const Filter = ({ onSearchContact, value }) => {
// const dispatch = useDispatch()
  return (
    <Input
      type="text"
      name="serchContact"
       onChange={onSearchContact}
      value={value}
    />
  );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onSearchContact: PropTypes.func.isRequired,
  };