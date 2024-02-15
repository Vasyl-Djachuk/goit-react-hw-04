// src/articles-api.js
import axios from 'axios';

const fetchImages = async (query, page) => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        page,
        query,
        per_page: 16,
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
// client_id=TEXOgPktRYxS-Rg08wwG2eVh7YKv3wuolUpVV7nv1g0&
// const response = await axios.get('https://api.unsplash.com/photos', {
//   headers: {
//     Authorization: 'Client-ID YOUR_ACCESS_KEY', // Replace YOUR_ACCESS_KEY with your actual access key
//   },
// });
