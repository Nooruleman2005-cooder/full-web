import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const authAxios = axios.create({
  baseURL: `${BASE_URL}/api/auth`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productAxios = axios.create({
  baseURL: `${BASE_URL}/api/products`,
});
