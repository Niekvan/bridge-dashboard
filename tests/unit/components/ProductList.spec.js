import { createStore } from 'vuex';
import { mount } from '@vue/test-utils';

import ProductList from '@/components/ProductList';

describe('ProductList', () => {
  let store;
  let wrapper;

  const records = [
    { id: 1, title: 'Lotion' },
    { id: 2, title: 'Soap bar' },
    { id: 3, title: 'Desinfectant' }
  ];

  const productsModule = {
    namespaced: true,
    state: { records },
    actions: {
      load: jest.fn().mockName('load')
    }
  };

  beforeEach(() => {
    store = createStore({ modules: { products: productsModule } });
    wrapper = mount(ProductList, { global: { plugins: [store] } });
  });

  it('loads products on mount', () => {
    expect(productsModule.actions.load).toHaveBeenCalled();
  });

  it.each([
    ['Lotion', 0],
    ['Soap bar', 1],
    ['Desinfectant', 2]
  ])('shows the product %s', (product, index) => {
    const name = wrapper.findAll('[data-test="product"]')[index].text();

    expect(name).toBe(product);
  });
});
