import css from './ImageCard.module.css';
const ImageCard = ({ url, id, alt }) => {
  const src = url + `&h=400`;
  return (
    <div className={css.container}>
      <img src={src} data-id={id} alt={alt} />
    </div>
  );
};
export default ImageCard;
