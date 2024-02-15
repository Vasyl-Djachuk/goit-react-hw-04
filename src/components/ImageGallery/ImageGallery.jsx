import ImageCard from './ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ imagesData, onHandleImage }) => {
  return (
    <ul className={css.list} onClick={onHandleImage}>
      {imagesData.map((img, index) => {
        return (
          <li key={img.id}>
            <ImageCard
              url={img.urls.small}
              id={index}
              alt={img.alt_description}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
