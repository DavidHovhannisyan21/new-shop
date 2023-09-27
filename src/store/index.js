import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cardNumber: '',
    cardHolder: '',
    cvv: '',
    expires: '',
  },
  mutations: {
    setCardNumber(state, value) {
      state.cardNumber = value;
    },
    setCardHolder(state, value) {
      state.cardHolder = value;
    },
    setCvv(state, value) {
      state.cvv = value;
    },
    setExpires(state, value) {
      state.expires = value;
    },
  },
  actions: {
    updateCardNumber({ commit }, value) {
        console.log('Updating card holder:', value);
      commit('setCardNumber', value);
    },
    updateCardHolder({ commit }, value) {
      commit('setCardHolder', value);
    },
    updateCvv({ commit }, value) {
      commit('setCvv', value);
    },
    updateExpires({ commit }, value) {
      commit('setExpires', value);
    },
  },
});

export default store;
