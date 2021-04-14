import axios from 'axios';

// endereço da api de dados
export const apiAddr = "http://localhost:4000";

// função de acesso a api
const api = axios.create({
  baseURL: apiAddr
});

export default api;