import { createStore } from 'vuex';
import products from '@/store/products';

describe('products', () => {
  let store;

  const records = [
    { id: 1, title: 'Lotion' },
    { id: 2, title: 'Soap bar' },
    { id: 3, title: 'Desinfectant' }
  ];

  const api = {
    loadProducts: () => Promise.resolve(records),
    loadProduct: jest.fn(() => new Promise.resolve(false))
  };

  beforeEach(async () => {
    store = createStore({ modules: { products: products(api) } });
    await store.dispatch('products/load');
  });

  it('stores the products', async () => {
    expect(store.state.products.records).toEqual(records);
  });

  it('uses the cached value from the store', async () => {
    await store.dispatch('products/loadProduct', 1);

    expect(api.loadProduct).not.toHaveBeenCalled();
  });
});
