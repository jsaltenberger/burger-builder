import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-c56b8.firebaseio.com/'
});

export default instance;