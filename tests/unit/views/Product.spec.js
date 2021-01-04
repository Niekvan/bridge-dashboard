import { createStore } from 'vuex';
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import flushPromises from 'flush-promises';

import ProductView from '@/views/Product';

describe('Product', () => {
  let store;
  let wrapper;

  const productsModule = {
    namespaced: true,
    state: {},
    actions: {
      loadProduct: jest.fn((_, id) =>
        Promise.resolve({
          id,
          title: 'jacket',
          price: 55.99,
          description:
            'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
          category: 'men clothing',
          image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
        })
      )
    }
  };

  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/products/:id',
        component: ProductView
      },
      {
        path: '/',
        component: {
          template: '<div></div>'
        }
      },
      {
        path: '/result',
        component: {
          template: '<div></div>'
        }
      }
    ]
  });

  const mockRoute = {
    params: {
      id: 1
    }
  };

  describe('initialise', () => {
    beforeEach(async () => {
      store = createStore({ modules: { products: productsModule } });
      router.push('/products/1');
      await router.isReady();
      wrapper = mount(ProductView, {
        global: { plugins: [store, router], mocks: { $route: mockRoute } }
      });
      await flushPromises();
    });

    it('loads the product', () => {
      expect(productsModule.actions.loadProduct).toHaveBeenCalled();
    });

    it('displays the correct page title', async () => {
      expect(wrapper.get('[data-test="page-title"]').text()).toBe('jacket');
    });
  });
});
