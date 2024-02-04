import axios from 'axios';

const api = axios.create({
   baseURL: 'http://localhost:5000/',
});

api.interceptors.request.use(config => {
   const accessToken = 'yourAccessToken';
   config.headers.Authorization = `Bearer ${accessToken}`;
   return config;
});

export default api;