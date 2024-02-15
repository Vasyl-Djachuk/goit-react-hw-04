import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ handleClick }) => {
  return (
    <div className={css.wrapperBtn}>
      <button className={css.btn} onClick={handleClick} type="button">
        Loade more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
