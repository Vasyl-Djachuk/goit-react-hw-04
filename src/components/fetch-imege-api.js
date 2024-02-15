import axios from 'axios';

const fetchImages = async (query, page) => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        page,
        query,
        per_page: 20,
      },
      headers: {
        Authorization: `Client-ID TEXOgPktRYxS-Rg08wwG2eVh7YKv3wuolUpVV7nv1g0`,
      },
    });

    return response.data;
  } catch (error) {
    return error;
  }
};
export default fetchImages;
