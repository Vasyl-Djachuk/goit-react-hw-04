import toast, { Toaster } from 'react-hot-toast';
import { IoIosSearch } from 'react-icons/io';
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const searchWord = e.target.elements.usertext.value.trim();
    if (searchWord === ``) {
      toast.error(`You need to fill in the search field`);
      return;
    } else {
      onSubmit(searchWord);
      e.target.reset();
    }
  };

  return (
    <header className={css.header}>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="usertext"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          <IoIosSearch className={css.icon} />
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
