import axios from 'axios';

const api = axios.create({
   baseURL: process.env.REACT_APP_BASE_URL,
});

api.interceptors.request.use(config => {
   const accessToken = 'yourAccessToken';
   config.headers.Authorization = `Bearer ${accessToken}`;
   return config;
});

export default api;