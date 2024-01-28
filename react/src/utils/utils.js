import axios from 'axios';

const Backend = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
});

export default Backend;
