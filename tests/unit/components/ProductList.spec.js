import { createStore } from "vuex";
import { mount } from "@vue/test-utils";

import ProductList from "@/components/ProductList";

describe("ProductList", () => {
  it("loads products on mount", () => {
    const productsModule = {
      namespaced: true,
      actions: {
        load: jest.fn().mockName("load")
      }
    };

    const store = createStore({ modules: { products: productsModule } });
    mount(ProductList, { global: { plugins: [store] } });

    expect(productsModule.actions.load).toHaveBeenCalled();
  });
});
