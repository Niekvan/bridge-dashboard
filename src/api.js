import axios from 'axios';

const client = axios.create({
  baseURL: 'https://fakestoreapi.com/'
});
const api = {
  loadProducts() {
    return client.get('/products?limit=3').then(res => res.data);
  }
};

export default api;
