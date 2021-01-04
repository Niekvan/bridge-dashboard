const products = api => ({
  namespaced: true,
  state: {
    records: []
  },
  actions: {
    load: async ({ commit }) => {
      try {
        const records = await api.loadProducts();
        commit('storeRecords', records);
      } catch (e) {
        console.log(e);
      }
    },
    loadProduct: async ({ state }, id) => {
      const cached = state.records.find(item => item.id === Number(id));
      if (cached) {
        return cached;
      }

      return api.loadProduct(id);
    }
  },
  mutations: {
    storeRecords(state, records) {
      state.records = records;
    }
  }
});

export default products;
