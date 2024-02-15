import 'modern-normalize';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchImages from './fetch-imege-api';
import { useState, useEffect } from 'react';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import { animateScroll as scroll } from 'react-scroll';
import ImageModal from './ImageModal/ImageModal';

const App = () => {
  const [searchWord, setSearchWord] = useState(``);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [imagesData, setImagesData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(``);
  const [modal, setModal] = useState({ isOpen: false });

  const fetchData = async (search, currentpage) => {
    const query = search === searchWord ? imagesData : [];
    try {
      setModal({ isOpen: false });
      setError(false);
      setLoading(true);
      const data = await fetchImages(search, currentpage);
      if (data.message) setErrorMessage(data.message);

      setImagesData([...query, ...data.results]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = searchText => {
    setImagesData([]);
    setSearchWord(searchText);
    fetchData(searchText, 1);
    setPage(1);
    scroll.scrollTo(0);
  };

  const handleClick = () => {
    fetchData(searchWord, page + 1);
    setPage(page + 1);
  };

  useEffect(() => {
    if (page !== 1) {
      const height = window.innerHeight - 130;
      scroll.scrollMore(height);
    }
  }, [page]);

  const handleImage = evt => {
    const id = evt.target.dataset.id;
    if (!id) return;
    setModal({
      isOpen: true,
      id: Number(id),
    });
  };

  const isBtnOpen = imagesData.length > 19 && !loading;
  const serchError = !error && imagesData.length == 0 && !loading && searchWord;
  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {error ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        imagesData.length > 0 && (
          <ImageGallery onHandleImage={handleImage} imagesData={imagesData} />
        )
      )}

      {loading && <Loader />}
      {isBtnOpen && <LoadMoreBtn handleClick={handleClick} />}
      {modal.isOpen && <ImageModal modal={modal} data={imagesData} />}
      {serchError && (
        <p className="serch-error">
          Sorry, there are no images matching your search query. Please try
          again!
        </p>
      )}
    </>
  );
};

export default App;
