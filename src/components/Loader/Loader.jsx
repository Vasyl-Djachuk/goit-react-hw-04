import { Audio } from 'react-loader-spinner';
import css from './Loader.module.css';
import clsx from 'clsx';

const Loader = () => {
  return (
    <div className={clsx(css.loader)}>
      <Audio
        height="60"
        width="60"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};
export default Loader;
