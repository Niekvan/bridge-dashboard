import { createStore } from 'vuex';
import products from '@/store/products';

describe('products', () => {
  it('stores the products', async () => {
    const records = [
      { id: 1, title: 'Lotion' },
      { id: 2, title: 'Soap bar' },
      { id: 3, title: 'Desinfectant' }
    ];

    const api = {
      loadProducts: () => Promise.resolve(records)
    };

    const store = createStore({ modules: { products: products(api) } });
    await store.dispatch('products/load');
    expect(store.state.products.records).toEqual(records);
  });
});
