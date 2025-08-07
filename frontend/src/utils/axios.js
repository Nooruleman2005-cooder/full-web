import axios from 'axios';

export const authAxios= axios.create({
  baseURL: 'http://localhost:2500/api/auth',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productAxios= axios.create({
  baseURL: 'http://localhost:2500/api/products'
});
