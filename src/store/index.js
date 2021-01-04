import { createStore } from 'vuex';

import api from '@/api';

import products from './products';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    products: products(api)
  }
});
