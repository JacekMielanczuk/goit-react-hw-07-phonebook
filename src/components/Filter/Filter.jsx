import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <p className={styles.p}>Find contacts by name</p>
      <input
        className={styles.input}
        onChange={e => dispatch(setFilter(e))}
        type="text"
        name="filter"
      />
    </>
  );
};

export default Filter;
