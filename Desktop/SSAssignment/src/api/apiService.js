import axios from 'axios';

export const getApiService = (url) => {
  return axios.get(url);
};
