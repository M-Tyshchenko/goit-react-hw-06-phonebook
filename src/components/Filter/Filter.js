import { useDispatch, useSelector } from 'react-redux';
import { FormField, FormItem, Wrapper } from './Filter.styled';
import { changeFilterByName } from 'redux/filterSlice';

export const Filter = () => {
  const filterByName = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <FormItem>
        Find contacts by name
        <FormField
          type="text"
          // value={filterByName}
          onChange={evt => dispatch(changeFilterByName(evt.target.value))}
        />
      </FormItem>
    </Wrapper>
  );
};
