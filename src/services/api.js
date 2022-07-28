import axios from 'axios';

const api = axios.create({baseURL: 'https://sindicatobackend.herokuapp.com' });

export default api;