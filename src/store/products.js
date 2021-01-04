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
    }
  },
  mutations: {
    storeRecords(state, records) {
      state.records = records;
    }
  }
});

export default products;
