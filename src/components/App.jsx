import 'modern-normalize';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchImages from './fetch-imege-api';
import { useState } from 'react';
import { Audio } from 'react-loader-spinner';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';

const App = () => {
  const [searchWord, setSearchWord] = useState(``);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [imagesData, setImagesData] = useState([]);

  const fetchData = async search => {
    const query = search === searchWord ? imagesData : [];
    try {
      setError(false);
      setLoading(true);
      setPage(page + 1);
      const data = await fetchImages(search, page);
      console.log(searchWord);
      console.log(data);
      setImagesData([...query, ...data.results]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = searchText => {
    setSearchWord(searchText);
    fetchData(searchText);
  };
  const handleClick = () => {
    setPage(page + 1);
    fetchData(searchWord);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {error ? <ErrorMessage /> : <ImageGallery imagesData={imagesData} />}
      {loading && <Loader />}
      {imagesData.length > 0 && <LoadMoreBtn handleClick={handleClick} />}
    </>
  );
};

export default App;

// Access Key
// TEXOgPktRYxS - Rg08wwG2eVh7YKv3wuolUpVV7nv1g0;
// Secret key
// fbswjaFLjs7_Jem0FBqAJsUJ26zBlxiOTv77zMxYvgU;
// id
// 565979;
