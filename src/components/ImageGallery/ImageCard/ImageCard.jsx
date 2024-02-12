import css from './ImageCard.module.css';
const ImageCard = ({ url }) => {
  return (
    <div className={css.container}>
      <img src={url} alt="" />
    </div>
  );
};
export default ImageCard;
