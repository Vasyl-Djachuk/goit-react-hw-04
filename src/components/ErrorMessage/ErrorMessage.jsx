import css from './ErrorMessage.module.css';
import { useState } from 'react';

const ErrorMessage = ({ errorMessage }) => {
  const [showError, setShowError] = useState(false);
  const handleClick = () => {
    setShowError(!showError);
  };

  return (
    <div className={css.wrapper}>
      <p className={css.text}>Something went wrong, please try again.</p>
      <a href="#" onClick={handleClick}>
        {showError ? `Hide ` : `More information`}
      </a>
      {showError && <span>Error message: {errorMessage}</span>}
    </div>
  );
};
export default ErrorMessage;
