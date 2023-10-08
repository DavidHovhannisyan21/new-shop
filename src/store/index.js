import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cardNumber: '',
    cardHolder: '',
    cvv: '',
    expires: '',
    countOfItems: parseInt(localStorage.getItem('countOfItems')) || 0
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
    incrementCount(state) {
      state.countOfItems++
      localStorage.setItem('countOfItems', state.countOfItems.toString())
    },
    decrementCount(state) {
      state.countOfItems--
    localStorage.setItem('countOfItems', state.countOfItems.toString())
    }
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
    increment({ commit }) {
      commit('incrementCount')
    },
    decrement({ commit }) {
      commit('decrementCount')
    }
  },
  getters:{
    getCountOfItems: state => state.countOfItems  
  }
});

export default store;
