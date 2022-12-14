import { Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { text, getFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeFilter = event => {
    dispatch(text(event.currentTarget.value));
  };
  return (
    <Input
      type="text"
      name="serchContact"
      onChange={changeFilter}
      value={filter}
    />
  );
};
