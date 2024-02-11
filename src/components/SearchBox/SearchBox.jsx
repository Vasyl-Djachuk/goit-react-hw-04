import css from './SearchBox.module.css';
import { useId } from 'react';

export const SearchBox = ({ handleChange, searchValue }) => {
  const id = useId();
  return (
    <div className={css.container}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        value={searchValue}
        onChange={handleChange}
        id={id}
      />
    </div>
  );
};
