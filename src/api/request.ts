import axios from 'axios';
import config from '../config/app';

const instance = axios.create({
  baseURL: config.baseUrl,
});

instance.interceptors.response.use(undefined, (error) => {
  return Promise.reject({
    message: error.response.data.message,
    code: error.response.data.statusCode.toString(),
  });
});

export default instance;
