import axios from 'axios';

export const apiAddr = "http://localhost:4000";

const api = axios.create({
  baseURL: apiAddr
});

export default api;