import css from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
export const Contact = ({ id, names, number, handleDeleteClick }) => {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        <li className={css.item}>
          <FaUser className={css.icon} />
          <p>{names}</p>
        </li>
        <li className={css.item}>
          <FaPhoneAlt className={css.icon} />
          <p>{number}</p>
        </li>
      </ul>
      <button onClick={handleDeleteClick} className={css.button} data-id={id}>
        Delete
      </button>
    </div>
  );
};
