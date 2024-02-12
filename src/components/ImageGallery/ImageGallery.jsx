import ImageCard from './ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ imagesData }) => {
  return (
    <ul className={css.list}>
      {imagesData.map(img => {
        return (
          <li key={img.id}>
            <ImageCard url={img.urls.small} />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
