import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import css from './ImageModal.module.css';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#modal-id');

const ImageModal = ({ modal, data }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(modal.id);

  useEffect(() => {
    setIndex(modal.id);
    setIsOpen(true);
  }, [modal]);

  function closeModal() {
    setIsOpen(false);
  }

  const handleNext = next => {
    if (next === `left`) {
      index === 0 ? setIndex(data.length - 1) : setIndex(index - 1);
      return;
    }
    index === data.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const url = data[index].urls.regular;
  const name = data[index].user.name;
  const date = data[index].user.updated_at.replace(/T\d\d:\d\d:\d\dZ$/g, ``);
  const likes = data[index].likes;
  const description = data[index].alt_description;
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className={css.container}>
          <img
            className={css.img}
            src={url}
            alt={data[index].alt_description}
            onClick={closeModal}
          />
          <ul className={css.list}>
            <li>
              <p>Author: {name}</p>
            </li>
            <li>
              <p>Date: {date}</p>
            </li>
            <li>
              <p>Likes: {likes}</p>
            </li>
            <li>
              <p className={css.descr}>Description: {description}</p>
            </li>
          </ul>
          <button className={css.left} onClick={() => handleNext(`left`)}>
            <IoIosArrowDropleft className={css.icon} />
          </button>
          <div>
            <button className={css.right} onClick={() => handleNext()}>
              <IoIosArrowDropright className={css.icon} />
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default ImageModal;
