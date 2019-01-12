import axios from 'axios';

export const DEFAULT_LIMIT = 25;

const apiClient = axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
});

export default {
  fetchTrendingGifs(offset = 0, limit = DEFAULT_LIMIT) {
    return apiClient.get(
      `/trending?api_key=${
        process.env.VUE_APP_GIPHY_API_KEY
      }&limit=${limit}&offset=${offset}`
    );
  },
  searchGifs(query, offset = 0, limit = DEFAULT_LIMIT) {
    return apiClient.get(
      `/search?q=${query}&api_key=${
        process.env.VUE_APP_GIPHY_API_KEY
      }&limit=${limit}&offset=${offset}`
    );
  }
};
